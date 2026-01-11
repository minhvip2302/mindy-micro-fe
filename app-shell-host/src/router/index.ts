import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from 'shared_core/AuthStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Route 1: Trang chủ
    {
      path: '/',
      name: 'home',
      // components: {
      //   default: () => import('../views/HomeView.vue'),
      //   // auth: () => import('user_mfe/AuthView')
      // },
      component: async () => {
        // Dynamic import dựa trên auth state
         const authStore = useAuthStore()
          if (authStore.isLoggedIn) {
            // Đã đăng nhập → load Newsfeed MFE
            return import('newsfeed_mfe/NewsfeedView').catch(() => {
              // Nếu newsfeed_mfe không khả dụng, load MaintenanceView
              return import('shared_core/MaintenanceView')
            })
          }
        // Chưa đăng nhập → load Landing page
        return import('@/views/HomeView.vue')
      },
    },
    // Route 2: Tải Auth MFE (sử dụng alias 'auth_mfe')
    {
      path: '/login',
      name: 'login',
      // Dynamic import: 'alias/exposeName'
      component: () => import('auth_mfe/LoginView').catch(() => {
        // Nếu auth_mfe không khả dụng, load MaintenanceView
        return import('shared_core/MaintenanceView')
      }),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('auth_mfe/RegisterView').catch(() => {
        // Nếu auth_mfe không khả dụng, load MaintenanceView
        return import('shared_core/MaintenanceView')
      }),
    },
    // Route 3: Profile (placeholder)
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    // Route 4: Chat MFE
    {
      path: '/chat',
      name: 'chat',
      component: () => import('chat_mfe/ChatView').catch(() => {
        return import('shared_core/MaintenanceView')
      }),
    },
  ],
})

router.beforeEach((to, from, next) => {
  // Kiểm tra nếu user đã đăng nhập và đang truy cập login/register
  // thì redirect về trang trước đó
  const authStore = useAuthStore()
  if ((to.name === 'login' || to.name === 'register')) {
    try {
      if (authStore.isLoggedIn) {
        // Nếu có route trước đó và không phải login/register, redirect về đó
        // Nếu không có hoặc từ login/register, redirect về trang chủ
        const redirectTo = from.name && from.name !== 'login' && from.name !== 'register'
          ? from.fullPath
          : '/'
        next(redirectTo)
        return
      }
    } catch (error) {
      // Nếu không load được authStore (remote chưa sẵn sàng), tiếp tục bình thường
      console.warn('AuthStore not available:', error)
    }
  }

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
      next('/login');
  } else {
      next();
  }
  console.log('router.beforeEach');
  next();
});

export default router

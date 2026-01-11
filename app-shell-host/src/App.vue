<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import router from './router'

// Không cần import Layout - mỗi component tự quản lý layout của nó

const isLoggedIn = ref(false)
const username = ref('')
const userAvatar = ref('')
const isLoading = ref(false)

router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const handleLogin = () => {
  // Navigate to login page
  router.push('/login')
}

const handleLogout = () => {
  isLoggedIn.value = false
  username.value = ''
  userAvatar.value = ''
  // Clear localStorage
  localStorage.removeItem('authToken')
  localStorage.removeItem('userId')
  localStorage.removeItem('userEmail')
}

// Handle register success event from user-mfe
const handleRegisterSuccess = (event: CustomEvent) => {
  const { email, token, userId, firstName, lastName, redirectTo = '/' } = event.detail
  
  // Update UI state
  isLoggedIn.value = true
  username.value = firstName && lastName ? `${firstName} ${lastName}` : email
  userAvatar.value = '' // Có thể lấy từ user data nếu có
  
  // Redirect to specified route
  router.push(redirectTo)
  
  console.log('✅ Register successful:', { email, userId, firstName, lastName })
}

// Handle login success event from user-mfe
const handleLoginSuccess = (event: CustomEvent) => {
  const { email, token, userId } = event.detail
  
  // Update UI state
  isLoggedIn.value = true
  username.value = email // Có thể lấy full name từ API nếu có
  userAvatar.value = ''
  
  // Redirect to home page
  router.push('/')
  
  console.log('✅ Login successful:', { email, userId })
}

// Setup event listeners
onMounted(() => {
  window.addEventListener('mf:register-success', handleRegisterSuccess as EventListener)
  window.addEventListener('mf:auth-success', handleLoginSuccess as EventListener)
})

onUnmounted(() => {
  window.removeEventListener('mf:register-success', handleRegisterSuccess as EventListener)
  window.removeEventListener('mf:auth-success', handleLoginSuccess as EventListener)
})
</script>

<template>
  <!-- Progress bar -->
  <div v-if="isLoading" class="progress-bar">
    <div class="progress-bar-fill"></div>
  </div>
  
  <!-- Mỗi component tự quản lý layout của nó - không wrap trong Layout ở đây -->
  <RouterView v-slot="{ Component, route }">
    <Transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: transparent;
  z-index: 9999;
}

.progress-bar-fill {
  height: 100%;
  background: #29d;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  animation: progress 0.8s ease-in-out;
}

@keyframes progress {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

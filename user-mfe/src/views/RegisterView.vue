<template>
  <div class="register-view">
    <!-- Navigation Bar -->
    <nav class="register-nav">
      <div class="nav-logo">
        <span class="logo-text">SOCIAL APP</span>
      </div>
      <div class="nav-spacer"></div>
    </nav>

    <!-- Main Content -->
    <main class="auth-main register-layout">
      <div class="register-container">
        <!-- Features Section (Desktop only) -->
        <FeaturesSection />

        <!-- Register Form -->
        <div class="register-form-wrapper">
          <RegisterForm
            :is-loading="isLoading"
            @submit="handleRegisterSubmit"
            @go-to-login="goToLogin"
            @social-login="handleSocialLogin"
            @terms-click="handleTermsClick"
            @privacy-click="handlePrivacyClick"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import RegisterForm from '../components/RegisterForm.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import { useAuthStore } from '../stores/authStore'


const emit = defineEmits<{
  (e: 'navigate-to-login'): void
}>()

const router = useRouter()
const isLoading = ref(false)

const goToLogin = () => {
  emit('navigate-to-login')
  // Navigate to login page
  if (router) {
    router.push('/login')
  }
}

const handleRegisterSubmit = async (data: { firstName: string; lastName: string; email: string; password: string }) => {
  isLoading.value = true

  try {
    const authStore = useAuthStore()
    const result = await authStore.register(data.email, data.password, data.firstName, data.lastName)

    // Emit success event để host app biết
    window.dispatchEvent(new CustomEvent('mf:register-success', {
      detail: {
        email: result.email,
        token: result.token,
        userId: result.userId,
        firstName: result.firstName,
        lastName: result.lastName,
        redirectTo: '/' // hoặc '/profile'

      }
    }))

    // Redirect sau khi đăng ký thành công
    // if (window.location.pathname === '/register') {
    //   router.push('/')
    // }

  } catch (error) {
    console.error('Register failed:', error)
    alert('Đăng ký thất bại. Vui lòng thử lại.')
  } finally {
    isLoading.value = false
  }
}

const handleSocialLogin = (provider: 'google' | 'apple' | 'facebook') => {
  console.log('Social login:', provider)
  alert(`Đăng ký với ${provider} sẽ được triển khai`)
}

const handleTermsClick = () => {
  console.log('Terms clicked')
}

const handlePrivacyClick = () => {
  console.log('Privacy clicked')
}
</script>

<style scoped>
.register-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  color: rgb(15, 23, 42);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

.dark .register-view {
  background: rgba(0, 0, 0, 0.2);
  color: white;
}

.register-view.modal-mode {
  min-height: auto;
  background: transparent;
}

/* Navigation Bar */
.register-nav {
  margin-top: 2rem;
}

.nav-back-button {
  padding: 0.5rem;
  border-radius: 9999px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-back-button:hover {
  background: rgb(229, 231, 235);
}

.dark .nav-back-button:hover {
  background: rgb(31, 41, 55);
}

.nav-back-button .material-symbols-outlined {
  font-size: 1.5rem;
  color: rgb(17, 24, 39);
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.dark .nav-back-button .material-symbols-outlined {
  color: white;
}

.nav-logo {
  text-align: center;
}

.logo-text {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(37, 99, 235);
  letter-spacing: 0.05em;
}

.nav-spacer {
  width: 2.5rem; /* Same width as nav-back-button to balance layout */
}

/* Main Content */
.auth-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  padding-bottom: 2rem;
  margin: 0 auto;
  width: 100%;
}

/* Register Layout */
.register-container {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .register-container {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
  }
}

.register-form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Login Link Section */
.login-link-section {
  margin-top: 0.5rem;
  text-align: center;
}

.login-link-text {
  font-size: 0.875rem;
  color: rgb(107, 114, 128);
  margin: 0;
}

.dark .login-link-text {
  color: rgb(156, 163, 175);
}

.login-link {
  font-weight: 600;
  color: rgb(37, 99, 235);
  text-decoration: none;
  margin-left: 0.25rem;
  transition: color 0.2s;
}

.login-link:hover {
  color: rgb(37, 99, 235);
  text-decoration: underline;
}

/* Social Login Section */
.register-social-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-divider {
  position: relative;
  width: 100%;
  text-align: center;
}

.divider-line {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
}

.divider-line::before {
  content: '';
  width: 100%;
  border-top: 1px solid rgb(229, 231, 235);
}

.dark .divider-line::before {
  border-color: rgb(55, 65, 81);
}

.divider-text {
  position: relative;
  background: white;
  padding: 0 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgb(107, 114, 128);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dark .divider-text {
  background: rgb(21, 27, 43);
  color: rgb(156, 163, 175);
}

.social-buttons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.social-button-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 0.75rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.social-button-grid:hover {
  background: rgb(249, 250, 251);
  border-color: rgb(203, 213, 225);
}

.dark .social-button-grid {
  background: rgb(11, 15, 25);
  border-color: rgb(55, 65, 81);
}

.dark .social-button-grid:hover {
  background: rgb(31, 41, 55);
  border-color: rgb(107, 114, 128);
}

.social-icon-img {
  width: 1.25rem;
  height: 1.25rem;
}

.social-icon-svg {
  width: 1.25rem;
  height: 1.25rem;
  color: rgb(17, 24, 39);
}

.dark .social-icon-svg {
  color: white;
}

.register-terms {
  text-align: center;
  font-size: 0.75rem;
  color: rgb(107, 114, 128);
  line-height: 1.75;
  margin: 0;
}

.dark .register-terms {
  color: rgb(156, 163, 175);
}

.terms-link {
  font-weight: 500;
  color: rgb(37, 99, 235);
  text-decoration: none;
  transition: color 0.2s;
}

.terms-link:hover {
  color: rgb(37, 99, 235);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 480px) {
  .auth-main.register-layout {
    padding: 1rem;
  }
}
</style>


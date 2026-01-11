<template>
  <DefaultLayout :is-logged-in="isLoggedIn" :username="username" :user-avatar="userAvatar" @login="handleLogin" @logout="handleLogout">
    <div class="home">
      <!-- Hero Section -->
      <HeroSection 
        :is-logged-in="isLoggedIn"
        @go-to-login="goToLogin"
        @go-to-profile="goToProfile"
      />

      <!-- Features Section -->
      <FeaturesSection />

      <!-- Stats Section -->
      <StatsSection />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'shared_core/AuthStore'
// @ts-ignore - DefaultLayout will be available after core-shared-library rebuild
import DefaultLayout from 'shared_core/DefaultLayout'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import StatsSection from '../components/StatsSection.vue'

const router = useRouter()
const authStore = useAuthStore()

// Lấy state từ authStore
const isLoggedIn = computed(() => authStore.isLoggedIn)
const username = ref('') // Có thể lấy từ authStore nếu có
const userAvatar = ref('') // Có thể lấy từ authStore nếu có

const goToProfile = () => {
  router.push('/profile')
}

const goToLogin = () => {
  router.push('/login')
}

const handleLogin = () => {
  router.push('/login')
}

const handleLogout = () => {
  authStore.clearAuth()
  username.value = ''
  userAvatar.value = ''
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  overflow-x: hidden;
  /* Ngăn layout shift */
  position: relative;
  background: #f0f2f5;
}

/* Global smooth scrolling */
:global(html) {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
:global(::-webkit-scrollbar) {
  width: 8px;
}

:global(::-webkit-scrollbar-track) {
  background: #f1f1f1;
}

:global(::-webkit-scrollbar-thumb) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
}

:global(::-webkit-scrollbar-thumb:hover) {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}

/* Ngăn flash khi load */
.home > * {
  opacity: 0;
  animation: fadeInContent 0.5s ease-out forwards;
}

@keyframes fadeInContent {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<template>
  <div class="default-layout">
    <Header :is-logged-in="isLoggedIn" :username="username" :user-avatar="userAvatar" @login="handleLogin" @logout="handleLogout" />
    <main class="main-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// Props
const props = defineProps<{
  isLoggedIn?: boolean
  username?: string
  userAvatar?: string
}>()

// Emits
const emit = defineEmits<{
  login: []
  logout: []
}>()

// Methods
const handleLogin = () => {
  emit('login')
}

const handleLogout = () => {
  emit('logout')
}
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  min-height: 80vh;
  position: relative;
  overflow: hidden;
}

:global(body) {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f5f5;
  overflow-x: hidden;
}

:global(*) {
  box-sizing: border-box;
}
</style>


<template>
  <div class="layout">
    <main class="main-content">
      <slot />
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
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
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  min-height: 80vh; /* Đảm bảo chiều cao tối thiểu */
  position: relative;
  overflow: hidden; /* Ngăn scroll không mong muốn */
}

/* Global styles for the layout */
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

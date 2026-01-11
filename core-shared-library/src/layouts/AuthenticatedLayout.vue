<template>
  <div class="authenticated-layout">
    <!-- Splash Screen với Logo -->
    <Transition name="splash">
      <div v-if="showSplash" class="splash-screen">
        <img 
          :src="logoUrl" 
          alt="Logo" 
          class="splash-logo"
        />
      </div>
    </Transition>
    
    <slot name="header" />
    <main class="main-content">
      <slot />
    </main>
    <!-- Không có Footer - các trang authenticated tự quản lý footer -->
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Layout dành cho các trang đã đăng nhập
// Không có Footer mặc định - các trang tự định nghĩa header và footer qua slots

const showSplash = ref(true)

const getLogoUrl = () => {
  const baseUrl = import.meta.env.VITE_SHARED_CORE_URL || 'http://localhost:3005'
  return `${baseUrl}/images/logo_top.png`
}

const logoUrl = getLogoUrl()

onMounted(() => {
  // Ẩn splash screen sau 2 giây
  setTimeout(() => {
    showSplash.value = false
  }, 2000)
})
</script>

<style scoped>
.authenticated-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f6f8;
  position: relative;
}

.main-content {
  flex: 1;
  width: 100%;
}

.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f5f6f8;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.splash-logo {
  max-width: 200px;
  height: auto;
  object-fit: contain;
  animation: logoPulse 1.5s ease-in-out;
}

@keyframes logoPulse {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Splash transition */
.splash-enter-active {
  transition: opacity 0.5s ease-out;
}

.splash-leave-active {
  transition: opacity 0.5s ease-in;
}

.splash-enter-from,
.splash-leave-to {
  opacity: 0;
}

:global(body) {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f6f8;
  overflow-x: hidden;
}
</style>


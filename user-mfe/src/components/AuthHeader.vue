<template>
  <div class="auth-header">
    <button 
      @click="handleBack" 
      class="back-button"
      type="button"
    >
      <span class="material-symbols-outlined">arrow_back</span>
    </button>
    <h2 class="header-title">Tài khoản</h2>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

const handleBack = () => {
  emit('back')
}
</script>

<style scoped>
.auth-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(245, 246, 248, 0.8);
  backdrop-filter: blur(12px);
}

.dark .auth-header {
  background: rgba(16, 22, 35, 0.8);
}

.back-button {
  color: rgb(15, 23, 42);
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  transition: background-color 0.2s;
  border: none;
  background: transparent;
  cursor: pointer;
}

.back-button:hover {
  background: rgb(226, 232, 240);
}

.dark .back-button {
  color: white;
}

.dark .back-button:hover {
  background: rgb(24, 34, 52);
}

.material-symbols-outlined {
  font-size: 1.5rem;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.header-title {
  color: rgb(15, 23, 42);
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.015em;
  flex: 1;
  text-align: center;
  padding-right: 2.5rem;
  margin: 0;
}

.dark .header-title {
  color: white;
}
</style>


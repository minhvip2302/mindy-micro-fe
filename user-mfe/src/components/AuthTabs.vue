<template>
  <div class="auth-tabs">
    <div class="tabs-container">
      <button
        :class="['tab-button', { active: activeTab === 'login' }]"
        @click="switchTab('login')"
        type="button"
      >
        <p class="tab-text">Đăng nhập</p>
      </button>
      <button
        :class="['tab-button', { active: activeTab === 'register' }]"
        @click="switchTab('register')"
        type="button"
      >
        <p class="tab-text">Đăng ký</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: 'login' | 'register'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: 'login' | 'register']
}>()

const activeTab = ref<'login' | 'register'>(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  activeTab.value = newVal
})

const switchTab = (tab: 'login' | 'register') => {
  activeTab.value = tab
  emit('update:modelValue', tab)
}
</script>

<style scoped>
.auth-tabs {
  padding-bottom: 2rem;
}

.tabs-container {
  display: flex;
  background: rgb(226, 232, 240);
  padding: 0.25rem;
  border-radius: 9999px;
  position: relative;
}

.dark .tabs-container {
  background: rgb(24, 34, 52);
}

.tab-button {
  flex: 1;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  transition: all 0.3s;
  border: none;
  background: transparent;
  cursor: pointer;
}

.tab-button.active {
  background: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.dark .tab-button.active {
  background: rgb(37, 106, 244);
}

.tab-text {
  color: rgb(100, 116, 139);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  margin: 0;
  transition: color 0.3s;
}

.tab-button.active .tab-text {
  color: rgb(15, 23, 42);
}

.dark .tab-button.active .tab-text {
  color: white;
}

.dark .tab-text {
  color: rgb(144, 164, 203);
}
</style>


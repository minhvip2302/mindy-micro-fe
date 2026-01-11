<template>
  <MaintenanceLayout>
    <div class="maintenance-view">
      <div class="maintenance-container">
        <div class="maintenance-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>
        
        <h1 class="maintenance-title">{{ title }}</h1>
        <p class="maintenance-message">{{ message }}</p>
        
        <div class="maintenance-footer">
          <p class="footer-text">Chúng tôi đang nỗ lực khắc phục sự cố. Vui lòng quay lại sau.</p>
        </div>
      </div>
    </div>
  </MaintenanceLayout>
</template>

<script setup lang="ts">
import MaintenanceLayout from './MaintenanceLayout.vue'

// Đánh dấu component này là MaintenanceView để App.vue có thể detect
defineOptions({
  name: 'MaintenanceView'
})

interface Props {
  title?: string
  message?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Đang bảo trì',
  message: 'Hệ thống đang được bảo trì hoặc chưa sẵn sàng. Vui lòng thử lại sau.',
})
</script>

<style scoped>
/* Override Layout styles để ẩn Footer khi MaintenanceView được render */
:global(.layout) {
  display: none !important;
}

:global(footer.footer) {
  display: none !important;
}

.maintenance-view {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
}

.maintenance-container {
  max-width: 500px;
  width: 100%;
  background: white;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.maintenance-icon {
  margin: 0 auto 24px;
  width: 80px;
  height: 80px;
  color: #667eea;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.maintenance-title {
  font-size: 28px;
  font-weight: 700;
  color: #1c1e21;
  margin: 0 0 16px 0;
}

.maintenance-message {
  font-size: 16px;
  color: #65676b;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.maintenance-footer {
  padding-top: 24px;
  border-top: 1px solid #e4e6eb;
}

.footer-text {
  font-size: 14px;
  color: #8a8d91;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .maintenance-container {
    padding: 32px 24px;
  }

  .maintenance-title {
    font-size: 24px;
  }

  .maintenance-message {
    font-size: 14px;
  }
}
</style>


<template>
  <div class="authenticated-layout">
    <slot name="header" />
    <main class="main-content">
      <slot />
    </main>
    <!-- Không có Footer - các trang authenticated tự quản lý footer -->
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
// Layout dành cho các trang đã đăng nhập
// Không có Footer mặc định - các trang tự định nghĩa header và footer qua slots
</script>

<style scoped>
.authenticated-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f6f8;
}

.main-content {
  flex: 1;
  width: 100%;
}

:global(body) {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f6f8;
  overflow-x: hidden;
}
</style>


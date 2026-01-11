<template>
  <div class="maintenance-layout">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Layout riêng cho MaintenanceView - không có Header và Footer
</script>

<style scoped>
.maintenance-layout {
  min-height: 100vh;
  width: 100%;
  position: relative;
}

/* Reset styles để không bị ảnh hưởng bởi Layout chính */
:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>


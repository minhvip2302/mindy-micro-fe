<template>
  <img 
    :src="logoImage" 
    alt="Mindy Logo" 
    class="logo-image"
    :class="$attrs.class"
  />
</template>

<script setup lang="ts">
// Logo from public folder - works with Module Federation
// Assets in public folder are served directly from the remote server
const getLogoUrl = () => {
  // Check if running in development mode
  // Use multiple checks for reliability
  const baseUrl = import.meta.env.VITE_SHARED_CORE_URL || 'http://localhost:3005'
  return `${baseUrl}/images/logo_top.png`
}

const logoImage = getLogoUrl()
</script>

<style scoped>
.logo-image {
  max-width: 180px;
  height: auto;
  object-fit: contain;
}

@media (max-width: 640px) {
  .logo-image {
    max-width: 140px;
  }
}
</style>


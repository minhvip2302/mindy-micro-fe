<template>
  <nav class="mobile-bottom-nav">
    <a class="nav-item active" href="#">
      <span class="material-symbols-outlined filled">home</span>
      <span class="nav-label">Home</span>
    </a>
    <a class="nav-item" href="#">
      <span class="material-symbols-outlined">explore</span>
      <span class="nav-label">Explore</span>
    </a>
    <a class="nav-item add-post" href="#">
      <div class="add-post-button">
        <span class="material-symbols-outlined">add</span>
      </div>
    </a>
    <a class="nav-item" href="#">
      <span class="material-symbols-outlined">chat_bubble</span>
      <span class="nav-label">Chat</span>
    </a>
    <a class="nav-item" href="#">
      <div class="user-avatar-small" :style="{ backgroundImage: `url(${userAvatar})` }"></div>
      <span class="nav-label">Profile</span>
    </a>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  userAvatar?: string
}

withDefaults(defineProps<Props>(), {
  userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGgC2jUgiNwECQPoPUamqOvlzxHF9nKjujna5zHomzRPxMp8KRs4vZUWz_Rf1Gq3aA4U17wVlyeoqzB-GxZxeLMSDTjA1ZefdLpqXUWwSAIGPuhcitLzB7sSYq-ydoDLfZrZG-e5UyKbAi9VpAVmW-iGUk4LJNYkrzFFDj0G0l5I5UhOgBqVj_w6BLPQOQYOvk7E8TJhCVe_ufiiU7YAKEsa5UKh25K3n7m2M_zzgyXnqfml3muIB4HkRF85LRIc9Nlv1eLDq1vd7U'
})
</script>

<style scoped>
.mobile-bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0 calc(12px + env(safe-area-inset-bottom));
  background: white;
  border-top: 1px solid #e5e7eb;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 50;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: #90a4cb;
  transition: color 0.2s;
}

.nav-item.active {
  color: #256af4;
}

.nav-item .material-symbols-outlined {
  font-size: 24px;
}

.nav-item .material-symbols-outlined.filled {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.nav-label {
  font-size: 10px;
  font-weight: 500;
}

.nav-item.add-post {
  position: relative;
}

.add-post-button {
  background: #256af4;
  border-radius: 9999px;
  padding: 8px;
  margin-top: -24px;
  box-shadow: 0 4px 12px rgba(37, 106, 244, 0.3);
  border: 4px solid white;
}

.add-post-button .material-symbols-outlined {
  color: white;
  font-size: 24px;
}

.user-avatar-small {
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .mobile-bottom-nav {
    display: none;
  }
}
</style>


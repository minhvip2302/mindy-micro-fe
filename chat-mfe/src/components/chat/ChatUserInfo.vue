<template>
  <aside class="chat-user-info">
    <div class="user-profile">
      <div 
        class="profile-avatar"
        :style="{ backgroundImage: `url(${user.avatar})` }"
      ></div>
      <h3 class="profile-name">{{ user.name }}</h3>
      <p v-if="user.role" class="profile-role">{{ user.role }}</p>
      
      <div class="profile-actions">
        <button class="profile-action-btn">
          <span class="material-symbols-outlined">person</span>
          <span class="action-label">Profile</span>
        </button>
        <button class="profile-action-btn danger">
          <span class="material-symbols-outlined">block</span>
          <span class="action-label">Block</span>
        </button>
      </div>
    </div>
    
    <div class="user-details">
      <div class="detail-section">
        <h4 class="section-title">Shared Media</h4>
        <div class="media-grid">
          <div 
            v-for="(media, index) in sharedMedia" 
            :key="index"
            class="media-item"
            :style="{ backgroundImage: media.type === 'image' ? `url(${media.url})` : 'none' }"
          >
            <span 
              v-if="media.type === 'video'"
              class="material-symbols-outlined video-icon"
            >
              play_circle
            </span>
            <span 
              v-if="media.type === 'more'"
              class="media-more"
            >
              +{{ media.count }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h4 class="section-title">Settings</h4>
        <div class="settings-list">
          <button class="setting-item">
            <span class="setting-label">Notifications</span>
            <div class="toggle-switch active"></div>
          </button>
          <button class="setting-item">
            <span class="setting-label">Privacy & Help</span>
            <span class="material-symbols-outlined chevron">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
interface User {
  id: string
  name: string
  avatar: string
  role?: string
}

interface Props {
  user: User
}

defineProps<Props>()

const sharedMedia = [
  { type: 'image', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZCeWt34KAudKxoEbPQNenBhPsg7objTqWtk7xl1H2bq51kVeRQDvYPQ1MAPVeXnB1I4krSDtmHV4MPs5HwuEvvmsnk1Qx8cOsPZKps-SKIZ25wGQpm1e233eWJGWKdn6amfHU1FeLkCjp9go-DpO9u1n-BuzOLxSNhR6X5h5F5VQqNP92JE2dv4MxqZbFsWRuGgLp_TwgkoKCcBRr14COYKiJ_g2J4le4vC1wjiSn3fdAQpPazgaEPZbm5IvHHFAHeCRNuoxlnAZ' },
  { type: 'video' },
  { type: 'image' },
  { type: 'image' },
  { type: 'image' },
  { type: 'image' },
  { type: 'more', count: 12 }
]
</script>

<style scoped>
.chat-user-info {
  display: none;
  flex-direction: column;
  width: 320px;
  background: #ffffff;
  border-radius: 32px;
  border: 1px solid rgba(229, 231, 235, 0.3);
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.user-profile {
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.profile-avatar {
  width: 96px;
  height: 96px;
  border-radius: 32px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border: 4px solid #ffffff;
  margin-bottom: 16px;
}

.profile-name {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1f2937;
  margin-bottom: 8px;
}

.profile-role {
  font-size: 14px;
  color: #90a4cb;
  margin-bottom: 24px;
}

.profile-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
}

.profile-action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 16px;
  background: #f5f6f8;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.profile-action-btn:hover {
  background: rgba(229, 231, 235, 1);
}

.profile-action-btn.danger {
  color: #ef4444;
}

.profile-action-btn .material-symbols-outlined {
  font-size: 24px;
  margin-bottom: 4px;
  color: #256af4;
}

.profile-action-btn.danger .material-symbols-outlined {
  color: #ef4444;
}

.action-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #1f2937;
}

.profile-action-btn.danger .action-label {
  color: #ef4444;
}

.user-details {
  flex: 1;
  overflow-y: auto;
  padding: 0 24px 24px;
}

.user-details::-webkit-scrollbar {
  display: none;
}

.detail-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #90a4cb;
  margin-bottom: 16px;
  padding: 0 8px;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.media-item {
  aspect-ratio: 1;
  border-radius: 12px;
  background: rgba(229, 231, 235, 1);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.video-icon {
  font-size: 18px;
  color: #90a4cb;
}

.media-more {
  font-size: 12px;
  font-weight: 700;
  color: #256af4;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.setting-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  border-radius: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.setting-item:hover {
  background: rgba(249, 250, 251, 1);
}

.setting-label {
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
}

.toggle-switch {
  width: 40px;
  height: 20px;
  border-radius: 9999px;
  background: #9ca3af;
  position: relative;
  transition: all 0.2s;
}

.toggle-switch.active {
  background: #256af4;
}

.toggle-switch.active::after {
  content: '';
  position: absolute;
  right: 2px;
  top: 2px;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 9999px;
}

.chevron {
  font-size: 18px;
  color: #90a4cb;
}

@media (min-width: 1280px) {
  .chat-user-info {
    display: flex;
  }
}
</style>


<template>
  <header class="chat-header">
    <div class="header-left">
      <button class="back-btn">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <div class="user-info">
        <div class="avatar-wrapper">
          <div 
            class="avatar" 
            :style="{ backgroundImage: `url(${conversation.user.avatar})` }"
          ></div>
          <span 
            v-if="conversation.user.status === 'online'"
            class="status-indicator online"
          ></span>
        </div>
        <div class="user-details">
          <h1 class="user-name">{{ conversation.user.name }}</h1>
          <p 
            v-if="conversation.user.status === 'online'"
            class="user-status online"
          >
            Online now
          </p>
          <p 
            v-else-if="conversation.user.status === 'typing'"
            class="user-status typing"
          >
            Typing...
          </p>
        </div>
      </div>
    </div>
    
    <div class="header-actions">
      <button class="action-btn primary">
        <span class="material-symbols-outlined filled">videocam</span>
      </button>
      <button class="action-btn">
        <span class="material-symbols-outlined">call</span>
      </button>
      <button class="action-btn">
        <span class="material-symbols-outlined">info</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
interface User {
  id: string
  name: string
  avatar: string
  status?: 'online' | 'offline' | 'typing'
}

interface Conversation {
  id: string
  user: User
}

interface Props {
  conversation: Conversation
}

defineProps<Props>()
</script>

<style scoped>
.chat-header {
  padding: 16px 24px;
  border-bottom: 1px solid rgba(229, 231, 235, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(24px);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.back-btn {
  display: none;
  padding: 8px;
  margin-left: -8px;
  background: transparent;
  border: none;
  color: #90a4cb;
  cursor: pointer;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar-wrapper {
  position: relative;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.status-indicator {
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  border-radius: 9999px;
}

.status-indicator.online {
  background: #22c55e;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-name {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1f2937;
}

.user-status {
  font-size: 12px;
  font-weight: 500;
}

.user-status.online {
  color: #22c55e;
}

.user-status.typing {
  color: #256af4;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.action-btn {
  padding: 10px;
  border-radius: 16px;
  background: transparent;
  border: none;
  color: #90a4cb;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  background: rgba(249, 250, 251, 1);
}

.action-btn.primary {
  background: #256af4;
  color: white;
  box-shadow: 0 4px 12px rgba(37, 106, 244, 0.3);
}

.action-btn.primary:hover {
  transform: scale(1.05);
}

.action-btn .material-symbols-outlined {
  font-size: 24px;
}

.action-btn .material-symbols-outlined.filled {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

@media (min-width: 768px) {
  .back-btn {
    display: block;
  }
  
  .header-actions {
    gap: 12px;
  }
}

@media (min-width: 1024px) {
  .chat-header {
    padding: 24px;
  }
  
  .user-name {
    font-size: 20px;
  }
  
  .user-status {
    font-size: 14px;
  }
}
</style>


<template>
  <aside class="chat-sidebar">
    <div class="sidebar-header">
      <h2 class="sidebar-title">Messages</h2>
      <button class="new-message-btn">
        <span class="material-symbols-outlined">edit_square</span>
      </button>
    </div>
    
    <div class="search-container">
      <span class="material-symbols-outlined search-icon">search</span>
      <input 
        class="search-input" 
        type="text" 
        placeholder="Search chats..."
        v-model="searchQuery"
      />
    </div>
    
    <div class="conversations-list">
      <div
        v-for="conversation in filteredConversations"
        :key="conversation.id"
        class="conversation-item"
        :class="{ active: conversation.isActive }"
        @click="$emit('select-conversation', conversation)"
      >
        <div class="avatar-wrapper">
          <div 
            class="avatar" 
            :style="{ backgroundImage: `url(${conversation.user.avatar})` }"
          ></div>
          <span 
            v-if="conversation.user.status === 'online'"
            class="status-indicator online"
          ></span>
          <span 
            v-else-if="conversation.user.status === 'offline'"
            class="status-indicator offline"
          ></span>
        </div>
        
        <div class="conversation-info">
          <div class="conversation-header">
            <span class="conversation-name">{{ conversation.user.name }}</span>
            <span 
              class="conversation-time"
              :class="{ 'time-primary': conversation.isActive }"
            >
              {{ conversation.lastMessageTime }}
            </span>
          </div>
          <span 
            class="conversation-preview"
            :class="{ 'preview-primary': conversation.isActive }"
          >
            {{ conversation.lastMessage }}
          </span>
        </div>
      </div>
    </div>
    
    <div class="sidebar-footer">
      <div 
        class="current-user-avatar"
        :style="{ backgroundImage: `url(${currentUser.avatar})` }"
      ></div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface User {
  id: string
  name: string
  avatar: string
  status?: 'online' | 'offline' | 'typing'
}

interface Conversation {
  id: string
  user: User
  lastMessage: string
  lastMessageTime: string
  isActive?: boolean
}

interface Props {
  conversations: Conversation[]
  currentUser: User
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'select-conversation': [conversation: Conversation]
}>()

const searchQuery = ref('')

const filteredConversations = computed(() => {
  if (!searchQuery.value) return props.conversations
  const query = searchQuery.value.toLowerCase()
  return props.conversations.filter(conv => 
    conv.user.name.toLowerCase().includes(query) ||
    conv.lastMessage.toLowerCase().includes(query)
  )
})
</script>

<style scoped>
.chat-sidebar {
  display: none;
  flex-direction: column;
  width: 80px;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(229, 231, 235, 0.3);
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.3s;
}

.sidebar-header {
  padding: 24px;
  border-bottom: 1px solid rgba(229, 231, 235, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-title {
  display: none;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.new-message-btn {
  padding: 8px;
  border-radius: 12px;
  background: transparent;
  border: none;
  color: #90a4cb;
  cursor: pointer;
  transition: all 0.2s;
}

.new-message-btn:hover {
  background: rgba(37, 106, 244, 0.1);
  color: #256af4;
}

.new-message-btn .material-symbols-outlined {
  font-size: 24px;
}

.search-container {
  display: none;
  padding: 16px;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #90a4cb;
}

.search-input {
  width: 100%;
  padding: 8px 16px 8px 40px;
  background: #f5f6f8;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  color: #1f2937;
}

.search-input:focus {
  outline: none;
  ring: 1px;
  ring-color: rgba(37, 106, 244, 0.5);
}

.conversations-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.conversations-list::-webkit-scrollbar {
  display: none;
}

.conversation-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  cursor: pointer;
  transition: all 0.2s;
}

.conversation-item:hover {
  background: rgba(249, 250, 251, 1);
}

.conversation-item.active {
  background: rgba(37, 106, 244, 0.05);
  border-right: 4px solid #256af4;
}

.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background-size: cover;
  background-position: center;
  border: 2px solid rgba(37, 106, 244, 0.2);
}

.conversation-item.active .avatar {
  border-color: rgba(37, 106, 244, 0.4);
}

.status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 14px;
  height: 14px;
  border: 2px solid #ffffff;
  border-radius: 9999px;
}

.status-indicator.online {
  background: #22c55e;
}

.status-indicator.offline {
  background: #9ca3af;
}

.conversation-info {
  display: none;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  gap: 4px;
}

.conversation-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.conversation-name {
  font-weight: 700;
  color: #1f2937;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.conversation-time {
  font-size: 10px;
  color: #90a4cb;
  font-weight: 700;
}

.conversation-time.time-primary {
  color: #256af4;
}

.conversation-preview {
  font-size: 14px;
  color: #90a4cb;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.conversation-preview.preview-primary {
  color: #256af4;
  font-weight: 500;
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid rgba(229, 231, 235, 0.3);
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.current-user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .chat-sidebar {
    display: flex;
  }
}

@media (min-width: 1024px) {
  .chat-sidebar {
    width: 320px;
  }
  
  .sidebar-header {
    justify-content: space-between;
  }
  
  .sidebar-title {
    display: block;
  }
  
  .search-container {
    display: block;
  }
  
  .conversation-info {
    display: flex;
  }
  
  .avatar {
    width: 56px;
    height: 56px;
  }
}
</style>


<template>
  <div class="chat-messages">
    <div class="date-divider">
      <span class="date-label">Yesterday</span>
    </div>
    
    <div class="messages-container">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message-wrapper"
        :class="{ 'message-sent': message.senderId === currentUserId }"
      >
        <div 
          v-if="message.senderId !== currentUserId"
          class="sender-avatar"
          :style="{ backgroundImage: `url(${getSenderAvatar(message.senderId)})` }"
        ></div>
        
        <div class="message-content">
          <div 
            class="message-bubble"
            :class="{ 'message-bubble-sent': message.senderId === currentUserId }"
          >
            <div v-if="message.image" class="message-image">
              <img :src="message.image" :alt="message.text || 'Image'" />
            </div>
            <p v-if="message.text" class="message-text">{{ message.text }}</p>
          </div>
          
          <div class="message-meta">
            <span class="message-time">{{ message.timestamp }}</span>
            <span 
              v-if="message.senderId === currentUserId && message.seen"
              class="message-status"
            >
              <span class="material-symbols-outlined">done_all</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="showSeenIndicator" class="seen-indicator">
      <span>Seen 10:47 PM</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Message {
  id: string
  senderId: string
  text?: string
  image?: string
  timestamp: string
  seen?: boolean
}

interface Props {
  messages: Message[]
  currentUserId: string
}

const props = defineProps<Props>()

const getSenderAvatar = (senderId: string) => {
  // In a real app, you'd get this from a users store
  return 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgcixJJW27VQGwG8Xx68Wj2V0jsAC5R9WDuyxFz_q8ZzipDctDL7o6N6bP1FVnta0BiTjVI2RPQnUgy_nizypQcMtecredMkr9g3BJeSuW2LcabEyWxyFFmjbI-W9nZ_OEDpytEBZ58OQxMakoqvtKxdTHXiOxUXPeumnY8rwURU9FvemEwK3diU7i9alKIM-fu8Ra-_tuJVD6fXhJSytYVZAKRMMnpyAOyjHx7A4jJYRE-k57VlkfCAgX3W_2_oLEERZYdikttSII'
}

const showSeenIndicator = computed(() => {
  const lastMessage = props.messages[props.messages.length - 1]
  return lastMessage && lastMessage.senderId === props.currentUserId && lastMessage.seen
})
</script>

<style scoped>
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px 32px;
  background: radial-gradient(circle at top right, rgba(37, 106, 244, 0.05), transparent, transparent);
}

.chat-messages::-webkit-scrollbar {
  display: none;
}

.date-divider {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}

.date-label {
  padding: 6px 16px;
  border-radius: 9999px;
  background: rgba(249, 250, 251, 1);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #90a4cb;
  border: 1px solid rgba(229, 231, 235, 0.3);
}

.messages-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.message-wrapper {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  max-width: 80%;
}

.message-wrapper.message-sent {
  margin-left: auto;
  flex-direction: row-reverse;
}

.sender-avatar {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  margin-bottom: 4px;
}

.message-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.message-bubble {
  padding: 16px 20px;
  border-radius: 24px;
  background: rgba(249, 250, 251, 1);
  color: #1f2937;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  line-height: 1.6;
  font-size: 16px;
  border-bottom-left-radius: 0;
}

.message-bubble.message-bubble-sent {
  background: #256af4;
  color: white;
  box-shadow: 0 4px 12px rgba(37, 106, 244, 0.2);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 0;
}

.message-image {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 8px;
}

.message-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.message-text {
  margin: 0;
  padding: 0;
}

.message-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 4px;
}

.message-wrapper.message-sent .message-meta {
  margin-left: 0;
  margin-right: 4px;
  flex-direction: row-reverse;
}

.message-time {
  font-size: 10px;
  color: #90a4cb;
  font-weight: 500;
}

.message-status {
  color: #256af4;
  display: flex;
  align-items: center;
}

.message-status .material-symbols-outlined {
  font-size: 16px;
}

.seen-indicator {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  font-size: 10px;
  color: #90a4cb;
  font-style: italic;
}

@media (min-width: 1024px) {
  .chat-messages {
    padding: 32px;
  }
  
  .message-bubble {
    padding: 20px 24px;
    border-radius: 32px;
    font-size: 16px;
  }
  
  .message-bubble.message-bubble-sent {
    border-bottom-right-radius: 0;
  }
}
</style>


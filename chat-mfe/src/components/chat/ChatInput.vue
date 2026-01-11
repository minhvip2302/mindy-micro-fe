<template>
  <footer class="chat-input">
    <div class="input-container">
      <button class="input-action-btn">
        <span class="material-symbols-outlined">add_circle</span>
      </button>
      
      <input
        v-model="message"
        @keyup.enter="handleSend"
        class="message-input"
        type="text"
        placeholder="Write a message..."
      />
      
      <div class="input-actions">
        <button class="input-action-btn">
          <span class="material-symbols-outlined">sentiment_satisfied</span>
        </button>
        <button class="input-action-btn">
          <span class="material-symbols-outlined">mic</span>
        </button>
        <button 
          @click="handleSend"
          class="send-btn"
        >
          <span class="material-symbols-outlined filled">send</span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  'send-message': [message: string]
}>()

const message = ref('')

const handleSend = () => {
  if (message.value.trim()) {
    emit('send-message', message.value.trim())
    message.value = ''
  }
}
</script>

<style scoped>
.chat-input {
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(24px);
  border-top: 1px solid rgba(229, 231, 235, 0.3);
}

.input-container {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(249, 250, 251, 1);
  padding: 8px 12px;
  border-radius: 24px;
  border: 1px solid transparent;
  transition: all 0.2s;
}

.input-container:focus-within {
  border-color: rgba(37, 106, 244, 0.3);
}

.input-action-btn {
  padding: 8px;
  background: transparent;
  border: none;
  color: #90a4cb;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-action-btn:hover {
  color: #256af4;
}

.input-action-btn .material-symbols-outlined {
  font-size: 24px;
}

.message-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #1f2937;
  font-size: 16px;
  padding: 4px 0;
}

.message-input::placeholder {
  color: #90a4cb;
}

.input-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 4px;
}

.send-btn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #256af4;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 106, 244, 0.2);
  transition: all 0.2s;
  margin-left: 8px;
}

.send-btn:hover {
  transform: scale(1.05);
}

.send-btn .material-symbols-outlined {
  font-size: 24px;
}

.send-btn .material-symbols-outlined.filled {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

@media (min-width: 1024px) {
  .chat-input {
    padding: 32px;
  }
  
  .input-container {
    padding: 12px 16px;
    border-radius: 32px;
  }
  
  .message-input {
    font-size: 18px;
  }
  
  .send-btn {
    width: 48px;
    height: 48px;
    border-radius: 16px;
  }
  
  .input-actions {
    gap: 8px;
  }
}
</style>


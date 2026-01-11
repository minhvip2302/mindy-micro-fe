<template>
  <div class="post-composer">
    <div class="composer-header">
      <div class="user-avatar" :style="{ backgroundImage: `url(${userAvatar})` }"></div>
      <div class="composer-input-wrapper">
        <textarea
          v-model="postContent"
          class="composer-input"
          placeholder="What's on your mind?"
          rows="1"
          @input="autoResize"
        ></textarea>
      </div>
    </div>
    <div class="composer-actions">
      <div class="action-buttons">
        <button class="action-btn">
          <span class="material-symbols-outlined" style="color: #22c55e">image</span>
          <span class="action-label">Photo</span>
        </button>
        <button class="action-btn">
          <span class="material-symbols-outlined" style="color: #3b82f6">videocam</span>
          <span class="action-label">Video</span>
        </button>
        <button class="action-btn">
          <span class="material-symbols-outlined" style="color: #eab308">sentiment_satisfied</span>
          <span class="action-label">Feeling</span>
        </button>
      </div>
      <button class="post-btn" :disabled="!postContent.trim()" @click="handlePost">
        Post
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  userAvatar?: string
}

const props = withDefaults(defineProps<Props>(), {
  userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyhN8ickH9I-w8dM5IM3hVowqT0ku_zsy5TcArcVSCAZylEfPKG7MxYvD3X_k_FmVR3ZvebyUuld5YtX8FBomx1_i8D91bwfGLojGOFiVvnEOBzqV3M_FEq7V3w5MdG2S57ecu83XmzNCd_3VwLxT5JuhawADnLq4fkE83B7xpYNLPjYB-2jnSCL4oqpAUrP5gkXuGSMqcCV78eJrsJHGCX0vaPVFunjnRkRYYQoogIcFIlll22PUYc82edvuXH8IKT0Fq2FHrFi4n'
})

const emit = defineEmits<{
  post: [content: string]
}>()

const postContent = ref('')

const autoResize = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  textarea.style.height = 'auto'
  textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`
}

const handlePost = () => {
  if (postContent.value.trim()) {
    emit('post', postContent.value)
    postContent.value = ''
  }
}
</script>

<style scoped>
.post-composer {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.composer-header {
  display: flex;
  gap: 16px;
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}

.composer-input-wrapper {
  flex: 1;
}

.composer-input {
  width: 100%;
  background: transparent;
  border: none;
  font-size: 18px;
  color: #1e293b;
  padding: 8px 0;
  resize: none;
  min-height: 48px;
  outline: none;
  font-family: inherit;
}

.composer-input::placeholder {
  color: #90a4cb;
}

.composer-actions {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 9999px;
  border: none;
  background: transparent;
  color: #90a4cb;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background: #f3f4f6;
}

.action-label {
  font-size: 14px;
  font-weight: 500;
  display: none;
}

.post-btn {
  background: #256af4;
  color: white;
  padding: 8px 24px;
  border-radius: 9999px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(37, 106, 244, 0.2);
}

.post-btn:hover:not(:disabled) {
  background: rgba(37, 106, 244, 0.9);
}

.post-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (min-width: 640px) {
  .action-label {
    display: inline;
  }
}
</style>


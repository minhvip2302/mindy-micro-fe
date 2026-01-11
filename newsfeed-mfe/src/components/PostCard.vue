<template>
  <article class="post-card">
    <!-- Header -->
    <div class="post-header">
      <div class="post-author">
        <div class="author-avatar" :style="{ backgroundImage: `url(${post.author.avatar})` }"></div>
        <div class="author-info">
          <div class="author-name-row">
            <h3 class="author-name">{{ post.author.name }}</h3>
            <span v-if="post.author.isFollowing" class="follow-badge">Follow</span>
          </div>
          <span class="post-time">{{ post.time }}</span>
        </div>
      </div>
      <button class="more-btn">
        <span class="material-symbols-outlined">more_horiz</span>
      </button>
    </div>
    
    <!-- Content -->
    <div class="post-content">
      <p v-if="post.text" class="post-text" v-html="formatText(post.text)"></p>
      <div v-if="post.image" class="post-image" :style="{ backgroundImage: `url(${post.image})` }"></div>
      <div v-if="post.gradient" class="post-gradient" :style="{ background: post.gradient }">
        <p class="gradient-text">{{ post.gradientText }}</p>
      </div>
      <div v-if="post.link" class="post-link-card">
        <div class="link-image" :style="{ backgroundImage: `url(${post.link.image})` }"></div>
        <div class="link-content">
          <p class="link-domain">{{ post.link.domain }}</p>
          <h4 class="link-title">{{ post.link.title }}</h4>
          <p class="link-description">{{ post.link.description }}</p>
        </div>
      </div>
    </div>
    
    <!-- Interactions -->
    <div class="post-interactions">
      <div class="interaction-stats">
        <div class="reaction-icons">
          <div class="reaction-icon like">
            <span class="material-symbols-outlined">thumb_up</span>
          </div>
          <div class="reaction-icon love">
            <span class="material-symbols-outlined">favorite</span>
          </div>
        </div>
        <span class="stats-text">
          Liked by <strong>{{ post.stats.likedBy }}</strong> and <strong>{{ post.stats.likes }}</strong>
        </span>
        <span class="comments-count">{{ post.stats.comments }} comments</span>
      </div>
      
      <div class="interaction-buttons">
        <button class="interaction-btn">
          <span class="material-symbols-outlined">favorite</span>
          <span>{{ post.stats.likesCount || 'Like' }}</span>
        </button>
        <button class="interaction-btn">
          <span class="material-symbols-outlined">chat_bubble</span>
          <span>Comment</span>
        </button>
        <button class="interaction-btn">
          <span class="material-symbols-outlined">share</span>
          <span>Share</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Post {
  id: string
  author: {
    name: string
    avatar: string
    isFollowing?: boolean
  }
  time: string
  text?: string
  image?: string
  gradient?: string
  gradientText?: string
  link?: {
    domain: string
    title: string
    description: string
    image: string
  }
  stats: {
    likes: string
    likedBy?: string
    comments: string
    likesCount?: string
  }
}

interface Props {
  post: Post
}

defineProps<Props>()

const formatText = (text: string) => {
  return text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>')
}
</script>

<style scoped>
.post-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.post-header {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-name {
  font-weight: 700;
  color: #1e293b;
  cursor: pointer;
  margin: 0;
  font-size: 16px;
}

.author-name:hover {
  text-decoration: underline;
}

.follow-badge {
  width: 4px;
  height: 4px;
  background: #90a4cb;
  border-radius: 9999px;
}

.follow-badge::after {
  content: 'Follow';
  margin-left: 8px;
  color: #256af4;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

.follow-badge::after:hover {
  text-decoration: underline;
}

.post-time {
  font-size: 12px;
  color: #90a4cb;
}

.more-btn {
  padding: 8px;
  border-radius: 9999px;
  border: none;
  background: transparent;
  color: #90a4cb;
  cursor: pointer;
  transition: all 0.2s;
}

.more-btn:hover {
  background: #f3f4f6;
  color: #1e293b;
}

.post-content {
  padding: 0 16px 12px;
}

.post-text {
  color: #1e293b;
  margin: 0 0 8px;
  line-height: 1.5;
}

.post-text :deep(.hashtag) {
  color: #256af4;
  cursor: pointer;
}

.post-image {
  width: 100%;
  aspect-ratio: 4/3;
  background-size: cover;
  background-position: center;
  margin-top: 8px;
}

.post-gradient {
  width: 100%;
  aspect-ratio: 16/9;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 8px;
}

.gradient-text {
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0;
}

.post-link-card {
  margin: 8px 0 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.link-image {
  width: 100%;
  height: 192px;
  background-size: cover;
  background-position: center;
}

.link-content {
  background: #f9fafb;
  padding: 12px;
}

.link-domain {
  font-size: 12px;
  color: #90a4cb;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 4px;
}

.link-title {
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 4px;
  line-height: 1.3;
}

.link-description {
  font-size: 12px;
  color: #90a4cb;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post-interactions {
  padding: 16px;
}

.interaction-stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.reaction-icons {
  display: flex;
  align-items: center;
  gap: -8px;
}

.reaction-icon {
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.reaction-icon.like {
  background: #3b82f6;
}

.reaction-icon.love {
  background: #ef4444;
  margin-left: -8px;
}

.reaction-icon .material-symbols-outlined {
  color: white;
  font-size: 14px;
}

.stats-text {
  font-size: 14px;
  color: #90a4cb;
  margin-left: 16px;
}

.stats-text strong {
  color: #1e293b;
  font-weight: 700;
}

.comments-count {
  font-size: 14px;
  color: #90a4cb;
}

.interaction-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
}

.interaction-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #90a4cb;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  font-weight: 500;
}

.interaction-btn:hover {
  background: #f3f4f6;
}

.interaction-btn:hover .material-symbols-outlined {
  color: #256af4;
}

.interaction-btn:first-child:hover .material-symbols-outlined {
  color: #ef4444;
}

.interaction-btn:last-child:hover .material-symbols-outlined {
  color: #22c55e;
}
</style>


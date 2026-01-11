<template>
  <header class="feed-header">
    <div class="header-container">
      <!-- Logo Area -->
      <div class="logo-area">
        <div class="logo-icon">
          <span class="material-symbols-outlined">all_inclusive</span>
        </div>
        <span class="logo-text">SocialApp</span>
      </div>
      
      <!-- Search Bar (Hidden on Mobile, Visible on Desktop) -->
      <div class="search-container">
        <div class="search-wrapper">
          <span class="search-icon material-symbols-outlined">search</span>
          <input
            class="search-input"
            type="text"
            placeholder="Search for friends, posts, or videos..."
          />
        </div>
      </div>
      
      <!-- Mobile Title (Centered) -->
      <div class="mobile-title">Home</div>
      
      <!-- Right Actions -->
      <div class="right-actions">
        <button class="action-btn mobile-search">
          <span class="material-symbols-outlined">search</span>
        </button>
        <button class="action-btn notifications">
          <span class="material-symbols-outlined">notifications</span>
          <span class="notification-badge"></span>
        </button>
        <button class="action-btn mail">
          <span class="material-symbols-outlined">mail</span>
        </button>
        <div class="user-avatar" :style="{ backgroundImage: `url(${userAvatar})` }"></div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  userAvatar?: string
}

withDefaults(defineProps<Props>(), {
  userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0HUqeQPph4DfdDCYkXR2Jf_L1InI-swY8Nd4PtQR4hjuqPGKiDuegVs1DfESiH3sJeVa2RcnLhZX_RILlcZp7rDR40QJ0b390Os065O-BrWmaNqWWE6d8hnoHTUPZJtTcaj7-za-dKcq66faC53mluGQ2M7KmPXl-y-Tb6jS9he-YXUFjPdP3dC8OoQMYFMtMm-7Pv-ew-z9QybtFS-aaltLDn4fNW_bPK1ypCtBVd0d1Ro9At1dwdqmJq5KK-rrhqvCdpIMqMJNj'
})
</script>

<style scoped>
.feed-header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
}

.header-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 16px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 25%;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: #256af4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.logo-icon .material-symbols-outlined {
  font-size: 24px;
}

.logo-text {
  display: none;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.search-container {
  display: none;
  flex: 1;
  max-width: 448px;
}

.search-wrapper {
  position: relative;
  width: 100%;
  color: #90a4cb;
}

.search-wrapper:focus-within {
  color: #256af4;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 20px;
}

.search-input {
  display: block;
  width: 100%;
  padding: 10px 12px 10px 40px;
  border-radius: 9999px;
  border: none;
  background: #f3f4f6;
  font-size: 14px;
  color: #1e293b;
  outline: none;
}

.search-input:focus {
  box-shadow: 0 0 0 2px rgba(37, 106, 244, 0.5);
}

.search-input::placeholder {
  color: #90a4cb;
}

.mobile-title {
  flex: 1;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}

.right-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 25%;
}

.action-btn {
  padding: 8px;
  border-radius: 9999px;
  border: none;
  background: transparent;
  color: #90a4cb;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background: #f3f4f6;
}

.action-btn.mobile-search {
  display: flex;
}

.action-btn.mail {
  display: none;
}

.action-btn.notifications {
  position: relative;
}

.notification-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 9999px;
  border: 2px solid white;
}

.user-avatar {
  display: none;
  width: 40px;
  height: 40px;
  margin-left: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 9999px;
  border: 2px solid #e5e7eb;
}

@media (min-width: 768px) {
  .logo-text {
    display: block;
  }
  
  .search-container {
    display: flex;
  }
  
  .mobile-title {
    display: none;
  }
  
  .action-btn.mobile-search {
    display: none;
  }
  
  .action-btn.mail {
    display: flex;
  }
  
  .user-avatar {
    display: block;
  }
}
</style>


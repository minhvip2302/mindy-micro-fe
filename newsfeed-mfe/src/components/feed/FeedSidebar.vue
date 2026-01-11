<template>
  <aside class="feed-sidebar">
    <nav class="sidebar-nav">
      <a class="nav-item" href="#">
        <span class="material-symbols-outlined icon">home</span>
        <span>Home</span>
      </a>
      <a class="nav-item" href="#">
        <span class="material-symbols-outlined">explore</span>
        <span>Explore</span>
      </a>
      <a class="nav-item" href="#">
        <span class="material-symbols-outlined">people</span>
        <span>People</span>
      </a>
      <a class="nav-item" href="#">
        <span class="material-symbols-outlined">ondemand_video</span>
        <span>Watch</span>
      </a>
      <a class="nav-item" href="#">
        <span class="material-symbols-outlined">bookmark</span>
        <span>Saved</span>
      </a>
      
      <div class="nav-divider"></div>
      
      <div class="nav-section-title">Your Pages</div>
      
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-purple">D</div>
        <span>Design Community</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
      <a class="nav-page-item" href="#">
        <div class="page-icon gradient-green">T</div>
        <span>Tech Talk</span>
      </a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
// Left sidebar navigation component
</script>

<style scoped>
.feed-sidebar {
  display: none;
  flex-direction: column;
  width: 300px;
  position: sticky;
  top: 64px;
  align-self: flex-start;
  max-height: calc(100vh - 64px);
  overflow-y: auto;
  overflow-x: hidden;
  /* Ngăn scroll chaining - khi scroll đến top/bottom của sidebar thì không scroll content bên ngoài */
  overscroll-behavior: contain;
}

.feed-sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.feed-sidebar::-webkit-scrollbar {
    width: 0;
}

.feed-sidebar:hover::-webkit-scrollbar {
    width: 8px;
}

.feed-sidebar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2); /* Màu đen mờ */
  border-radius: 10px; /* Bo tròn 2 đầu */
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-left: 16px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  color: #90a4cb;
}

.nav-item:hover {
  background: rgba(37, 106, 244, 0.1);
  color: #256af4;
}

.nav-item.active {
  background: rgba(37, 106, 244, 0.1);
  color: #256af4;
  font-weight: 700;
}

.nav-item .material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-size: 24px;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.nav-item .material-symbols-outlined.filled {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.nav-divider {
  height: 1px;
  background: #e5e7eb;
  margin: 8px 0;
}

.nav-section-title {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  color: #90a4cb;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-page-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
  color: #374151;
}

.nav-page-item:hover {
  background: rgba(37, 106, 244, 0.1);
  color: #256af4;
}

.page-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.page-icon.gradient-purple {
  background: linear-gradient(to bottom right, #a855f7, #6366f1);
}

.page-icon.gradient-green {
  background: linear-gradient(to bottom right, #22c55e, #10b981);
}

.nav-page-item span {
  font-size: 14px;
  font-weight: 500;
}

@media (min-width: 1024px) {
  .feed-sidebar {
    display: flex;
  }
}
</style>


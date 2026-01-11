<template>
  <div class="features-section">
    <div class="features-content">
      <div class="headline-section">
        <h1 class="headline-title">
          Kết nối thế giới<br />
          <span class="headline-highlight">của bạn ngay hôm nay.</span>
        </h1>
        <p class="headline-description">
          Tham gia cộng đồng hàng triệu người, chia sẻ khoảnh khắc và khám phá những điều thú vị mỗi ngày.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon blue">people</span>
          <h3 class="feature-title">Kết nối</h3>
          <p class="feature-description">Tìm bạn bè và những người cùng sở thích.</p>
        </div>

        <div class="feature-card delay-75">
          <span class="material-symbols-outlined feature-icon purple">photo_camera</span>
          <h3 class="feature-title">Chia sẻ</h3>
          <p class="feature-description">Lưu giữ khoảnh khắc đáng nhớ của bạn.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component hiển thị features bên trái màn đăng ký
</script>

<style scoped>
.features-section {
  display: none;
}

@media (min-width: 1024px) {
  .features-section {
    display: block;
  }
}

.features-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.headline-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.headline-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.25;
  color: rgb(17, 24, 39);
  margin: 0;
}

.dark .headline-title {
  color: white;
}

.headline-highlight {
  color: rgb(37, 99, 235);
}

.headline-description {
  font-size: 1.125rem;
  color: rgb(107, 114, 128);
  line-height: 1.75;
  max-width: 28rem;
  margin: 0;
}

.dark .headline-description {
  color: rgb(209, 213, 219);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-top: 2rem;
}

.feature-card {
  padding: 1.5rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid rgb(229, 231, 235);
  transform: translateY(0);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-0.25rem);
}

.dark .feature-card {
  background: rgb(21, 27, 43);
  border-color: rgb(31, 41, 55);
}

.feature-card.delay-75 {
  transition-delay: 75ms;
}

.feature-icon {
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
  display: block;
}

.feature-icon.blue {
  color: rgb(59, 130, 246);
}

.feature-icon.purple {
  color: rgb(168, 85, 247);
}

.feature-title {
  font-weight: 700;
  color: rgb(17, 24, 39);
  margin-bottom: 0.25rem;
  margin-top: 0;
}

.dark .feature-title {
  color: white;
}

.feature-description {
  font-size: 0.875rem;
  color: rgb(107, 114, 128);
  margin: 0;
}

.dark .feature-description {
  color: rgb(156, 163, 175);
}
</style>


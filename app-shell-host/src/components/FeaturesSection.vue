<template>
  <section class="features">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Tính năng nổi bật</h2>
        <p class="section-subtitle">
          Khám phá những tính năng tuyệt vời giúp bạn kết nối và chia sẻ
        </p>
      </div>
      
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.id"
          class="feature-card"
          :class="`card-${index + 1}`"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="card-inner">
            <div class="feature-icon">
              <div class="icon-wrapper">
                <span class="icon">{{ feature.icon }}</span>
              </div>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
              <div class="feature-link">
                <a href="#" class="learn-more">
                  Tìm hiểu thêm
                  <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    id: 1,
    icon: '👥',
    title: 'Kết nối bạn bè',
    description: 'Tìm kiếm và kết nối với bạn bè từ khắp nơi trên thế giới một cách dễ dàng và nhanh chóng.'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Chia sẻ khoảnh khắc',
    description: 'Chia sẻ ảnh, video và cập nhật trạng thái của bạn với cộng đồng một cách trực quan.'
  },
  {
    id: 3,
    icon: '💬',
    title: 'Tin nhắn tức thì',
    description: 'Trò chuyện với bạn bè qua tin nhắn tức thì với chất lượng cao và bảo mật tuyệt đối.'
  },
  {
    id: 4,
    icon: '🔔',
    title: 'Thông báo thông minh',
    description: 'Nhận thông báo về hoạt động của bạn bè một cách thông minh và không làm phiền.'
  },
  {
    id: 5,
    icon: '🎨',
    title: 'Giao diện đẹp',
    description: 'Thiết kế hiện đại, sang trọng với trải nghiệm người dùng tuyệt vời.'
  },
  {
    id: 6,
    icon: '🔒',
    title: 'Bảo mật cao',
    description: 'Bảo vệ thông tin cá nhân của bạn với công nghệ mã hóa tiên tiến nhất.'
  }
])
</script>

<style scoped>
.features {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}

.features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: slideInUp 0.8s ease-out both;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-icon {
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.feature-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
}

.icon {
  font-size: 2rem;
  filter: grayscale(0);
}

.feature-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.feature-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.feature-link {
  margin-top: auto;
}

.learn-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.learn-more:hover {
  color: #764ba2;
  transform: translateX(4px);
}

.arrow {
  transition: transform 0.3s ease;
}

.learn-more:hover .arrow {
  transform: translateX(4px);
}

/* Special styling for different cards */
.card-1 {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  color: white;
}

.card-1 .feature-title,
.card-1 .feature-description {
  color: white;
}

.card-1 .learn-more {
  color: white;
}

.card-2 {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.card-3 {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.card-4 {
  background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
}

.card-5 {
  background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
  color: white;
}

.card-5 .feature-title,
.card-5 .feature-description {
  color: white;
}

.card-5 .learn-more {
  color: white;
}

.card-6 {
  background: linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%);
  color: white;
}

.card-6 .feature-title,
.card-6 .feature-description {
  color: white;
}

.card-6 .learn-more {
  color: white;
}

/* Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .features {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
  
  .icon-wrapper {
    width: 60px;
    height: 60px;
  }
  
  .icon {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .feature-card {
    padding: 1.25rem;
  }
}
</style>

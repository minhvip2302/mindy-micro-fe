<template>
  <section class="stats">
    <div class="container">
      <div class="stats-content">
        <div class="stats-header">
          <h2 class="stats-title">Số liệu ấn tượng</h2>
          <p class="stats-subtitle">
            Hàng triệu người dùng tin tưởng và sử dụng SocialApp mỗi ngày
          </p>
        </div>
        
        <div class="stats-grid">
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.id"
            class="stat-card"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="stat-icon">
              <div class="icon-wrapper">
                <span class="icon">{{ stat.icon }}</span>
              </div>
            </div>
            <div class="stat-content">
              <div class="stat-number" :data-target="stat.value">
                {{ animatedValue(stat.value, index) }}
              </div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-description">{{ stat.description }}</div>
            </div>
            <div class="stat-progress">
              <div class="progress-bar" :style="{ width: `${stat.progress}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = ref([
  {
    id: 1,
    icon: '👥',
    value: '1M+',
    label: 'Người dùng',
    description: 'Người dùng hoạt động',
    progress: 95
  },
  {
    id: 2,
    icon: '📝',
    value: '10M+',
    label: 'Bài viết',
    description: 'Bài viết được chia sẻ',
    progress: 88
  },
  {
    id: 3,
    icon: '💬',
    value: '50M+',
    label: 'Tin nhắn',
    description: 'Tin nhắn mỗi ngày',
    progress: 92
  },
  {
    id: 4,
    icon: '⭐',
    value: '99%',
    label: 'Hài lòng',
    description: 'Tỷ lệ hài lòng',
    progress: 99
  }
])

const animatedValues = ref<{ [key: number]: string }>({})

const animatedValue = (value: string, index: number) => {
  return animatedValues.value[index] || '0'
}

const animateNumbers = () => {
  stats.value.forEach((stat, index) => {
    const target = stat.value
    const isPercentage = target.includes('%')
    const isPlus = target.includes('+')
    const numericValue = parseFloat(target.replace(/[^\d.]/g, ''))
    
    let current = 0
    const increment = numericValue / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        current = numericValue
        clearInterval(timer)
      }
      
      let displayValue = Math.floor(current).toString()
      if (isPercentage) displayValue += '%'
      if (isPlus) displayValue += '+'
      
      animatedValues.value[index] = displayValue
    }, 30)
  })
}

onMounted(() => {
  setTimeout(animateNumbers, 500)
})
</script>

<style scoped>
.stats {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  position: relative;
  overflow: hidden;
}

.stats::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.stats-content {
  text-align: center;
}

.stats-header {
  margin-bottom: 4rem;
}

.stats-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stats-subtitle {
  font-size: 1.25rem;
  color: #a0aec0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInUp 0.8s ease-out both;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.stat-icon {
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
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

.stat-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
}

.icon {
  font-size: 2rem;
  filter: grayscale(0);
}

.stat-content {
  position: relative;
  z-index: 1;
  margin-bottom: 1.5rem;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.stat-label {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-description {
  font-size: 0.9rem;
  color: #a0aec0;
  line-height: 1.4;
}

.stat-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transition: width 2s ease-out;
  position: relative;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
  animation: shimmer 2s infinite;
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

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .stats {
    padding: 4rem 0;
  }
  
  .stats-title {
    font-size: 2.5rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .stat-card {
    padding: 2rem 1.5rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
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
  .stats-title {
    font-size: 2rem;
  }
  
  .stats-subtitle {
    font-size: 1.1rem;
  }
  
  .stat-card {
    padding: 1.5rem 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}
</style>

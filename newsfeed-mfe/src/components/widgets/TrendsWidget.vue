<template>
  <div class="trends-widget">
    <div class="widget-header">
      <h3 class="widget-title">Trends for you</h3>
      <button class="see-all-btn">See all</button>
    </div>
    <div class="trends-list">
      <div
        v-for="trend in trends"
        :key="trend.id"
        class="trend-item"
      >
        <div class="trend-info">
          <span class="trend-category">{{ trend.category }}</span>
          <span class="trend-name">{{ trend.name }}</span>
          <span class="trend-count">{{ trend.count }} posts</span>
        </div>
        <span class="material-symbols-outlined">more_horiz</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Trend {
  id: string
  category: string
  name: string
  count: string
}

interface Props {
  trends?: Trend[]
}

withDefaults(defineProps<Props>(), {
  trends: () => [
    { id: '1', category: 'Technology · Trending', name: '#ArtificialIntelligence', count: '52.4k' },
    { id: '2', category: 'Travel · Trending', name: '#BaliLife', count: '18.2k' },
    { id: '3', category: 'Music · Trending', name: 'New Album Drop', count: '102k' }
  ]
})
</script>

<style scoped>
.trends-widget {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
}

.widget-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.widget-title {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.see-all-btn {
  color: #256af4;
  font-size: 14px;
  font-weight: 700;
  background: none;
  border: none;
  cursor: pointer;
}

.trends-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.trend-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;
}

.trend-item:hover .trend-name {
  color: #256af4;
}

.trend-info {
  display: flex;
  flex-direction: column;
}

.trend-category {
  font-size: 12px;
  color: #90a4cb;
}

.trend-name {
  font-weight: 700;
  color: #1e293b;
  transition: color 0.2s;
}

.trend-count {
  font-size: 12px;
  color: #90a4cb;
}

.trend-item .material-symbols-outlined {
  color: #90a4cb;
  font-size: 20px;
}
</style>


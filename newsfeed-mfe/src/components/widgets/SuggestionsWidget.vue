<template>
  <div class="suggestions-widget">
    <div class="widget-header">
      <h3 class="widget-title">Who to follow</h3>
      <button class="see-all-btn">See all</button>
    </div>
    <div class="suggestions-list">
      <div
        v-for="suggestion in suggestions"
        :key="suggestion.id"
        class="suggestion-item"
      >
        <div class="suggestion-avatar" :style="{ backgroundImage: `url(${suggestion.avatar})` }"></div>
        <div class="suggestion-info">
          <span class="suggestion-name">{{ suggestion.name }}</span>
          <span class="suggestion-detail">{{ suggestion.detail }}</span>
        </div>
        <button class="follow-btn">
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Suggestion {
  id: string
  name: string
  detail: string
  avatar: string
}

interface Props {
  suggestions?: Suggestion[]
}

withDefaults(defineProps<Props>(), {
  suggestions: () => [
    {
      id: '1',
      name: 'Emily Wilson',
      detail: '@emilyw_design',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuConLsL4ydO9JCJuMgABnlyblsHFx6Z-kKbDkaF9h68G7EX0aI26LsIouNrKIwPon2vDWRQCGlFnhczRiegxv1ylIN-qt7b3k-VW2z-3_v4TMxt371wxPpZEotPcGRH65wPvxIfSe_RlwAOmzKKN98I3t35bXzsR3KIN1s4LoYfWR2khWmePEXE8HhMtH7qoCpq2bdJzh6q3R4vH7IIQhcy2y45Yt1DrEhqMbDlKjoePHt-SMGjGPStf7lqgYgrMSZaI_CEt_6_xCp0'
    },
    {
      id: '2',
      name: 'David Chen',
      detail: 'Followed by John',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhP3BYTJmoNXCc0TK5karaoFTP2yc1-hrVFfJZzL2mf2eHf1q4oQch1hvJjV-wldvl4ORO1HyysqepoUxcu8pedmN8d3bt6nMhcTm7ZraYrgr6f1ep8ehwh9v_WNmszdo-bHTm0BwRA7CKlffTJE3znWWFWVVRTlEQKHl843rVdXu-dz7rogL4w23Bng8ZQkloUgi9r5dUmk48H6aDEqRHk_ewyeE3rxkY7YuH6R0w4r56Uex2UxI6PBczuwlv-VJBdC6xegU3U_GV'
    },
    {
      id: '3',
      name: 'Creative Studio',
      detail: 'Design Agency',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0YI0X6qLNbI2F9OYclrVB4Agc4mlMCxPGiYJCuMMdwhfUVxzC_vNrC6OQl3J6XuuAeIQTh9fsE0VawdDcYatEfhc3mQwP25urbbiUzd-DWCYgCjux-ziY_5xugvKzolY3ukg2qxvdNnye6pfQDbUQDzUJXtuDBTiKVU1psu40fXY3tIGWYRrYsVvQxLJxVHTPNyiU92xdeLGS3hnNYdXP4ZA-CQooKOJymjZd4cW7N3QtZRSEey_Y1q76VSQ3xznWdAiN1kusL96u'
    }
  ]
})
</script>

<style scoped>
.suggestions-widget {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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

.suggestions-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.suggestion-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.suggestion-avatar {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}

.suggestion-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.suggestion-name {
  font-weight: 700;
  font-size: 14px;
  color: #1e293b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.suggestion-detail {
  font-size: 12px;
  color: #90a4cb;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.follow-btn {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: rgba(37, 106, 244, 0.1);
  border: none;
  color: #256af4;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.follow-btn:hover {
  background: rgba(37, 106, 244, 0.2);
}

.follow-btn .material-symbols-outlined {
  font-size: 16px;
  font-weight: 700;
}
</style>


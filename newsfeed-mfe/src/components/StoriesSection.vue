<template>
  <section class="stories-section">
    <div class="stories-header">
      <h2 class="stories-title">Stories</h2>
      <button class="see-all-btn">See all</button>
    </div>
    <div class="stories-container">
      <!-- My Story -->
      <div class="story-item">
        <div class="story-circle add-story">
          <div class="story-avatar" :style="{ backgroundImage: `url(${userAvatar})` }"></div>
          <div class="add-icon">
            <span class="material-symbols-outlined">add_circle</span>
          </div>
        </div>
        <span class="story-name">Add Story</span>
      </div>
      
      <!-- Friend Stories -->
      <div
        v-for="story in stories"
        :key="story.id"
        class="story-item"
        :class="{ 'viewed': story.viewed }"
      >
        <div class="story-circle" :class="{ 'has-border': !story.viewed }">
          <div class="story-avatar" :style="{ backgroundImage: `url(${story.avatar})` }"></div>
        </div>
        <span class="story-name" :class="{ 'viewed': story.viewed }">{{ story.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Story {
  id: string
  name: string
  avatar: string
  viewed?: boolean
}

interface Props {
  userAvatar?: string
  stories?: Story[]
}

const props = withDefaults(defineProps<Props>(), {
  userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbcec8l3CoZhDVuEyyiwZSn59K7Ay1QdoTMaFh0q3t8wqJqBnF-lbRhuhmMvPbEUl9Rf84SZ-fMnPr1_Jn2aolWILqLh3uxD4XBINarfyAwn37gyvFCG1UF4rRAw53sL81IQjR-CUbuI1Wv_DxLf770Ke8ncM-dEnNCIB8Tv6bfN2H9d7krfY6rcgesS2W5ATp5KoN6qRYx9hTjbGmqURv55iUXXqXbJx2C6pV5yfv0fBuAS5GKq5i95ImKk1mXzK96VyC9Wo7xoTr',
  stories: () => [
    { id: '1', name: 'Jane', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgcixJJW27VQGwG8Xx68Wj2V0jsAC5R9WDuyxFz_q8ZzipDctDL7o6N6bP1FVnta0BiTjVI2RPQnUgy_nizypQcMtecredMkr9g3BJeSuW2LcabEyWxyFFmjbI-W9nZ_OEDpytEBZ58OQxMakoqvtKxdTHXiOxUXPeumnY8rwURU9FvemEwK3diU7i9alKIM-fu8Ra-_tuJVD6fXhJSytYVZAKRMMnpyAOyjHx7A4jJYRE-k57VlkfCAgX3W_2_oLEERZYdikttSII' },
    { id: '2', name: 'Mike', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDwUS9jBavKFCcRZadxzqR7OgEgWFrmyjXNEldh8MyDJsM746024Cn553QeS4jVxdgwVxZv7GQ9iODTu4LK3M2JSi67am_hi9DTejx39Vz-trn0pZjo1QmLUQygFjr80LYU2cCuS-j-BP4emgeQ_ZTEHlDsaTuwJ9oV1bPZyNL0Wgy7ekBLM6-mUCDykIUgEKoxnf9PH4HfUoSh9xDd3K-XW-vi_H1dKfwAdVvX5Z2RN8q27Pes2TRO6n-YhAuwZs5PXlqPWj3piZl' },
    { id: '3', name: 'Sarah', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-M6VWt4MgvkjgOxUl3a36kgZ2lC-Co1nlHlOF7_ROj4n5rpqG9x7yjmRGmqL2BpSCnXHZ2XOmQP9rFVtNsHfPs8MpoPKilAWcUtmUQNzxVkflruqyimFHIH3eNtHLOz3QdfGjdG_HggokJLjt7msfZ-Rc415InBa4ZZuLMRHB8SFUWYqXQheLGhMNeWO4xkz7DA9neynVstb83W9mqmN7QvoERGNfo5-DSP41lYvJLOnQlwelS4_7T3PLqIwUEmglv6_3z2MPal1R', viewed: true },
    { id: '4', name: 'Alex', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBretmxJhb0kluHbBJ5zfYHhuLIvON6QPUO8Ez50Hzbb_t7SEetsqWF3XHVl8LGaAqT_cbcn99fMAcBgnXGkSvcsbHusw2R4ZN7xtPRt-unaSmwECLqjSOqY8o36hKkYzFLAvsgjXDqqgH4OICD_YaOdt3vDZmk994DqDy9DEGTvTkNFM2wG72hhwbclqEmennWt7TKCxCo1wjvYdvx7GNyi_LtChoHpdMWSaYZrHt5THwIfD2Mk3EKLg1rz-3l1NsV_alTFj-ZgH8C' }
  ]
})
</script>

<style scoped>
.stories-section {
  width: 100%;
  overflow: hidden;
}

.stories-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 8px;
}

.stories-title {
  font-size: 18px;
  font-weight: 700;
}

.see-all-btn {
  color: #256af4;
  font-size: 14px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}

.see-all-btn:hover {
  text-decoration: none;
}

.stories-container {
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 0 16px 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.stories-container::-webkit-scrollbar {
  display: none;
}

.story-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 80px;
  cursor: pointer;
}

.story-circle {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  padding: 3px;
  background: linear-gradient(to top right, #fbbf24, #ef4444, #a855f7);
}

.story-circle.has-border {
  background: linear-gradient(to top right, #fbbf24, #ef4444, #a855f7);
}

.story-circle.viewed {
  background: #d1d5db;
}

.story-circle.add-story {
  border: 2px dashed rgba(37, 106, 244, 0.5);
  background: transparent;
  padding: 4px;
  transition: background-color 0.2s;
}

.story-circle.add-story:hover {
  background: rgba(24, 34, 52, 0.5);
}

.story-avatar {
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-size: cover;
  background-position: center;
  border: 2px solid #f5f6f8;
  opacity: 0.7;
}

.story-circle:not(.add-story) .story-avatar {
  opacity: 1;
}

.story-item.viewed .story-avatar {
  filter: grayscale(100%);
}

.add-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-icon .material-symbols-outlined {
  color: white;
  font-size: 24px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.story-name {
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.2s;
}

.story-item:not(.viewed):hover .story-name {
  color: #256af4;
}

.story-name.viewed {
  color: #90a4cb;
}
</style>


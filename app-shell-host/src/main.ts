import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Preload shared_core khi app khởi động
// Với @originjs/vite-plugin-federation, remotes đã được config trong vite.config.ts
// Preload bằng cách import động một module nhỏ từ shared_core
// Điều này giúp tải remoteEntry.js sớm hơn, giảm latency khi import các module khác
import('shared_core/ApiClient').catch(() => {
  // Ignore error nếu remote chưa sẵn sàng (dev mode)
  // Module sẽ được load khi cần thiết
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'app_shell_host', // Tên của Host App (không cần expose gì)
      
      // ⚠️ REMOTES: Định nghĩa tất cả các MFE và Thư viện dùng chung
      remotes: {
        // [Tên alias] : '[URL]/assets/remoteEntry.js'
        
        // 1. Thư viện dùng chung (core-shared-library)
        shared_core: 'http://localhost:3005/assets/remoteEntry.js', 
        
        // 2. Các MFE Remote
        auth_mfe: 'http://localhost:3001/assets/remoteEntry.js',
        // chat_mfe: 'http://localhost:3002/assets/remoteEntry.js',
        // notification_mfe: 'http://localhost:3003/assets/remoteEntry.js',
        newsfeed_mfe: 'http://localhost:3004/assets/remoteEntry.js',
      },
      // ⚠️ SHARE: Đảm bảo chỉ tải một phiên bản thư viện cho toàn bộ ứng dụng
      // Các phiên bản thư viện này phải giống hệt nhau ở tất cả các repository
      shared: ['vue', 'pinia', 'vue-router', 'axios'],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 3000, // Cổng mặc định cho Host App (có thể là 3000)
  }
})

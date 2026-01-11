import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'core_shared_library', // Tên duy nhất của thư viện này
      filename: 'remoteEntry.js',  // Tên file Manifest để Host App tìm thấy
      
      // Các mục cần EXPOSE (Xuất khẩu)
      exposes: {
        // Xuất các Pinia Stores
        './AuthStore': './src/stores/authStore.ts',
        './GlobalStore': './src/stores/globalStore.ts',

        // Xuất các Component UI
        './Header': './src/components/Header.vue',
        './Footer': './src/components/Footer.vue',
        './Layout': './src/components/Layout.vue',
        './Logo': './src/components/Logo.vue',
        './MaintenanceView': './src/components/MaintenanceView.vue',
        './MaintenanceLayout': './src/components/MaintenanceLayout.vue',
        
        // Xuất Service API
        './ApiClient': './src/services/apiClient.ts',
      },
      // Các thư viện cần SHARE (Chia sẻ)
      // Đảm bảo các MFE khác không tải lặp lại các thư viện này
      shared: ['vue', 'pinia', 'axios'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // Thiết lập cổng phát triển (ví dụ 3005)
  server: {
    port: 3005,
    strictPort: true,
  },
  preview: {
    port: 3005,
  },
})

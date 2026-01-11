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
      name: 'auth_mfe',
      filename: 'remoteEntry.js',
      remotes: {
        // Thư viện dùng chung (core-shared-library)
        shared_core: 'http://localhost:3005/assets/remoteEntry.js',
      },
      exposes: {
          // 👇 ĐÂY LÀ CÁCH CÁC VIEW ĐƯỢC CUNG CẤP
          './LoginView': './src/views/LoginView.vue',
          './RegisterView': './src/views/RegisterView.vue',
      },
      shared: ['vue', 'pinia', 'vue-router', 'axios'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        minifyInternalExports: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
 
})

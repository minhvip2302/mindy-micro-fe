import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'newsfeed_mfe',
      filename: 'remoteEntry.js',
      remotes: {
        shared_core: 'http://localhost:3005/assets/remoteEntry.js',
      },
      exposes: {
        './NewsfeedView': './src/views/NewsfeedView.vue',
      },
      shared: ['vue', 'pinia', 'vue-router', 'axios'],
    }),
  ],
  server: {
    port: 3004,
  },
  preview: {
    port: 3004,
  },
})

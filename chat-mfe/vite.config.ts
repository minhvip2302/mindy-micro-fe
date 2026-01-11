import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'chat_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './ChatView': './src/views/ChatView.vue',
      },
      remotes: {
        shared_core: 'http://localhost:3005/assets/remoteEntry.js',
      },
      shared: ['vue', 'pinia', 'vue-router'],
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
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
})

<script setup lang="ts">
  import { onMounted, ref, onUnmounted } from 'vue'
  
  const countdown = ref(5)
  let countdownInterval: ReturnType<typeof setInterval> | null = null
  
  onMounted(() => {
    const referrer = document.referrer
    const currentOrigin = window.location.origin
    const hostAppOrigin = 'http://localhost:3000'
  
    const isFromHostApp =
      referrer.startsWith(hostAppOrigin) ||
      window.parent !== window ||
      window.location.search.includes('mf=true') ||
      window.location.search.includes('allow-direct=true')
  
    if (!isFromHostApp && currentOrigin === 'http://localhost:3004') {
      countdownInterval = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) {
          if (countdownInterval) {
            clearInterval(countdownInterval)
          }
          window.location.href = `${hostAppOrigin}`
        }
      }, 1000)
    }
  })
  
  onUnmounted(() => {
    if (countdownInterval) {
      clearInterval(countdownInterval)
    }
  })
  </script>
  
  <template>
    <div class="access-denied">
      <div class="message-container">
        <h1>Access Restricted</h1>
        <p>This is a remote module and should be accessed through the host application.</p>
        <p class="countdown-text">Redirecting to host app in <span class="countdown-number">{{ countdown }}</span> seconds...</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .access-denied {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    padding: 20px;
  }
  
  .message-container {
    text-align: center;
    max-width: 500px;
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .message-container h1 {
    color: #333;
    margin-bottom: 16px;
  }
  
  .message-container p {
    color: #666;
    line-height: 1.6;
    margin: 8px 0;
  }
  
  .countdown-text {
    font-size: 16px;
    margin-top: 20px;
  }
  
  .countdown-number {
    font-size: 24px;
    font-weight: 700;
    color: #667eea;
    display: inline-block;
    min-width: 30px;
    text-align: center;
  }
  </style>
  
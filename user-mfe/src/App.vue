<script setup lang="ts">
import { onMounted } from 'vue'
import LoginView from './views/LoginView.vue'

// Check if accessed directly (not from host app)
onMounted(() => {
  const referrer = document.referrer
  const currentOrigin = window.location.origin
  const hostAppOrigin = 'http://localhost:3000'

  const isFromHostApp =
    referrer.startsWith(hostAppOrigin) ||
    window.parent !== window || // In iframe
    window.location.search.includes('mf=true') // Allow with query param for testing

  if (!isFromHostApp && currentOrigin === 'http://localhost:3001') {
    // Redirect to host app
    window.location.href = `${hostAppOrigin}`
  }
})
</script>

<template>
  <div class="social-login">
    <div class="divider">
      <div class="divider-line"></div>
      <span class="divider-text">Hoặc tiếp tục với</span>
    </div>
    <div class="social-buttons">
      <button
        @click="handleSocialLogin('google')"
        class="social-button"
        type="button"
        aria-label="Đăng nhập với Google"
      >
        <!-- Google Icon -->
        <svg class="social-icon" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
          <path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853"></path>
          <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05"></path>
          <path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335"></path>
        </svg>
      </button>
      <button
        @click="handleSocialLogin('apple')"
        class="social-button"
        type="button"
        aria-label="Đăng nhập với Apple"
      >
        <!-- Apple Icon -->
        <svg class="social-icon apple-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24.02-1.44.62-2.2.44-3.26-.7C3.75 16.09 2.92 10.33 6.64 8.35c1.85-.99 3.16-.21 4.23.22 1.04.42 2.37.58 3.86-.53.53-.4.86-.75.98-.86-2.09-2.58.54-5.32 2.53-6.24-.31 1.94-1.78 3.86-3.83 4.07-.37-1.89 1.48-3.76 3.63-3.86.06.63.1 1.25.1 1.87 0 4.19 3.55 5.92 3.61 5.95-.03.09-1.39 4.81-4.7 9.31z"></path>
        </svg>
      </button>
      <button
        @click="handleSocialLogin('facebook')"
        class="social-button"
        type="button"
        aria-label="Đăng nhập với Facebook"
      >
        <!-- Facebook Icon -->
        <svg class="social-icon facebook-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  socialLogin: [provider: 'google' | 'apple' | 'facebook']
}>()

const handleSocialLogin = (provider: 'google' | 'apple' | 'facebook') => {
  emit('socialLogin', provider)
}
</script>

<style scoped>
.social-login {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.divider {
  position: relative;
  width: 100%;
  text-align: center;
}

.divider-line {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
}

.divider-line::before {
  content: '';
  width: 100%;
  border-top: 1px solid rgb(226, 232, 240);
}

.dark .divider-line::before {
  border-color: rgb(49, 67, 104);
}

.divider-text {
  position: relative;
  background: rgb(245, 246, 248);
  padding: 0 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgb(100, 116, 139);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dark .divider-text {
  background: rgb(16, 22, 35);
  color: rgb(144, 164, 203);
}

.social-buttons {
  display: flex;
  gap: 1rem;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;
  background: white;
  border: 1px solid rgb(226, 232, 240);
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
}

.social-button:hover {
  border-color: rgb(203, 213, 225);
  background: rgb(248, 250, 252);
}

.dark .social-button {
  background: rgb(24, 34, 52);
  border-color: rgb(49, 67, 104);
}

.dark .social-button:hover {
  border-color: rgb(100, 116, 139);
  background: rgb(31, 43, 64);
}

.social-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.apple-icon {
  color: rgb(15, 23, 42);
}

.dark .apple-icon {
  color: white;
}

.facebook-icon {
  color: rgb(24, 119, 242);
}
</style>


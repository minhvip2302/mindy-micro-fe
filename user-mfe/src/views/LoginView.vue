<template>
  <div class="login-view">
    <div class="flex h-screen w-full">
      <!-- Left Side - Login Form -->
      <div class="left-panel">
        <!-- Main Content -->
        <main class="main-content">
          <!-- Logo -->
          <div class="logo-container">
            <Logo />
          </div>

          <!-- Headline -->
          <div class="headline">
            <p class="headline-subtitle">
              Nhập thông tin xác thực để truy cập vào không gian của bạn.
            </p>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleFormSubmit" class="login-form">
            <!-- Email Field -->
            <div class="form-field">
              <label class="form-label" for="email">Email hoặc Tên người dùng</label>
              <div class="input-wrapper">
                <div class="input-icon">
                  <span class="material-symbols-outlined icon">person</span>
                </div>
                <input
                  v-model="email"
                  class="form-input"
                  name="email"
                  placeholder="Nhập email hoặc tên của bạn"
                  type="text"
                  autocomplete="off"
                  required
                />
              </div>
            </div>

            <!-- Password Field -->
            <div class="form-field">
              <label class="form-label" for="password">Mật khẩu</label>
              <div class="input-wrapper">
                <div class="input-icon">
                  <span class="material-symbols-outlined icon">lock</span>
                </div>
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  class="form-input password-input"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                />
                <div 
                  @click="showPassword = !showPassword"
                  class="password-toggle"
                >
                  <span class="material-symbols-outlined toggle-icon">
                    {{ showPassword ? 'visibility' : 'visibility_off' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="form-options">
              <div class="remember-me">
                <input
                  v-model="rememberMe"
                  class="checkbox"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <label class="checkbox-label" for="remember-me">Ghi nhớ tôi</label>
              </div>
              <div class="forgot-password">
                <a 
                  @click.prevent="handleForgotPassword"
                  class="forgot-link"
                  href="#"
                >
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="submit-wrapper">
              <button
                :disabled="isLoading"
                class="submit-button"
                type="submit"
              >
                <span v-if="!isLoading">Đăng nhập</span>
                <span v-else>Đang xử lý...</span>
                <span v-if="!isLoading" class="submit-icon">
                  <span class="material-symbols-outlined">login</span>
                </span>
              </button>
            </div>
          </form>

          <!-- Divider -->
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">
              <span class="divider-span">Hoặc tiếp tục với</span>
            </div>
          </div>

          <!-- Social Login Buttons -->
          <div class="social-buttons">
            <button
              @click="handleSocialLogin('google')"
              class="social-button"
            >
              <img alt="Google" class="social-icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd6v_EI9RQ3H-WFXr-pSncl7yEYS26cG9xTb3AioQXI85GUxnMxo99phms2qLQFrhWp9rZB9GOp4lPiSHH025OmIf2-18-ALLgb1hr33t0J_YqjILOgYLCC4yBLaVuHjEtHRjea4fs6lVMB9PqvM1XLecGLMAb2GOPX1dqF-gDSjEOUlsAt4rM3AZidOHeya5FaX5zhDhKlYySFH0nnfpkzXL9uGuBNIjQSH1u_Zah--Q3m-fXP8UAY0tpRNuMqKDruVVZc28POCGf"/>
            </button>
            <button
              @click="handleSocialLogin('apple')"
              class="social-button"
            >
              <svg class="social-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.71.72.08 2.68.44 3.4 1.48-2.92 1.78-2.42 5.9 1.03 7.14-.65 1.8-1.54 3.32-3.2 4.32zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
              </svg>
            </button>
            <button
              @click="handleSocialLogin('facebook')"
              class="social-button"
            >
              <img alt="Facebook" class="social-icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADOC2_uWe8m7umN7EKdbcHiT6y_z0ZEleJrLFWi9xD81mfJx3LbSDLcDG5qn1CLvohn8jfyPNkJhRxcOW-zuqLTNshaqS7LfYNtydIk0BrdDdmm2ufIwGcvj9sIHmauN4ZF_G6awCXeYdClyUJo04_xx6WdKVG6R_tTkRPuhr20ckHNxlZUlxpXJlShVy7t7__R0K_y3UgOOL3WGDX4R9_J03Px3pD5ndoNFEn26ywl5HxhJXYWqY0I1Uylo3VBM5pBu2_Odq4eoPu"/>
            </button>
          </div>

          <!-- Register Link -->
          <p class="register-text">
            Chưa có tài khoản? 
            <a 
              @click.prevent="goToRegister"
              class="register-link"
              href="#"
            >
              Đăng ký ngay
            </a>
          </p>
        </main>
      </div>

      <!-- Right Side - Image Background -->
      <div class="right-panel">
        <img 
          alt="Abstract Background" 
          class="background-image" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDohy5To6YpHSmvZFx_wKT2H5cBjqZ3LVlXTEbsmosulpRDBNw8QWiLswbYOM4UdMoccBJqE3EweYjzMls-JlG7rQrQkeRKd28OEi1UtiXxcz5KDCPy0EklpLQMa1SAAh0nSlKaUL1QtYp0In5B4vAZg92oFITptVtSIPe2swEEsgEY7A875FIu1vpdwBiBecuvOvwnp7IKMPY_PCi1mLxO_JrdPSRbA62RZatPpImPbehN8SGjYgf56tM5zcC9Ov8isc3qYNbOnyRa"
        />
        <div class="overlay-gradient"></div>
        <div class="overlay-primary"></div>
        <div class="content-overlay">
          <div class="badge">
            <span class="badge-dot"></span>
            <span class="badge-text">Cộng đồng trực tuyến</span>
          </div>
          <h2 class="overlay-title">
            Kết nối đam mê,<br/>chia sẻ khoảnh khắc.
          </h2>
          <p class="overlay-description">
            Trải nghiệm mạng xã hội đẳng cấp với giao diện tối ưu, kết nối bạn bè và khám phá những điều tuyệt vời nhất từ cộng đồng.
          </p>
          <div class="overlay-footer">
            <div class="avatar-group">
              <img alt="" class="avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGc0tDt5ctlk-bOscGsChkWpjFHxkffW0FqpO78SyaOpI4OyqcVxHT3Bwz292aWred30D_RxSRQJ3wWfBQKAAiK9rG7B_S8CfX9nKPwOtl149UrrCRGjb1_RZQ_fiU53avqTHFlo4i-zT_M7J0LcXsaVb4YXSb4z3WoNxW_82UB13Jlklv1SWqa5NZKkWxR_Wpxcc8ZBuDFijp24nPgaLYOwcSYimxb_xNCMNKz-CNcPvtdtBzoTORi5To43Eg7KJNAhubSTVZMkQC"/>
              <img alt="" class="avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0JmXLz8qHtYUps8DsnkVWdoYW30DS9_q41Fumz7ZugmJUasUGFjxNCWNYIpJ1bSzvAxj2y01kkRwrArM6v9GX6-tw2gN1HagWwwNRN1a9d_gO5xnfBTenbo_V1m29I9JrSO8jf4X0JvGPFNCGduhV_Xv6ZXjttY__qvvK6-0LsRrZwywg_tFP3X1Qrn7LrFHtJy7aPBKwLO1kanWfLCCJG1F3l_fRPqNFvNGu3cK0BSKi1DrNeSFgKnxd5u-O9ZFy7LekunZU4g93"/>
              <img alt="" class="avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYgrb_mIAMpFNfr4WgzRiAs28B3gX_M2ppo3_qyb_iNjrU6tezUV7NN1KeuFwLx0ONlH6930GJlvUNKxOgFiFuUN2tDl2oPAc-uPrWxdbXYBJ-7XQG-Hs0X3CJcmcAUnsHBNBMldw--3ajNzYupgThB18yCc0Iu00vkRVI-p27hlOj-2sUGVlF0KoexDn-bhcQyxBqa0TBD0VuI0Wd2Hh8Eyokvoj5__atoci2Bdx9nmVXrI6OyjHAniMu1KKTs4XEQu9M6IhJ1Gd5"/>
            </div>
            <div class="rating">
              <div class="rating-stars">
                <span class="material-symbols-outlined star-icon">star</span>
                <span class="rating-value">4.9/5</span>
              </div>
              <span class="rating-text">Đánh giá từ người dùng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import Logo from 'shared_core/Logo'

const emit = defineEmits<{
  (e: 'navigate-to-register'): void
}>()

const router = useRouter()
const isLoading = ref(false)
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

// Dark mode detection
onMounted(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  }
})

// Methods
const goToRegister = () => {
  emit('navigate-to-register')
  if (router) {
    router.push('/register')
  }
}

const handleFormSubmit = async () => {
  if (!email.value || !password.value) {
    return
  }

  await handleSubmit({ email: email.value, password: password.value })
}

const handleSubmit = async (data: { email: string; password: string }) => {
  isLoading.value = true

  try {
    const authStore = useAuthStore()
    const result = await authStore.login(data.email, data.password)

    // Emit success event để host app biết
    window.dispatchEvent(new CustomEvent('mf:auth-success', {
      detail: {
        email: result.email,
        token: result.token,
        userId: result.userId
      }
    }))

    // Redirect sau khi đăng nhập thành công
    // if (window.location.pathname === '/login') {
    //   router.push('/')
    // }
  } catch (error) {
    console.error('Login failed:', error)
    alert('Đăng nhập thất bại. Vui lòng thử lại.')
  } finally {
    isLoading.value = false
  }
}

const handleForgotPassword = () => {
  console.log('Forgot password clicked')
  alert('Chức năng quên mật khẩu sẽ được triển khai')
}

const handleSocialLogin = (provider: 'google' | 'apple' | 'facebook') => {
  console.log('Social login:', provider)
  alert(`Đăng nhập với ${provider} sẽ được triển khai`)
}
</script>

<style scoped>
.login-view {
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

.login-view > div {
  display: flex;
  height: 100vh;
  width: 100%;
}

/* Left Panel */
.left-panel {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F3F4F6;
  position: relative;
  overflow-y: auto;
  z-index: 10;
  transition: background-color 0.3s;
}

.dark .left-panel {
  background-color: #0B0F19;
}

.left-panel::-webkit-scrollbar {
  display: none;
}

.left-panel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (min-width: 1024px) {
  .left-panel {
    width: 50%;
  }
}

@media (min-width: 1280px) {
  .left-panel {
    width: 41.666667%;
  }
}

/* Logo Container */
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 1rem;
}


/* Main Content */
.main-content {
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
  padding: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
}

@media (min-width: 640px) {
  .main-content {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .main-content {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

/* Headline */
.headline {
  text-align: center;
  margin-bottom: 2.5rem;
}

.headline-title {
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: rgb(17, 24, 39);
  margin-bottom: 0.75rem;
  margin-top: 0;
  line-height: 1.2;
}

@media (min-width: 640px) {
  .headline-title {
    font-size: 2.25rem;
  }
}

.dark .headline-title {
  color: white;
}

.headline-subtitle {
  font-size: 0.875rem;
  color: rgb(107, 114, 128);
  margin: 0;
}

.dark .headline-subtitle {
  color: rgb(156, 163, 175);
}

/* Form */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(55, 65, 81);
  margin-left: 0.25rem;
}

.dark .form-label {
  color: rgb(209, 213, 219);
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.icon {
  color: rgb(156, 163, 175);
  font-size: 20px;
  transition: color 0.3s;
}

.input-wrapper:focus-within .icon {
  color: #2563eb;
}

.form-input {
  display: block;
  width: 100%;
  padding-left: 2.75rem;
  padding-right: 0.75rem;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  border: none;
  border-radius: 0.75rem;
  background-color: white;
  color: rgb(17, 24, 39);
  font-size: 1rem;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.dark .form-input {
  background-color: #151b2b;
  color: white;
}

.form-input::placeholder {
  color: rgb(156, 163, 175);
}

.dark .form-input::placeholder {
  color: rgb(107, 114, 128);
}

.form-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
}

.password-input {
  padding-right: 2.5rem;
}

.password-toggle {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgb(156, 163, 175);
  transition: color 0.3s;
}

.password-toggle:hover {
  color: rgb(75, 85, 99);
}

.dark .password-toggle:hover {
  color: rgb(209, 213, 219);
}

.toggle-icon {
  font-size: 20px;
}

/* Form Options */
.form-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remember-me {
  display: flex;
  align-items: center;
}

.checkbox {
  height: 1rem;
  width: 1rem;
  border-radius: 0.25rem;
  border: 1px solid rgb(209, 213, 219);
  color: #2563eb;
  cursor: pointer;
  background-color: white;
}

.dark .checkbox {
  background-color: #151b2b;
  border-color: rgb(75, 85, 99);
}

.checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
}

.checkbox-label {
  margin-left: 0.5rem;
  display: block;
  font-size: 0.875rem;
  color: rgb(75, 85, 99);
  cursor: pointer;
  user-select: none;
}

.dark .checkbox-label {
  color: rgb(156, 163, 175);
}

.forgot-password {
  font-size: 0.875rem;
}

.forgot-link {
  font-weight: 500;
  color: #2563eb;
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;
}

.forgot-link:hover {
  color: rgb(59, 130, 246);
}

/* Submit Button */
.submit-wrapper {
  padding-top: 0.5rem;
}

.submit-button {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.75rem;
  color: white;
  background-color: #2563eb;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
}

.submit-button:hover:not(:disabled) {
  background-color: rgb(37, 99, 235);
}

.submit-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5), 0 0 20px rgba(37, 99, 235, 0.4);
}

.submit-button:active:not(:disabled) {
  transform: scale(0.98);
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-icon {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
}

.submit-button:hover .submit-icon span {
  transform: translateX(0.25rem);
}

.submit-icon span {
  transition: transform 0.3s;
}

/* Divider */
.divider {
  position: relative;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.divider-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
}

.divider-line::before {
  content: '';
  width: 100%;
  border-top: 1px solid rgb(209, 213, 219);
}

.dark .divider-line::before {
  border-color: rgb(55, 65, 81);
}

.divider-text {
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
}

.divider-span {
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #F3F4F6;
  color: rgb(107, 114, 128);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.dark .divider-span {
  background-color: #0B0F19;
  color: rgb(156, 163, 175);
}

/* Social Buttons */
.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
}

.social-button {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background-color: white;
  border: 1px solid rgb(229, 231, 235);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.dark .social-button {
  background-color: #151b2b;
  border-color: rgb(55, 65, 81);
}

.social-button:hover {
  background-color: rgb(249, 250, 251);
  transform: translateY(-0.25rem);
}

.dark .social-button:hover {
  background-color: rgb(31, 41, 55);
}

.social-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.social-icon-svg {
  width: 1.25rem;
  height: 1.25rem;
  color: black;
}

.dark .social-icon-svg {
  color: white;
}

/* Register Link */
.register-text {
  text-align: center;
  font-size: 0.75rem;
  color: rgb(107, 114, 128);
  margin-top: 2rem;
  margin-bottom: 0;
}

.dark .register-text {
  color: rgb(156, 163, 175);
}

.register-link {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;
}

.register-link:hover {
  color: rgb(59, 130, 246);
}

/* Right Panel */
.right-panel {
  display: none;
  position: relative;
  background-color: rgb(17, 24, 39);
  overflow: hidden;
  height: 100vh;
}

@media (min-width: 1024px) {
  .right-panel {
    display: block;
    width: 50%;
    flex-shrink: 0;
  }
}

@media (min-width: 1280px) {
  .right-panel {
    width: 58.333333%;
  }
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s;
  z-index: 1;
}

.right-panel:hover .background-image {
  transform: scale(1.05);
}

.overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, black, rgba(0, 0, 0, 0.5), transparent);
  opacity: 0.9;
  z-index: 2;
}

.overlay-primary {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(37, 99, 235, 0.2);
  mix-blend-mode: overlay;
  z-index: 3;
}

.content-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 4rem;
  width: 100%;
  max-width: 48rem;
  z-index: 20;
}

.badge {
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
}

.badge-dot {
  display: flex;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 9999px;
  background-color: rgb(74, 222, 128);
  margin-right: 0.5rem;
}

.badge-text {
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  letter-spacing: 0.025em;
}

.overlay-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.25;
  text-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1);
}

@media (min-width: 1280px) {
  .overlay-title {
    font-size: 3rem;
  }
}

.overlay-description {
  color: rgb(209, 213, 219);
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 36rem;
  line-height: 1.75;
}

.overlay-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar-group {
  display: flex;
  margin-left: -1rem;
}

.avatar {
  display: inline-block;
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  border: 2px solid black;
  object-fit: cover;
}

.rating {
  display: flex;
  flex-direction: column;
}

.rating-stars {
  display: flex;
  align-items: center;
}

.star-icon {
  color: rgb(250, 204, 21);
  font-size: 0.875rem;
  margin-right: 0.25rem;
}

.rating-value {
  color: white;
  font-weight: 700;
}

.rating-text {
  color: rgb(156, 163, 175);
  font-size: 0.875rem;
}
</style>

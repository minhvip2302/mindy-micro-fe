<template>
  <div class="register-form">
    <div class="form-header">
      <h2 class="form-title">Tạo tài khoản mới</h2>
      <p class="form-subtitle">Nhập thông tin chi tiết của bạn để đăng ký</p>
    </div>

    <form @submit.prevent="handleSubmit" class="form-content">
      <!-- First Name and Last Name Row -->
      <div class="form-row">
        <div class="form-col">
          <label class="field-label">Tên</label>
          <ValidationBalloon
            :validations="registerValidationRules.firstName"
            :target-data="firstName"
            :trigger-event="firstNameEvent"
            :locations="['firstName']"
            position="left"
            width="max-content"
          >
            <div class="input-wrapper group">
              <div class="input-icon">
                <span class="material-symbols-outlined">person</span>
              </div>
              <input
                v-model="firstName"
                type="text"
                placeholder="Minh"
                class="form-input"
                @blur="firstNameEvent = 'blur'"
                @input="firstNameEvent = 'input'"
              />
            </div>
          </ValidationBalloon>
        </div>

        <div class="form-col">
          <label class="field-label">Họ</label>
          <ValidationBalloon
            :validations="registerValidationRules.lastName"
            :target-data="lastName"
            :trigger-event="lastNameEvent"
            :locations="['lastName']"
          >
            <div class="input-wrapper group">
              <div class="input-icon">
                <span class="material-symbols-outlined">person</span>
              </div>
              <input
                v-model="lastName"
                type="text"
                placeholder="Nguyen"
                class="form-input"
                @blur="lastNameEvent = 'blur'"
                @input="lastNameEvent = 'input'"
              />
            </div>
          </ValidationBalloon>
        </div>
      </div>

      <!-- Email Field -->
      <div class="field-group">
        <label class="field-label">Email</label>
        <ValidationBalloon
          :validations="registerValidationRules.email"
          :target-data="email"
          :trigger-event="emailEvent"
          :locations="['email']"
          position="left"
          width="max-content"
        >
          <div class="input-wrapper group">
            <div class="input-icon">
              <span class="material-symbols-outlined">mail</span>
            </div>
            <input
              v-model="email"
              type="text"
              placeholder="example@email.com"
              class="form-input"
              @blur="emailEvent = 'blur'"
              @input="emailEvent = 'input'"
            />
          </div>
        </ValidationBalloon>
      </div>

      <!-- Password and Confirm Password Row -->
      <div class="form-row">
        <div class="form-col">
          <label class="field-label" for="password">Mật khẩu</label>
          <ValidationBalloon
            :validations="registerValidationRules.password"
            :target-data="password"
            :trigger-event="passwordEvent"
            :locations="['password']"
            position="left"
            width="max-content"
          >
            <div class="input-wrapper group">
              <div class="input-icon">
                <span class="material-symbols-outlined">lock</span>
              </div>
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="form-input"
                @blur="passwordEvent = 'blur'"
                @input="passwordEvent = 'input'"
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="password-toggle"
              >
                <span class="material-symbols-outlined">
                  {{ showPassword ? 'visibility' : 'visibility_off' }}
                </span>
              </button>
            </div>
          </ValidationBalloon>
        </div>

        <div class="form-col">
          <label class="field-label" for="confirmPassword">Xác nhận</label>
          <ValidationBalloon
            :validations="registerValidationRules.confirmPassword"
            :target-data="confirmPassword"
            :state="{ password }"
            :trigger-event="confirmPasswordEvent"
            :locations="['confirmPassword']"
          >
            <div class="input-wrapper group">
              <div class="input-icon">
                <span class="material-symbols-outlined">lock_reset</span>
              </div>
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="form-input"
                @blur="confirmPasswordEvent = 'blur'"
                @input="confirmPasswordEvent = 'input'"
              />
              <button
                type="button"
                @click="toggleConfirmPasswordVisibility"
                class="password-toggle"
              >
                <span class="material-symbols-outlined">
                  {{ showConfirmPassword ? 'visibility' : 'visibility_off' }}
                </span>
              </button>
            </div>
          </ValidationBalloon>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="submit-wrapper">
        <button
          type="submit"
          class="submit-button"
          :disabled="isLoading"
        >
          {{ isLoading ? 'Đang đăng ký...' : 'Đăng ký tài khoản' }}
        </button>
      </div>
    </form>

    <!-- Link to Login -->
    <div class="login-link-section">
      <p class="login-link-text">
        Đã có tài khoản?
        <a class="login-link" href="#" @click.prevent="$emit('go-to-login')">Đăng nhập</a>
      </p>
    </div>

    <!-- Social Login -->
    <div class="register-social-section">
      <div class="social-divider">
        <div class="divider-line"></div>
        <span class="divider-text">Hoặc đăng ký với</span>
      </div>
      <div class="social-buttons-grid">
        <button
          class="social-button-grid"
          @click="$emit('social-login', 'google')"
        >
          <img
            alt="Google"
            class="social-icon-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd6v_EI9RQ3H-WFXr-pSncl7yEYS26cG9xTb3AioQXI85GUxnMxo99phms2qLQFrhWp9rZB9GOp4lPiSHH025OmIf2-18-ALLgb1hr33t0J_YqjILOgYLCC4yBLaVuHjEtHRjea4fs6lVMB9PqvM1XLecGLMAb2GOPX1dqF-gDSjEOUlsAt4rM3AZidOHeya5FaX5zhDhKlYySFH0nnfpkzXL9uGuBNIjQSH1u_Zah--Q3m-fXP8UAY0tpRNuMqKDruVVZc28POCGf"
          />
        </button>
        <button
          class="social-button-grid"
          @click="$emit('social-login', 'apple')"
        >
          <svg class="social-icon-svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.71.72.08 2.68.44 3.4 1.48-2.92 1.78-2.42 5.9 1.03 7.14-.65 1.8-1.54 3.32-3.2 4.32zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
          </svg>
        </button>
        <button
          class="social-button-grid"
          @click="$emit('social-login', 'facebook')"
        >
          <img
            alt="Facebook"
            class="social-icon-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuADOC2_uWe8m7umN7EKdbcHiT6y_z0ZEleJrLFWi9xD81mfJx3LbSDLcDG5qn1CLvohn8jfyPNkJhRxcOW-zuqLTNshaqS7LfYNtydIk0BrdDdmm2ufIwGcvj9sIHmauN4ZF_G6awCXeYdClyUJo04_xx6WdKVG6R_tTkRPuhr20ckHNxlZUlxpXJlShVy7t7__R0K_y3UgOOL3WGDX4R9_J03Px3pD5ndoNFEn26ywl5HxhJXYWqY0I1Uylo3VBM5pBu2_Odq4eoPu"
          />
        </button>
      </div>
    </div>

    <!-- Terms and Privacy -->
    <p class="register-terms">
      Bằng việc tiếp tục, bạn đồng ý với
      <a class="terms-link" href="#" @click.prevent="$emit('terms-click')">Điều khoản dịch vụ</a>
      và
      <br class="hidden sm:block" />
      <a class="terms-link" href="#" @click.prevent="$emit('privacy-click')">Chính sách bảo mật</a>
      của chúng tôi.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ValidationBalloon from './ValidationBalloon.vue'
import { registerValidationRules, useValidation } from '../composables/useValidation'

const props = defineProps<{
  isLoading?: boolean
}>()

const emit = defineEmits<{
  submit: [data: { firstName: string; lastName: string; email: string; password: string }]
  'go-to-login': []
  'social-login': [provider: 'google' | 'apple' | 'facebook']
  'terms-click': []
  'privacy-click': []
}>()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Track events cho từng field
const firstNameEvent = ref<string>('')
const lastNameEvent = ref<string>('')
const emailEvent = ref<string>('')
const passwordEvent = ref<string>('')
const confirmPasswordEvent = ref<string>('')

const { validateAll } = useValidation(registerValidationRules)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

const handleSubmit = () => {
  // Trigger validation cho tất cả fields khi submit
  firstNameEvent.value = 'blur'
  lastNameEvent.value = 'blur'
  emailEvent.value = 'blur'
  passwordEvent.value = 'blur'
  confirmPasswordEvent.value = 'blur'
  
  const state = { password: password.value }
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  }

  const isValid = validateAll(data, state)

  if (isValid) {
    emit('submit', {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      email: email.value.trim(),
      password: password.value
    })
  }
}
</script>

<style scoped>
.register-form {
  background: white;
  border-radius: 2.5rem;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  border: 1px solid rgb(229, 231, 235);
  min-height: 650px; /* Dự trữ không gian cho error messages */
  transition: min-height 0.3s ease; /* Làm mượt khi thay đổi */
}

.dark .register-form {
  background: rgb(21, 27, 43);
  border-color: rgb(31, 41, 55);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  .form-header {
    text-align: left;
  }
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(17, 24, 39);
  margin: 0 0 0.5rem 0;
}

.dark .form-title {
  color: white;
}

.form-subtitle {
  font-size: 0.875rem;
  color: rgb(107, 114, 128);
  margin: 0;
}

.dark .form-subtitle {
  color: rgb(156, 163, 175);
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgb(55, 65, 81);
  margin-left: 0.25rem;
}

.dark .field-label {
  color: rgb(209, 213, 219);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper.group:focus-within .input-icon .material-symbols-outlined {
  color: rgb(37, 99, 235);
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
  z-index: 1;
}

.input-icon .material-symbols-outlined {
  color: rgb(156, 163, 175);
  font-size: 1.25rem;
  transition: color 0.2s;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  padding-left: 2.75rem;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 0.75rem;
  background: rgb(249, 250, 251);
  color: rgb(17, 24, 39);
  font-size: 1rem;
  transition: all 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: rgb(37, 99, 235);
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  background: white;
}

.form-input::placeholder {
  color: rgb(156, 163, 175);
}

.dark .form-input {
  border-color: rgb(55, 65, 81);
  background: rgb(11, 15, 25);
  color: white;
}

.dark .form-input:focus {
  background: rgb(21, 27, 43);
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.form-input.error {
  border-color: rgb(239, 68, 68);
}

.form-input.error:focus {
  border-color: rgb(239, 68, 68);
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1);
}

.age-input {
  padding-left: 1rem;
  text-align: center;
}

.password-toggle {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-right: 0.75rem;
  display: flex;
  align-items: center;
  color: rgb(156, 163, 175);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}

.password-toggle:hover {
  color: rgb(107, 114, 128);
}

.dark .password-toggle {
  color: rgb(156, 163, 175);
}

.dark .password-toggle:hover {
  color: rgb(209, 213, 219);
}

.password-toggle .material-symbols-outlined {
  font-size: 1.25rem;
}

.error-message {
  color: rgb(239, 68, 68);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  padding-left: 0.25rem;
}

.submit-wrapper {
  padding-top: 1.5rem;
}

.submit-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  background: rgb(37, 99, 235);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2);
  transition: all 0.3s;
  transform: scale(1);
  cursor: pointer;
}

.submit-button:hover:not(:disabled) {
  background: rgb(37, 99, 235);
  transform: scale(1.02);
}

.submit-button:focus:not(:disabled) {
  outline: none;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
}

.submit-button:disabled {
  background: rgb(156, 163, 175);
  cursor: not-allowed;
  box-shadow: none;
  transform: scale(1);
}

/* Login Link Section */
.login-link-section {
  margin-top: 1rem;
  text-align: center;
}

.login-link-text {
  font-size: 0.875rem;
  color: rgb(107, 114, 128);
  margin: 0;
}

.dark .login-link-text {
  color: rgb(156, 163, 175);
}

.login-link {
  font-weight: 600;
  color: rgb(37, 99, 235);
  text-decoration: none;
  margin-left: 0.25rem;
  transition: color 0.2s;
}

.login-link:hover {
  color: rgb(37, 99, 235);
  text-decoration: underline;
}

/* Social Login Section */
.register-social-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.social-divider {
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
  border-top: 1px solid rgb(229, 231, 235);
}

.dark .divider-line::before {
  border-color: rgb(55, 65, 81);
}

.divider-text {
  position: relative;
  background: white;
  padding: 0 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgb(107, 114, 128);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dark .divider-text {
  background: rgb(21, 27, 43);
  color: rgb(156, 163, 175);
}

.social-buttons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.social-button-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 0.75rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.social-button-grid:hover {
  background: rgb(249, 250, 251);
  border-color: rgb(203, 213, 225);
}

.dark .social-button-grid {
  background: rgb(11, 15, 25);
  border-color: rgb(55, 65, 81);
}

.dark .social-button-grid:hover {
  background: rgb(31, 41, 55);
  border-color: rgb(107, 114, 128);
}

.social-icon-img {
  width: 1.25rem;
  height: 1.25rem;
}

.social-icon-svg {
  width: 1.25rem;
  height: 1.25rem;
  color: rgb(17, 24, 39);
}

.dark .social-icon-svg {
  color: white;
}

/* Terms and Privacy */
.register-terms {
  text-align: center;
  font-size: 0.75rem;
  color: rgb(107, 114, 128);
  line-height: 1.75;
  margin: 2rem 0 0 0;
}

.dark .register-terms {
  color: rgb(156, 163, 175);
}

.terms-link {
  font-weight: 500;
  color: rgb(37, 99, 235);
  text-decoration: none;
  transition: color 0.2s;
}

.terms-link:hover {
  color: rgb(37, 99, 235);
  text-decoration: underline;
}

@media (max-width: 640px) {
  .register-form {
    padding: 1.5rem;
    border-radius: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>


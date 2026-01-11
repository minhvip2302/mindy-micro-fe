<template>
  <div class="auth-form">
    <!-- Email Field -->
    <div class="field-group">
      <label class="field-label">Email hoặc tên người dùng</label>
      <div class="input-wrapper">
        <div class="input-icon">
          <span class="material-symbols-outlined">mail</span>
        </div>
        <input
          v-model="email"
          type="text"
          placeholder="example@email.com"
          class="form-input"
          :class="{ error: emailError }"
          @blur="validateEmail"
        />
      </div>
      <div v-if="emailError" class="error-message">{{ emailError }}</div>
    </div>

    <!-- Password Field -->
    <div class="field-group">
      <div class="field-label-row">
        <label class="field-label">Mật khẩu</label>
        <a 
          v-if="showForgotPassword"
          href="#" 
          @click.prevent="handleForgotPassword" 
          class="forgot-link"
        >
          Quên mật khẩu?
        </a>
      </div>
      <div class="input-wrapper">
        <div class="input-icon">
          <span class="material-symbols-outlined">lock</span>
        </div>
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="••••••••"
          class="form-input"
          :class="{ error: passwordError }"
          @blur="validatePassword"
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
      <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
    </div>

    <!-- Action Button -->
    <div class="action-button-wrapper">
      <button
        @click="handleSubmit"
        class="action-button"
        :disabled="isLoading"
        type="button"
      >
        <span>{{ buttonText }}</span>
        <span class="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  mode?: 'login' | 'register'
  isLoading?: boolean
  showForgotPassword?: boolean
}>()

const emit = defineEmits<{
  submit: [data: { email: string; password: string }]
  forgotPassword: []
}>()

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')
const showPassword = ref(false)

const buttonText = computed(() => {
  if (props.isLoading) {
    return props.mode === 'register' ? 'Đang đăng ký...' : 'Đang đăng nhập...'
  }
  return props.mode === 'register' ? 'Đăng ký ngay' : 'Đăng nhập ngay'
})

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const validateEmail = () => {
  emailError.value = ''
  if (!email.value.trim()) {
    emailError.value = 'Email hoặc tên người dùng là bắt buộc'
    return false
  }
  if (!isValidEmail(email.value) && !isValidPhone(email.value) && !isValidUsername(email.value)) {
    emailError.value = 'Vui lòng nhập email, số điện thoại hoặc tên người dùng hợp lệ'
    return false
  }
  return true
}

const validatePassword = () => {
  passwordError.value = ''
  if (!password.value.trim()) {
    passwordError.value = 'Mật khẩu là bắt buộc'
    return false
  }
  if (password.value.length < 6) {
    passwordError.value = 'Mật khẩu phải có ít nhất 6 ký tự'
    return false
  }
  return true
}

const isValidEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

const isValidPhone = (value: string) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(value.replace(/\s/g, ''))
}

const isValidUsername = (value: string) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
  return usernameRegex.test(value)
}

const handleSubmit = () => {
  const isEmailValid = validateEmail()
  const isPasswordValid = validatePassword()

  if (isEmailValid && isPasswordValid) {
    emit('submit', {
      email: email.value.trim(),
      password: password.value
    })
  }
}

const handleForgotPassword = () => {
  emit('forgotPassword')
}
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(51, 65, 85);
  margin-left: 0.25rem;
}

.dark .field-label {
  color: rgb(226, 232, 240);
}

.field-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.25rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  inset-y: 0;
  left: 0;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
}

.input-icon .material-symbols-outlined {
  color: rgb(148, 163, 184);
  font-size: 1.25rem;
}

.dark .input-icon .material-symbols-outlined {
  color: rgb(144, 164, 203);
}

.form-input {
  width: 100%;
  height: 3.5rem;
  padding-left: 3rem;
  padding-right: 1rem;
  border-radius: 9999px;
  border: 1px solid rgb(226, 232, 240);
  background: white;
  color: rgb(15, 23, 42);
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: rgb(37, 106, 244);
  box-shadow: 0 0 0 3px rgba(37, 106, 244, 0.1);
}

.form-input::placeholder {
  color: rgb(148, 163, 184);
}

.dark .form-input {
  border-color: rgb(49, 67, 104);
  background: rgb(24, 34, 52);
  color: white;
}

.dark .form-input::placeholder {
  color: rgb(144, 164, 203);
}

.dark .form-input:focus {
  border-color: rgb(37, 106, 244);
  box-shadow: 0 0 0 3px rgba(37, 106, 244, 0.2);
}

.form-input.error {
  border-color: rgb(239, 68, 68);
}

.form-input.error:focus {
  border-color: rgb(239, 68, 68);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.password-toggle {
  position: absolute;
  inset-y: 0;
  right: 0;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  color: rgb(148, 163, 184);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}

.password-toggle:hover {
  color: rgb(100, 116, 139);
}

.dark .password-toggle {
  color: rgb(144, 164, 203);
}

.dark .password-toggle:hover {
  color: white;
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

.forgot-link {
  font-size: 0.75rem;
  font-weight: 700;
  color: rgb(37, 106, 244);
  text-decoration: none;
  transition: color 0.2s;
}

.forgot-link:hover {
  color: rgb(59, 130, 246);
  text-decoration: underline;
}

.action-button-wrapper {
  margin-top: 2rem;
}

.action-button {
  width: 100%;
  background: rgb(37, 106, 244);
  color: white;
  font-weight: 700;
  height: 3.5rem;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(37, 106, 244, 0.3), 0 4px 6px -2px rgba(37, 106, 244, 0.2);
  transition: all 0.2s;
  transform: scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.action-button:hover:not(:disabled) {
  background: rgb(37, 99, 235);
}

.action-button:active:not(:disabled) {
  transform: scale(0.98);
}

.action-button:disabled {
  background: rgb(148, 163, 184);
  cursor: not-allowed;
  box-shadow: none;
}

.action-button .material-symbols-outlined {
  font-size: 1.125rem;
}
</style>


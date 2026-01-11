<template>
  <div class="login-form">
    <!-- Input Fields -->
    <div class="input-group">
      <input
        v-model="email"
        type="text"
        placeholder="Email address or phone number"
        class="input-field"
        :class="{ 'error': emailError }"
      />
      <div v-if="emailError" class="error-message">{{ emailError }}</div>
    </div>

    <div class="input-group">
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="input-field"
        :class="{ 'error': passwordError }"
      />
      <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
    </div>

    <!-- Log In Button -->
    <button 
      @click="handleLogin" 
      class="login-btn"
      :disabled="isLoading"
    >
      {{ isLoading ? 'Logging in...' : 'Log in' }}
    </button>

    <!-- Forgotten Password Link -->
    <div class="forgot-password">
      <a href="#" @click.prevent="handleForgotPassword" class="forgot-link">
        Forgotten password?
      </a>
    </div>

    <!-- Separator -->
    <div class="separator"></div>

    <!-- Create New Account Button -->
    <button @click="handleCreateAccount" class="create-account-btn">
      Create new account
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Props
const props = defineProps<{
  isLoading?: boolean
}>()

// Emits
const emit = defineEmits<{
  login: [data: { email: string; password: string }]
  forgotPassword: []
  createAccount: []
}>()

// Reactive data
const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')

// Methods
const validateForm = () => {
  emailError.value = ''
  passwordError.value = ''
  
  let isValid = true

  if (!email.value.trim()) {
    emailError.value = 'Email or phone number is required'
    isValid = false
  } else if (!isValidEmail(email.value) && !isValidPhone(email.value)) {
    emailError.value = 'Please enter a valid email or phone number'
    isValid = false
  }

  if (!password.value.trim()) {
    passwordError.value = 'Password is required'
    isValid = false
  } else if (password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters'
    isValid = false
  }

  return isValid
}

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isValidPhone = (phone: string) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

const handleLogin = () => {
  if (validateForm()) {
    emit('login', {
      email: email.value.trim(),
      password: password.value
    })
  }
}

const handleForgotPassword = () => {
  emit('forgotPassword')
}

const handleCreateAccount = () => {
  emit('createAccount')
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-field {
  padding: 0.875rem 1rem;
  border: 1px solid #dddfe2;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s;
}

.input-field:focus {
  outline: none;
  border-color: #1877f2;
  box-shadow: 0 0 0 2px rgba(24, 119, 242, 0.2);
}

.input-field.error {
  border-color: #f02849;
}

.input-field::placeholder {
  color: #8a8d91;
}

.error-message {
  color: #f02849;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  padding-left: 0.25rem;
}

.login-btn {
  background: #1877f2;
  color: white;
  border: none;
  padding: 0.875rem 1rem;
  border-radius: 6px;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 0.5rem;
}

.login-btn:hover:not(:disabled) {
  background: #166fe5;
}

.login-btn:disabled {
  background: #8a8d91;
  cursor: not-allowed;
}

.forgot-password {
  text-align: center;
  margin: 0.5rem 0;
}

.forgot-link {
  color: #1877f2;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
}

.forgot-link:hover {
  text-decoration: underline;
}

.separator {
  height: 1px;
  background: #dadde1;
  margin: 1rem 0;
}

.create-account-btn {
  background: #42b72a;
  color: white;
  border: none;
  padding: 0.875rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin: 0 auto;
  width: fit-content;
  min-width: 200px;
}

.create-account-btn:hover {
  background: #36a420;
}

/* Responsive */
@media (max-width: 480px) {
  .input-field {
    font-size: 1rem; /* Prevent zoom on iOS */
  }
  
  .login-btn {
    font-size: 1.125rem;
  }
  
  .create-account-btn {
    font-size: 0.875rem;
    min-width: 180px;
  }
}
</style>

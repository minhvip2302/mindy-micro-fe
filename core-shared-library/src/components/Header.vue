<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo">
        <h1>SocialApp</h1>
      </div>
      
      <!-- Navigation -->
      <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/profile" class="nav-link">Profile</router-link>
        <router-link to="/messages" class="nav-link">Messages</router-link>
        <router-link to="/notifications" class="nav-link">Notifications</router-link>
      </nav>
      
      <!-- User Actions -->
      <div class="user-actions">
        <button v-if="!isLoggedIn" @click="goToLogin" class="btn-login">Login</button>
        <div v-else class="user-menu">
          <img :src="userAvatar" alt="User" class="user-avatar" />
          <span class="username">{{ username }}</span>
          <button @click="logout" class="btn-logout">Logout</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Props
const props = defineProps<{
  isLoggedIn?: boolean
  username?: string
  userAvatar?: string
}>()

// Emits
const emit = defineEmits<{
  login: []
  logout: []
}>()

// Methods
const goToLogin = () => {
  emit('login')
}

const logout = () => {
  emit('logout')
}
</script>

<style scoped>
.header {
  background: #1a1a1a;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.logo h1 {
  margin: 0;
  color: #4CAF50;
  font-size: 1.5rem;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: #333;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-login {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-login:hover {
  background: #45a049;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.username {
  font-weight: 500;
}

.btn-logout {
  background: #f44336;
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.btn-logout:hover {
  background: #da190b;
}
</style>

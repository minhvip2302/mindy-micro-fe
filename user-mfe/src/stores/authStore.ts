import { defineStore } from 'pinia'
import apiClient from 'shared_core/ApiClient'

interface AuthState {
  token: string | null
  userId: string | null
  userEmail: string | null
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: localStorage.getItem('authToken') || null,
    userId: localStorage.getItem('userId') || null,
    userEmail: localStorage.getItem('userEmail') || null,
    isAuthenticated: !!localStorage.getItem('authToken'),
  }),

  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    getUserInfo: (state) => ({
      userId: state.userId,
      email: state.userEmail,
    }),
  },

  actions: {
    // Set authentication data
    setAuth(token: string, userId: string, email?: string) {
      this.token = token
      this.userId = userId
      this.userEmail = email || null
      this.isAuthenticated = true

      // Save to localStorage
      localStorage.setItem('authToken', token)
      localStorage.setItem('userId', userId)
      if (email) {
        localStorage.setItem('userEmail', email)
      }
    },

    // Clear authentication data
    clearAuth() {
      this.token = null
      this.userId = null
      this.userEmail = null
      this.isAuthenticated = false

      // Remove from localStorage
      localStorage.removeItem('authToken')
      localStorage.removeItem('userId')
      localStorage.removeItem('userEmail')
    },

    // Login action (có thể gọi API ở đây)
    async login(email: string, password: string) {
      const response = await apiClient.post('/v1/users/login', {
        email,
        password,
      })

      if (response.data.error) {
        throw new Error(response.data.message || 'Đăng nhập thất bại')
      }
      
      const { token, user } = response.data.data
      const userId = user.id
      const userEmail = user.email

      this.setAuth(token, userId, email)
      return { 
        token, 
        userId, 
        email: userEmail 
      }
    },

    // Register action
    async register(email: string, password: string, firstName?: string, lastName?: string) {
      try {
        // API yêu cầu firstName và lastName là required
        if (!firstName || !lastName) {
          throw new Error('Tên và họ là bắt buộc')
        }

        const response = await apiClient.post('/v1/users/register', {
          email,
          password,
          firstName,
          lastName,
        })

        // Response format: { error: false, data: { token, user: { id, email, firstName, lastName, createdAt } } }
        if (response.data.error) {
          throw new Error(response.data.message || 'Đăng ký thất bại')
        }

        const { token, user } = response.data.data
        const userId = user.id
        const userEmail = user.email

        this.setAuth(token, userId, userEmail)
        return { 
          token, 
          userId, 
          email: userEmail, 
          firstName: user.firstName, 
          lastName: user.lastName 
        }
      } catch (error: any) {
        // Xử lý lỗi từ API
        const errorMessage = error.response?.data?.message || error.message || 'Đăng ký thất bại'
        throw new Error(errorMessage)
      }
    },
  },
})


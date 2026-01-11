import axios from 'axios'

// Tạo axios instance với baseURL từ environment variable
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api', // API Gateway base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
})

// Request interceptor: Tự động thêm Authorization header nếu có token
apiClient.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage để tránh circular dependency
    const token = localStorage.getItem('authToken')
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor: Xử lý lỗi chung
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Xử lý lỗi 401 (Unauthorized) - clear auth và dispatch event
    if (error.response?.status === 401) {
      // Clear localStorage
      localStorage.removeItem('authToken')
      localStorage.removeItem('userId')
      localStorage.removeItem('userEmail')
      
      // Dispatch event để notify các component khác
      window.dispatchEvent(new CustomEvent('mf:auth-required'))
    }
    
    return Promise.reject(error)
  }
)

export default apiClient
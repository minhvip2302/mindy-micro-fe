import { defineStore } from 'pinia';

// Định nghĩa kiểu dữ liệu (TypeScript)
interface AuthState {
  token: string | null;
  userId: string | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: localStorage.getItem('authToken') || null,
    userId: localStorage.getItem('userId') || null,
    isAuthenticated: !!localStorage.getItem('authToken'),
  }),
  actions: {
    // Action được gọi bởi Auth MFE sau khi đăng nhập thành công
    setAuth(token: string, userId: string) {
      this.token = token;
      this.userId = userId;
      this.isAuthenticated = true;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', userId);
    },
    // Action để đăng xuất
    clearAuth() {
      this.token = null;
      this.userId = null;
      this.isAuthenticated = false;
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
    }
  },
  getters: {
    // Getter để Host App hoặc MFE khác kiểm tra quyền
    isLoggedIn: (state) => state.isAuthenticated,
  }
});
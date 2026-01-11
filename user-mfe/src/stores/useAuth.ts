/**
 * Auth Store Helper
 * 
 * Helper để import AuthStore từ shared library hoặc local store
 * 
 * Usage:
 *   import { useAuthStore } from '../stores/useAuth'
 *   const authStore = useAuthStore()
 * 
 * Để dùng shared store từ core-shared-library:
 * 1. Uncomment dòng import shared_core
 * 2. Comment dòng import local store
 * 3. Đảm bảo Module Federation đã setup đúng
 */

// Option 1: Local store (hiện tại)
import { useAuthStore as useLocalAuthStore } from './authStore'
export const useAuthStore = useLocalAuthStore

// Option 2: Shared store từ core-shared-library (khi đã setup Module Federation)
// import { useAuthStore } from 'shared_core/AuthStore'
// export { useAuthStore }


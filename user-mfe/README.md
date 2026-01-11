# Auth MFE - Authentication Micro-Frontend

Micro-frontend xử lý authentication (đăng nhập/đăng ký) cho ứng dụng.

## Components

### AuthHeader
Top App Bar với nút back và title "Tài khoản"

### AuthTabs
Tab để chuyển đổi giữa "Đăng nhập" và "Đăng ký"

### AuthForm
Form với các trường:
- Email hoặc tên người dùng (có icon mail)
- Mật khẩu (có icon lock, toggle visibility)
- Button submit (thay đổi text theo mode)

### SocialLoginButtons
Các nút đăng nhập xã hội:
- Google
- Apple
- Facebook

### TermsAndPrivacy
Footer với link đến Điều khoản dịch vụ và Chính sách bảo mật

## Pinia Store

### Local Store (`src/stores/authStore.ts`)
Store quản lý authentication state:
- `token`: JWT token
- `userId`: User ID
- `userEmail`: Email người dùng
- `isAuthenticated`: Trạng thái đăng nhập

Actions:
- `login(email, password)`: Đăng nhập
- `register(email, password, username?)`: Đăng ký
- `setAuth(token, userId, email)`: Set auth data
- `clearAuth()`: Xóa auth data

### Shared Store (Tùy chọn)
Có thể dùng shared store từ `core-shared-library`:
```typescript
// Trong vite.config.ts, thêm vào remotes:
remotes: {
  shared_core: 'http://localhost:3005/assets/remoteEntry.js'
}

// Trong AuthView.vue, thay đổi import:
import { useAuthStore } from 'shared_core/AuthStore'
```

## Usage

### Trong Host App

```vue
<template>
  <AuthView />
</template>

<script setup>
import AuthView from 'auth_mfe/AuthView'
</script>
```

### Modal Mode

```vue
<template>
  <AuthView :is-modal="true" />
</template>
```

## Events

AuthView emit các events:
- `mf:auth-success`: Khi đăng nhập/đăng ký thành công
- `mf:auth-close-modal`: Khi cần đóng modal (nếu là modal mode)

## Styling

- Font: Plus Jakarta Sans
- Icons: Material Symbols Outlined
- Dark mode: Hỗ trợ dark mode với class `dark`
- Colors:
  - Primary: `#256af4`
  - Background light: `#f5f6f8`
  - Background dark: `#101623`
  - Surface dark: `#182234`

## Development

```bash
# Development
npm run dev

# Build và preview (cho Module Federation)
npm run dev:mf
```

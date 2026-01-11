declare module 'auth_mfe/AuthView' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'auth_mfe/LoginView' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'auth_mfe/RegisterView' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'shared_core/AuthStore' {
  import { Store } from 'pinia'
  
  interface AuthState {
    token: string | null
    userId: string | null
    isAuthenticated: boolean
  }
  
  interface AuthStore extends Store<'auth', AuthState> {
    isLoggedIn: boolean
    setAuth(token: string, userId: string): void
    clearAuth(): void
  }
  
  export function useAuthStore(): AuthStore
}

declare module 'shared_core/GlobalStore' {
  export * from 'pinia'
}

declare module 'shared_core/Header' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'shared_core/Footer' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'shared_core/Layout' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'shared_core/MaintenanceView' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{
    title?: string
    message?: string
  }, {}, any>
  export default component
}

declare module 'shared_core/AuthenticatedLayout' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
      header?: () => any
      footer?: () => any
      default?: () => any
    }
  >
  export default component
}

declare module 'shared_core/DefaultLayout' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{
    isLoggedIn?: boolean
    username?: string
    userAvatar?: string
  }, {}, {}, {}, {}, {}, {}, {
    default?: () => any
  }>
  export default component
}

declare module 'shared_core/ApiClient' {
  export * from 'axios'
}

declare module 'newsfeed_mfe/NewsfeedView' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'chat_mfe/ChatView' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

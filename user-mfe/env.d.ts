/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Type definition for shared_core/ApiClient
declare module 'shared_core/ApiClient' {
  import { AxiosInstance } from 'axios'
  const apiClient: AxiosInstance
  export default apiClient
}

// Type definition for shared_core/Logo
declare module 'shared_core/Logo' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

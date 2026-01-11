/// <reference types="vite/client" />

declare module 'shared_core/AuthenticatedLayout' {
  import { Component } from 'vue'
  const component: Component & {
    __slots?: {
      header?: () => any
      footer?: () => any
      default?: () => any
    }
  }
  export default component
}


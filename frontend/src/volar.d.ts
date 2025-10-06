// Global types for Vue and Quasar
import '@vue/runtime-core'

// add type-only imports to satisfy ESLint consistent-type-imports rule
import type { Router, RouteLocationNormalized } from 'vue-router'
import type { QVueGlobals } from 'quasar'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $q: QVueGlobals
    $router: Router
    $route: RouteLocationNormalized
  }
}

export {}
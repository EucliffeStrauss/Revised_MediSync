// Global types for Vue and Quasar
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $q: any
    $router: import('vue-router').Router
    $route: import('vue-router').RouteLocationNormalized
  }
}

export {}
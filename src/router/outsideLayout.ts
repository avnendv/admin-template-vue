import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/sign-in',
    name: 'sign-in-page',
    component: () => import('@/views/sign-in/index.vue'),
    meta: {
      title: 'Sign In',
      hideInSearch: true
    }
  }
] as RouteRecordRaw[]

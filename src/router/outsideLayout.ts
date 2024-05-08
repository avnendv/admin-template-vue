import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/sign-in',
    name: 'sign-in-page',
    component: () => import('@/views/sign-in/index.vue'),
    meta: {
      title: 'Sign In'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found-page',
    meta: { title: 'Not found page' },
    component: () => import('@/views/error/404.vue')
  }
] as RouteRecordRaw[]

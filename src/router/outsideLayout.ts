import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/login',
    name: 'login-page',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found-page',
    meta: { title: 'Not found page' },
    component: () => import('@/views/error/404.vue')
  }
] as RouteRecordRaw[]

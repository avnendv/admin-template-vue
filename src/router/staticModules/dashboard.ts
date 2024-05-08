import type { RouteRecordRaw } from 'vue-router'

const MODULE_NAME = 'dashboard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: MODULE_NAME,
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      title: 'Dashboard',
      icon: 'house'
    }
  }
]

export default routes

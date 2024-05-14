import type { RouteRecordRaw } from 'vue-router'

const MODULE_NAME = 'dashboard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: MODULE_NAME,
    atGroup: 'general',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      title: 'routes.dashboard.dashboard',
      icon: 'radix-icons:dashboard',
      noCheckPer: true
    }
  }
]

export default routes

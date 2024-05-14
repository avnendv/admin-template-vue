import type { RouteRecordRaw } from 'vue-router'

const MODULE_NAME = 'table'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/table',
    name: MODULE_NAME,
    atGroup: 'general',
    component: () => import('@/views/table/index.vue'),
    meta: {
      title: 'Table',
      icon: 'radix-icons:table',
      noCheckPer: true
    }
  }
]

export default routes

import outsideLayout from './outsideLayout'
import staticModules from './staticModules'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/dashboard',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: 'Dashboard'
    },
    children: [...staticModules]
  },
  ...outsideLayout
]

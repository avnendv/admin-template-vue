import { PAGE_NOT_FOUND_NAME } from '../constant'
import type { RouteRecordRaw } from 'vue-router'
import RouterView from '@/layout/router-view/index.vue'

const moduleName = 'error'

export const notFound: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  meta: {
    title: 'NotFound',
    hideInMenu: true,
    hideInTabs: true,
    noCheckPer: true
  },
  redirect: '/error/404',
  component: () => import('@/views/error/404.vue'),
  children: []
}

export const errorRoute: RouteRecordRaw = {
  path: '/error',
  name: moduleName,
  redirect: '/error/404',
  component: RouterView,
  meta: {
    title: 'Error',
    icon: 'EditOutlined',
    hideInMenu: true,
    hideInTabs: true,
    noCheckPer: true
  },
  children: [
    {
      path: '404',
      name: PAGE_NOT_FOUND_NAME,
      meta: {
        title: '404',
        icon: 'UserOutlined',
        hideInMenu: true,
        noCheckPer: true
      },
      component: () => import('@/views/error/404.vue')
    }
  ]
}

export default [errorRoute, notFound]

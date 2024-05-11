import { REDIRECT_NAME } from '../constant'
import type { RouteRecordRaw } from 'vue-router'
import RouterView from '@/layout/router-view/index.vue'
import router from '@/router'

/**
 * Mainly used to refresh the current page
 */
export const REDIRECT_ROUTE: RouteRecordRaw = {
  path: '/redirect',
  component: RouterView,
  name: 'RedirectTo',
  meta: {
    title: REDIRECT_NAME,
    hideInBreadcrumb: true,
    hideInMenu: true,
    noCheckPer: true
  },
  children: [
    {
      path: ':path(.*)',
      name: REDIRECT_NAME,
      component: RouterView,
      meta: {
        title: REDIRECT_NAME,
        hideInMenu: true,
        noCheckPer: true
      },
      beforeEnter: (to) => {
        const { params, query } = to
        const { path, redirectType = 'path' } = params

        Reflect.deleteProperty(params, '_redirect_type')
        Reflect.deleteProperty(params, 'path')

        const _path = Array.isArray(path) ? path.join('/') : path
        setTimeout(() => {
          if (redirectType === 'name') {
            router.replace({
              name: _path,
              query,
              params
            })
          } else {
            router.replace({
              path: _path.startsWith('/') ? _path : `/${_path}`,
              query
            })
          }
        })
        return true
      }
    }
  ]
}

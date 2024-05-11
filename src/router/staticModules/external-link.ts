import type { RouteRecordRaw } from 'vue-router'
import RouterView from '@/layout/router-view/index.vue'

const MODULE_NAME = 'external'

const routes: Array<RouteRecordRaw> = [
  {
    path: 'https://avnendv.id.vn',
    name: MODULE_NAME,
    component: RouterView,
    atGroup: 'external',
    meta: {
      title: 'AVNENDV',
      icon: 'radix-icons:link-break-2',
      isExt: true,
      noCheckPer: true
    },
    children: [
      {
        path: 'welcome',
        name: `${MODULE_NAME}-welcome`,
        meta: {
          title: 'a',
          icon: 'icon-shouye',
          noCheckPer: true,
          isExt: true
        },
        component: RouterView
      }
    ]
  }
]

export default routes

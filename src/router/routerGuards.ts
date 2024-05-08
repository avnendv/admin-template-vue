import type { Router } from 'vue-router'

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, _, next) => {
    next()
  })

  router.onError((error, to) => {
    console.log(error, 'routing error')
    if (error.message.includes('Failed to fetch dynamically imported module')) {
      window.location = to.fullPath as Location | (string & Location)
    }
  })
}

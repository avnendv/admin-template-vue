import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes'
import type { App } from 'vue'
import { createRouterGuards } from './routerGuards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'link__active',
  routes
})

export async function setupRouter(app: App) {
  // Create route guards
  createRouterGuards(router)

  app.use(router)

  // Mount the APP instance after the route is ready
  await router.isReady()
}

export default router

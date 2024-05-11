import { cloneDeep } from 'lodash-es'
import { notFound, errorRoute } from './staticModules/error'
import outsideLayout from './outsideLayout'
import { REDIRECT_ROUTE } from './staticModules/besidesLayout'
import type { RouteRecordRaw } from 'vue-router'
import { uniqueSlash } from '@/utils/urlUtils'
import common from '@/router/staticModules'
import router, { routes } from '@/router'

// Routes that need to be placed after all routes
const endRoutes: RouteRecordRaw[] = [REDIRECT_ROUTE, errorRoute, notFound]

/**
 * dynamically generated menu
 * @param perms
 * @param checkRole
 * @returns {Promise<Router>}
 */
export const generatorDynamicRouter = (perms: string[], checkRole: boolean) => {
  try {
    const layout = routes.find((item) => item.name == 'Layout')!
    // Add namePath to public routes
    generatorNamePath(common)

    // router filter per
    const commonFilter = menuFilter(common, perms, checkRole)

    const menus = [...commonFilter, ...endRoutes]
    layout.children = menus
    const removeRoute = router.addRoute(layout)
    // Get all the routes that do not contain children. When addRoute above, vue-router has helped us to flatten all the routes
    const filterRoutes = router
      .getRoutes()
      .filter(
        (item) =>
          (!item.children.length || Object.is(item.meta?.hideChildrenInMenu, true)) &&
          !outsideLayout.some((n) => n.name === item.name) &&
          (item.meta.noCheckPer || perms.includes(item.meta.perm!) || checkRole)
      )
    // Clear all routes
    removeRoute()
    layout.children = [...filterRoutes]
    // Re-add the flattened route
    router.addRoute(layout)

    return Promise.resolve({
      menus,
      routes: layout.children
    })
  } catch (error) {
    console.error('Error generating route', error)
    return Promise.reject(`Error generating route: ${error}`)
  }
}

/**
 * It is mainly convenient to control the open-keys of a-menu, that is, to control which menus should be expanded in the left menu
 * @param {RouteRecordRaw[]} routes Need to add the route of namePath
 * @param {string[]} namePath
 */
export const generatorNamePath = (
  routes: RouteRecordRaw[],
  namePath?: string[],
  parent?: RouteRecordRaw
) => {
  routes.forEach((item) => {
    if (item.meta && typeof item.name === 'string') {
      item.meta.namePath = Array.isArray(namePath) ? namePath.concat(item.name) : [item.name]
      item.meta.fullPath = parent?.meta?.fullPath
        ? [parent.meta.fullPath, item.path].join('/')
        : item.path
      item.meta.fullPath = uniqueSlash(item.meta.fullPath)

      if (item.children?.length) {
        generatorNamePath(item.children, item.meta.namePath, item)
      }
    }
  })
}

/**
 * router filter per
 * @param routes
 * @param perms
 * @param checkRole
 * @returns RouteRecordRaw[]
 */
export const menuFilter = (routes: RouteRecordRaw[], perms: string[], checkRole: boolean) => {
  const routesClone = cloneDeep(routes)
  return checkRole
    ? routesClone
    : routesClone.reduce<RouteRecordRaw[]>((accumulator, currentValue) => {
        if (currentValue.children) {
          currentValue.children = currentValue.children.filter(
            (item) => item.meta?.noCheckPer || perms.includes(item.meta?.perm!)
          )
          if (currentValue.children.length) accumulator.push(currentValue)
        } else {
          if (currentValue.meta?.noCheckPer || perms.includes(currentValue.meta?.perm!))
            accumulator.push(currentValue)
        }
        return accumulator
      }, [])
}

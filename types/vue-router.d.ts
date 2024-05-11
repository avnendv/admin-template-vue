import { type RouteMeta as VRouteMeta, _RouteRecordBase as _VRouteRecordBase } from 'vue-router'

declare module 'vue-router' {
  interface _RouteRecordBase extends _VRouteRecordBase {
    /** Group */
    atGroup?: string
  }
  interface RouteMeta extends VRouteMeta {
    /** Title */
    title: string
    /** Current menu type 0: directory | 1: menu | 2: permission */
    type?: 0 | 1 | 2
    /** Current routing permissions */
    perms?: []
    /** Current routing permissions item */
    perm?: string
    /** Whether cache is required */
    keepAlive?: boolean
    /** Current route namePath ancestor name collection */
    namePath?: string[]
    /** The full path where the current route is located */
    fullPath?: string
    /** Is it fixed in the tab bar */
    affix?: boolean
    /** menu icon */
    icon?: string
    /** Current page switching animation */
    transitionName?: string | false
    /** @name hide child nodes in the menu */
    hideChildrenInMenu?: boolean
    /** don't show in menu */
    hideInMenu?: boolean
    /** Don't show in breadcrumbs */
    hideInBreadcrumb?: boolean
    /** Do not display in the tab page */
    hideInTabs?: boolean
    /** Do not display in search */
    hideInSearch?: boolean
    /** Set the highlighted menu item of the current route, the value is route fullPath or route name, generally used for details page */
    activeMenu?: string
    /** Menu sort number */
    orderNum?: number
    /** External link */
    isExt?: boolean
    /** External link opening method
     * 1: A new window opens
     * 2: iframe
     */
    openMode?: 1 | 2

    /** No check permission */
    noCheckPer?: boolean

    /** Group */
    atGroup?: string
  }
}

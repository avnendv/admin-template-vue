import { defineStore } from 'pinia'
import { store } from '@/stores'

interface Sidebar {
  sidebarRef?: any
  collapsed: boolean
  asideWidth?: number
  isOpenSidebarMobile: boolean
}

export const useSidebarStore = defineStore({
  id: 'sidebar',
  state: (): Sidebar => ({
    collapsed: false,
    isOpenSidebarMobile: false
  }),
  actions: {
    setSidebarRef(sidebarRef: any) {
      this.sidebarRef = sidebarRef
    },
    setCollapsed(collapsed: boolean) {
      this.collapsed = collapsed
    },
    setAsideWidth(asideWidth: number) {
      this.asideWidth = asideWidth
    },
    setOpenSidebarMobileChange(open: boolean) {
      this.isOpenSidebarMobile = open
    }
  }
})

// Need to be used outside the setup
export function useSidebarStoreWithOut() {
  return useSidebarStore(store)
}

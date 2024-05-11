<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import AsideMenu from '../menu/menu.vue'
import { Button } from '@/components/ui/button'
import { useSidebarStore } from '@/stores/modules/sidebar-store'

defineOptions({
  name: 'Sidebar'
})

const sidebarStore = useSidebarStore()
const { collapsed } = storeToRefs(sidebarStore)
const { setCollapsed } = sidebarStore
</script>
<template>
  <div
    :class="[
      'h-full transition-all duration-300 ease-in-out max-lg:hidden',
      collapsed ? 'max-w-12 min-w-12 w-12' : 'max-w-56 min-w-56 w-56'
    ]"
  ></div>
  <aside
    :class="[
      'fixed top-0 left-0 h-full border-r transition-all duration-300 ease-in-out bg-background z-40 max-lg:hidden',
      collapsed ? 'max-w-12 min-w-12 w-12' : 'max-w-56 min-w-56 w-56'
    ]"
  >
    <div :class="['relative flex items-center h-16 text-3xl', collapsed || 'px-3']">
      <span class="text-[#3A57E8]">#!&nbsp;</span>
      <span :class="collapsed && 'hidden'">AVNENDV</span>
      <Button
        @click="() => setCollapsed(!collapsed)"
        class="absolute right-0 p-0 translate-x-2/3 w-8 h-8 bg-[#3A57E8] rounded-full shadow-md text-white hover:bg-[#3A57E8] top-1/2 -translate-y-1/2"
      >
        <Icon v-if="collapsed" icon="radix-icons:arrow-right" />
        <Icon v-else icon="radix-icons:arrow-left" />
      </Button>
    </div>
    <div class="h-[calc(100%-4rem)] pb-16">
      <aside-menu />
    </div>
  </aside>
</template>

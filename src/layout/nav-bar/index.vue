<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ThemeToggle from '../theme-toggle/index.vue'
import ThemeCustomize from '../theme-customize/index.vue'
import Notification from '../notification/index.vue'
import AccountSetting from '../account-setting/index.vue'
import Search from '../search/index.vue'
import Sidebar from '../sidebar/sidebar-mobile.vue'
import { Button } from '@/components/ui/button'
import { useSidebarStore } from '@/stores/modules/sidebar-store'

defineOptions({
  name: 'NavBar'
})

const sidebarStore = useSidebarStore()
const { setOpenSidebarMobileChange } = sidebarStore
</script>
<template>
  <div class="flex items-center justify-between h-16 px-2 border-b lg:px-8">
    <div class="text-2xl font-semibold text-primary max-lg:hidden">{{ $route.meta.title }}</div>
    <div class="flex items-center lg:hidden gap-x-2">
      <img class="w-8 h-8" src="https://github.com/radix-vue.png" alt="logo" />
      <Button @click="() => setOpenSidebarMobileChange(true)" class="p-0 w-9 h-9" variant="ghost"
        ><Icon class="w-[1.2rem] h-[1.2rem]" icon="radix-icons:hamburger-menu"
      /></Button>
    </div>
    <div class="flex items-center justify-end flex-1 gap-x-2">
      <div>
        <search />
      </div>
      <theme-toggle />
      <theme-customize />
      <notification />
      <account-setting />
    </div>
  </div>
  <sidebar />
</template>

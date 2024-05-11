<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import AsideMenu from '../menu/menu.vue'
import { useSidebarStore } from '@/stores/modules/sidebar-store'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const sidebarStore = useSidebarStore()
const { isOpenSidebarMobile } = storeToRefs(sidebarStore)
const { setOpenSidebarMobileChange } = sidebarStore
</script>

<template>
  <template v-if="!isLargeScreen">
    <Sheet :open="isOpenSidebarMobile" @update:open="(open) => setOpenSidebarMobileChange(open)">
      <SheetContent class="w-56 px-0 max-w-56 min-w-56" side="left">
        <SheetHeader class="h-full">
          <SheetTitle class="pb-8">
            <img class="w-16 h-16 mx-auto" src="https://github.com/radix-vue.png" alt="" />
          </SheetTitle>
          <SheetDescription class="max-h-[calc(100%-8rem)] overflow-y-auto h-full text-left">
            <aside-menu />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </template>
</template>

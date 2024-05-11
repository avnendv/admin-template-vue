<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { type RouteRecordRaw } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { groupBy } from 'lodash-es'
import { useMediaQuery } from '@vueuse/core'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useSidebarStore } from '@/stores/modules/sidebar-store'

const props = defineProps({
  menus: {
    type: Array as PropType<RouteRecordRaw[]>,
    default: () => []
  },
  notGroup: {
    type: Boolean,
    default: false
  }
})

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const sidebarStore = useSidebarStore()
const { collapsed } = storeToRefs(sidebarStore)

const filterMenus = computed(() => {
  return [...props.menus]
    .filter((n) => !n.meta?.hideInMenu)
    .sort((a, b) => (a?.meta?.orderNum || 0) - (b?.meta?.orderNum || 0))
})
const groupMenu = computed(() => groupBy(filterMenus.value, 'atGroup'))
</script>
<template>
  <template v-if="notGroup">
    <template v-for="item in filterMenus" :key="item.name || item.fullPath">
      <div :class="{ 'px-3': !(collapsed && isLargeScreen) }">
        <DropdownMenu v-if="item.children?.length">
          <DropdownMenuTrigger as-child>
            <div
              :class="[
                'flex items-center py-2 capitalize transition-all duration-300 rounded-md gap-x-4 relative cursor-pointer',
                $route.fullPath.includes(item.path)
                  ? 'bg-[#3A57E8] text-white'
                  : 'hover:bg-ring hover:text-background',
                collapsed && isLargeScreen ? 'justify-center' : 'px-6'
              ]"
            >
              <Icon v-if="item.meta?.icon" class="w-4 h-4" :icon="item.meta?.icon" />
              <span v-show="!(collapsed && isLargeScreen)">
                {{ item.meta?.title || item.name }}
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="min-w-48" side="right" align="start">
            <DropdownMenuGroup>
              <DropdownMenuItem v-for="child in item.children" :key="child.name" as-child>
                <component
                  :is="child.meta?.isExt ? 'a' : 'router-link'"
                  :to="child.meta?.isExt || { name: child.name }"
                  :href="child.meta?.isExt && child.path"
                  :target="child.meta?.isExt && '_blanks'"
                  :class="[
                    'flex items-center py-2 capitalize transition-all duration-300 rounded-md gap-x-4',
                    $route.name === child.name
                      ? 'bg-[#3A57E8] text-white'
                      : 'hover:bg-ring hover:text-background',
                    collapsed && isLargeScreen ? 'justify-center' : 'px-6'
                  ]"
                >
                  <Icon v-if="child.meta?.icon" class="w-4 h-4" :icon="child.meta?.icon" />
                  {{ child.meta?.title || child.name }}
                </component>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <component
          v-else
          :is="item.meta?.isExt ? 'a' : 'router-link'"
          :to="item.meta?.isExt || { name: item.name }"
          :href="item.meta?.isExt && item.path"
          :target="item.meta?.isExt && '_blanks'"
          :class="[
            'flex items-center py-2 capitalize transition-all duration-300 rounded-md gap-x-4',
            $route.name === item.name
              ? 'bg-[#3A57E8] text-white'
              : 'hover:bg-ring hover:text-background',
            collapsed ? 'justify-center' : 'px-6'
          ]"
        >
          <Icon v-if="item.meta?.icon" class="w-4 h-4" :icon="item.meta?.icon" />
          <span v-show="!(collapsed && isLargeScreen)">
            {{ item.meta?.title || item.name }}
          </span>
        </component>
      </div>
    </template>
  </template>
  <template v-else>
    <div
      class="flex flex-col gap-y-1.5"
      v-for="(groupValue, keyValue) in groupMenu"
      :key="keyValue"
    >
      <span v-show="!(collapsed && isLargeScreen)" class="px-3 text-sm uppercase text-ring">{{
        keyValue
      }}</span>
      <menu-item :menus="groupValue" not-group />
      <div class="px-3">
        <hr />
      </div>
    </div>
  </template>
</template>

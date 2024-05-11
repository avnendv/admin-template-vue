<script setup lang="ts">
import { ref } from 'vue'
import MenuItem from './menu-item.vue'
import type { RouteRecordRaw } from 'vue-router'
import { generatorDynamicRouter } from '@/router/generatorRouter'

defineOptions({
  name: 'MenuList'
})

const menus = ref<RouteRecordRaw[]>([])

const getInitMenus = async () => {
  const generatorResult = await generatorDynamicRouter([], false)
  menus.value = generatorResult.menus.filter((item) => !item.meta?.hideInMenu)
}
getInitMenus()
</script>
<template>
  <nav>
    <div class="flex flex-col gap-y-4">
      <menu-item :menus="menus" />
    </div>
  </nav>
</template>

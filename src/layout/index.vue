<script setup lang="ts">
import Sidebar from './sidebar/index.vue'
import NavBar from './nav-bar/index.vue'

defineOptions({
  name: 'LayoutRoot'
})
</script>
<template>
  <section class="flex w-full h-screen max-h-dvh">
    <sidebar />
    <section class="flex flex-col flex-auto w-0">
      <nav-bar />
      <div class="h-full p-2 overflow-y-auto">
        <router-view v-slot="{ Component }">
          <template v-if="Component">
            <transition
              :name="Object.is($route.meta?.transitionName, false) ? '' : 'fade-transform'"
              mode="out-in"
              appear
            >
              <component :is="Component" :key="$route.fullPath" />
            </transition>
          </template>
        </router-view>
      </div>
    </section>
  </section>
</template>

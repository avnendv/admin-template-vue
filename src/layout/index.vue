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

<style scoped>
.fade-transform-enter-active {
  transition: all 0.3s ease-out;
}

.fade-transform-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-transform-enter-from,
.fade-transform-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { transformI18n } from './hooks/useI18n'

const route = useRoute()

watchEffect(() => {
  if (route.meta?.title)
    // translate page title
    document.title = transformI18n(route.meta.title)
})
</script>

<template>
  <RouterView />
</template>

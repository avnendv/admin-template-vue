<script setup lang="ts">
import { watchEffect } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()

watchEffect(() => {
  if (route.meta?.title)
    // translate page title
    document.title = route.meta.title
})
</script>

<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

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

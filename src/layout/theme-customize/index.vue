<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import ThemePopoverContent from './theme-popover-content.vue'
import { useConfigStore } from '@/stores/modules/config-store'
import { allColors } from '@/utils/color'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

defineOptions({
  name: 'ThemeCustomize'
})

const { theme, radius } = storeToRefs(useConfigStore())

// Whenever the component is mounted, update the document class list
onMounted(() => {
  document.documentElement.style.setProperty('--radius', `${radius.value}rem`)
  document.documentElement.classList.add(`theme-${theme.value}`)
})

// Whenever the theme value changes, update the document class list
watch(theme, (theme) => {
  document.documentElement.classList.remove(...allColors.map((color) => `theme-${color}`))
  document.documentElement.classList.add(`theme-${theme}`)
})

// Whenever the radius value changes, update the document style
watch(radius, (radius) => {
  document.documentElement.style.setProperty('--radius', `${radius}rem`)
})
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button class="w-9 h-9" :variant="'ghost'" :size="'icon'">
        <Icon icon="lucide:paintbrush" class="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </PopoverTrigger>
    <PopoverContent :side-offset="8" align="end" class="w-96">
      <theme-popover-content :all-colors="allColors" />
    </PopoverContent>
  </Popover>
</template>

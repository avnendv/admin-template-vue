<script lang="ts" setup>
import RadixIconsCheck from '@radix-icons/vue/CheckIcon'
import RadixIconsSun from '@radix-icons/vue/SunIcon'
import RadixIconsMoon from '@radix-icons/vue/MoonIcon'
import { useDark } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import type { Color } from '@/utils/color'
import { useConfigStore, RADII } from '@/stores/modules/config-store'

import { colors } from '@/lib/registry/colors'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

defineProps<{
  allColors: Color[]
}>()

const configStore = useConfigStore()
const { theme, radius } = storeToRefs(configStore)
const { setRadius, setTheme } = configStore
const isDark = useDark()
</script>

<template>
  <div class="p-4">
    <div class="grid space-y-1">
      <h1 class="font-semibold text-md text-foreground">Customize</h1>
      <p class="text-xs text-muted-foreground">Pick a style and color for your components.</p>
    </div>
    <div class="space-y-1.5 pt-6">
      <Label for="color" class="text-xs"> Color </Label>
      <div class="grid grid-cols-3 gap-2 py-1.5">
        <Button
          v-for="(color, index) in allColors"
          :key="index"
          variant="outline"
          class="justify-start h-8 px-3"
          :class="color === theme ? 'border-foreground border-2' : ''"
          @click="setTheme(color)"
        >
          <span
            class="flex items-center justify-center w-5 h-5 rounded-full"
            :style="{ backgroundColor: colors[color][7].rgb }"
          >
            <RadixIconsCheck v-if="color === theme" class="w-3 h-3 text-white" />
          </span>
          <span class="ml-2 text-xs capitalize">
            {{ color }}
          </span>
        </Button>
      </div>
    </div>
    <div class="space-y-1.5 pt-6">
      <Label for="radius" class="text-xs"> Radius </Label>
      <div class="grid grid-cols-5 gap-2 py-1.5">
        <Button
          v-for="(r, index) in RADII"
          :key="index"
          variant="outline"
          class="justify-center h-8 px-3"
          :class="r === radius ? 'border-foreground border-2' : ''"
          @click="setRadius(r)"
        >
          <span class="text-xs">
            {{ r }}
          </span>
        </Button>
      </div>
    </div>
    <div class="space-y-1.5 pt-6">
      <Label for="theme" class="text-xs"> Theme </Label>

      <div class="flex space-x-2 py-1.5">
        <Button
          class="h-8"
          variant="outline"
          :class="{ 'border-2 border-foreground': !isDark }"
          @click="isDark = false"
        >
          <RadixIconsSun class="w-4 h-4 mr-2" />
          <span class="text-xs">Light</span>
        </Button>
        <Button
          class="h-8"
          variant="outline"
          :class="{ 'border-2 border-foreground': isDark }"
          @click="isDark = true"
        >
          <RadixIconsMoon class="w-4 h-4 mr-2" />
          <span class="text-xs">Dark</span>
        </Button>
      </div>
    </div>
  </div>
</template>

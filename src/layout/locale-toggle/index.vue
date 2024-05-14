<script setup lang="ts">
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { type LocaleType, localeList } from '@/locales/config'
import { useLocale } from '@/locales/useLocale'

defineOptions({
  name: 'LocaleToggle'
})

const { changeLocale, getLocale } = useLocale()

const getLocaleText = computed(() => {
  const key = getLocale.value
  if (!key) {
    return ''
  }
  return localeList.find((item) => item.lang === key)?.icon
})

const toggleLocale = async (newLocale: string) => {
  await changeLocale(newLocale as LocaleType)
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button class="w-9 h-9">
        {{ getLocaleText }}
        <span class="sr-only">Toggle locale</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem
        v-for="item in localeList"
        :key="item.lang"
        @click="toggleLocale(item.lang)"
      >
        <span> {{ item.label }} </span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

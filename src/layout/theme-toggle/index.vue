<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

defineOptions({
  name: 'ThemeToggle'
})

const mode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button class="w-9 h-9" variant="ghost">
        <Icon
          icon="radix-icons:moon"
          class="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Icon
          icon="radix-icons:sun"
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = 'light'">
        <Icon icon="radix-icons:sun" class="h-[1.2rem] w-[1.2rem] mr-2" />
        <span> Light </span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'">
        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] mr-2" />
        <span>Dark</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'">
        <Icon icon="radix-icons:desktop" class="h-[1.2rem] w-[1.2rem] mr-2" />
        <span>System</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

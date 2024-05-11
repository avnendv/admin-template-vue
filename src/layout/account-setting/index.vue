<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

defineOptions({
  name: 'AccountSetting'
})

const mode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button class="h-auto p-1" variant="ghost">
        <Avatar class="w-9 h-9">
          <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div class="flex flex-col pl-1 text-start max-lg:hidden">
          <span>AVNENDV</span>
          <span class="text-xs text-ring">Administrator</span>
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="min-w-48" align="end">
      <DropdownMenuItem @click="mode = 'light'">
        <Icon icon="radix-icons:person" class="h-[1.2rem] w-[1.2rem] mr-2" />
        <span> Profile </span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'">
        <Icon icon="radix-icons:gear" class="h-[1.2rem] w-[1.2rem] mr-2" />
        <span>Setting</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'">
        <Icon icon="radix-icons:lock-closed" class="h-[1.2rem] w-[1.2rem] mr-2" />
        <span>Security</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="mode = 'auto'">
        <Icon icon="radix-icons:exit" class="h-[1.2rem] w-[1.2rem] mr-2" />
        <span>Logout</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

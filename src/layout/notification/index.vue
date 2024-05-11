<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

defineOptions({
  name: 'Notification'
})
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button class="w-9 h-9" :variant="'ghost'" :size="'icon'">
        <Icon icon="radix-icons:bell" class="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </PopoverTrigger>
    <PopoverContent :side-offset="8" align="end" class="w-96"> Notification </PopoverContent>
  </Popover>
</template>

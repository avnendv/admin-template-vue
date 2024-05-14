<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Table } from '@tanstack/vue-table'
import type { Payment } from './data'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

defineProps<{
  table: Table<Payment>
}>()
</script>

<template>
  <div class="flex items-center gap-2">
    <Input
      class="max-w-sm"
      placeholder="Filter emails..."
      :model-value="table.getColumn('email')?.getFilterValue() as string"
      @update:model-value="table.getColumn('email')?.setFilterValue($event)"
    />
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline" class="ml-auto">
          Columns <Icon class="w-4 h-4 ml-2" icon="radix-icons:chevron-down" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem
          v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
          :key="column.id"
          class="capitalize"
          :checked="column.getIsVisible()"
          @update:checked="
            (value) => {
              column.toggleVisibility(!!value)
            }
          "
        >
          {{ column.id }}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

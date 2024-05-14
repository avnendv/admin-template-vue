<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { useDark, useMagicKeys, useMediaQuery } from '@vueuse/core'
import { VisuallyHidden } from 'radix-vue'
import { useRouter, type RouteRecordNormalized } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import router from '@/router'

defineOptions({
  name: 'SearchNavBar'
})

const $router = useRouter()
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isDark = useDark()
const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) e.preventDefault()
  }
})

const isOpen = ref(false)

const linkLists = computed(() => router.getRoutes().filter((item) => !item.meta.hideInSearch))

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1]) isOpen.value = true
})

function handleSelectLink(item: RouteRecordNormalized) {
  if (item.meta.isExt) window.open(item.path, '_blank')
  else $router.push({ name: item.name })

  isOpen.value = false
}
</script>
<template>
  <Button
    :variant="isLargeScreen ? 'outline' : 'ghost'"
    class="relative justify-start text-sm font-normal rounded-md shadow-none h-9 w-9 bg-background lg:text-muted-foreground lg:pr-12 lg:w-64 max-lg:p-0 max-lg:justify-center"
    @click="isOpen = true"
  >
    <template v-if="isLargeScreen">
      <span class="hidden lg:inline-flex">{{ $t('common.searchText') }}...</span>
      <span class="inline-flex lg:hidden">Search...</span>
      <div
        class="inline-flex border-border min-h-5 text-[11px] px-1 pointer-events-none absolute right-[0.3rem] top-1/2 -translate-y-1/2 sm:flex h-5 select-none items-center gap-1 rounded border bg-muted font-medium opacity-100"
      >
        <span class="text-xs">⌘</span>K
      </div>
    </template>
    <template v-else>
      <Icon icon="radix-icons:magnifying-glass" class="h-[1.2rem] w-[1.2rem]" />
    </template>
  </Button>
  <Dialog v-model:open="isOpen">
    <DialogContent class="p-0">
      <VisuallyHidden asChild>
        <DialogTitle> </DialogTitle>
      </VisuallyHidden>
      <DialogDescription>
        <Command>
          <CommandInput :placeholder="`${$t('common.searchText')}...`" />
          <CommandEmpty> No results found. </CommandEmpty>
          <CommandList @escape-key-down="isOpen = false">
            <CommandGroup heading="Link">
              <CommandItem
                v-for="item in linkLists"
                :key="item.name"
                :heading="item.meta.title"
                :value="item.meta.title"
                class="py-3"
                @select="handleSelectLink(item)"
              >
                <Icon :icon="item.meta.icon || 'radix-icons:file'" class="w-5 h-5 mr-2" />
                <span>{{ item.meta.title }}</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Theme">
              <CommandItem
                value="light-theme"
                class="py-3"
                @select="
                  () => {
                    isDark = false
                    isOpen = false
                  }
                "
              >
                <Icon icon="radix-icons:sun" class="w-5 h-5 mr-2" />
                <span>Light Theme</span>
              </CommandItem>
              <CommandItem
                value="dark-theme"
                class="py-3"
                @select="
                  () => {
                    isDark = true
                    isOpen = false
                  }
                "
              >
                <Icon icon="radix-icons:moon" class="w-5 h-5 mr-2" />
                <span>Dark Theme</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>

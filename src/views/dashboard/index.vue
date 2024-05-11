<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
<template>
  <div class="flex gap-5 max-lg:flex-col">
    <div class="flex basis-2/3 gap-x-5 max-lg:overflow-x-auto max-lg:pb-5">
      <div class="flex flex-col basis-1/2 max-lg:min-w-60 gap-y-4">
        <h3 class="text-lg text-primary">My Cards</h3>
        <div
          class="flex flex-col justify-between flex-auto p-5 rounded-3xl bg-secondary-foreground bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <div class="flex items-center justify-between">
            <span class="flex flex-col gap-y-0.5">
              <span class="text-sm">Balance</span> <span class="font-semibold">$5,756</span>
            </span>
          </div>
          <div class="flex items-center justify-between py-8">
            <span class="flex flex-col">
              <span class="text-[10px] text-muted opacity-75">CARD HOLDER</span>
              <span class="text-sm">Eddy Cusuma</span>
            </span>
            <span class="flex flex-col">
              <span class="text-[10px] text-muted opacity-75">VALID THRU</span>
              <span class="text-sm">12/22</span>
            </span>
          </div>
          <div>
            <span class="font-semibold">3778 **** **** 1234</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col basis-1/2 max-lg:min-w-60 gap-y-4 text-primary-foreground">
        <h3 class="text-lg text-primary">My Cards</h3>
        <div
          class="flex flex-col justify-between flex-auto p-5 border rounded-3xl bg-secondary-foreground border-foreground"
        >
          <div class="flex items-center justify-between">
            <span class="flex flex-col gap-y-0.5">
              <span class="text-sm">Balance</span> <span class="font-semibold">$5,756</span>
            </span>
          </div>
          <div class="flex items-center justify-between py-8">
            <span class="flex flex-col">
              <span class="text-[10px] text-muted opacity-75">CARD HOLDER</span>
              <span class="text-sm">Eddy Cusuma</span>
            </span>
            <span class="flex flex-col">
              <span class="text-[10px] text-muted opacity-75">VALID THRU</span>
              <span class="text-sm">12/22</span>
            </span>
          </div>
          <div>
            <span class="font-semibold">3778 **** **** 1234</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col basis-1/3 gap-y-4">
      <h3 class="text-lg text-primary">Recent Transaction</h3>
      <div class="flex-auto p-5 rounded-3xl bg-secondary-foreground">
        <ul class="flex flex-col gap-y-3">
          <li class="flex items-center gap-x-2">
            <div class="bg-[#FFF5D9] w-10 h-10 rounded-full flex items-center justify-center">
              <Icon class="w-5 h-5 text-[#FFBB38]" icon="radix-icons:archive" />
            </div>
            <span class="flex flex-col flex-auto gap-y-0.5">
              <span class="text-sm font-medium text-primary-foreground"> Deposit from my </span>
              <span class="text-[#718EBF] text-xs">28 January 2021</span>
            </span>
            <span class="text-[10px] text-[#FF4B4A] text-end font-medium">-$850</span>
          </li>
          <li class="flex items-center gap-x-2">
            <div class="bg-[#E7EDFF] w-10 h-10 rounded-full flex items-center justify-center">
              <Icon class="w-5 h-5 text-[#396AFF]" icon="radix-icons:crumpled-paper" />
            </div>
            <span class="flex flex-col flex-auto gap-y-0.5">
              <span class="text-sm font-medium text-primary-foreground"> Deposit from my </span>
              <span class="text-[#718EBF] text-xs">28 January 2021</span>
            </span>
            <span class="text-[10px] text-[#41D4A8] text-end font-medium">+$2,500</span>
          </li>
          <li class="flex items-center gap-x-2">
            <div class="bg-[#DCFAF8] w-10 h-10 rounded-full flex items-center justify-center">
              <Icon class="w-5 h-5 text-[#16DBCC]" icon="radix-icons:rocket" />
            </div>
            <span class="flex flex-col flex-auto gap-y-0.5">
              <span class="text-sm font-medium text-primary-foreground"> Deposit from my </span>
              <span class="text-[#718EBF] text-xs">28 January 2021</span>
            </span>
            <span class="text-[10px] text-[#41D4A8] text-end font-medium">+$5,400</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

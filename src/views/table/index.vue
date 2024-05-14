<script setup lang="ts">
import ColumnPinning from './column-pinning.vue'
import { columns } from './columns'
import { data } from './data'
</script>
<template>
  <div>
    <div class="mt-6 mb-4 text-3xl">Column Pinning</div>
    <column-pinning :data="data" :columns="columns" />
  </div>
</template>

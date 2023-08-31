<script setup lang="ts">
import {IconChevronsRight} from '@tabler/icons-vue';

const {categories} = defineProps<{
  categories: { type: Array, required: true },
}>()

console.log(categories)
</script>
<template>
  <section class="grid grid-cols-2 gap-4 bg-grey-lighter">
    <NuxtLink v-for="category in categories"
              :key="category.id"
              class="flex flex-row justify-between p-3 bg-white hover:border hover:border-blue-default hover:bg-grey-tt ">
      <span>{{ category.name }}</span>
      <IconChevronsRight class="h-8 w-8 flex-shrink-0 text-blue-default " aria-hidden="true"/>
    </NuxtLink>
  </section>
</template>
<script setup lang="ts">
const {data} = defineProps<{
  data: { type: Array<Object>, required: true, default: [] },
}>()
</script>
<template>
  <ul class="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8 p-4 bg-grey-lighter">
    <li v-for="category in data"
        :key="category.id"
        class="flex flex-col gap-3 bg-white hover:border hover:border-blue-default hover:bg-grey-tt">
      <SecteursItem :category="category"/>
    </li>
  </ul>
</template>
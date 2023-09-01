<script setup lang="ts">
import {IconChevronsRight} from '@tabler/icons-vue';

const {category} = defineProps<{
  category: { type: Object, required: true },
}>()
</script>
<template>
  <section class="grid grid-cols-2 gap-4 items-center w-full p-4">
    <NuxtLink v-for="child in category.enfants"
              :key="child.id"
              :to="{name:'secteurs-slug-slugname',params:{slug:category.slugname,slugname:child.slugname}}"
              class="flex flex-row justify-between p-8 bg-white text-lg border border-transparent hover:border hover:border-blue-default hover:bg-grey-tt ">
      <span>{{ child.name }}</span>
      <IconChevronsRight class="h-8 w-8 flex-shrink-0 text-blue-default " aria-hidden="true"/>
    </NuxtLink>
  </section>
</template>
<script setup lang="ts">
const {category} = defineProps<{
  category: { type: Object, required: true },
}>()
const smallDescription = computed(function () {
  return category.enfants.map(child => child.name)
})
</script>
<template>
  <NuxtLink :to="`/secteurs/${category.id}`"
            class="flex flex-col items-center justify-center p-3 group hover:-translate-y-3 transition-all duration-500">
    <img :src="category.logo" :alt="category.slugname" height="103" width="127" class="">
    <h3 class="uppercase text-lg font-pathway-semi-bold group-hover:text-blue-default mb-2">{{ category.name }}</h3>
    <p class="line-clamp-3 group-hover:text-grey-dark">{{ smallDescription.join(' ') }}</p>
  </NuxtLink>
</template>
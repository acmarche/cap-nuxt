<script setup lang="ts">
const {category} = defineProps<{
  category: { type: Object, required: true },
}>()
</script>
<template>
  <aside class="flex flex-col gap-4 bg-blue-lighter text-white px-20 h-full py-12 max-w-lg mr-3 pb-24" v-if="category">
    <img :src="category.logo_blanc" :alt="category.slugname" height="103" width="127" class="">
    <h1 class="text-3xl font-pathway-medium mb-3">{{ category.name }}</h1>
    <p>
      {{ category.description }}
    </p>
    <div class="flex flex-row space-x-4 my-4">
      <NuxtLink class="flex items-center p-2 bg-white text-blue-default uppercase"
                to="/secteurs">
        Retour aux catégories
      </NuxtLink>
      <NuxtLink
          to="/carte"
          class="flex items-center p-2 bg-white text-blue-default uppercase"
          title="Voir tous les commerces sur la carte">
        Voir la carte
      </NuxtLink>
    </div>
  </aside>
</template>
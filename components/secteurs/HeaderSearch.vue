<script setup lang="ts">
import {IconChevronRight} from '@tabler/icons-vue';

const {category} = defineProps<{
  category: { type: Object, required: true },
}>()

const pathComputed = computed(() => category.path.map((element) => {
  if (element.id === 511 || element.id === 610) { //remove economie, commerces et entreprises
    return null;
  }
  return element;
}).filter((element) => element !== null));

</script>
<template>
  <header class="bg-search-header bg-blue-search p-12">
    <h1 itemprop="headline" class="text-3xl text-white font-pathway-semi-bold uppercase mb-3">
      {{ category.name }} à Marche-en-Famenne</h1>
    <ShopBreadcumb :path="category.path" text-color="text-white" text-color-hover="hover:text-green-default"/>
    <p class="text-white m-3 prose lg:prose-xl">
      {{ category.description }}
    </p>
  </header>
</template>
<style>
.bg-search-header {
  background: #3a87a4ff url('/images/triangleBackground.png') no-repeat center center;
  background-size: cover;
}
</style>
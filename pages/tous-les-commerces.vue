<script setup lang="ts">
definePageMeta({
  layout: 'default',
  title: 'test',
})

const categorySelected = ref(0)
const childSelected = ref(0)

const url = computed(() => `http://api.local/bottin/fiches/cap/rubrique/${childSelected.value}`);

const {
  data,
  error,
  pending
} = await useFetch(() => url.value);
</script>
<template>
  <section class="w-full">
    <div class="bg-shops-form text-white bg-blue-search p-20">
      <h1 class="text-4xl mb-8 font-pathway-semi-bold">NOS COMMERCES</h1>
      <ShopsFormSearchShops v-model:category-selected="categorySelected" v-model:child-selected="childSelected"/>
    </div>
    <ShopsLegendIcones/>
    <span v-if="pending">Loading...</span>
    <div v-else-if="data">
      <ShopsListResult :fiches="data"/>
    </div>
    <span v-else-if="error">Error: {{ error }}</span>
  </section>
</template>
<style>
.bg-shops-form {
  background-image: url('/assets/src/resources/triangleBackground.png');
}
</style>
<script setup lang="ts">
import fichesGetByCategory from "~/composables/fichesGetByCategory";

definePageMeta({
  layout: 'default',
  title: 'test',
})
const categorySelected = ref(0)
const childSelected = ref(0)

const {data, error, pending} = await fichesGetByCategory(childSelected.value)

</script>
<template>
  <section class="w-full">
    <div class="bg-shops-form text-white bg-blue-search p-28">
      <h1 class="text-4xl mb-8 font-pathway-semi-bold">NOS COMMERCES</h1>
      <ShopsFormSearchShops v-model:categorySelected="categorySelected" v-model:childSelected="childSelected"/>
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
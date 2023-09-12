<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
useHead({
  title: 'Tous les commerces'
})
const categorySelected = ref(0)
const childSelected = ref(0)
const openSunday = ref(false)
const openNoon = ref(false)
const config = useRuntimeConfig()
const url = computed(() => `${config.public.API_URL}/search/cap/rubrique/${childSelected.value}/${openNoon.value}/${openSunday.value}`);
const {
  data,
  error,
  pending
} = await useLazyFetch(() => url.value);
</script>
<template>
  <section class="w-full">
    <div class="bg-shops-form text-white bg-blue-search p-20">
      <h1 class="text-4xl mb-8 font-pathway-semi-bold">NOS COMMERCES</h1>
      <ShopsFormSearchShops v-model:category-selected="categorySelected"
                            v-model:child-selected="childSelected"
                            v-model:open-noon="openNoon"
                            v-model:open-sunday="openSunday"/>
    </div>
    <ShopsLegendIcones/>
    <WidgetsLoader v-if="pending"/>
    <WidgetsLoader v-if="error" :error="error"/>
    <div v-if="data">
      <ShopsListResult :fiches="data"/>
    </div>
  </section>
</template>
<style>
.bg-shops-form {
  background-image: url('/assets/src/resources/triangleBackground.png');
}
</style>
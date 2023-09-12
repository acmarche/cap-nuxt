<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
const route = useRoute();
const {slug, slugname} = route.params
const config = useRuntimeConfig()
console.log(route)
const {
  data,
  error,
  pending
} = await useFetch(() => `${config.public.API_URL}/fiches/cap/rubrique-by-slug/${slugname}`)
const {
  data: currentCategory,
  error: error2,
  pending: pending2
} = await useFetch(() => `${config.public.API_URL}/category-by-slug/${slugname}`)
useHead({
  title: `${data.name} - ${currentCategory.name}`,
})
</script>
<template>
  <WidgetsLoader v-if="pending"/>
  <WidgetsLoader v-if="error" :error="error"/>
  <div v-if="data && currentCategory" class="flex flex-col gap-2 bg-blue-search bg-grey-xx">
    <SecteursHeaderSearch :category="currentCategory"/>
    <ShopsLegendIcones/>
    <ShopsListResult :fiches="data"/>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const route = useRoute();
const {slug, slugname} = route.params;
console.log(route)
const {
  data,
  error,
  pending
} = await useFetch(() => `http://api.local/bottin/fiches/cap/rubrique-by-slug/${slugname}`, {
  onRequest({request, options}) {
  },
  onRequestError({request, options, error}) {
    console.log(error)
  },
  onResponse({request, response, options}) {

  },
  onResponseError({request, response, options}) {
    console.log(response)
  },
});
const {
  data: currentCategory,
  error: error2,
  pending: pending2
} = await useFetch(() => `http://api.local/bottin/category-by-slug/${slugname}`, {
  onRequest({request, options}) {
  },
  onRequestError({request, options, error}) {
    console.log(error)
  },
  onResponse({request, response, options}) {

  },
  onResponseError({request, response, options}) {
    console.log(response)
  },
});
</script>
<template>
  <span v-if="pending && pending2">Loading...</span>
  <div v-else-if="data && currentCategory" class="flex flex-col gap-2 bg-blue-search bg-grey-xx">
    <SecteursHeaderSearch :category="currentCategory"/>
    <ShopsLegendIcones/>
    <ShopsListResult :fiches="data"/>
  </div>
  <span v-else-if="error">Error: {{ error }}</span>
</template>
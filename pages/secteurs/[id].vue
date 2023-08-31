<script setup lang="ts">
definePageMeta({
  layout: 'noheaderlayout',
})
const {path, params} = useRoute()
const {
  data,
  error,
  pending
} = await useFetch(() => `http://api.local/bottin/category/${params.id}`, {
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
  <section class="flex flex-row" v-if="data">
    <SecteursSideChild :category="data"/>
    <SecteursListChild :categories="data.enfants"/>
  </section>
</template>
<style>

</style>
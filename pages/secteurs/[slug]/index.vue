<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const {path, params} = useRoute()

const {
  data,
  error,
  pending
} = await useFetch(() => `http://api.local/bottin/category-by-slug/${params.slug}`, {
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
  <section class="flex flex-row pb-4 bg-grey-lighter" v-if="data">
    <SecteursSideChild :category="data"/>
    <SecteursListChild :category="data"/>
  </section>
</template>
<style>

</style>
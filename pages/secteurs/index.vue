<script setup>
definePageMeta({
  layout: 'default',
})
const {
  data,
  error,
  pending
} = await useFetch(() => `http://api.local/bottin/commerces`, {
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
  <section class="flex flex-row">
    <span v-if="pending">Loading...</span>
    <span v-else-if="error">Error: {{ error }}</span>
    <template v-else-if="data">
      <SecteursSide/>
      <SecteursList :data="data"/>
    </template>
  </section>
</template>
<style>
</style>
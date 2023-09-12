<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
const {path, params} = useRoute()
const config = useRuntimeConfig()
const {
  data,
  error,
  pending
} = await useFetch(() => `${config.public.API_URL}/category-by-slug/${params.slug}`)
useHead({
  title:data.name,
})
</script>
<template>
  <section class="flex flex-row pb-4 bg-grey-lighter" v-if="data">
    <SecteursSideChild :category="data"/>
    <SecteursListChild :category="data"/>
  </section>
</template>
<style>

</style>
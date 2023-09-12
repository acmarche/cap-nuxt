<script setup>
useHead({
  title: 'Secteurs'
})
definePageMeta({
  layout: 'default',
})
const config = useRuntimeConfig()
const {
  data,
  error,
  pending
} = await useFetch(() => `${config.public.API_URL}/commerces`)
</script>
<template>
  <section class="flex flex-row">
    <WidgetsLoader v-if="pending"/>
    <WidgetsLoader v-if="error" :error="error"/>
    <template v-if="data">
      <SecteursSide/>
      <SecteursList :data="data"/>
    </template>
  </section>
</template>
<script setup>
useHead({
  title:'coucou'
})
definePageMeta({
  layout: 'default',
})
const config = useRuntimeConfig()
const {
  data,
  error,
  pending
} = await useLazyFetch(() => `${config.public.API_URL}/commerces`)
</script>
<template>
  <section class="flex flex-row">
    <WidgetsLoader v-if="pending"/>
    <WidgetsLoader v-else-if="error" :error="error"/>
    <template v-else-if="data">
      <SecteursSide/>
      <SecteursList :data="data"/>
    </template>
  </section>
</template>
<script setup>
definePageMeta({
  layout: 'default',
  title: 'My home page'
})
const {
  data,
  error,
  pending
} = await useFetch(() => `http://api.local/bottin/commerces`);
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
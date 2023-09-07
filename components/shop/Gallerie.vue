<script setup lang="ts">
const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()
</script>
<template>
  <section class="columns-3xs gap-x-6 space-y-6 text-slate-700">
    <img v-for="image in shop.cap?.images" :key="image.id" :alt="image.name"
         :src="`https://cap.marche.be/${image.path}`"
         class="break-inside-avoid-column rounded-md bg-gradient-to-tl from-indigo-50 p-7 shadow-md"
         width="350">
  </section>
</template>
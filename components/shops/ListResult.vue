<script setup>
const propos = defineProps({fiches: Array})
</script>
<template>
  <section v-if="propos.fiches" class="grid grid-cols-4 gap-3">
    <article v-for="fiche in propos.fiches" :key="fiche.id">
      <ShopsFicheItem :fiche="fiche"/>
    </article>
  </section>
</template>
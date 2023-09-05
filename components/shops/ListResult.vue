<script setup>
const propos = defineProps({fiches: Array})
</script>
<template>
  <section v-if="propos.fiches" class="grid grid-cols-4 gap-3 mt-6 bg-grey-xx">
    <ShopsFicheItem :fiche="fiche" v-for="fiche in propos.fiches" :key="fiche.id"/>
  </section>
</template>
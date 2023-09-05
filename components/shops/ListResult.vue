<script setup>
const propos = defineProps({fiches: Array})
</script>
<template>
  <section v-if="propos.fiches" class="grid grid-cols-4 space-x-4 space-y-4 m-6 bg-grey-xx">
    <ShopsFicheItem :fiche="fiche" v-for="fiche in propos.fiches" :key="fiche.id"/>
  </section>
</template>
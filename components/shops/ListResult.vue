<script setup>
import FicheItem from "~/components/shops/FicheItem.vue";

const propos = defineProps({fiches: Array})

</script>
<template>
  <section v-if="propos.fiches" class="grid grid-cols-4 gap-3">
    <article v-for="fiche in propos.fiches" :key="fiche.id">
      <FicheItem :fiche="fiche"/>
    </article>
  </section>
</template>
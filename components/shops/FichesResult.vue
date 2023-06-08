<script setup>
const propos = defineProps({fiches: Array})
</script>
<template>
  <section>
    <h3>Fiches {{ propos.fiches.length }}</h3>
    <ul>
      <li v-for="fiche in propos.fiches" :key="fiche.id">
        {{ fiche.societe }}
      </li>
    </ul>
  </section>
</template>
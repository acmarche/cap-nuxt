<script setup lang="ts">
const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()
</script>
<template>
  <h2 class="flex flex-row gap-2 my-3">
    <img src="/images/iconAdresse.png" class=" " width="30" height="30"
         alt="Icone catégorie">
    <span class="uppercase">Adresse</span>
  </h2>
  <a title="lien vers la page google" target="_blank"
     :href="`http://maps.google.com/?q=${shop.latitude}&${shop.longitude}`">

    <span itemprop="streetAddress">{{ shop.rue }} {{ shop.numero }}</span>
    <div>
      <span class="" itemprop="postalCode">{{ shop.cp }}</span>
      <span class="" itemprop="addressLocality">{{ shop.localite }}</span>
    </div>
  </a>

  <p itemprop="addressCountry">
    <a id="linkToMap" href="#map" title="Accéder à la map" class="scrollTo">
      <i class="fa fa-eye" aria-hidden="true"></i>
    </a>
  </p>

  <div v-if="shop.pmr" class="">
    Pmr <i class="fa fa-wheelchair"></i>
  </div>

  <a href="#map" id="goToMap" title="Accéder à la map" class="scrollTo">
    Voir sur la carte
  </a>

</template>
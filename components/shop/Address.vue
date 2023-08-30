<script setup lang="ts">
import {IconMap, IconWheelchair} from '@tabler/icons-vue';

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
  <a title="lien vers la page google" target="_blank" class="block mb-3"
     :href="`http://maps.google.com/?q=${shop.latitude}&${shop.longitude}`">
    <span itemprop="streetAddress">{{ shop.rue }} {{ shop.numero }}</span>
    <div>
      <span class="" itemprop="postalCode">{{ shop.cp }}</span>
      <span class="" itemprop="addressLocality">{{ shop.localite }}</span>
    </div>
  </a>

  <a id="linkToMap" href="#map" title="Accéder à la map" class="flex flex-row gap-2">
    <IconMap class="h-8 w-8 flex-shrink-0 text-white " aria-hidden="true"/>
    Voir sur la carte
  </a>

  <div v-if="!shop.pmr" class="flex flex-row gap-2" title="Accès aux personnes à mobilité réduite">
    <IconWheelchair class="h-8 w-8 flex-shrink-0 text-white " aria-hidden="true"/>
    Pmr
  </div>


</template>
<script setup>
const propos = defineProps({fiche: Object})

const shopImage = computed(() => {
  if (propos.fiche.cap) {
    if (propos.fiche.cap.profileMediaPath !== null) {
      return `https://cap.marche.be/${propos.fiche.cap.profileMediaPath}`
    }
    if (propos.fiche.cap.images.length > 0) {
      return `https://cap.marche.be/${propos.fiche.cap.images[0]}`
    }
  }
  if (propos.fiche.photos && propos.fiche.photos.length > 0) {
    return propos.fiche.photos[0]
  }
  return 'https://cap.marche.be/media/-716383_w1000.jpg'
})

</script>
<template>
  <NuxtLink :to="`shop/${fiche.id}`">
    <img :src="shopImage" class="w-[410px] h-[244px]"
         alt="">
    <div class="flex flex-col bg-grey-white border border-grey-white p-8">
      <h3 class="text-xl text-grey-shop uppercase font-pathway-semi-bold">{{ propos.fiche.societe }}</h3>
      <h4 class="text-lg text-grey-shop">{{ propos.fiche.cap ? propos.fiche.cap.commercialWordTitle : 'non' }}</h4>
      <p> {{ propos.fiche.localite }}</p>
    </div>
  </NuxtLink>
</template>
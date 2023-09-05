<script setup>
const propos = defineProps({fiche: Object})

const shopImage = computed(() => {
  if (propos.fiche.cap) {
    if (propos.fiche.cap.profileMediaPath) {
      return `https://cap.marche.be/${propos.fiche.cap.profileMediaPath}`
    }
    if (propos.fiche.cap.images && propos.fiche.cap.images.length > 0) {
      return `https://cap.marche.be/${propos.fiche.cap.images[0]}`
    }
  }
  if (propos.fiche.photos && propos.fiche.photos.length > 0) {
    return propos.fiche.photos[0]
  }
  return 'https://cap.marche.be/media/-716383_w1000.jpg'
})

const shopImageOver = computed(() => {
  return 'https://cap.marche.be/media/02.jpg'
  if (propos.fiche.cap) {
    if (propos.fiche.cap.images && propos.fiche.cap.images.length > 1) {
      return `https://cap.marche.be/${propos.fiche.cap.images[0]}`
    }
    if (propos.fiche.cap.images && propos.fiche.cap.images.length > 0) {
      return `https://cap.marche.be/${propos.fiche.cap.images[0]}`
    }
  }
  if (propos.fiche.photos && propos.fiche.photos.length > 0) {
    return propos.fiche.photos[0]
  }
  return 'https://cap.marche.be/media/02.jpg'
})

const commercialWordTitle = computed(() => {
  if (propos.fiche.cap != null && propos.fiche.cap.commercialWordTitle?.length > 0) {
    return propos.fiche.cap.commercialWordTitle
  }
  return propos.fiche.classements[0].path[3].name
})

</script>
<template>
  <article class="group w-96">
    <NuxtLink
        :to="{name:'commerces-et-entreprises-slug-slugname',params:{slug:'boulangerie',slugname: fiche.slug}}"
        class="flex flex-col  overflow-hidden">
      <img :src="shopImage" alt="" class="h-80">
      <div class="flex flex-col gap-3 bg-white w-96">
        <h3 class="text-2xl text-grey-shop uppercase font-pathway-semi-bold">{{ propos.fiche.societe }}</h3>
        <h4 class="text-lg text-grey-shop font-pathway-semi-bold">
          {{ commercialWordTitle }}
        </h4>
        <p>{{ propos.fiche.localite }}</p>
      </div>
    </NuxtLink>
  </article>
</template>
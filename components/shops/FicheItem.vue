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
  return 'Beautiful Turkey'
})

const mainActivity = computed(() => {
  if (propos.fiche.classements[0].path[3] != null) {
    return propos.fiche.classements[0].path[3].name
  }
  return propos.fiche.classements[0].path[2].name
})

</script>
<template>
  <article class="group md:max-w-xl">
    <NuxtLink
        :to="{name:'commerces-et-entreprises-slug-slugname',params:{slug:'boulangerie',slugname: fiche.slug}}"
        class="flex flex-col overflow-hidden">
      <div class="relative flex h-80">
        <img :src="shopImage" alt="" class="w-full h-full object-cover">
          <div
            class="absolute left-0 bottom-0 right-0 group w-full h-full opacity-0 bg-center bg-no-repeat bg-cover group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            :style="`background-image:url(${shopImageOver})`">
        </div>
        <p class="absolute h-12 left-0 bottom-0 right-0 rounded-b-lg bg-black/50 p-2 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {{ commercialWordTitle }}
        </p>
      </div>
      <div
          class="h-36 flex flex-col gap-3 bg-white pl-3 border border-transparent group-hover:border-blue-default group-hover:bg-grey-tt transition-all duration-300 ease-in-out">
        <h3 class="text-2xl text-grey-shop uppercase font-pathway-semi-bold">{{ propos.fiche.societe }}</h3>
        <h4 class="text-lg text-grey-shop font-pathway-semi-bold">
          {{ mainActivity }}
        </h4>
        <p>{{ propos.fiche.localite }}</p>
      </div>
    </NuxtLink>
  </article>
</template>
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

function hasCommercialWordTitle() {
  if (propos.fiche.cap != null) {
    return propos.fiche.cap.commercialWordTitle.length > 0
  }
  return false
}

</script>
<template>
  <article class="group">
    <NuxtLink :to="{name:'commerces-et-entreprises-slug-slugname',params:{slug:'boulangerie',slugname: fiche.slug}}">
      <div class="grid [grid-template-areas:block] justify-center items-center h-64">
        <div
            class="[grid-area:block] h-64 w-96 bg-center bg-no-repeat bg-cover"
            :style="`background-image:url(${shopImage})`">
        </div>
        <div
            class="block group [grid-area:block] h-64 opacity-0 bg-center bg-no-repeat bg-cover group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            :style="`background-image:url(${shopImageOver})`">
        </div>
        <p class="w-96 self-end rounded-b-lg bg-black/50 p-2 text-center text-white [grid-area:block] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {{ propos.fiche.cap ? propos.fiche.cap.commercialWordTitle : 'Beautiful Turkey' }}
        </p>
      </div>
      <div
          class="flex flex-col bg-grey-white border border-grey-white p-4 group-hover:bg-grey-tt group-hover:border-blue-small">
        <h3 class="text-2xl text-grey-shop uppercase font-pathway-semi-bold">{{ propos.fiche.societe }}</h3>
        <h4 class="text-lg text-grey-shop font-pathway-semi-bold" v-if="hasCommercialWordTitle">
          {{ propos.fiche?.cap?.commercialWordTitle }}
        </h4>
        <p> {{ propos.fiche.localite }}</p>
      </div>
    </NuxtLink>
  </article>
</template>
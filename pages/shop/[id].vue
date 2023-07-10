<script setup>
import shopGet from "~/composables/shopGet";

const {path, params} = useRoute()
console.log(params.id)
const shopId = computed(() => Number(params.shopId || 0))

const {
  pendingShop,
  shop,
  errorShop
} = shopGet(params.id);

const shopImage = computed(() => {
  if (shop.cap) {
    if (shop.cap.profileMediaPath !== null) {
      return `https://cap.marche.be/${shop.cap.profileMediaPath}`
    }
    if (shop.cap.images.length > 0) {
      return `https://cap.marche.be/${shop.cap.images[0]}`
    }
  }
  if (shop.photos && shop.photos.length > 0) {
    return shop.photos[0]
  }
  return 'https://cap.marche.be/media/-716383_w1000.jpg'
})

</script>
<template>
  <template v-if="pendingShop">
    Loading Shop...
  </template>
  <template v-if="errorShop" class="text-red-600">
    Error {{ errorShop }}
  </template>
  <template v-if="shop">
    <a href="#">
      <img :src="shopImage" class="w-[410px] h-[244px]"
           alt="">
      <div class="flex flex-col bg-grey-white border border-grey-white p-8">
        <h3 class="text-xl text-grey-shop uppercase font-pathway-semi-bold">{{ shop.societe }}</h3>
        <h4 class="text-lg text-grey-shop">{{ shop.cap ? shop.cap.commercialWordTitle : 'non' }}</h4>
        <p> {{ shop.localite }}</p>
      </div>
    </a>
  </template>
</template>
<script setup>
definePageMeta({
  layout: 'noheaderlayout',
})
const {path, params} = useRoute()
const {
  pendingShop,
  shop,
  errorShop
} = shopGet(params.id);

const shopImage = computed(() => {
  //console.log(shop.cap.profileMediaPath)
  if (shop.cap) {
    console.log(123)
    console.log(shop.cap.profileMediaPath)
    if (shop.cap.profileMediaPath) {
      return `https://cap.marche.be/${shop.cap.profileMediaPath}`
    }
    if (shop.cap.images.length > 0) {
      return `https://cap.marche.be/${shop.cap.images[0]}`
    }
  }
  if (shop.photos && shop.photos.length > 0) {
    return shop.photos[0]
  }
  return 'https://cap.marche.be/media/9-grains-dor-11-of-152.jpg'
})
</script>
<template>
  <template v-if="pendingShop">
    Loading Shop...
  </template>
  <template v-if="errorShop" class="text-red-600">
    Error {{ errorShop }}
  </template>
  <article v-if="shop">
    <ShopHeader :shop="shop"/>
    <div class="grid grid-cols-[70%_30%] w-full">
      <img :src="shopImage" class="w-full"
           alt="">
      <div class="bgRight text-white p-5 w-full">
        <p v-if="shop.open_sunday">
          <a>Ouvert le dimanche <span class=" "></span></a>
        </p>
        <p v-if="shop.isMidiOpen">
          <a>Ouvert à midi <span class=" "></span></a>
        </p>

        <ShopContact :shop="shop"/>
        <ShopOpeningHours :shop="shop"/>
        <ShopAddress :shop="shop"/>

      </div>
    </div>
    <ShopMiddlePart :shop="shop"/>
    <ShopBannerCheck/>
    <ShopMemberCap/>
    <ShopGallerie :shop="shop"/>
  </article>
</template>
<style>
.bgRight {
  background-image: url('/images/rightPartBackground.png');
  background-color: #4f8ea5;
}
</style>
<script setup>
definePageMeta({
  layout: 'noheaderlayout',
})
const {path, params} = useRoute()
const {
  pendingShop,
  shop,
  errorShop
} = shopGet(params.slugname)
useHead({
  title: title.value,
})
const title = computed(() => {
  return `${shop.name} - ${shop.classements[0].path}`
})
const shopImage = computed(() => {
  if (shop.cap) {
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
  <WidgetsLoader v-if="pendingShop"/>
  <WidgetsLoader v-if="errorShop" :error="errorShop"/>
  <article v-if="shop">
    <ShopHeader :shop="shop"/>
    <div class="grid grid-cols-[70%_30%] w-full">
      <img :src="shopImage" class="w-full"
           alt="">
      <div class="bg-right text-white p-5 w-full">
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
    <ShopMap :shop="shop"/>
    <ShopMemberCap/>
    <ShopGallerie :shop="shop"/>
  </article>
</template>
<style>
.bg-right {
  background-image: url('/images/rightPartBackground.png');
  background-color: #4f8ea5;
}
</style>
<script setup>
import shopGet from "~/composables/shopGet";
import OpeningHours from "~/components/shop/OpeningHours.vue";
import Contact from "~/components/shop/Contact.vue";
import Address from "~/components/shop/Address.vue";
import MiddlePart from "~/components/shop/MiddlePart.vue";
import BannerCheck from "~/components/shop/BannerCheck.vue";
import MemberCap from "~/components/shop/MemberCap.vue";

const {path, params} = useRoute()
console.log(params.id)

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
    <h1>{{ shop.societe }}</h1>
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

        <Contact :shop="shop"/>
        <OpeningHours :shop="shop"/>
        <Address :shop="shop"/>

      </div>
    </div>
    <MiddlePart :shop="shop"/>
    <BannerCheck/>
    <MemberCap/>
  </article>
</template>
<style>
.bgRight {
  background-image: url('/images/rightPartBackground.png');
  background-color: #4f8ea5;
}

#middlePart {
  padding: 48px 51px;
  background-image: url('/images/middleCrystal.png');
  background-position: right bottom;
  background-repeat: no-repeat;
}

</style>
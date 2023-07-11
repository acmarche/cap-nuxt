<script setup>
import shopGet from "~/composables/shopGet";
import OpeningHours from "~/components/shop/OpeningHours.vue";
import Contact from "~/components/shop/Contact.vue";

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
  <article v-if="shop">
    <h1>{{ shop.societe }}</h1>
    <div class="grid grid-cols-2 w-full">
      <img :src="shopImage" class="w-[1200px] h-[713px]"
           alt="">
      <div class="bgRight text-white p-5">
        <p v-if="shop.open_sunday">
          <a>Ouvert le dimanche <span class=" "></span></a>
        </p>
        <p v-if="shop.isMidiOpen">
          <a>Ouvert à midi <span class=" "></span></a>
        </p>

        <Contact :shop="shop"/>

        <OpeningHours :shop="shop"/>

        <h2 class="flex flex-row gap-2">
          <img src="/images/iconAdresse.png" class=" " width="30" height="30"
               alt="Icone catégorie">
          <span class="uppercase">Adresse</span>
        </h2>

        <a href="#map" id="goToMap" title="Accéder à la map" class="scrollTo">
          Voir sur la carte
        </a>
      </div>
    </div>
    <div id="middlePart" class="my-5">
      <h2 class="text-3xl m-3">{{ shop.cap.commercialWordTitle }}</h2>
      <p>{{ shop.cap.commercialWordDescription }}</p>
      <p>{{ shop.cap.website }}</p>
      <p>{{ shop.cap.email }}</p>
      <p>{{ shop.cap.cta_title }}</p>
    </div>
  </article>
</template>
<style>
.bgRight {
  background-image: url('/images/rightPartBackground.png');
  width: 430px;
  height: 100%;
  display: block;
  background-color: #4f8ea5;
  position: relative;
  background-size: cover;
}

#middlePart {
  padding: 48px 51px;
  background-image: url('/images/middleCrystal.png');
  background-position: right bottom;
  background-repeat: no-repeat;
}

</style>
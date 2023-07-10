<script setup>
import shopGet from "~/composables/shopGet";
import Hours from "~/components/shop/Hours.vue";

const {path, params} = useRoute()
console.log(params.id)

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

function prettyPhone(phone) {
  return `+32${phone}`
}

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
    <div class="">
      <img :src="shopImage" class="w-[1200px] h-[713px]"
           alt="">
    </div>
    <div>
      <p v-if="shop.open_sunday">
        <a>Ouvert le dimanche <span class=" "></span></a>
      </p>
      <p v-if="shop.isMidiOpen">
        <a>Ouvert à midi <span class=" "></span></a>
      </p>

      <h2 class="uppercase">
        <img src="/images/iconContact.png" class="" width="24" height="24"
             alt="Icone catégorie">
        Contactez-nous
      </h2>

      <p v-if="shop.telephone">
        Par téléphone :
        <span>
        {{ prettyPhone(shop.telephone) }}
      </span>
      </p>
      <p v-if="shop.fax">
        Par fax :
        <span>
        {{ prettyPhone(shop.fax) }}
      </span>
      </p>
      <p v-if="shop.gsm">
        Par Gsm :
        <span>
        {{ prettyPhone(shop.gsm) }}
      </span>
      </p>
      <p v-if="shop.vat_number">
        Numéro de TVA : <span>{{ shop.vat_number }}</span>
      </p>
      <p v-if="shop.website">
        <a :href="shop.website" title="Accédez à notre site">Accéder à notre site</a>
      </p>

      <p v-if="shop.facebook_link">
        <a :href="shop.facebook_link" target="_blank" class="" title="Rejoignez-nous sur Facebook">
          <img src="/images/socialLink1.png" width="37" height="38" alt="Icone social"/></a>
      </p>

      <p v-if="shop.twitter_link">
        <a :href="shop.twitter_link" target="_blank" class="" title="Rejoignez-nous sur Twitter">
          <img src="/images/socialLink2.png" width="37" height="38" alt="Icone social"/>
        </a>
      </p>

      <p v-if="shop.linkedin_link">
        <a :href="shop.linkedin_link" target="_blank" class="" title="Rejoignez-nous sur Linkedin">
          <img src="/images/socialLink3.png" width="37" height="38" alt="Icone social"/>
        </a>
      </p>

      <h2 class="uppercase">
        <img src="/images/iconHeure.png" class=" " width="29" height="28"
             alt="Icone catégorie">
        Heures d'ouverture
      </h2>
      <Hours :shop="shop"/>
      <h2 class="uppercase">
        <img src="/images/iconAdresse.png" class=" " width="30" height="30"
             alt="Icone catégorie">
        Adresse
      </h2>

      <a href="#map" id="goToMap" title="Accéder à la map" class="scrollTo">
        Voir sur la carte
      </a>

    </div>
  </article>
</template>
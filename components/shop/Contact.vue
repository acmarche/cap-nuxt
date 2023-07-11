<script setup lang="ts">
const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()

function prettyPhone(phone: string) {
  return `+32${phone}`
}
</script>
<template>
  <h2 class="text-xl uppercase flex flex-row gap-2 font-pathway-semi-bold m-3">
    <img src="/images/iconContact.png" class="" width="24" height="24"
         alt="Icone catégorie">
    <span class="uppercase">Contactez-nous</span>
  </h2>

  <p v-if="shop.cap.legalPhone" class="flex flex-row justify-between p-2">
    <span>Par téléphone :</span>
    <span>
        {{ prettyPhone(shop.cap.legalPhone) }}
      </span>
  </p>

  <p v-if="shop.fax" class="flex flex-row justify-between p-2">
    <span>Par fax :</span>
    <span>
        {{ prettyPhone(shop.fax) }}
      </span>
  </p>

  <p v-if="shop.gsm" class="flex flex-row justify-between p-2">
    <span> Par Gsm :</span>
    <span>
        {{ prettyPhone(shop.gsm) }}
      </span>
  </p>

  <p v-if="shop.cap.vatNumber" class="flex flex-row justify-between p-2">
    <span>Numéro de TVA :</span> <span>{{ shop.cap.vatNumber }}</span>
  </p>

  <p v-if="shop.email" class="flex flex-row justify-between p-2">
    <span>Par email :</span> <a :href="`mailto:${shop.email}`">{{ shop.email }}</a>
  </p>

  <div class="flex flex-row items-center gap-2">

    <a v-if="shop.website" :href="shop.website" class="block p-3 bg-white text-blue-default"
       title="Accédez à notre site">Accéder à notre site
    </a>

    <a v-if="shop.cap.facebookLink" class="p-2" :href="shop.cap.facebookLink" target="_blank"
       title="Rejoignez-nous sur Facebook">
      <img src="/images/socialLink1.png" width="37" height="38" alt="Icone social"/>
    </a>

    <a v-if="shop.cap.twitterLink" class="p-2" :href="shop.cap.twitterLink" target="_blank"
       title="Rejoignez-nous sur Twitter">
      <img src="/images/socialLink2.png" width="37" height="38" alt="Icone social"/>
    </a>

    <a v-if="shop.cap.linkedinLink" class="p-2" :href="shop.cap.linkedinLink" target="_blank"
       title="Rejoignez-nous sur Linkedin">
      <img src="/images/socialLink3.png" width="37" height="38" alt="Icone social"/>
    </a>

  </div>

</template>
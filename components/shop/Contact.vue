<script setup lang="ts">
import {IconPhone} from '@tabler/icons-vue';

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()

function prettyPhone(phone: string) {
  return `+32 ${phone}`
}
</script>
<template>
  <section class="">
    <h2 class="text-xl uppercase flex flex-row gap-2 font-pathway-semi-bold m-3">
      <IconPhone class="h-8 w-8 flex-shrink-0 text-white " aria-hidden="true"/>
      <span class="uppercase">Contactez-nous</span>
    </h2>

    <p v-if="shop.cap?.legalPhone" class="flex flex-row justify-between p-2">
      <span>Par téléphone :</span>
      <a :href="`tel:${prettyPhone(shop.cap?.legalPhone)}`">
        {{ prettyPhone(shop.cap?.legalPhone) }}
      </a>
    </p>

    <p v-if="shop.fax" class="flex flex-row justify-between p-2">
      <span>Par fax :</span>
      <span class="">
        {{ prettyPhone(shop.fax) }}
      </span>
    </p>

    <p v-if="shop.gsm" class="flex flex-row justify-between p-2">
      <span> Par Gsm :</span>
      <a :href="`tel:${prettyPhone(shop.cap?.gsm)}`">
        {{ prettyPhone(shop.gsm) }}
      </a>
    </p>

    <p v-if="shop.cap?.vatNumber" class="flex flex-row justify-between p-2">
      <span>Numéro de TVA :</span> <span class="">{{ shop.cap?.vatNumber }}</span>
    </p>

    <p v-if="shop.email" class="flex flex-row justify-between p-2">
      <span>Par email :</span>
      <a :href="`mailto:${shop.email}`" class="hover:text-white hover:opacity-80">
        {{ shop.email }}
      </a>
    </p>

    <div class="flex flex-row items-center gap-2 justify-between">

      <NuxtLink v-if="shop.website" :to="shop.website"
                class="hover:text-green-default hover:opacity-80 p-3 bg-white text-blue-default"
                title="Accédez à notre site">Accéder à notre site
      </NuxtLink>

      <div class="flex flex-row">
        <NuxtLink v-if="shop.cap?.facebookLink" class="hover:text-white hover:opacity-80 p-2"
                  :to="shop.cap.facebookLink"
                  target="_blank"
                  title="Rejoignez-nous sur Facebook">
          <img src="/images/socialLink1.png" width="37" height="38" alt="Icone social"/>
        </NuxtLink>

        <NuxtLink v-if="shop.cap?.twitterLink" class="hover:text-white hover:opacity-80 p-2" :to="shop.cap.twitterLink"
                  target="_blank"
                  title="Rejoignez-nous sur Twitter">
          <img src="/images/socialLink2.png" width="37" height="38" alt="Icone social"/>
        </NuxtLink>

        <NuxtLink v-if="shop.cap?.linkedinLink" class="hover:text-white hover:opacity-80 p-2"
                  :to="shop.cap.linkedinLink"
                  target="_blank"
                  title="Rejoignez-nous sur Linkedin">
          <img src="/images/socialLink3.png" width="37" height="38" alt="Icone social"/>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
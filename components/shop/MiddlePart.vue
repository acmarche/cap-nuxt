<script setup lang="ts">
import {IconBrandFacebook, IconBrandTwitter} from '@tabler/icons-vue';

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()

function formatTextWithLineBreaks(text: string | null) {
  if (!text) return ''
  if (text) {
    return text.replace(/\n/g, '<br>');
  }
}
</script>
<template>
  <section class="grid grid-cols-[1fr_auto] items-start justify-start" id="middle-part">
    <div class="my-5">
      <h2 class="text-3xl my-3">{{ shop.cap.commercialWordTitle }}</h2>
      <p v-html="formatTextWithLineBreaks(shop.cap.commercialWordDescription)"></p>

      <div class="flex flex-row space-x-4 text-white m-3">
        <a class="block bg-green-btn uppercase py-3 px-5" :href="shop.website" title="Voir notre site" target="_blank">
          Voir notre site
          <span class=""></span> <span class=" "></span>
        </a>
        <a
            class="block bg-green-btn uppercase py-3 px-5 text-white" href="#" title="Nous contacter">
          Nous contacter<span class=" "></span> <span class=" "></span>
        </a>
      </div>

      <div class="flex flex-row items-center space-x-4">
        <p>Partagez ce contenu avec votre communauté !</p>
        <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://cap.marche.be//commerces-et-entreprises/magasins-alimentaires/les-9-grains-d-or"
            target="_blank" class="" title="Partager cette page sur Facebook">
          <IconBrandFacebook class="h-8 w-8 flex-shrink-0 text-gray-400 hover:text-blue-default" aria-hidden="true"/>
        </a>
        <a
            href="https://twitter.com/home?status=https://cap.marche.be//commerces-et-entreprises/magasins-alimentaires/les-9-grains-d-or"
            target="_blank" class="" title="Retweeter cette page">
          <IconBrandTwitter class="h-8 w-8 flex-shrink-0 text-gray-400 hover:text-blue-default" aria-hidden="true"/>
        </a>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3 m-3">
      <img v-for="image in shop.cap.images" :key="image.id" :alt="image.name"
           :src="`https://cap.marche.be/${image.path}`"
           width="174">
    </div>
  </section>
</template>
<style>
#middle-part {
  padding: 48px 51px;
  background-image: url('/images/middleCrystal.png');
  background-position: right bottom;
  background-repeat: no-repeat;
}
</style>
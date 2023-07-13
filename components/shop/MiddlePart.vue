<script setup lang="ts">
const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()
</script>
<template>
  <section class="grid grid-cols-[1fr_auto] items-start justify-start">
    <div id="middlePart" class="my-5">
      <h2 class="text-3xl m-3">{{ shop.cap.commercialWordTitle }}</h2>
      <p>{{ shop.cap.commercialWordDescription }}</p>
      <p>{{ shop.cap.website }}</p>
      <p>{{ shop.cap.email }}</p>
      <p>{{ shop.cap.cta_title }}</p>

      <div class="">
        <a class="" href="http://www.les9grainsdor.be" title="Voir notre site">
          Voir notre site
          <span class="cornerBit hasTransitions"></span> <span class="cornerBit hasTransitions"></span>
        </a>

        <a
            class="blockLink cta_link" href="#" title="Nous contacter">Nous contacter<span
            class="cornerBit hasTransitions"></span> <span class="cornerBit hasTransitions"></span></a>
      </div>

      <div class="socialCta"><p>Partagez ce contenu avec votre communauté !</p>
        <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://cap.marche.be//commerces-et-entreprises/magasins-alimentaires/les-9-grains-d-or"
            target="_blank" class="hasTransitions" title="Aimer cette page sur Facebook">
          J'aime
        </a>
        <a
            href="https://plus.google.com/share?https://cap.marche.be//commerces-et-entreprises/magasins-alimentaires/les-9-grains-d-or"
            target="_blank" class="hasTransitions" title="Aimer via Google +">
          + 1
        </a>
        <a
            href="https://twitter.com/home?status=https://cap.marche.be//commerces-et-entreprises/magasins-alimentaires/les-9-grains-d-or"
            target="_blank" class="hasTransitions" title="Retweeter cette page">
          Twitter
        </a>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3">

      <img v-for="image in shop.cap.images" :key="image.id" :alt="image.name"
           :src="`https://cap.marche.be/${image.path}`"
           width="174">

    </div>

  </section>
</template>
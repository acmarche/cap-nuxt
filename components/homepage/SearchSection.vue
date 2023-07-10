<script setup lang="ts">
import FormSearch from "~/components/homepage/FormSearch.vue";
import BannerNewsletter from "~/components/homepage/BannerNewsletterV2.vue";
import LogosCorner from "~/components/homepage/LogosCorner.vue";
</script>
<template>
    <section
        class="overflow-hidden w-full bg-green-400 bg-hero-pattern bg-bottom flex flex-col relative lg:grid lg:grid-cols-2 lg:grid-rows-[200px_200px_1fr] lg:justify-center lg:items-center lg:min-h-[45rem] ">
      <h1 class="pb-6 pt-28 lg:pt-6 text-center text-2xl lg:text-4xl text-white font-pathway-semi-bold lg:col-span-2">
        DÉCOUVREZ VOS ENTREPRISES ET COMMERÇANTS MARCHOIS
      </h1>
      <FormSearch/>
      <LogosCorner/>
      <BannerNewsletter/>
    </section>
</template>
<style>
.bg-hero-pattern {
  background-image: url('/images/homepageBackground.png');
}
</style>

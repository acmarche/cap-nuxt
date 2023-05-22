<script setup lang="ts">
import FormSearch from "~/components/homepage/FormSearch.vue";
import BannerNewsletter from "~/components/homepage/BannerNewsletterV2.vue";
import LogosCorner from "~/components/homepage/LogosCorner.vue";
</script>
<template>
    <section
        class="w-full min-h-[45rem] bg-green-400 bg-hero-pattern bg-bottom grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[200px_200px_1fr] justify-center items-center relative">
      <h1 class="pb-6 pt-0 lg:pt-6 text-center text-2xl lg:text-4xl text-white font-pathway-bold col-span-2">
        DÉCOUVREZ VOS ENTREPRISES ET COMMERÇANTS MARCHOIS
      </h1>
      <FormSearch/>
      <LogosCorner/>
      <BannerNewsletter/>
    </section>
</template>
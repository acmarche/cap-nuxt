<script setup lang="ts">
import FormSearch from "~/components/homepage/FormSearch.vue";
import BannerNewsletter from "~/components/homepage/BannerNewsletterV2.vue";
</script>
<template>
    <section class="w-full min-h-[45rem] bg-green-400 bg-hero-pattern flex flex-col justify-center items-center relative">
        <h1 class="pb-6 pt-6 text-center text-4xl text-white font-pathway-bold">
            DÉCOUVREZ VOS ENTREPRISES ET COMMERÇANTS MARCHOIS2
        </h1>
        <FormSearch/>
        <BannerNewsletter/>
    </section>
</template>
<script setup lang="ts">
import SearchSection from "~/components/homepage/SearchSection.vue";
import BannerNewsletter from "~/components/homepage/BannerNewsletter.vue";

definePageMeta({
    layout: 'homelayout',
    title: 'test',
})

</script>
<template>
    <SearchSection/>
    <h2 class="text-2xl font-pathway-bold text-blue-default">L'ACTU DES COMMERCANTS</h2>
    <BannerNewsletter/>
</template>
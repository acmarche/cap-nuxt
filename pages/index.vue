<script setup lang="ts">
import SearchSection from "~/components/homepage/SearchSection.vue";
import News from "~/components/homepage/News.vue";
import BannerChecks from "~/components/homepage/BannerChecks.vue";
import BannerMerchantsMap from "~/components/homepage/BannerMerchantsMap.vue";
import BannerMember from "~/components/homepage/BannerMember.vue";

definePageMeta({
    layout: 'homelayout',
    title: 'test',
})

</script>
<template>
    <SearchSection/>
    <News/>
    <BannerChecks/>
    <BannerMerchantsMap/>
    <BannerMember/>
</template>
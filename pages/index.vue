<script setup lang="ts">
import SearchSection from "~/components/homepage/SearchSection.vue";
import News from "~/components/homepage/News.vue";
import ChecksBanner from "~/components/homepage/ChecksBanner.vue";
import MerchantsMap from "~/components/homepage/MerchantsMap.vue";

definePageMeta({
    layout: 'homelayout',
    title: 'test',
})

</script>
<template>
    <SearchSection/>
    <News/>
    <ChecksBanner/>
    <MerchantsMap/>
</template>
<script setup lang="ts">
import SearchSection from "~/components/homepage/SearchSection.vue";
import News from "~/components/homepage/News.vue";

definePageMeta({
    layout: 'homelayout',
    title: 'test',
})

</script>
<template>
    <SearchSection/>
    <News/>
</template>
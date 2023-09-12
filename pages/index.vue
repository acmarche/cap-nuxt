<script setup lang="ts">
definePageMeta({
    layout: 'homelayout',
})
useHead({
  title: 'Page d\'accueil'
})
</script>
<template>
  <HomepageSearchSection/>
  <HomepageNews/>
  <HomepageBannerChecks/>
  <HomepageBannerMerchantsMap/>
  <HomepageBannerMember/>
</template>
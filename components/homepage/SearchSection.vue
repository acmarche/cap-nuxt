<script setup lang="ts">
</script>
<template>
    <section
        class="z-10 overflow-hidden w-full bg-blue-lighter-banner bg-hero-pattern bg-bottom flex flex-col relative lg:grid lg:grid-cols-2 lg:grid-rows-[200px_200px_1fr] lg:justify-center lg:items-center lg:min-h-[45rem] ">
      <h1 class="pb-6 pt-28 lg:pt-6 text-center text-2xl lg:text-4xl text-white font-pathway-semi-bold lg:col-span-2">
        DÉCOUVREZ VOS ENTREPRISES ET COMMERÇANTS MARCHOIS
      </h1>
      <HomepageFormSearch/>
      <HomepageLogosCorner/>
    </section>
</template>
<style>
.bg-hero-pattern {
  background-image: url('/images/homepageBackground.png');
}
</style>

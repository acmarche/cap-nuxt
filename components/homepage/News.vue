<script setup>
import {news} from "~/composables/newsItemsGets"
</script>
<template>
  <section class="w-full mt-8 bg-geometric22 bg-no-repeat bg-bottom-left relative">
    <HomepageBannerNewsletter/>
    <div class="w-full px-5 lg:w-2/3 lg:px-2 mx-auto">
      <h2 class="text-2xl font-pathway-semi-bold text-blue-default py-4 block leading-8">L'ACTU DES COMMERCANTS</h2>
      <ul class="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">
        <li v-for="item in news" :key="item.id" class="h-full w-full news-block">
          <NuxtLink :to="item.url" class="flex flex-col ">
            <img :src="item.img" alt="img" class="h-60 w-auto object-cover">
            <div class="flex flex-row items-center justify-start gap-2 pt-2 px-2 bg-grey-light h-24">
              <img src="https://cap.marche.be/media/portrait-1.JPG" alt="team"
                   class="rounded-full h-12 w-12">
              <h4 class="font-pathway-semi-bold text-lg line-clamp-2">{{ item.name }}</h4>
            </div>
            <div class="flex flex-col justify-between text-blue-default bg-grey-light py-3 px-4 h-32">
              <span class="line-clamp-2">{{ item.excerpt }}</span>
              <span class="text-grey-dark text-base self-end ">{{ item.date }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/evenements"
                class="flex flex-row justify-center items-center ml-auto w-64 mt-2 bg-blue-default hover:bg-blue-lighter text-white pt-2 p-3 text-lg ">
        Voir plus d’évenements
      </NuxtLink>
    </div>
  </section>
</template>
<style>
.bg-geometric {
  background-image: url('/images/bg-map-diagonal.png');
}

.news-block a:hover {
  box-shadow: 0 0 42px 3px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 42px 3px rgba(0, 0, 0, 0.2);
}
</style>
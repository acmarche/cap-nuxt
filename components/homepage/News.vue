<script setup>
import {news} from "~/composables/newsItemsGets"
</script>
<template>
  <section class="w-full mt-8 lg:mt-12 bg-geometric bg-no-repeat bg-bottom-left">
    <div class="w-full px-5 lg:w-2/3 lg:px-2 mx-auto">
      <h2 class="text-2xl font-pathway-semi-bold text-blue-default mb-3 leading-8">L'ACTU DES COMMERCANTS</h2>
      <ul class="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <li v-for="item in news" :key="item.id" class="">
          <a :href="item.url" class="block h-full w-full news-block">
            <div class="flex flex-col">
              <img :src="item.img" alt="img" class="h-60 w-auto object-cover">
              <div class="flex flex-row items-center justify-start gap-2 pt-2 px-2 bg-grey-light">
                <img src="https://cap.marche.be/media/portrait-1.JPG" alt="team"
                     class="rounded-full h-12 w-12">
                <h4 class="font-pathway-semi-bold text-lg">{{ item.name }}</h4>
              </div>
              <div class="flex flex-col justify-between text-blue-default bg-grey-light py-3 px-4 h-28">
                <span>{{ item.excerpt }}</span>
                <span class="text-grey-dark text-base self-end ">{{ item.date }}</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <a href="https://cap.marche.be/evenements" class="block ml-auto w-64 mt-2">
        <div
            class="bg-blue-default hover:bg-blue-lighter text-white pt-2 p-3 text-lg flex flex-row justify-center items-center">
          Voir plus d’évenements
        </div>
      </a>
    </div>
  </section>
</template>
<style>
a.news-block:hover {
  box-shadow: 0 0 42px 3px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 42px 3px rgba(0, 0, 0, 0.2);
}
</style>
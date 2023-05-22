<script setup>
import {news} from "~/composables/newsItemsGets"
</script>
<template>
    <section class="w-full mt-12 bg-geometric bg-no-repeat bg-bottom-left">
        <div class="w-2/3 mx-auto">
            <h2 class="text-2xl font-pathway-bold text-blue-default mb-3">L'ACTU DES COMMERCANTS</h2>
            <ul class="grid grid-cols-1 lg:grid-cols-3 gap-2">
              <li v-for="item in news" :key="item.id" class="h-96">
                <a :href="item.url" class="block h-full w-full news-block">
                  <div class="flex flex-col min-h-80">
                    <img :src="item.img" alt="img" class="h-48 w-auto object-cover">
                    <div class="flex flex-row gap-2 pt-2 bg-grey-light">
                      <img src="https://cap.marche.be/media/portrait-1.JPG" alt="team"
                           class="rounded-full h-6 w-6">
                      <div class="flex flex-col text-blue-default h-44">
                        <span>{{ item.date }}</span>
                        <h4 class="font-pathway-semi-bold text-lg">{{ item.name }}</h4>
                                    <span>{{ item.excerpt }}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <a href="https://cap.marche.be/evenements" class="block ml-auto w-52 mt-2">
                <div
                    class="bg-blue-default hover:bg-blue-lighter text-white w-64 pt-2 p-3 text-lg flex flex-row justify-center items-center">
                    Voir plus d’évenements
                </div>
            </a>
        </div>
    </section>
</template>
<style>
a.news-block:hover {
    box-shadow: 0px 0px 42px 3px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 0px 42px 3px rgba(0, 0, 0, 0.2);
}
</style>
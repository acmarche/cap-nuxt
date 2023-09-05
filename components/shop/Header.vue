<script setup lang="ts">
import {itemsShort} from "~/composables/menuItemsGet";

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()
</script>
<template>
  <header class="flex flex-row items-center" shop="null">
    <NuxtLink to="/" title="Cap sur Marche - retour à l'accueil">
      <img class="" src="https://cap.marche.be/templates/commercio/resources/capMarcheLogo.png" width="58" height="82"
           alt="Logo Cap sur Marche">
    </NuxtLink>
    <div class="flex flex-col pl-2 gap-2">
      <h1 class="text-3xl font-pathway-semi-bold">
        {{ shop.societe }}
      </h1>
      <ShopBreadcumb :path="shop.classements[0].path" text-color="text-grey-dark"
                     text-color-hover="hover:text-blue-default"/>
    </div>
    <div class="ml-auto flex flex-row items-center font-pathway-semi-bold text-lg space-x-4">
      <NuxtLink v-for="item in itemsShort" :to="item.url" :key="item.id" title=""
                class="font-pathway-regular text-grey-dark  h-12">
        {{ item.name }}
      </NuxtLink>
      <form class="relative mb-3 h-12 w-[22rem]">
        <input type="search"
               class="placeholder-text-grey-light absolute inset-0 rounded-2xl border border-slate-300 bg-white pl-12 pr-12 focus:border-white focus:outline-none focus:ring focus:ring-blue-400"
               placeholder="Rechercher un commerçant"/>
        <div class="absolute bottom-0 left-0 top-0 flex w-12 items-center justify-center">
          <svg class="hi-outline hi-magnifying-glass inline-block h-6 w-6 text-slate-500"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
        </div>
      </form>
      <NuxtLink to="/" title="Retour à la page d'accueil">
        <img src="https://cap.marche.be/templates/commercio/resources/rightCorner2.png" width="164" height="148"
             alt="Côté droite"/>
      </NuxtLink>
    </div>
  </header>
</template>
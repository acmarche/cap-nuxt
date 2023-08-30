<script setup lang="ts">

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()
</script>
<template>
  <header class="flex flex-row items-center" shop="null">
    <a href="https://cap.marche.be//accueil" title="Cap sur Marche - retour à l'accueil">
      <img class="" src="https://cap.marche.be/templates/commercio/resources/capMarcheLogo.png" width="58" height="82"
           alt="Logo Cap sur Marche">
    </a>
    <div class="flex flex-col pl-2">
      <h1 class="text-3xl font-pathway-semi-bold">
        {{ shop.societe }}
      </h1>
      <ShopBreadcumb :shop="shop"/>
    </div>
    <div class="ml-auto flex flex-row items-center font-pathway-semi-bold text-lg space-x-4">
      <a href="/tous-les-commerces" title="À propos de nous" class="">
        Commerces
      </a>
      <a href="/secteurs" title="Trouvez-nous sur la carte !" class="">
        Secteurs
      </a>
      <form class="relative mb-3 h-12 w-80">
        <input type="text"
               class="absolute inset-0 rounded-2xl border border-slate-300 bg-white pl-12 pr-12 focus:border-white focus:outline-none focus:ring focus:ring-blue-400"
               placeholder="Rechercher un commerçant"/>
        <div class="absolute bottom-0 left-0 top-0 flex w-12 items-center justify-center">
          <svg class="hi-outline hi-magnifying-glass inline-block h-6 w-6 text-slate-500"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
        </div>
        <div class="absolute bottom-0 right-0 top-0 flex w-12 items-center justify-center">
          <button type="button"
                  class="inline-flex h-5 w-5 items-center justify-center text-slate-600 hover:text-slate-900">
            <svg class="hi-outline hi-x-mark inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </form>
      <!--
              <form class="flex flex-row items-center relative">
                <IconSearch class="h-5 w-5 flex-shrink-0 text-gray-400 top-3 left-2 absolute" aria-hidden="true"/>
                <input
                    autocomplete="off" placeholder="Rechercher un commerçant" type="search"
                    class="text-base font-pathway-regular w-72 bg-grey-light border-0 rounded-lg pl-8">
              </form>
      -->
      <a href="/" title="Retour à la page d'accueil">
        <img src="https://cap.marche.be/templates/commercio/resources/rightCorner2.png" width="164" height="148"
             alt="Côté droite"/>
      </a>
    </div>
  </header>
</template>
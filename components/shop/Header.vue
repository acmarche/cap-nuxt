<script setup lang="ts">
import {MagnifyingGlassIcon} from '@heroicons/vue/20/solid'

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()
</script>
<template>
  <header class="">
    <div class="flex flex-row items-center">
      <a href="https://cap.marche.be//accueil" title="Cap sur Marche - retour à l'accueil">
        <img class="" src="https://cap.marche.be/templates/commercio/resources/capMarcheLogo.png" width="58" height="82"
             alt="Logo Cap sur Marche">
      </a>
      <div class="flex flex-col">
        <h1 class="text-3xl font-pathway-semi-bold">
          {{ shop.societe }}
        </h1>
        <ShopBreadcumb/>
      </div>
      <div class="ml-auto flex flex-row items-center font-pathway-semi-bold text-lg space-x-4">
        <a href="https://cap.marche.be//cap-sur-marche" title="À propos de nous" class="">
          À propos
        </a>
        <a href="#map" title="Trouvez-nous sur la carte !" class="">
          Nous trouver
        </a>
        <form class="flex flex-row items-center">
          <MagnifyingGlassIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
          <input
              autocomplete="off" id="commerceSearchInput" placeholder="Rechercher un commerçant" type="search">
        </form>
        <a href="/" title="Retour à la page d'accueil">
          <img src="https://cap.marche.be/templates/commercio/resources/rightCorner2.png" width="164" height="148"
               alt="Côté droite"/>
        </a>
      </div>
    </div>
  </header>
</template>
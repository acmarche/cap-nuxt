<script setup lang="ts">
import {IconSearch} from '@tabler/icons-vue';

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
        <ShopBreadcumb :shop="shop"/>
      </div>
      <div class="ml-auto flex flex-row items-center font-pathway-semi-bold text-lg space-x-4">
        <a href="/tous-les-commerces" title="À propos de nous" class="">
          Commerces
        </a>
        <a href="/secteurs" title="Trouvez-nous sur la carte !" class="">
          Secteurs
        </a>
        <form class="flex flex-row items-center">
          <IconSearch class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
          <input
              autocomplete="off" placeholder="Rechercher un commerçant" type="search" class="w-72">
        </form>
        <a href="/" title="Retour à la page d'accueil">
          <img src="https://cap.marche.be/templates/commercio/resources/rightCorner2.png" width="164" height="148"
               alt="Côté droite"/>
        </a>
      </div>
    </div>
  </header>
</template>
<script setup>
import {IconBrandFacebook} from '@tabler/icons-vue';
</script>

<template>
  <section class="flex flex-row justify-between items-center bg-blue-lighter">
    <img class="self-start" src="/images/leftIlluCSM.png" width="743" height="188" alt="">
    <div class="flex flex-col gap-3 w-full">
      <h2 class="text-xl text-white font-pathway-semi-bold">
        Vous souhaitez suivre l'actualité de Cap sur Marche et découvrir nos événements ?
      </h2>
      <div class="flex flex-row items-center gap-3 my-4">
        <p class="text-white">Visitez notre page Facebook.</p>
        <NuxtLink class="flex items-center justify-center p-4 bg-white text-blue-default uppercase"
           to="https://www.facebook.com/CAPmarche/"
           target="_blank"
           title="Visitez la page Facebook de Cap sur Marche !">
          <IconBrandFacebook class="h-8 w-8 flex-shrink-0 text-gray-400 hover:text-blue-default" aria-hidden="true"/>
          <span>Cap sur Marche</span>
        </NuxtLink>
      </div>
    </div>
    <img class="self-start" src="/images/rightIlluCSM.png" width="341" height="187" alt="">
  </section>
</template>
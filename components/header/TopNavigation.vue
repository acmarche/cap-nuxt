<script setup>
import {items} from "~/composables/menuItemsGet";
</script>
<template>
  <nav
      class="overflow-hidden bg-white flex flex-col lg:flex-row absolute lg:static left-0 right-0 top-24 w-full lg:w-auto gap-4 items-center text-lg mr-4 font-pathway-regular text-grey-dark">
    <a v-for="item in items" :key="item.id" :href="item.url"
       class="">
      {{ item.name }}
    </a>
    <a href="/" class="w-6 space-x-6 mr-4">
      <img src="assets/src/resources/iconLogin.png" alt="login"/>
    </a>
  </nav>
</template>
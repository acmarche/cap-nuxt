<script setup>
import {items} from "~/composables/menuItemsGet";
</script>
<template>
  <nav class="flex gap-4 items-center text-lg mr-4 font-pathway-regular">
    <a v-for="item in items" :key="item.id" :href="item.url"
       class="">
      {{ item.name }}
    </a>
    <a href="/" class="w-6 space-x-6 mr-4">
      <img src="assets/src/resources/iconLogin.png" alt="login"/>
    </a>
  </nav>
</template>
<script setup>
import {items} from "~/composables/menuItemsGet";
</script>
<template>
  <ul class="flex gap-4 items-center text-lg mr-4 font-pathway-semi-bold">
    <li v-for="item in items" :key="item.id"
        class="">
      <a href="#">{{ item.name }}</a>
    </li>
  </ul>
</template>
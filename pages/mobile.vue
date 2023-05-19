<script setup>
import {items} from "~/composables/menuItemsGet";

const mobileMenu = ref(false)
definePageMeta({
  layout: 'noheaderlayout',
  title: 'test',
})
</script>
<template>
  <nav class="flex flex-col items-center justify-center">
    <a href="/" class="" @click.prevent="mobileMenu = !mobileMenu">
      <img src="assets/src/resources/wholeLogo.png" alt="logo"/>
    </a>
    <ul
        :class="mobileMenu ? 'h-[450px]' : 'h-0'"
        class="overflow-hidden absolute left-0 right-0 top-20 w-full mb-24 bg-white transition-all duration-700 ease-in-out flex flex-col items-center text-lg font-pathway-semi-bold text-grey-dark">
      <li v-for="item in items" :key="item.id"
          class="flex flex-col items-center justify-center w-full hover:text-blue-default border-t border-grey-lighter divide-y-4 divide-red-500">
        <a href="#" class="block p-8">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>
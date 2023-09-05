<script setup>
import {items} from "~/composables/menuItemsGet";

const {mobileMenu = false} = defineProps(['mobileMenu'])
</script>
<template>
  <nav
      :class="mobileMenu ? 'h-screen' : 'h-0'"
      class="overflow-hidden z-20  lg:h-full lg:z-auto bg-white flex flex-col lg:flex-row lg:gap-4 absolute lg:static left-0 right-0 top-28 w-full lg:w-auto items-center text-lg mr-4 font-pathway-regular text-grey-dark transition-all duration-700 ease-in-out ">
    <NuxtLink v-for="item in items" :key="item.id" :to="item.url"
              class="flex flex-col lg:block items-center justify-center w-full lg:w-auto p-4 lg:p-0 hover:text-blue-default border-t-2 lg:border-0 border-grey-lighter">
      {{ item.name }}
    </NuxtLink>
    <NuxtLink to="/" class="w-6 space-x-6 lg:mr-4">
      <img src="/images/iconLogin.png" alt="login"/>
    </NuxtLink>
  </nav>
</template>
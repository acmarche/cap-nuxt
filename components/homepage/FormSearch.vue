<!-- https://dribbble.com/ -->
<script setup lang="ts">
</script>
<template>
  <form name="searching"
        class="mx-4 lg:mx-auto flex lg:flex w-full lg:w-1/2 lg:col-span-2 mt-44 mb-56 lg:mt-44 lg:mb-56">
    <label class="block" for="search">
      <span class="sr-only">Rechercher</span>
    </label>
    <input
        type="search"
        id="search"
        name="s"
        autocomplete="off"
        placeholder="Rechercher un commerce"
        class="block flex-grow rounded-md border border-gray-300 bg-white lg:pr-2 font-light text-blue-default placeholder:italic placeholder:text-gray-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
    />
    <button
        type="submit"
        class="i-search relative right-12 top-0 h-16 w-16 bg-blue-default rounded-r-md">
      <IconsIconSearch :class="'text-white flex mx-auto'"/>
    </button>
  </form>
</template>
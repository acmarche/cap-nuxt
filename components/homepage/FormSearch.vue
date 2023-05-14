<!-- https://dribbble.com/ -->
<script setup lang="ts">
import IconSearch from "~/components/Icons/IconSearch.vue";
</script>
<template>
    <form name="searching" class="mx-auto hidden lg:flex lg:w-[35rem] col-span-2">
        <label class="block" for="search">
            <span class="sr-only">Rechercher</span>
        </label>
        <input
                type="search"
                id="search"
                name="s"
                autocomplete="off"
                placeholder="Rechercher un commerce"
                class="block flex-grow rounded-full border border-gray-300 bg-white py-3 pl-9 pr-16 font-light leading-5 text-teal-300 placeholder:italic placeholder:text-gray-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
        <button
                type="submit"
                class="i-search relative right-12 top-0 h-12 w-12 bg-blue-default rounded-md">
            <IconSearch :class="'text-white flex mx-auto'"/>
        </button>
    </form>
</template>
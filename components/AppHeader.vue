<script setup>
import Items from "@/components/header/Items.vue";
</script>
<template>
    <header class="flex justify-end items-center w-full px-3 bg-white shadow-md h-32">
        <a href="/" class="mr-auto self-center">
            <img src="assets/src/resources/wholeLogo.png" alt="logo"/>
        </a>
        <Items/>
        <a href="/" class="w-6 space-x-6 mr-4">
            <img src="assets/src/resources/iconLogin.png" alt="login"/>
        </a>
    </header>
</template>
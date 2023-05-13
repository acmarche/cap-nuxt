<template>
    <div class="flex h-16 bg-blue-banner relative">
        <div class="absolute inset-0 bg-white z-10 w-36 h16"></div>
        <div class="relative w-1/3 bg-white angle"></div>
        <div class="text-white flex">
            <div class="flex items-center pl-12 px-8 text-lg">
                Inscrivez-vous à la newsletter
            </div>
            <div class="bg-blue-default flex items-center px-5 text-lg">
                Par ici !
            </div>
        </div>
    </div>
</template>
<style>
#triangle-bottomright {
    width: 0;
    height: 0;
    border-bottom: 4rem solid #9AD7F7;
    border-left: 4rem solid transparent;
}
.angle {
    transform:skew(120deg);
}
</style>
<script setup lang="ts">
</script>
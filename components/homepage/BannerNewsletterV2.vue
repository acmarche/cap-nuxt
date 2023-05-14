<template>
    <div class="col-start-2 row-start-3 justify-self-end self-end flex h-16 relative text-white -bottom-5 w-full">
        <div class="w-36 h16 triangle-bottomright"></div>
        <div class="flex items-center pl-12 px-8 text-lg  bg-blue-banner">
            Inscrivez-vous à la newsletter
        </div>
        <div class="bg-blue-default flex items-center px-5 text-lg">
            Par ici !
        </div>
        <div class="flex-grow bg-blue-banner"></div>
    </div>
</template>
<style>
.triangle-bottomright {
    width: 0;
    height: 0;
    border-bottom: 4rem solid #9AD7F7;
    border-left: 4rem solid transparent;
}

.angle {
    transform: skew(120deg);
}
</style>
<script setup lang="ts">
</script>
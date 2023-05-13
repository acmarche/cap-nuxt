<template>
    <div class="flex h-16 bg-blue-banner">
        <div class="w-1/3 bg-white">Empty</div>
        <div class="bg-white" id="triangle-bottomright">

        </div>
        <div class="text-white flex">
            <div class="flex items-center px-8 text-lg">
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
</style>
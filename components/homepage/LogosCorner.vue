<template>
    <div class="bigTriangle col-start-1 row-start-3 justify-self-start self-end">
    </div>
    <div class="flex flex-row items-center justify-start gap-3 z-30 col-start-1 row-start-3 justify-self-start self-end">
        <a href="/" class="">
            <img src="assets/src/resources/logoHome1.png" alt="marche" class="h-auto w-28">
        </a>
        <a href="/">
            <img src="assets/src/resources/logoHome2.png" alt="adl" class="h-auto w-28">
        </a>
    </div>
</template>
<style>
.bigTriangle {
    border-width: 195px 0 0 490px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    opacity: 0.6;
    border-style: solid;
    border-color: transparent transparent transparent #4f8ea5;
    -webkit-transition: all 0.7s ease;
    -moz-transition: all 0.7s ease;
    -ms-transition: all 0.7s ease;
    -o-transition: all 0.7s ease;
    transition: all 0.7s ease;
}
</style>
<template>
  <div class="bigTriangle lg:col-start-1 lg:row-start-3 justify-self-start lg:self-end"></div>
  <div
      class="flex flex-row gap-3 pb-3 z-10 lg:col-start-1 lg:row-start-3 lg:self-end">
    <NuxtLink to="https://www.marche.be" class="">
      <img src="/images/logoHome1.png" alt="marche" class="h-auto w-28">
    </NuxtLink>
    <NuxtLink to="https://adl.marche.be">
      <img src="/images/logoHome2.png" alt="adl" class="h-auto w-28">
    </NuxtLink>
  </div>
</template>
<style>
.bigTriangle {
  /*border-width: 195px 0 0 490px;*/
  @apply border-r-0 border-b-0 border-t-[135px] border-l-[490px];
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
<template>
    <section
        class="w-full mt-12 lg:mt-0 flex flex-col lg:flex-row text-blue-default items-center justify-start">
      <div class="bg-merchants-map w-full lg:w-3/5 h-60 bg-no-repeat bg-left bg-cover"></div>
      <div class="w-full lg:w-2/5 flex items-center lg:items-start flex-col justify-center gap-3">
        <h3 class="text-2xl font-pathway-bold">DÉCOUVREZ LA CARTE DES COMMERÇANTS</h3>
        <a href="/">
          <div
              class="text-white bg-blue-default hover:bg-blue-lighter p-1 text-lg flex flex-row justify-center items-center">
            Découvrir la carte des commerçants
          </div>
        </a>
      </div>
    </section>
</template>
<style>
.bg-merchants-map {
  background-image: url('/assets/src/resources/bg-map-diagonal.png');
}
</style>
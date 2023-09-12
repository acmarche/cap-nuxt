<template>
    <section
        class="w-full mt-12 lg:mt-0 flex flex-col lg:flex-row text-green-default items-center justify-start">
      <div class="hidden lg:flex w-2/5 lg:flex-col lg:justify-center lg:gap-3 lg:items-center">
        <h3 class="text-2xl font-pathway-bold">DEVENEZ MEMBRE DE CAP</h3>
      </div>
      <div
          class="bg-member-became w-full lg:w-3/5 h-60 bg-no-repeat bg-right bg-cover text-white flex flex-col items-center justify-center gap-3">
        <h3 class="text-2xl font-pathway-bold">ENVIE DE DEVENIR MEMBRE ?</h3>
        <NuxtLink to="/cap-sur-marche">
          <div
              class="hover:bg-green-light hover:text-white border border-white h-16 w-64 p-1 text-lg flex flex-row justify-center items-center">
            C’est par ici !
          </div>
        </NuxtLink>
      </div>
    </section>
</template>
<style>
.bg-member-became {
  background-image: url('/images/bg-member-diagonal.png');
}
</style>
<template>
  <div
      class="flex md:z-50 md:ml-auto w-full md:w-[60rem] md:pl-20 h-16 bg-blue-banner md:absolute -top-16 right-0 left-0 bg-newsletter"
  >
    <div class="text-white flex flex-col md:flex-row md:pl-20">
      <div class="flex items-center md:pl-12 px-8 text-lg">
        Inscrivez-vous à la newsletter
      </div>
      <div class="bg-blue-default flex items-center px-5 text-lg">
        Par ici !
      </div>
    </div>
  </div>
</template>
<style>
@media (min-width: 768px) {
  .bg-newsletter {
    background: url('/images/bg-newsletter.png') no-repeat center left;
  }
}

#triangle-bottomright {
  width: 0;
  height: 0;
  border-bottom: 4rem solid #9AD7F7;
  border-left: 4rem solid transparent;
}

.angle {
  transform: skew(120deg);
}
</style>
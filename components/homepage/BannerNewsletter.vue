<template>
    <div class="flex z-50 ml-auto w-[60rem] h-16 bg-blue-banner absolute -top-16 right-0 left-0 bg-newsletter">
      <div class="text-white flex pl-20">
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
.bg-newsletter {
  background: url('/images/bg-newsletter.png') no-repeat center left;
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
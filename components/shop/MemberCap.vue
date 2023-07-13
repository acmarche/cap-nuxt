<template>
  <div id="csmStamp" class="flex flex-row items-c justify-between">
    <img class="illuCSM" src="https://cap.marche.be/templates/commercio/resources/leftIlluCSM.png"
         width="743" height="188" alt="">
    <div class="csmInfo text-white self-center">
      <h2 class="text-2xl font-pathway-semi-bold p-2"> Les 9 grains d'or fait partie de « Cap sur Marche ! »</h2>
      <div class="flex flex-row gap-2">
        <a class="blockLink reverseLink" href="https://cap.marche.be//cap-sur-marche"
           title="Découvrez-en plus sur Cap sur Marche">Découvrez-en plus <span
            class="cornerBit hasTransitions"></span> <span class="cornerBit hasTransitions"></span>
        </a>
        <p>ou</p>
        <a id="newsletterTrigger" class="blockLink reverseLink" href="#"
           title="Recevez notre newsletter">Recevez notre newsletter <span
            class="cornerBit hasTransitions"></span> <span class="cornerBit hasTransitions"></span>
        </a>
      </div>
    </div>
    <img class="illuCSM "
         src="https://cap.marche.be/templates/commercio/resources/rightIlluCSM.png"
         width="341" height="187" alt="">
  </div>
</template>
<style>
#csmStamp, .csmStamp {
  width: 100%;
  background-color: #4f8ea5;
  height: 187px;
  /*overflow: hidden;*/
  position: relative;
  text-align: center;
}
</style>
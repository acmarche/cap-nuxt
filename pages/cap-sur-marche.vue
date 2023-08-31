<script setup>
definePageMeta({
  layout: 'default',
})
</script>
<template>
  <section>
    <div class="bg-about bg-cover w-full h-[32rem]">
      <div class="bigTriangle bigTriangleTransition"></div>
      <div class="bigTriangle2 bigTriangle2Transition"></div>
    </div>
    <section class="bg-middle-about bg-grey-tt">
      <AboutIntro/>
      <AboutTeam/>
    </section>
    <AboutBannerNews/>
    <AboutMemberForm/>
  </section>
</template>
<style>
.bg-about {
  background: url('/images/backgroundApropos.png') no-repeat center center;
}

.bg-middle-about {
  background: url('/images/middleCrystalBlue.png') no-repeat bottom right;
  background-size: 420px;
}
</style>
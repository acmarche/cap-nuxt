<script setup>
definePageMeta({
  layout: 'default',
})
</script>
<template>
  <section>
    <div class="bg-about bg-cover w-full h-80">
      <div class="bigTriangle bigTriangleTransition"></div>
      <div class="bigTriangle2 bigTriangle2Transition"></div>
    </div>
    <AboutIntro/>
    <AboutTeam/>
    <AboutMemberForm/>
  </section>
</template>
<style>
.bg-about {
  background: url('/images/backgroundApropos.png') no-repeat center center;
}
</style>
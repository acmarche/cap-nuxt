<script setup lang="ts">
const {textColor} = defineProps<{ textColor: { type: String, default: 'text-grey-dark' }, }>()
</script>
<template>
  <div class="flex flex-row items-center justify-end gap-4 my-8 mr-8 border-b-2 border-gray-300 pb-8">
    <div class="flex flex-row items-center justify-center gap-2">
      <img src="/images/openIcon.png" width="30"
           height="29" alt="Ouvert en ce moment" class="mr-2">
      <span :class="textColor">Ouvert en ce moment</span>
    </div>
    <div class="flex flex-row items-center justify-center gap-2">
      <img src="/images/openMidi.png" width="31"
           height="30" alt="Ouvert à midi" class="mr-2">
      <span :class="textColor">Ouvert à midi</span>
    </div>
    <div class="flex flex-row items-center justify-center gap-2">
      <img src="/images/openDimanche.png"
           width="31" height="29" alt="Ouvert le dimanche" class="mr-2">
      <span :class="textColor">Ouvert le dimanche</span>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate:(titleChunk)=>{
    return titleChunk ? `${titleChunk} - 'Cap sur Marche'`:'Cap sur Marche';
  }
})
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#3a87a4ff" />
    <NuxtPage/>
  </NuxtLayout>
</template>
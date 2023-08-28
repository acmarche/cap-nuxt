<script setup>
const msg = ref('')
</script>
<template>
  <DraftMyInput v-model="msg"/>
    <p>message: {{ msg }}</p>
</template>
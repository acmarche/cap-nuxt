<script setup lang="ts">
const modelValue = defineModel()

console.log(modelValue.value)
</script>

<template>
    <input v-model="modelValue">
</template>
<script setup>
import MyInput from "~/components/draft/MyInput.vue";

const msg = ref('')
</script>
<template>
    <MyInput v-model="msg"/>
    <p>message: {{ msg }}</p>
</template>
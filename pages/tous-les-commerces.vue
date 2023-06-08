<script setup>
import FormSearchShops from "~/components/shops/FormSearchShops.vue";

definePageMeta({
  layout: 'default',
  title: 'test',
})

const categorySelected = ref(0)
const childSelected = ref(0)

</script>
<template>
  <section class="w-full">

    <p>categorySelected: {{ categorySelected }}</p>
    <p>childSelected: {{ childSelected }}</p>

    <div class="bg-form text-white bg-blue-search p-28">
      <h1 class="text-4xl mb-8 font-pathway-semi-bold">NOS COMMERCES</h1>
      <FormSearchShops v-model:categorySelected="categorySelected" v-model:childSelected="childSelected"/>
    </div>

  </section>
</template>
<style>
.bg-form {
  background-image: url('/assets/src/resources/triangleBackground.png');
}
</style>
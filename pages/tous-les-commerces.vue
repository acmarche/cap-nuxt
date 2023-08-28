<script setup>
import FormSearchShops from "~/components/shops/FormSearchShops.vue";
import ListResult from "~/components/shops/ListResult.vue";
import LegendIcones from "~/components/shops/LegendIcones.vue";

definePageMeta({
  layout: 'default',
  title: 'test',
})

const categorySelected = ref(0)
const childSelected = ref(0)

const {
  data,
  error,
  pending
} = await useFetch(() => `http://api.local/bottin/fiches/cap/rubrique/${childSelected.value}`, {
  onRequest({request, options}) {
  },
  onRequestError({request, options, error}) {
    console.log(error)
  },
  onResponse({request, response, options}) {
    console.log(123)
  },
  onResponseError({request, response, options}) {
    console.log(response)
  },
});

</script>
<template>
  <section class="w-full">
    <p>categorySelected: {{ categorySelected }}</p>
    <p>childSelected: {{ childSelected }}</p>
    <div class="bg-shops-form text-white bg-blue-search p-28">
      <h1 class="text-4xl mb-8 font-pathway-semi-bold">NOS COMMERCES</h1>
      <FormSearchShops v-model:categorySelected="categorySelected" v-model:childSelected="childSelected"/>
    </div>

    <LegendIcones/>

    <span v-if="pending">Loading...</span>
    <div v-else-if="data">
      <ListResult :fiches="data"/>
    </div>
    <span v-else-if="error">Error: {{ error }}</span>

  </section>
</template>
<style>
.bg-shops-form {
  background-image: url('/assets/src/resources/triangleBackground.png');
}
</style>
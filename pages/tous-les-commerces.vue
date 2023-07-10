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
const fiches = ref([])

watch(childSelected, async (newchildSelected, oldQuestion) => {
  if (newchildSelected > 0) {
    console.log(newchildSelected)
    const url = computed(() => `http://api.local/bottin/fiches/rubrique/${newchildSelected}`)
    console.log(url.value)
    const {data: fiches2} = await useFetch(url.value)
    fiches.value = fiches2.value
  }
})
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
    <ListResult :fiches="fiches"/>

  </section>
</template>
<style>
.bg-shops-form {
  background-image: url('/assets/src/resources/triangleBackground.png');
}
</style>
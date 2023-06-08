<script setup>
import categoriesGet from "~/composables/categoriesGet";
import MyInput from "~/components/draft/MyInput.vue";

definePageMeta({
  layout: 'default',
  title: 'test',
})

const msg = ref('')
const categorySelected = ref(0)
const childSelected = ref(0)

const {
  pendingCategories,
  categories,
  errorCategories
} = categoriesGet()

const url = computed(() => `http://api.local/bottin/categories/byparent/${categorySelected.value}`)
const {data: childs} = useFetch(url)

</script>
<template>
  <section class="w-full">

    <MyInput v-model="msg"/>
    <p>message: {{ msg }}</p>
    <p>message: {{ categorySelected }}</p>

    <div class="bg-form text-white bg-blue-search p-28">
      <h1 class="text-4xl mb-8 font-pathway-semi-bold">NOS COMMERCES</h1>
      <form name="search" class="flex flex-row gap-2">
        <template v-if="pendingCategories">
          Loading Events...
        </template>
        <template v-if="errorCategories" class="text-red-600">
          Error {{ errorCategories }}
        </template>
        <div class="flex flex-col basis-1/2	">
          <h2 class="text-xl uppercase font-pathway-semi-bold mb-2">TRIER PAR CATÉGORIE</h2>
          <select name="category" v-if="categories" class="text-grey-e" v-model="categorySelected">
            <option value="0">Choisir une catégorie</option>
            <option v-for="category in categories" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="flex flex-col basis-1/2	">
          <h2 class="text-xl uppercase font-pathway-semi-bold mb-2">TRIER PAR SOUS-CATÉGORIE</h2>
          <select name="child" class="text-grey-e" v-model="childSelected">
            <option value="0">Choisir une catégorie</option>
            <option v-if="childs" v-for="child in childs" :value="child.id">
              {{ child.name }}
            </option>
          </select>
        </div>

        <div class="flex flex-row mt-6">
        <span class="text-lg uppercase mr-3">
        OUVERT LE DIMANCHE
        <input type="checkbox" name="open_sunday">
        </span>
          <span class="text-lg uppercase">
        OUVERT SUR LE TEMPS DE MIDI
          <input type="checkbox" name="open_noon">
        </span>
        </div>

      </form>
    </div>

  </section>
</template>
<style>
.bg-form {
  background-image: url('/assets/src/resources/triangleBackground.png');
}
</style>
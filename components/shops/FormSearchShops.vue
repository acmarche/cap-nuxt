<script setup>
import categoriesGet from "~/composables/categoriesGet";
import categoriesByParentGet from "~/composables/categoriesByParentGet";

const propos = defineProps({
  categorySelected: Number,
  childSelected: Number
})

const catSelected = ref(propos.categorySelected)
const childSelected = ref(propos.childSelected)
const emits = defineEmits(['update:categorySelected', 'update:childSelected'])
const children = ref([])

const {
  pending: pendingCategories,
  categories,
  error: errorCategories
} = categoriesGet()

function upd() {
  emits('update:categorySelected', catSelected.value)
  emits('update:childSelected', childSelected.value)
}

watch(catSelected, (newCategoryId) => {
  if (newCategoryId !== null) {
    console.log(newCategoryId)
    const {
      pending: pendingChildren,
      data,
      error: errorChildren
    } = categoriesByParentGet(newCategoryId)
    children.value = data.value
  }
});
</script>
<template>
  <form name="search" class="">
    <template v-if="pendingCategories">
      Loading Events...
    </template>
    <template v-if="errorCategories" class="text-red-600">
      Error {{ errorCategories }}
    </template>

    <div class="flex flex-row gap-2">
      <div class="flex flex-col basis-1/2	">
        <h2 class="text-xl uppercase font-pathway-semi-bold mb-2">TRIER PAR CATÉGORIE</h2>
        <select name="category" v-if="categories" class="text-grey-e" v-model="catSelected" @change="upd">
          <option value="0">Choisir une catégorie</option>
          <option v-for="category in categories" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>

      <div class="flex flex-col basis-1/2	">
        <h2 class="text-xl uppercase font-pathway-semi-bold mb-2">TRIER PAR SOUS-CATÉGORIE</h2>
        <select name="child" class="text-grey-e" v-model="childSelected" @change="upd">
          <option value="0">Choisir une catégorie</option>
          <option v-if="children" v-for="child in children" :value="child.id">
            {{ child.name }}
          </option>
        </select>
      </div>

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
</template>
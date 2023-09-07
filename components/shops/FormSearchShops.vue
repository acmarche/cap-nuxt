<script setup>
import categoriesGet from "~/composables/categoriesGet";

const propos = defineProps({
  categorySelected: Number,
  childSelected: Number,
  openSunday: Boolean,
  openNoon: Boolean,
})

const catSelected = ref(propos.categorySelected)
const childSelected = ref(propos.childSelected)
const openSunday = ref(propos.openSunday)
const openNoon = ref(propos.openNoon)
const emits = defineEmits(['update:category-selected', 'update:child-selected', 'update:open-sunday', 'update:open-noon'])

const {data: categories} = categoriesGet()

function upd() {
  emits('update:category-selected', catSelected.value)
}

function upd2() {
  emits('update:child-selected', childSelected.value)
}

const url = computed(() => `http://api.local/bottin/categories/byparent/${catSelected.value}`)
const {data: children} = useFetch(url)

watch(openSunday, (newValue) => {
   emits('update:open-sunday', newValue)
})

watch(openNoon, (newValue) => {
   emits('update:open-noon', newValue)
})

</script>
<template>
  <form name="search" class="">
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
        <select name="child" class="text-grey-e" v-model="childSelected" @change="upd2">
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
        <input type="checkbox" name="open_sunday" v-model="openSunday">
        </span>
      <span class="text-lg uppercase">
        OUVERT SUR LE TEMPS DE MIDI
          <input type="checkbox" name="open_noon" v-model="openNoon">
        </span>
    </div>

  </form>
</template>
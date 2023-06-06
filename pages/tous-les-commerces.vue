<script setup>
import categoriesGet from "~/composables/categoriesGet";

const {
  pendingCategories,
  categories,
  errorCategories
} = categoriesGet()

</script>
<template>
  <section>

    <div class="bgform text-white bg-blue-search p-28">
      <h1 class="text-4xl mb-8">NOS COMMERCES</h1>
      <form name="search" class="flex flex-row gap-2">

        <div class="flex flex-col basis-1/2	">
          <h2 class="text-lg uppercase">TRIER PAR CATÉGORIE</h2>
          <select name="category">
            <option value="0">Choisir une catégorie</option>
          </select>
        </div>

        <div class="flex flex-col basis-1/2	">
          <h2 class="text-lg uppercase">TRIER PAR SOUS-CATÉGORIE</h2>
          <select name="child">
            <option value="0">Choisir une catégorie</option>
          </select>
        </div>

      </form>

      <div class="flex flex-row">
        <span class="text-lg uppercase">
        OUVERT LE DIMANCHE ￼<input type="checkbox" name="open_sunday">
          ￼</span>
        <span class="text-lg uppercase">
        OUVERT SUR LE TEMPS DE MIDI <input type="checkbox" name="open_noon">
        </span>
      </div>
    </div>

  </section>
</template>

<style>
.bgform {
  background-image: url('/assets/src/resources/triangleBackground.png');
}
</style>
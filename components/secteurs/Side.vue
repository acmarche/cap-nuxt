<template>
  <aside class="bg-blue-lighter text-white px-20 py-4 ">
    <h1 class="text-3xl font-pathway-medium mb-3">Nos catégories</h1>
    <p>Naviguer facilement dans les 12 catégories proposées sur cette page afin de dénicher votre expert local.</p>
    <p>
      Ces secteurs vous donnent facilement accès aux commerces marchois, artisans et professions libérales de la
      ville de Marche-en-Famenne.
    </p>
    <div class="flex flex-row space-x-4 my-4">
      <NuxtLink class="flex items-center p-2 bg-white text-blue-default uppercase"
                to="/tous-les-commerces"
                title="Découvrez tous les commerçants">
        Tous les commerçants
      </NuxtLink>
      <NuxtLink
          to="/carte"
          class="flex items-center p-2 bg-white text-blue-default uppercase"
          title="Voir tous les commerces sur la carte">
        Voir la carte
      </NuxtLink>
    </div>
  </aside>
</template>
<style>
.blueRectangle {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 130px 320px 0 0;
  border-color: #5c9ab0 transparent transparent transparent;
}
</style>
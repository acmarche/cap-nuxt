<script setup lang="ts">
import {IconChevronRight} from '@tabler/icons-vue';

const {category} = defineProps<{
  category: { type: Object, required: true },
}>()
console.log(category)
</script>
<template>
  <header class="bg-search-header bg-blue-search p-12">
    <h1 itemprop="headline" class="text-3xl text-white font-pathway-semi-bold uppercase mb-3">
      {{ category.name }} à Marche-en-Famenne</h1>

    <nav class="flex" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-2">
        <li>
          <div>
            <a href="/secteurs" class="text-white hover:text-green-default">
              <span class="uppercase">Commerces et entreprises</span>
            </a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <IconChevronRight class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
            <a href="/secteur/services"
               class="text-sm font-medium text-white hover:text-green-default uppercase">Services</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <IconChevronRight class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
            <a href="/secteur/services/agences-immobilieres"
               class="text-sm font-medium text-white hover:text-green-default uppercase" aria-current="page">
              Agences immobilières</a>
          </div>
        </li>
      </ol>
    </nav>
    <p class="text-white m-3 prose lg:prose-xl">
      {{ category.description }}
    </p>
  </header>
</template>
<style>
.bg-search-header {
  background: #3a87a4ff url('/images/triangleBackground.png') no-repeat center center;
  background-size: cover;
}
</style>
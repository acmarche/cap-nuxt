<script setup lang="ts">
import {IconChevronRight} from '@tabler/icons-vue';
const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()
</script>
<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-2">
      <li>
        <div>
          <a href="/secteurs" class="text-grey-shop hover:text-gray-500">
            <span class="uppercase">Commerces et entreprises</span>
          </a>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <IconChevronRight class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
          <a href="/secteur/services"
             class="text-sm font-medium text-grey-shop hover:text-gray-700 uppercase">Services</a>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <IconChevronRight class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
          <a href="/secteur/services/agences-immobilieres"
             class="text-sm font-medium text-grey-shop hover:text-gray-700 uppercase" aria-current="page">
            Agences immobilières</a>
        </div>
      </li>
    </ol>
  </nav>
</template>
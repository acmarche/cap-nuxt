<script setup lang="ts">
import {IconChevronRight} from '@tabler/icons-vue';

const {path, textColor, textColorHover} = defineProps<{
  path: { type: Array<Object>, required: true, default: [] },
  textColor: { type: String, required: true, default: 'text-white' },
  textColorHover: { type: String, required: true, default: 'hover:text-green-default' },
}>()

const pathComputed = computed(() => path.map((element) => {
  if (element.id === 511 || element.id === 610) { //remove economie, commerces et entreprises
    return null;
  }
  return element;
}).filter((element) => element !== null));

</script>
<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-2">
      <li>
        <NuxtLink to="/secteurs" class="uppercase"
                  :class="`${textColor} ${textColorHover}`">
          Commerces et entreprises
        </NuxtLink>
      </li>
      <li v-for="path in pathComputed" class="flex items-center">
        <IconChevronRight class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
        <NuxtLink :href="`/secteurs/${path.slugname}`"
                  class="text-sm font-medium uppercase"
                  :class="`${textColor} ${textColorHover}`"
                  aria-current="page">{{ path.name }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
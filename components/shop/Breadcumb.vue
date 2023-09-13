<script setup lang="ts">
import {IconChevronRight} from '@tabler/icons-vue';
import generateBreadcrumb from "~/composables/generateBreadcrumb";

const {path, textColor, textColorHover} = defineProps<{
  path: { type: Array<Object>, required: true, default: [] },
  textColor: { type: String, required: true, default: 'text-white' },
  textColorHover: { type: String, required: true, default: 'hover:text-green-default' },
}>()

const pathComputed = computed(() => path.map((element: Object) => {
  if (element.id === 511 || element.id === 610) { //remove economie, commerces et entreprises
    return null;
  }
  return element;
}).filter((element) => element !== null));

const breadcrumb = generateBreadcrumb(pathComputed.value)
console.log(breadcrumb)
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
      <li v-for="(path, index) in pathComputed" class="flex items-center" :key="path.id">
        <IconChevronRight class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
        <NuxtLink :href="`${breadcrumb[index]}`"
                  class="text-sm font-medium uppercase"
                  :class="`${textColor} ${textColorHover}`"
                  aria-current="page">{{ path.name }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
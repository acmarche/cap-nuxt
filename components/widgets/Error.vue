<script setup lang="ts">
import {IconBug} from '@tabler/icons-vue';
const {error} = defineProps<{
  error: { type: String, required: true },
}>()
</script>

<template>
      <div v-else-if="error" class="text-red-600">
        <IconBug class="h-8 w-8 flex-shrink-0" aria-hidden="true"/>
        Error: {{ error }}
      </div>
</template>
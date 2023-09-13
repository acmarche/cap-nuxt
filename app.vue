<script setup lang="ts">
import {IconBug} from '@tabler/icons-vue';

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Cap sur Marche` : 'Cap sur Marche';
  }
})
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#3a87a4ff"/>
    <NuxtErrorBoundary>
      <template #error="{error}">
        <div class="flex flex-row gap-2 items-center justify-center my-5">
          <IconBug class="h-8 w-8 flex-shrink-0" aria-hidden="true"/>
          <p class="text-red-600">
            Oh no, something broke when loading the page
            <code>{{ error }}</code>
          </p>
          <p>
            <button
                class="hover:cursor-pointer"
                @click="clearError(error)">
              Go to homepage
            </button>
          </p>
        </div>
      </template>
      <NuxtPage/>
    </NuxtErrorBoundary>
  </NuxtLayout>
</template>
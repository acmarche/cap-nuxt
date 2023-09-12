<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 'Cap sur Marche'` : 'Cap sur Marche';
  }
})
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#3a87a4ff"/>
    <NuxtErrorBoundary>
      <template #error="{error}">
        <div>
          <p>
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
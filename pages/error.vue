<script setup>
//https://masteringnuxt.com/blog/how-to-use-error-handling-to-create-rock-solid-apps
const error = useError();
// Use the clearError method to clear the error and
// redirect back to the app.
const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>
<template>
  <NuxtLayout>
    <div class="prose">
      <!-- We use the status code to determine what to show -->
      <template v-if="error.statusCode === 404">
        <h1>404!</h1>
        <p>Sorry, that page doesn't exist.</p>
      </template>
      <template v-else>
        <h1>Dang</h1>
        <p>
          <!-- We can also show the actual error message -->
          <strong>{{ error.message }}</strong>
        </p>
        <p>It looks like something broke.</p>
        <p>Sorry about that.</p>
      </template>
      <p>
        Go back to your
        <!-- Handle the error for the user -->
        <a @click="handleError">
          dashboard.
        </a>
      </p>
    </div>
  </NuxtLayout>
</template>
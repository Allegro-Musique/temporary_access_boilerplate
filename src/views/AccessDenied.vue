<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full text-center">
      <img src="/allegro-musique-32x32.png" alt="Access Denied" class="mx-auto mb-4" />
      <h1 class="text-3xl font-bold text-red-600">Accès Refusé</h1>
      <p class="mt-4 text-gray-600">
        Vous n'êtes pas authentifié. Veuillez vérifier votre lien d'accès.
      </p>
      <p class="mt-2 text-gray-600">
        Si vous pensez que c'est une erreur, veuillez contacter le support.
      </p>
      <div class="mt-6">
        <router-link
          to="/"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-allegro_blue hover:bg-allegro_blue_darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-allegro_blue"
        >
          Retour à l'accueil
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this static page
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <img src="/allegro-musique-72x72.png" alt="Logo" class="mx-auto mb-4" />
      <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Inscription Enseignant</h2>
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
          <input v-model="name" type="text" id="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-allegro_blue focus:border-allegro_blue sm:text-sm" placeholder="Entrez votre nom" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" id="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-allegro_blue focus:border-allegro_blue sm:text-sm" placeholder="Entrez votre email" />
        </div>
        <div>
          <label for="instrument" class="block text-sm font-medium text-gray-700">Instrument</label>
          <input v-model="instrument" type="text" id="instrument" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-allegro_blue focus:border-allegro_blue sm:text-sm" placeholder="Entrez l'instrument que vous enseignez" />
        </div>
        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-allegro_blue hover:bg-allegro_blue_darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-allegro_blue">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const instrument = ref('')

const handleSubmit = () => {
  // Handle form submission logic here
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
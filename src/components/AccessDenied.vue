<script setup lang="ts">
defineProps<{
  message?: string
}>()
</script>

<template>
  <div class="text-center animate-smoothOpening">
    <div class="bg-white p-8 rounded-lg shadow-md">
      <div class="text-allegro_red text-6xl mb-4">
        <i class="fas fa-times-circle"></i>
      </div>
      <h2 class="text-2xl font-bold text-allegro_dark_red mb-4">Accès Refusé</h2>
      <p class="text-allegro_gray">{{ message || "Vous n'avez pas accès à ce contenu." }}</p>
    </div>
  </div>
</template>
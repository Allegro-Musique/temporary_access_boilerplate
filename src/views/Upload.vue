<template>
  <div class="min-h-screen bg-gray-50 w-full py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto text-center">
      <img src="/allegro-musique-72x72.png" alt="Logo" class="mx-auto mb-4" />
      <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Upload Your Files</h2>
      <div v-if="isLoading" class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-allegro_blue mx-auto"></div>
        <p class="mt-4 text-allegro_gray">Validation de l'accès en cours...</p>
      </div>
      
      <template v-else>
        <UploadContent v-if="isAuthenticated" />
        <AccessDenied 
          v-else 
          :message="errorMessage"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/auth'
import { useUploadStore } from '../stores/upload'
import AccessDenied from '../components/AccessDenied.vue'
import UploadContent from '../components/UploadContent.vue'

const route = useRoute()

const authStore = useAuthStore()
const uploadStore = useUploadStore()

const { isAuthenticated, isLoading, errorMessage } = storeToRefs(authStore)

onMounted(async () => {
  const key = route.query.key as string
  const hasAccess = await authStore.checkAuthentication(key)
  
  if (hasAccess) {
    await uploadStore.fetchRecentUploads()
  }
})
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
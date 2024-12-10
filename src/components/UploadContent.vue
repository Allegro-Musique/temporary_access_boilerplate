<script setup lang="ts">
import { ref } from 'vue'
import UploadZone from './upload/UploadZone.vue'
import UploadSettings from './upload/UploadSettings.vue'
import UploadHistory from './upload/UploadHistory.vue'
import type { UploadSettings as UploadSettingsType } from '../types/upload.types'

const selectedFiles = ref<File[]>([])
const settings = ref<UploadSettingsType>({
  compression: 'high',
  visibility: 'private',
  expiryDays: 7,
  password: '',
  allowDownloads: true,
  notifyOnDownload: false,
  maxDownloads: 10
})

const handleFilesSelected = (files: File[]) => {
  selectedFiles.value = files
}
</script>

<template>
  <div class="space-y-8 animate-smoothOpening">
    <!-- Header -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-allegro_blue_darker">Téléversement Sécurisé de Fichiers</h2>
      <p class="text-allegro_gray mt-2">Téléversez et partagez vos fichiers en toute sécurité avec des paramètres personnalisables</p>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Upload Zone -->
      <div class="lg:col-span-2">
        <UploadZone 
          :selected-files="selectedFiles"
          @files-selected="handleFilesSelected"
        />
      </div>

      <!-- Settings Panel -->
      <div class="lg:col-span-1">
        <UploadSettings v-model="settings" />
      </div>
    </div>

    <!-- Upload History -->
    <UploadHistory />
  </div>
</template>
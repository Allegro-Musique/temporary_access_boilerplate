<script setup lang="ts">
import { ref } from 'vue'

const recentUploads = ref([
  {
    id: 1,
    filename: 'document.pdf',
    size: '2.5 MB',
    uploadedAt: '2024-01-15 14:30',
    downloads: 3,
    status: 'actif'
  },
  {
    id: 2,
    filename: 'image.jpg',
    size: '1.8 MB',
    uploadedAt: '2024-01-14 09:15',
    downloads: 7,
    status: 'actif'
  },
  {
    id: 3,
    filename: 'archive.zip',
    size: '15.2 MB',
    uploadedAt: '2024-01-13 16:45',
    downloads: 1,
    status: 'expiré'
  }
])
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-lg font-medium text-allegro_blue_darker mb-4">Téléversements Récents</h3>
    
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-allegro_gray uppercase tracking-wider">
              Nom du Fichier
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-allegro_gray uppercase tracking-wider">
              Taille
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-allegro_gray uppercase tracking-wider">
              Téléversé le
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-allegro_gray uppercase tracking-wider">
              Téléchargements
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-allegro_gray uppercase tracking-wider">
              Statut
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="upload in recentUploads" :key="upload.id">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-allegro_blue_darker">
              {{ upload.filename }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-allegro_gray">
              {{ upload.size }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-allegro_gray">
              {{ upload.uploadedAt }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-allegro_gray">
              {{ upload.downloads }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                  upload.status === 'actif'
                    ? 'bg-allegro_light_green text-allegro_green'
                    : 'bg-allegro_warning text-allegro_brown'
                ]"
              >
                {{ upload.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
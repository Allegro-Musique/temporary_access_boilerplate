<script setup lang="ts">
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'

const props = defineProps<{
  selectedFiles: File[]
}>()

const emit = defineEmits<{
  (e: 'filesSelected', files: File[]): void
}>()

const dropZoneRef = ref<HTMLDivElement>()
const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop: (files) => handleFiles(Array.from(files))
})

const handleFiles = (files: File[]) => {
  emit('filesSelected', files)
}

const triggerFileInput = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.multiple = true
  input.onchange = (e) => {
    const files = Array.from((e.target as HTMLInputElement).files || [])
    handleFiles(files)
  }
  input.click()
}
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div
      ref="dropZoneRef"
      @click="triggerFileInput"
      :class="[
        'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200',
        isOverDropZone ? 'border-allegro_blue bg-allegro_blue/5' : 'border-allegro_gray hover:border-allegro_blue'
      ]"
    >
      <div class="space-y-4">
        <div class="text-4xl text-allegro_blue">
          <i class="fas fa-cloud-upload-alt"></i>
        </div>
        <div>
          <p class="text-lg font-medium text-allegro_blue_darker">
            Glissez et déposez vos fichiers ici
          </p>
          <p class="text-sm text-allegro_gray mt-1">
            ou cliquez pour parcourir votre ordinateur
          </p>
        </div>
      </div>
    </div>

    <!-- Selected Files -->
    <div v-if="selectedFiles.length > 0" class="mt-6">
      <h3 class="text-sm font-medium text-allegro_blue_darker mb-3">Fichiers Sélectionnés</h3>
      <ul class="space-y-2">
        <li 
          v-for="file in selectedFiles" 
          :key="file.name"
          class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
        >
          <div class="flex items-center space-x-3">
            <span class="text-allegro_blue">
              <i class="fas fa-file"></i>
            </span>
            <span class="text-sm text-allegro_blue_darker">{{ file.name }}</span>
          </div>
          <span class="text-xs text-allegro_gray">
            {{ (file.size / 1024 / 1024).toFixed(2) }} MB
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
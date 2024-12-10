<script setup lang="ts">
import type { UploadSettings } from "../../types/upload.types";

const props = defineProps<{
  modelValue: UploadSettings;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: UploadSettings): void;
}>();

const updateSetting = <K extends keyof UploadSettings>(
  key: K,
  value: UploadSettings[K]
) => {
  emit("update:modelValue", {
    ...props.modelValue,
    [key]: value,
  });
};


const handleEvent = <K extends keyof UploadSettings>(
  key: K,
  event: Event,
  type: 'value' | 'checked'
) => {
  const target = event.target as HTMLInputElement | HTMLSelectElement | null;
  if (target) {
    const value = type === 'checked' ? (target as HTMLInputElement).checked : target.value;
    updateSetting(key, value as UploadSettings[K]);
  }
};

</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-lg font-medium text-allegro_blue_darker mb-4">
      Paramètres de Téléversement
    </h3>

    <div class="space-y-6">
      <!-- Compression -->
      <div>
        <label class="block text-sm font-medium text-allegro_gray mb-2">
          Niveau de Compression
        </label>
        <select
          v-model="modelValue.compression"
          @change="handleEvent('compression', $event, 'value')"
          class="w-full rounded-md border-allegro_gray/30 focus:border-allegro_blue focus:ring focus:ring-allegro_blue/20"
        >
          <option value="high">Compression Élevée</option>
          <option value="medium">Compression Moyenne</option>
          <option value="low">Compression Faible</option>
          <option value="none">Sans Compression</option>
        </select>
      </div>

      <!-- Visibility -->
      <div>
        <label class="block text-sm font-medium text-allegro_gray mb-2">
          Visibilité
        </label>
        <select
          v-model="modelValue.visibility"
          @change="handleEvent('visibility', $event, 'value')"
          class="w-full rounded-md border-allegro_gray/30 focus:border-allegro_blue focus:ring focus:ring-allegro_blue/20"
        >
          <option value="private">Privé</option>
          <option value="public">Public</option>
          <option value="password">Protégé par Mot de Passe</option>
        </select>
      </div>

      <!-- Password -->
      <div v-if="modelValue.visibility === 'password'">
        <label class="block text-sm font-medium text-allegro_gray mb-2">
          Mot de Passe
        </label>
        <input
          type="password"
          v-model="modelValue.password"
          @input="handleEvent('password', $event, 'value')"
          class="w-full rounded-md border-allegro_gray/30 focus:border-allegro_blue focus:ring focus:ring-allegro_blue/20"
          placeholder="Entrez le mot de passe"
        />
      </div>

      <!-- Expiry -->
      <div>
        <label class="block text-sm font-medium text-allegro_gray mb-2">
          Expiration (jours)
        </label>
        <input
          type="number"
          v-model="modelValue.expiryDays"
          @input="handleEvent('expiryDays', $event, 'value')"
          class="w-full rounded-md border-allegro_gray/30 focus:border-allegro_blue focus:ring focus:ring-allegro_blue/20"
          min="1"
          max="30"
        />
      </div>

      <!-- Additional Settings -->
      <div class="space-y-4">
        <div class="flex items-center">
          <input
            type="checkbox"
            v-model="modelValue.allowDownloads"
            @change="handleEvent('allowDownloads', $event, 'checked')"
            class="rounded border-allegro_gray/30 text-allegro_blue focus:ring-allegro_blue"
          />
          <label class="ml-2 text-sm text-allegro_gray">
            Autoriser les Téléchargements
          </label>
        </div>

        <div class="flex items-center">
          <input
            type="checkbox"
            v-model="modelValue.notifyOnDownload"
            @change="handleEvent('notifyOnDownload', $event, 'checked')"
            class="rounded border-allegro_gray/30 text-allegro_blue focus:ring-allegro_blue"
          />
          <label class="ml-2 text-sm text-allegro_gray">
            Notifier lors du Téléchargement
          </label>
        </div>
      </div>

      <!-- Max Downloads -->
      <div>
        <label class="block text-sm font-medium text-allegro_gray mb-2">
          Téléchargements Maximum
        </label>
        <input
          type="number"
          v-model="modelValue.maxDownloads"
          @input="handleEvent('maxDownloads', $event, 'value')"
          class="w-full rounded-md border-allegro_gray/30 focus:border-allegro_blue focus:ring focus:ring-allegro_blue/20"
          min="1"
          max="100"
        />
      </div>
    </div>
  </div>
</template>

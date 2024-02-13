
<template>
  <button @click.stop="handleGeneratePdf"
    class="group animate-bounce-subtle inline-flex items-center justify-center text-xs overflow-hidden rounded-2xl px-6 font-medium hover:bg-gray-100 hover:text-black bg-gray-100 leading-none py-0"
    :disabled="!areDepsLoaded">
    <div v-if="areDepsLoaded"
      class="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
      <div class="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
        <v-icon name="md-pictureaspdf" scale="0.9" />
      </div>
      <span class="pl-6 w-24">{{ t('general.services.download_button') }}</span>
      <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
        <v-icon name="ri-download-cloud-2-line" scale="0.9" />
      </div>
    </div>
    <div class="cursor-wait" v-else>
      <v-icon name="fa-spinner" scale="1" animation="spin" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useLanguageContext from '@/composables/useLanguageContext';
const loadGeneratePdf = () => import('@/composables/useGeneratePdf');
const { t, languageSources, locale } = useLanguageContext();

const areDepsLoaded = ref<boolean>(true);

const handleGeneratePdf = async () => {
  areDepsLoaded.value = false;
  const useGeneratePdf = await loadGeneratePdf();
  useGeneratePdf.default(locale, languageSources).createPdf();
  areDepsLoaded.value = true;
}
</script>
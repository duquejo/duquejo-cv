
<template>
  <button @click.stop="handleGeneratePdf"
    class="group animate-bounce-subtle inline-flex items-center justify-center text-xs overflow-hidden rounded-2xl px-6 font-medium hover:bg-gray-100 hover:text-black bg-gray-100 leading-none py-0">
    <div class="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
      <div class="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
        <v-icon name="md-pictureaspdf" scale="0.9" />
      </div>
      <span class="pl-6 w-24">{{ t('general.services.download_button') }}</span>
      <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
        <v-icon name="ri-download-cloud-2-line" scale="0.9" />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { generate } from '@pdfme/generator';
import { Template } from '@pdfme/common';
import { text } from '@pdfme/schemas';

import { BASE_PDF_ES, BASE_PDF_EN } from '@/shared/constants';
import { schema } from '@/components/pdf/config';
import useLanguageContext from '@/composables/useLanguageContext';
import { calculateYears } from '@/shared/helpers/calculateYears';

const { t, languageSources, locale } = useLanguageContext();

const handleGeneratePdf = () => {

  const template: Template = {
    basePdf: locale.value === 'es' ? BASE_PDF_ES : BASE_PDF_EN,
    schemas: schema,
  };

  const plugins = { text };

  const inputs = [{
    introduction: languageSources.value.pdf.introduction,
    experience: `${calculateYears.value} ${languageSources.value.pdf.experience}`,
    languages: languageSources.value.languages.map(lang => `${lang.title} - ${lang.content}`).join('\n'),
    databases: languageSources.value.pdf.databases,
    tools: languageSources.value.pdf.cloud,
    backend: languageSources.value.pdf.backend,
    cicd: languageSources.value.pdf.cicd,
    frontend: languageSources.value.pdf.frontend,
    architecture: languageSources.value.pdf.architecture,
    programming_languages: languageSources.value.pdf.programming_languages,
    methodologies: languageSources.value.pdf.methodologies,
    security: languageSources.value.pdf.security,
    email_bottom: 'duquejo01@gmail.com',
    website_bottom: document.location.origin,
  }];

  generate({ template, plugins, inputs }).then((pdf) => {
    // Browser
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
  });
}
</script>
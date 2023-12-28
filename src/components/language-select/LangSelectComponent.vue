
<template>
  <select 
    v-if="availableLocales" 
    id="language-selector" 
    class="text-gray-500 lg:text-gray-800 bg-transparent text-base lg:appearance-none lg:w-10/12 text-center outline-gray-300 cursor-pointer capitalize"
    v-model="locale">
    <option
      v-for="aLocale in availableLocales"
      :key="`locale-${aLocale}`"
      :value="aLocale">
      {{ aLocale }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { locale, availableLocales } = useI18n();
</script>
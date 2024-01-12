
<template>
  <select 
    v-if="availableLocales" 
    :id="props.id" 
    class="text-gray-600 lg:text-gray-800 bg-transparent text-base lg:appearance-none lg:w-10/12 text-center outline-gray-300 cursor-pointer capitalize"
    v-model="locale"
    :aria-label="t('general.menu.language_selector_label')">
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

const { t, locale, availableLocales } = useI18n();

interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(),{
  id: 'language-selector'
});
</script>
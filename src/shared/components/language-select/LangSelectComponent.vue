
<template>
  <select class="text-gray-500 lg:text-gray-800 bg-transparent text-base lg:appearance-none lg:w-10/12 text-center outline-gray-300 cursor-pointer" v-model="locale">
    <option selected value="es-CO">ES</option>
    <option value="en-US">EN</option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' });
</script>
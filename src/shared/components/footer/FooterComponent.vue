<template>
  <footer>
    <ul v-if="SOCIAL_LINKS" class="flex gap-x-4">
      <li v-for="link in SOCIAL_LINKS" :key="link.name" class="icon">
        <a :href="link.url" target="_blank" :title="link.title">
          <v-icon :name="link.icon" scale="1"/>
        </a>
      </li>
      <!-- <li class="icon">
        <router-link :to="{ name: 'contact' }">
          <v-icon name="md-email-outlined" scale="1"/>
        </router-link>
      </li> -->
    </ul>
    <span>©️ {{ currentYear }} José Duque</span>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { social as SOCIAL_LINKS } from '../../locale/es-CO/config.json';
const currentYear = computed(() => new Date().getFullYear() );
</script>

<style scoped>
</style>
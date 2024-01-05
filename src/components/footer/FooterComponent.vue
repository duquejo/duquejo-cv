<template>
  <footer>
    <ul v-if="props.socialLinks" class="flex gap-x-4">
      <li v-for="link in props.socialLinks" :key="link.name" class="icon">
        <a :href="link.url" target="_blank" :title="link.title">
          <v-icon :name="link.icon" scale="1"/>
        </a>
      </li>
    </ul>
    <span>©️ {{ currentYear }} José Duque</span>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SocialLinks } from '@/interfaces/social-links';

interface Props {
  socialLinks?: SocialLinks[];
}
const props = defineProps<Props>();

const currentYear = computed(() => new Date().getFullYear() );
</script>
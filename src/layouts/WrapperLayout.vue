<template>
  <article ref="top">
    <slot />
    <FooterComponent :social-links="SOCIAL_LINKS" />
  </article>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import SOCIAL_LINKS from '@/shared/data/social.json';
import FooterComponent from '@/components/footer/FooterComponent.vue';

const top = ref<null | HTMLDivElement>(null);

onMounted(() => {
  if( top.value ) {
    top.value.scrollIntoView({ behavior: 'instant' });
  }
});
</script>
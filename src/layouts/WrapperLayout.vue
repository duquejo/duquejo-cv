<template>
  <div class="animated-container">
    <article ref="top">
      <slot />
    </article>
    <FooterComponent :social-links="SOCIAL_LINKS" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineAsyncComponent } from 'vue';

import SOCIAL_LINKS from '@/shared/data/social.json';

const FooterComponent = defineAsyncComponent(() => import('@/components/footer/FooterComponent.vue'));

const top = ref<null | HTMLDivElement>(null);

onMounted(() => {
  if (top.value) {
    top.value!.scrollIntoView({ behavior: 'instant' });
  }
});
</script>
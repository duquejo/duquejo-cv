
<template>
  <div class="inline-flex gap-2 fixed transition-all right-5 lg:right-16 h-14" :class="positionClasses">
    <PdfComponent />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed, toRef } from 'vue';
const PdfComponent = defineAsyncComponent(() => import('@/components/pdf/PdfComponent.vue'));

interface Props {
  bottom: boolean;
}

const props = defineProps<Props>();
const atBottom = toRef(props, 'bottom');

const positionClasses = computed(() => ({
  'bottom-24 lg:bottom-14': atBottom.value,
  'bottom-16 lg:bottom-5': !atBottom.value,
}));

</script>
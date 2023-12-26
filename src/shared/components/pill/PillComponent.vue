<template>
  <span :class="elementClasses">{{ props.text }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
type Sizes = 'small' | 'large' | 'medium';

interface Props {
  text: string;
  size?: Sizes;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
});

const elementClasses = computed(() => ({
  'border-yellow-500 border-2 font-semibold rounded hover:translate-y-0.5 transition-transform': true,
  'text-xs px-2.5 py-1.5': props.size === 'medium',
  'text-[0.6rem] px-2 py-0.5': props.size === 'small',
}));
</script>
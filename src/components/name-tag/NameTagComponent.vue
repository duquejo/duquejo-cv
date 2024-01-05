<template>
  <span class="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:opacity-80 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black after:ml-0.5 tracking-widest" :class="mergeClasses">
    @duquejo
  </span>
</template>

<script setup lang="ts">
import { Sizes } from '@/interfaces';
import { computed } from 'vue';


interface Props {
  classes?: string;
  size?: Sizes;
}

const props = withDefaults(defineProps<Props>(), {
  classes: '',
  size: 'medium',
});

const mergeClasses = computed(() => ({
  [props.classes]: props.classes,
  'text-base': props.size === 'medium',
  'text-lg': props.size === 'large',
  'text-xs': props.size === 'small',
}));

</script>
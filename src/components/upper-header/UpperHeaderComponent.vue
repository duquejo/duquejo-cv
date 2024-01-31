
<template>
  <div class="fixed top-0 z-20 lg:relative flex justify-between w-full p-2 lg:hidden items-center transition-all" :class="{ 'shadow-sm bg-gray-50': isOpen }">
    <span class="p-4" />
    <NameTagComponent classes="before:bg-gray-100"/>
    <v-icon :name="menuIcon" scale="1.5" @click="emit('menu-click')" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NameTagComponent from '@/components/name-tag/NameTagComponent.vue';

interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: 'menu-click'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const menuIcon = computed(() => props.isOpen ? 'co-hamburger-menu' : 'pr-times' );
</script>
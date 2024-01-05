
<template>
  <div class="flex justify-between w-full p-2 lg:hidden items-center">
    <span class="p-4" />
    <NameTagComponent classes="before:bg-gray-100"/>
    <v-icon :name="menuIcon" scale="1.5" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NameTagComponent from '@/components/name-tag/NameTagComponent.vue';

interface Props {
  isOpen: boolean;
}
const props = defineProps<Props>();
const menuIcon = computed(() => props.isOpen ? 'co-hamburger-menu' : 'pr-times' );
</script>
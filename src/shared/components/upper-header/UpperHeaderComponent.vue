
<template>
  <div class="flex justify-between w-full p-2 lg:hidden items-center">
    <span class="p-4" />
    <span class="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-gray-100 before:opacity-80 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black tracking-widest">@duquejo</span>
    <v-icon :name="menuIcon" scale="1.5" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
interface Props {
  isOpen: boolean;
}
const props = defineProps<Props>();
const menuIcon = computed(() => props.isOpen ? 'co-hamburger-menu' : 'pr-times' );
</script>
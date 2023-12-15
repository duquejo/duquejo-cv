<template>
  <span class="border-yellow-500 border-2 text-xs font-semibold px-2.5 py-1.5 rounded hover:translate-y-0.5 transition-transform">{{ props.text }}</span>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}
const props = defineProps<Props>();
</script>
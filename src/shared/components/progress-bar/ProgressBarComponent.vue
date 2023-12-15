

<template>
  <div class="flex justify-between mb-1">
    <strong>{{ props.tag }}</strong>
    <strong>{{ props.value }}%</strong>
  </div>
  <div class="w-full bg-gray-100 rounded-full mb-4">
    <div class="h-1.5 rounded-full" :style="{ 'width': `${props.value}%`, backgroundColor: props.color }"></div>
  </div>
</template>

<script setup lang="ts">
import { Bars } from '../../../interfaces/bars';
interface Props extends Bars {};
const props = defineProps<Props>();
</script>
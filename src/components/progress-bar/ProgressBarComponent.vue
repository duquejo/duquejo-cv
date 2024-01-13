

<template>
  <div class="flex justify-between mb-1">
    <strong class="text-xs">{{ props.tag }}</strong>
    <strong class="text-xs">{{ progress }}%</strong>
  </div>
  <div class="w-full bg-gray-100 rounded-full mb-3">
    <div data-test="progress" class="h-2 rounded-full" :style="{ 'width': `${progress}%`, backgroundColor: props.color }"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Bars } from '@/interfaces/bars';

const props = defineProps<Bars>();

const progress = ref<number>(0);

onMounted(() => {
  let progressInterval: ReturnType<typeof setInterval>;
  let intervalSpeed = 30;
  let incrementSpeed = 1;

  progressInterval = setInterval(() => {
    progress.value += incrementSpeed;
    if( progress.value >= props.value ) {
      clearInterval(progressInterval);
    }
  }, intervalSpeed);

});

</script>
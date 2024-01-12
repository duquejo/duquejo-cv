<template>
  <a href="#" class="group flex flex-col items-center border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 hover:text-gray-600 overflow-hidden gap-4 transition-colors">
    <img class="object-cover w-full rounded-t-lg max-h-40 xl:rounded-none xl:rounded-s-lg grayscale group-hover:grayscale-0 transition-all xl:max-h-40" :src="certification" alt="Certification" />
    <div class="flex flex-col justify-between leading-normal mr-4">
      <h5 class="text-sm font-semibold tracking-tight xl:mt-2 mx-4 xl:mx-auto">Noteworthy technology acquisitions 2021</h5>
      <p class="m-4 xl:mx-auto">Lorem ipsum, dolor sit amet.</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import certification from '@/assets/avatar-small.webp';
</script>
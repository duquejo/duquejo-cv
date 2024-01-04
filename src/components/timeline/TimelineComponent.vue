<template>
  <ol class="pt-1 relative border-s border-gray-200">
    <li class="cursor-auto mb-8 ms-4">
      <div :class="currentDetail" />
      <div class="flex items-center justify-between lg:justify-normal">
        <time :class="dateClass" v-text="date_range" />
        <span class="text-black text-xs font-normal ml-2 text-right lg:text-left" v-text="enterprise" />
      </div>
      <span class="block text-xs mt-3 font-semibold mb-3 lg:mb-0">{{ project }}</span>
      <span class="block text-base font-semibold">{{ role }}</span>

      <!-- Content -->
      <p v-if="type === Type.Paragraph " class="my-1 text-justify" v-html="resume"/>
      <ul v-else-if="type === Type.List" class="my-1 list-disc ml-4 space-y-2 text-justify" v-html="resume"/>

      <small class="block font-semibold mt-2 text-black text-justify" v-text="additional_info" />
    </li>
  </ol>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
import { Experience, Type } from '../../interfaces/experience';

const props = defineProps<Experience>();
const { additional_info, date_range, enterprise, isRecent, project, role, type, resume } = toRefs(props);

const dateClass = computed(() => ({
  'timeline--time': true,
  'border-gray-400': ! isRecent.value,
  'border-yellow-500': isRecent.value,
}));

const currentDetail = computed(() => ({
  'timeline--current-detail': true,
  'bg-gray-400': ! isRecent.value,
  'bg-yellow-500': isRecent.value,
}));

</script>
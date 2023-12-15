<template>
  <ol class="pt-1 relative border-s border-gray-200">
    <li class="cursor-auto mb-8 ms-4">
      <div :class="currentDetail" />
      <div class="flex items-center justify-between md:justify-normal">
        <time :class="dateClass" v-text="date_range" />
        <span v-if="enterprise" class="text-black text-xs font-normal ml-2 text-right md:text-left" v-text="enterprise" />
      </div>
      <span v-if="project" class="block text-xs mt-3 font-semibold mb-3 md:mb-0">{{ project }}</span>
      <span v-if="role" class="block text-base font-semibold">{{ role }}</span>

      <!-- Content -->
      <p v-if="type === Type.Paragraph " class="my-1 text-justify" v-html="resume"/>
      <ul v-else-if="type === Type.List" class="my-1 list-disc ml-4 space-y-2 text-justify" v-html="resume"/>

      <small v-if="additional_info" class="block font-semibold mt-2 text-black text-justify" v-text="additional_info" />
    </li>
  </ol>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
import { Experience, Type } from '../../interfaces/experience';

const props = defineProps<Experience>();
const { additional_info, date_range, enterprise, isRecent, project, role, type, resume } = toRefs(props);

const dateClass = computed(() => ({
  'border-2 rounded px-2 py-1 font-semibold text-xs': true,
  'border-gray-400': ! isRecent.value,
  'border-yellow-500': isRecent.value,
}));

const currentDetail = computed(() => ({
  'absolute w-2 h-2 rounded-full mt-1.5 -start-1': true,
  'bg-gray-400': ! isRecent.value,
  'bg-yellow-500': isRecent.value,
}));

</script>
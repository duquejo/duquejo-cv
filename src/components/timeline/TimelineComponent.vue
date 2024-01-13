<template>
  <ol class="pt-1 relative border-s border-gray-200">
    <li class="cursor-auto mb-8 ms-4">
      <div data-test="detail" class="absolute w-2 h-2 rounded-full mt-1.5 -start-1" :class="currentDetail" />

      <!-- Aligned content -->
      <div class="flex items-center justify-between lg:justify-normal">
        <span data-test="time" class="lg:inline-flex border-2 rounded px-2 py-1 font-semibold text-xs text-center" :class="dateClass">
          <time v-if="start_date" class="block" v-text="start_date" />
          <time v-if="end_date" class="block mt-1 lg:mt-0 lg:before:content-['-'] lg:before:mx-1" v-text="end_date" />
        </span>
        <span class="text-black text-xs font-normal ml-2 text-right lg:text-left" v-text="enterprise" />
      </div>

      <!-- Meta -->
      <span class="block text-xs mt-3 font-semibold mb-3 lg:mb-0">{{ project }}</span>
      <span class="block text-base font-semibold">{{ role }}</span>

      <!-- Content -->
      <p v-if="type === Type.Paragraph " class="my-1 text-justify" v-html="resume"/>
      <ul v-else-if="type === Type.List" class="my-1 list-disc ml-4 space-y-2 text-justify" v-html="resume"/>

      <!-- Tags -->
      <small class="block font-semibold mt-2 text-black text-justify" v-text="additional_info" />
    </li>
  </ol>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
import { Experience, Type } from '../../interfaces/experience';

const props = defineProps<Experience>();
const { additional_info, start_date, end_date, enterprise, isRecent, project, role, type, resume } = toRefs(props);

const dateClass = computed(() => ({
  'border-gray-400': ! isRecent.value,
  'border-yellow-400': isRecent.value,
}));

const currentDetail = computed(() => ({
  'bg-gray-400': ! isRecent.value,
  'bg-yellow-400': isRecent.value,
}));

</script>
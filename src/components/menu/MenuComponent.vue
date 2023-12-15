<template>
  <nav class="md:flex md:flex-col md:items-center md:justify-end hidden md:mb-4 relative">
    <div :class="menuClasses">
      <div class="bg-white rounded p-4 my-8 mx-4 shadow cursor-pointer">
        <h3 class="text-h3 pb-2">Recent posts</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate incidunt velit iusto doloremque vitae placeat dolores possimus! Pariatur, doloribus.</p>
        {{ props.isOpen }}
      </div>
    </div>
    <br>
    <i class="icon" @click="emit('toggle')">
      <v-icon name="co-hamburger-menu" scale="1.5" fill="gray"/>
    </i>
  </nav>

</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: 'toggle' ): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const menuClasses = computed(() => ({
  'fixed w-80 h-auto top-0 bottom-0 my-4 rounded z-10 bg-gray-100 shadow-md flex flex-col justify-between gap-2 transition-all duration-500 ease-in-out': true,
  'opacity-0 translate-x-full right-0': ! props.isOpen,
  'opacity-100 translate-x-0 right-12': props.isOpen,
}));
</script>
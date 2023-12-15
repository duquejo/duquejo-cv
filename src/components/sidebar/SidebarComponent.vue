<template>
  <aside id="sidebar" :class="classes">
    <UpperHeaderComponent :isOpen="isOpen" @click="emit('toggle')"/>
    <div class="flex flex-col justify-center items-center w-full lg:p-0 px-8 py-10 text-center">
      <picture>
        <img class="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover grayscale hover:grayscale-0 transition-all duration-200" src="../../assets/avatar-small.jpg" alt="José Duque" />
      </picture>
      <span class="text-2xl font-semibold mt-5 sm:text-xl">José Duque</span>
      <span class="text-gray-500">Desarrollador<br/>Fullstack</span>
      <div v-if="SOCIAL_LINKS" class="flex flex-row justify-evenly my-2 gap-x-3">
        <i class="icon" v-for="link in SOCIAL_LINKS" :key="link.name">
          <a :href="link.url" target="_blank">
            <v-icon :name="link.icon" scale="1.3" class="fill-gray-400 hover:fill-yellow-500 transition-colors" />
          </a>
        </i>
        <!-- <i class="icon">
          <router-link :to="{ name: ROUTES.CONTACT }">
            <v-icon name="md-email-outlined" scale="1.3" class="fill-gray-400 hover:fill-yellow-500 transition-colors" />
          </router-link>
        </i> -->
      </div>
    </div>
    <ul class="navigation text-right my-5 space-y-2 w-full lg:p-0 px-8 py-10">
      <li>
        <router-link :to="{ name: ROUTES.RESUME }" @click="emit('toggle')">
          Currículo<span><v-icon class="ml-2" name="bi-chevron-right" scale="0.9" /></span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: ROUTES.SERVICES }" @click="emit('toggle')">
          Servicios<span><v-icon class="ml-2" name="bi-chevron-right" scale="0.9" /></span>
        </router-link>
      </li>
      <!-- <li>
        <router-link :to="{ name: ROUTES.BLOG }" @click="emit('toggle')">
          Blog<span><v-icon class="ml-2" name="bi-chevron-right" scale="0.9" /></span>
        </router-link>
      </li> -->
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { ROUTES } from '../../router';
import UpperHeaderComponent from '../../shared/components/upper-header/UpperHeaderComponent.vue';
import SOCIAL_LINKS from '../../shared/data/social.json';
import { computed } from 'vue';

interface Props {
  isOpen: boolean;
}

interface Emit {
  (e: 'toggle'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();

const classes = computed(() => ({
  'transition-all duration-500 absolute flex flex-col items-center justify-between lg:px-8 lg:py-10 lg:my-2 lg:mx-2 text-base rounded-lg bg-white lg:h-auto z-10 w-full lg:w-auto lg:relative lg:opacity-100 lg:left-0 h-screen': true,
  'opacity-0 left-full': props.isOpen,
  'opacity-100 left-0': ! props.isOpen,
}));

</script>
<template>
  <aside id="sidebar" class="transition-all duration-500 absolute flex flex-col items-center justify-between lg:px-8 lg:py-10 lg:my-2 lg:mx-2 rounded-lg bg-white lg:h-auto z-10 w-full lg:w-auto lg:relative lg:opacity-100 lg:left-0 h-screen" :class="classes">
    <UpperHeaderComponent :isOpen="isOpen" @click="emit('toggle')"/>
    <div class="flex flex-col justify-center items-center w-full lg:p-0 px-8 py-10 text-center text-base">
      <picture class="mb-5">
        <img class="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover grayscale hover:grayscale-0 transition-all duration-200" src="../../assets/avatar-small.jpg" alt="José Duque" />
      </picture>
      <NameTagComponent classes="mb-1 before:bg-transparent text-gray-700 hidden lg:block" size="small"/>
      <span class="text-2xl font-semibold sm:text-xl">José Duque</span>
      <span class="text-gray-500">{{ t('general.role') }}</span>
      <div v-if="props.socialLinks?.length" class="sidebar-news--container">
        <i class="icon" v-for="link in props.socialLinks" :key="link.name">
          <a :href="link.url" target="_blank">
            <v-icon :name="link.icon" scale="1.3" class="fill-gray-400 hover:fill-yellow-500 transition-colors" />
          </a>
        </i>
      </div>
      <LangSelectComponent id="sidebar-language-selector" class="lg:hidden" />
    </div>
    <ul class="navigation text-right my-5 space-y-2 w-full lg:p-0 px-8 py-10">
      <li>
        <router-link :to="{ name: ROUTES.RESUME }" @click="emit('toggle')">
          {{ t('general.menu.resume') }}<span><v-icon class="ml-2" name="bi-chevron-right" scale="0.9" /></span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: ROUTES.SERVICES }" @click="emit('toggle')">
          {{ t('general.menu.services') }}<span><v-icon class="ml-2" name="bi-chevron-right" scale="0.9" /></span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { ROUTES } from '@/router';
import { SocialLinks } from '@/interfaces';

import UpperHeaderComponent from '@/components/upper-header/UpperHeaderComponent.vue';
import LangSelectComponent from '@/components/language-select/LangSelectComponent.vue';
import NameTagComponent from '@/components/name-tag/NameTagComponent.vue';

interface Props {
  isOpen: boolean;
  socialLinks?: SocialLinks[];
}

interface Emit {
  (e: 'toggle'): void;
}

const { t } = useI18n();
const props = defineProps<Props>();
const emit = defineEmits<Emit>();

const classes = computed(() => ({
  'opacity-0 left-full': props.isOpen,
  'opacity-100 left-0': ! props.isOpen,
}));

</script>
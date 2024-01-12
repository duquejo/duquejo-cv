<template>
  <aside id="sidebar" class="transition-all duration-500 absolute flex flex-col items-center justify-between lg:px-8 lg:py-10 lg:my-2 lg:mx-2 rounded-lg bg-white lg:h-auto z-10 w-full lg:w-auto lg:relative lg:opacity-100 lg:left-0 h-screen" :class="classes">
    <UpperHeaderComponent :isOpen="isOpen" @click="emit('toggle')"/>
    <div class="flex flex-col justify-center items-center w-full lg:p-0 px-8 py-10 text-center text-base">
      <picture class="mb-5">
        <img class="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover grayscale hover:grayscale-0 transition-all duration-200" :src="smallAvatar" alt="José Duque" />
      </picture>
      <NameTagComponent classes="mb-1 before:bg-transparent text-gray-700 hidden lg:block" size="small"/>
      <span class="text-2xl font-semibold sm:text-xl">José Duque</span>
      <span class="text-gray-500">{{ t('general.role') }}</span>

      <small class="border-t border-gray-200 pt-px mt-5 mb-0 lg:hidden">{{ t('general.sidebar.network_links') }}</small>
      <div v-if="props.socialLinks?.length" class="flex flex-row justify-evenly lg:my-2 gap-x-3">
        <i class="icon" v-for="link in props.socialLinks" :key="link.name">
          <a :href="link.url" target="_blank">
            <v-icon :name="link.icon" scale="1.3" class="fill-gray-400 hover:fill-yellow-500 transition-colors" />
          </a>
        </i>
      </div>

      <small class="border-t border-gray-200 pt-px mt-3 mb-0 lg:hidden">{{ t('general.sidebar.theme_options') }}</small>
      <LangSelectComponent id="sidebar-language-selector" class="lg:hidden" />
    </div>
    <NavigationLinks @link-click="emit('toggle')" />
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { SocialLinks } from '@/interfaces';

import UpperHeaderComponent from '@/components/upper-header/UpperHeaderComponent.vue';
import LangSelectComponent from '@/components/language-select/LangSelectComponent.vue';
import NameTagComponent from '@/components/name-tag/NameTagComponent.vue';
import NavigationLinks from '@/components/navigation-links/NavigationLinks.vue';

import smallAvatar from '@/assets/avatar-small.jpg';

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
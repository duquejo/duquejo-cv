<template>
  <aside id="sidebar" class="transition-all duration-500 fixed top-0 flex lg:px-8 lg:py-10 lg:my-2 lg:mx-2 rounded-lg bg-white lg:h-auto z-10 w-full lg:w-auto lg:relative lg:opacity-100 lg:left-0 h-screen" :class="classes">

    <!-- Middle Section -->
    <div class="flex flex-col justify-center items-center w-full lg:p-0 text-center text-base">
      <picture class="mb-5 overflow-hidden rounded-full w-40 h-40">
        <img class="object-cover hover:grayscale-0 transition-all duration-200 hover:scale-110 delay-200" :src="smallAvatar" width="160" height="160" alt="José Duque" />
      </picture>
      <NameTagComponent classes="mb-1 before:bg-transparent text-gray-700 hidden lg:block" size="small"/>
      <span class="text-2xl font-semibold sm:text-xl">José Duque</span>
      <span class="text-gray-600">{{ t('general.role') }}</span>

      <small class="border-t border-gray-200 pt-px mt-5 mb-0 lg:hidden">{{ t('general.sidebar.network_links') }}</small>
      <div v-if="SOCIAL_LINKS.length" class="flex flex-row justify-evenly lg:my-2 gap-x-3">
        <i class="icon" v-for="link in SOCIAL_LINKS" :key="link.name">
          <a :href="link.url" target="_blank" :aria-label="`${t('general.sidebar.network_links_label')} ${link.name}`">
            <v-icon :name="link.icon" scale="1.3" class="fill-gray-400 hover:fill-yellow-400 transition-colors" />
          </a>
        </i>
      </div>

      <small class="border-t border-gray-200 pt-px mt-3 mb-0 lg:hidden">{{ t('general.sidebar.theme_options') }}</small>
      <LangSelectComponent id="sidebar-language-selector" class="lg:hidden" />
    </div>

    <!-- Lower section -->
    <NavigationLinks @link-click="emit('toggle')" />
  </aside>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import SOCIAL_LINKS from '@/shared/data/social.json';


import smallAvatar from '@/assets/avatar-small.webp';

// const UpperHeaderComponent = defineAsyncComponent(() => import('@/components/upper-header/UpperHeaderComponent.vue'));
const LangSelectComponent = defineAsyncComponent(() => import('@/components/language-select/LangSelectComponent.vue'));
const NameTagComponent = defineAsyncComponent(() => import('@/components/name-tag/NameTagComponent.vue'));
const NavigationLinks = defineAsyncComponent(() => import('@/components/navigation-links/NavigationLinks.vue'));


interface Props {
  isOpen: boolean;
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
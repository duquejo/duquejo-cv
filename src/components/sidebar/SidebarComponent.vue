<template>
  <aside id="sidebar" :class="classes">
    <UpperHeaderComponent :isOpen="isOpen" @click="emit('toggle')"/>
    <div class="flex flex-col justify-center items-center w-full lg:p-0 px-8 py-10 text-center text-base">
      <picture>
        <img class="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover grayscale hover:grayscale-0 transition-all duration-200" src="../../assets/avatar-small.jpg" alt="José Duque" />
      </picture>
      <span class="text-2xl font-semibold mt-5 sm:text-xl">José Duque</span>
      <span class="text-gray-500">{{ t('general.role') }}</span>
      <div v-if="props.socialLinks?.length" class="sidebar-news--container">
        <i class="icon" v-for="link in props.socialLinks" :key="link.name">
          <a :href="link.url" target="_blank">
            <v-icon :name="link.icon" scale="1.3" class="fill-gray-400 hover:fill-yellow-500 transition-colors" />
          </a>
        </i>
      </div>
      <LangSelectComponent class="lg:hidden" />
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

import UpperHeaderComponent from '@/components/upper-header/UpperHeaderComponent.vue';
import LangSelectComponent from '@/components/language-select/LangSelectComponent.vue';
import { SocialLinks } from '../../interfaces/social-links';

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
  'sidebar': true,
  'opacity-0 left-full': props.isOpen,
  'opacity-100 left-0': ! props.isOpen,
}));

</script>
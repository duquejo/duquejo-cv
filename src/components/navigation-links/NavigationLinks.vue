<template>
  <ul class="navigation w-full" :class="layoutClasses">
    <li v-for="route in ROUTES" :key="route" class="border-r border-gray-300 w-full text-center last:border-none lg:border-none lg:w-auto lg:text-right" :class="sizesClasses">
      <router-link :to="{ name: route }" @click="emit('link-click')">
        {{ generateMenuLink(route) }}
        <span v-if="layout === 'menu'">
          <v-icon class="ml-2" name="fa-chevron-right" scale="0.9" />
        </span>
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { ROUTES } from '@/router';
import type { Sizes, NavigationLayout } from '@/interfaces';

interface Props {
  layout?: NavigationLayout;
  size?: Sizes
}

interface Emits {
  (e: 'link-click'): void;
}

const { t } = useI18n();

const emit = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {
  layout: 'menu',
  size: 'large',
});

const layoutClasses = computed(() => ({
  'invisible lg:visible text-right my-5 space-y-2  lg:p-0 px-8 py-10': props.layout === 'menu',
  'fixed flex bottom-0 bg-gray-100 justify-around px-4 pb-4 py-2.5 border-t border-gray-200 lg:hidden': props.layout === 'fixed',
}));

const sizesClasses = computed(() => ({
  'text-lg': props.size === 'large',
  'text-base': props.size === 'medium',
  'text-sm': props.size === 'small',
}));

const generateMenuLink = (routeName: ROUTES): string => t(`general.menu.${routeName}`);
</script>

<style scoped lang="postcss">

 /** Navigation links **/

 ul.navigation li a.router-link-active span {
  @apply opacity-100 decoration-yellow-400;
 }

 ul.navigation li a.router-link-active span svg {
  @apply fill-yellow-400;
 }

 ul.navigation li a.router-link-active {
  @apply underline underline-offset-8 decoration-yellow-400 decoration-2;
 }
 
 ul.navigation li:hover a {
  @apply text-inherit decoration-yellow-400;
 }

 ul.navigation li:hover a span {
  @apply opacity-70 ;
 }

 ul.navigation li a span {
  @apply opacity-0 transition-opacity;
 }
</style>
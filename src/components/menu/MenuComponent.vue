<template>
  <nav class="lg:flex lg:flex-col lg:items-center lg:justify-between hidden lg:my-4 relative">
    <LangSelectComponent id="menu-language-selector" />
    <div v-if="!isLoading && events" class="fixed w-96 h-auto top-0 bottom-0 my-4 rounded z-10 bg-gray-100 shadow-md flex flex-col justify-between gap-2 transition-all duration-500 ease-in-out" :class="menuClasses">
      <h4 class="mt-8 mb-2.5 text-h4 mx-4 text-center">{{ t('general.menu.events') }}</h4>
      <div class="overflow-y-auto">
          <RecentCardComponent v-for="event in events" :key="event.id" :event="event" />
          <p class="mx-4 mt-0 text-xs text-center">
            <a href="https://github.com/duquejo01" target="_blank" :aria-label="t('general.menu.events_repo_general_link_label')">{{ t('general.menu.events_repo_general_link') }}</a>
          </p>
      </div>
    </div>
    <i v-if="!isLoading" class="icon" @click="onLoadClick">
      <v-icon :class="eventIconClass" :name="eventIcon" scale="1.5" fill="black"/>
    </i>
    <i v-else class="icon cursor-default" :title="t('general.menu.events_loading_description')">
      <v-icon name="fa-spinner" scale="1" fill="gray" animation="spin"/>
    </i>
  </nav>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import useQueryClient from '@/composables/useQueryClient';

const LangSelectComponent = defineAsyncComponent(() => import('@/components/language-select/LangSelectComponent.vue'));
const RecentCardComponent = defineAsyncComponent(() => import('@/components/recent-card/RecentCardComponent.vue'));

interface Props {
  isOpen?: boolean;
}

interface Emits {
  (e: 'toggle' ): void;
}

const { t } = useI18n();
const { events, isLoading, refetch } = useQueryClient();

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
});
const emit = defineEmits<Emits>();

const menuClasses = computed(() => ({
  'opacity-0 translate-x-full right-0': ! props.isOpen,
  'opacity-100 translate-x-0 right-12': props.isOpen,
}));

const eventIcon = computed(() => props.isOpen ? 'hi-solid-light-bulb' : 'hi-light-bulb' );
const eventIconClass = computed(() => ({
  'animate-bounce': ! props.isOpen,
  'animate-pulse': props.isOpen,
}));

const onLoadClick = () => {
  refetch();
  emit('toggle');
};

</script>
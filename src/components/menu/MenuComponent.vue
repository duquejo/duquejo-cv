<template>
  <nav class="lg:flex lg:flex-col lg:items-center lg:justify-between hidden lg:my-4 relative">
    <LangSelectComponent />
    <div :class="menuClasses">
      <h4 class="mt-8 mb-2.5 text-h4 mx-4 text-center">{{ t('general.menu.events') }}</h4>
      <div class="overflow-y-auto">
        <RecentCardComponent v-for="event in allEvents" :key="event.id" :event="event" />
      </div>
      <p class="mx-4 mt-0 text-xs text-center">
        <a href="https://github.com/duquejo01" target="_blank">{{ t('general.menu.events_repo_general_link') }}</a>
      </p>
    </div>
    <br>
    <i class="icon" @click="emit('toggle')">
      <v-icon name="co-hamburger-menu" scale="1.5" fill="gray"/>
    </i>
  </nav>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Event } from '@/interfaces/github-events';
import events from '@/events.json';
import LangSelectComponent from '@/components/language-select/LangSelectComponent.vue';
import RecentCardComponent from '@/components/recent-card/RecentCardComponent.vue';
import { useI18n } from 'vue-i18n';

interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: 'toggle' ): void;
}

const { t } = useI18n();
const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const menuClasses = computed(() => ({
  'fixed w-80 h-auto top-0 bottom-0 my-4 rounded z-10 bg-gray-100 shadow-md flex flex-col justify-between gap-2 transition-all duration-500 ease-in-out': true,
  'opacity-0 translate-x-full right-0': ! props.isOpen,
  'opacity-100 translate-x-0 right-12': props.isOpen,
}));



const allEvents = ref<Event[]>(events as any);
</script>
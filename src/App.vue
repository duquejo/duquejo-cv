<template>
  <SidebarComponent :social-links="SOCIAL_LINKS" :isOpen="isOpen" @toggle="onToggleMenu"/>
  <UpperHeaderComponent :isOpen="isOpen" @click="onToggleMenu"/>
  <main class="overflow-y-scroll bg-white transition-all duration-1000 relative" :class="mainClasses" @click="onOutsideClick">
    <router-view v-slot="{ Component, route }">
      <transition name="slide" mode="out-in" @leave="onLeave" @enter="onEnter">
        <component :is="Component" :key="route.path" />
      </transition>
      <FooterComponent :social-links="SOCIAL_LINKS" v-show="isTransitionLoaded" />
    </router-view>
  </main>
  <MenuComponent v-if="events && ! isLoading" :events="events" :isOpen="isOpenMenu" @toggle="onToggleSidebarMenu"/>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

import SOCIAL_LINKS from '@/shared/data/social.json';

import useScreenResize from '@/composables/useScreenResize';
import useQueryClient from '@/composables/useQueryClient';

import SidebarComponent from '@/components/sidebar/SidebarComponent.vue';
import MenuComponent from '@/components/menu/MenuComponent.vue';
import UpperHeaderComponent from '@/components/upper-header/UpperHeaderComponent.vue';
import FooterComponent from '@/components/footer/FooterComponent.vue';

const { isMobile } = useScreenResize();

const isOpen = ref<boolean>(false);
const isOpenMenu = ref<boolean>(false);
const isTransitionLoaded = ref<boolean>(false);

const { events, isLoading } = useQueryClient();

onMounted( async () => {
  if(isMobile()) {
    isOpen.value = true;
  }
});

const onToggleMenu = () => {
  // Bugfix: Mobile event overlapping
  if(isMobile()) {
    isOpen.value = ! isOpen.value;
  }
};

const onOutsideClick = () => {
  if( isOpenMenu.value ) {
    isOpenMenu.value = false;
  }
}

const onToggleSidebarMenu = () => {
  isOpenMenu.value = ! isOpenMenu.value;
}

const mainClasses = computed(() => ({
  'blur-sm': isOpenMenu.value,
}));

/**
 * bugfix: Visual transition effect suggestion
 */
const onEnter = () => {
  isTransitionLoaded.value = true;
}

const onLeave = () => {
  isTransitionLoaded.value = false;
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.3s, transform 0.8s;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-2%);
}
</style>
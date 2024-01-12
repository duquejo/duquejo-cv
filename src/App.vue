<template>
  <SidebarComponent :social-links="SOCIAL_LINKS" :isOpen="isOpen" @toggle="onToggleMenu"/>
  <UpperHeaderComponent :isOpen="isOpen" @click="onToggleMenu"/>
  <main class="overflow-y-scroll bg-white transition-all duration-1000 relative" :class="mainClasses" @click="onOutsideClick">
    <router-view v-slot="{ Component, route }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
  </main>
  <NavigationLinks size="small" layout="fixed" />
  <MenuComponent v-if="! isAMobileDevice" :isOpen="isOpenMenu" @toggle="onToggleSidebarMenu"/>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, defineAsyncComponent } from 'vue';

import SOCIAL_LINKS from '@/shared/data/social.json';

import useScreenResize from '@/composables/useScreenResize';

const MenuComponent = defineAsyncComponent(() => import('@/components/menu/MenuComponent.vue'));
const SidebarComponent = defineAsyncComponent(() => import('@/components/sidebar/SidebarComponent.vue'));
const UpperHeaderComponent = defineAsyncComponent(() => import('@/components/upper-header/UpperHeaderComponent.vue'));
const NavigationLinks = defineAsyncComponent(() => import('@/components/navigation-links/NavigationLinks.vue'));

const { isMobile } = useScreenResize();
const isAMobileDevice = isMobile();

const isOpen = ref<boolean>(false);
const isOpenMenu = ref<boolean>(false);

onMounted( async () => {
  if(isAMobileDevice) {
    isOpen.value = true;
  }
});

const onToggleMenu = () => {
  // Bugfix: Mobile event overlapping
  if(isAMobileDevice) {
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
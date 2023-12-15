<template>
  <SidebarComponent :isOpen="isOpen" @toggle="onToggleMenu"/>
  <UpperHeaderComponent :isOpen="isOpen" @click="onToggleMenu"/>
  <main :class="mainClasses" @click="onOutsideClick">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
      <FooterComponent />
    </router-view>
  </main>
  <MenuComponent :isOpen="isOpenMenu" @toggle="onToggleSidebarMenu"/>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SidebarComponent from './components/sidebar/SidebarComponent.vue';
import MenuComponent from './components/menu/MenuComponent.vue';
import UpperHeaderComponent from './shared/components/upper-header/UpperHeaderComponent.vue';
import FooterComponent from './shared/components/footer/FooterComponent.vue';

const isOpen = ref<boolean>(true);
const isOpenMenu = ref<boolean>(false);

const onToggleMenu = () => {
  isOpen.value = ! isOpen.value;
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
  'overflow-y-scroll bg-white scroll-smooth transition-all duration-1000 relative': true,
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
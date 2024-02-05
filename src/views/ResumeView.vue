<template>
  <WrapperLayout>
    <section class="row items-center mx-0 mt-0 px-0">
      <div class="w-full order-2 lg:basis-1/2 lg:order-1 px-8 pt-8 lg:m-auto">
        <span class="text-gray-500 text-lg">{{ t('general.role') }}</span>
        <h1 class="mt-2">{{ t('general.resume.greetings') }} <strong>José Duque.</strong></h1>
        <p v-html="htmlSanitizer(t('general.resume.excerpt'))" />
        <div class="button-container">
          <v-icon v-for="stack in TECH_STACK" class="hover:animate-wiggle" :name="stack.icon" scale="2.5"
            :title="stack.title" />
        </div>
      </div>
      <picture class="w-full order-1 lg:basis-1/2 lg:order-2 overflow-hidden">
        <img class="shadow transition-all duration-500 scale-110 hover:rotate-3"
          :class="isPortraitLoaded ? 'opacity-100' : 'opacity-0'" :src="avatar" alt="José Miguel Duque" loading="lazy"
          @load="onLoaded" />
      </picture>
    </section>
    <section>
      <h2 class="text-h2" v-text="t('general.resume.description.title')" />
      <p v-html="htmlSanitizer(t('general.resume.description.content'))" />
    </section>
  </WrapperLayout>
</template>

<script setup lang="ts">
import avatar from '@/assets/avatar.webp';
import TECH_STACK from '@/shared/data/stack.json';
import useLanguageContext from '@/composables/useLanguageContext';
import WrapperLayout from '@/layouts/WrapperLayout.vue';

import { htmlSanitizer } from '@/shared/helpers/htmlSanitizer';
import { ref } from 'vue';

const isPortraitLoaded = ref<boolean>(false);
const { t } = useLanguageContext();

const onLoaded = () => {
  isPortraitLoaded.value = true;
};
</script>
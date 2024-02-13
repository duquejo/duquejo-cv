<template>
  <WrapperLayout>
    <section class="row items-center mx-0 mt-0 px-0">
      <div class="w-full order-2 lg:basis-1/2 lg:order-1 px-8 pt-8 lg:m-auto">
        <span class="text-gray-500 text-lg">{{ t('general.role') }}</span>
        <h1 class="mt-2">{{ t('general.resume.greetings') }} <strong>José Duque.</strong></h1>
        <p v-text="t('general.resume.excerpt1', { numYear: calculateYears })" />
        <p v-html="htmlSanitizer(t('general.resume.excerpt2'))" />
        <div class="button-container">
          <v-icon v-for="stack in TECH_STACK" class="hover:animate-wiggle" :name="stack.icon" scale="2.5"
            :title="stack.title" />
        </div>
      </div>
      <picture class="w-full order-1 lg:basis-1/2 lg:order-2 overflow-hidden">
        <img class="shadow transition-all duration-500 scale-110 hover:rotate-3" loading="lazy" alt="José Miguel Duque"
          :class="isPortraitLoaded ? 'opacity-100' : 'opacity-0'" sizes="(max-width: 1400px) 100vw, 1400px" srcset="
          /static/img/avatar_w_200.webp 200w,
          /static/img/avatar_w_558.webp 558w,
          /static/img/avatar_w_825.webp 825w,
          /static/img/avatar_w_1089.webp 1089w,
          /static/img/avatar_w_1255.webp 1255w,
          /static/img/avatar_w_1400.webp 1400w" src="/static/img/avatar_w_1400.webp" @load="onLoaded" />
      </picture>
    </section>
    <section>
      <h2 class="text-h2" v-text="t('general.resume.description.title')" />
      <p v-html="htmlSanitizer(t('general.resume.description.content'))" />
    </section>
  </WrapperLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TECH_STACK from '@/shared/data/stack.json';
import useLanguageContext from '@/composables/useLanguageContext';
import WrapperLayout from '@/layouts/WrapperLayout.vue';

import { htmlSanitizer } from '@/shared/helpers/htmlSanitizer';
import { calculateYears } from '@/shared/helpers/calculateYears';

const isPortraitLoaded = ref<boolean>(false);
const { t } = useLanguageContext();

const onLoaded = () => {
  isPortraitLoaded.value = true;
};
</script>
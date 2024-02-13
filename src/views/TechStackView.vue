<template>
  <WrapperLayout>
    <section>
      <h1 class="text-h1 leading-tight">
        {{ t('general.services.title') }} & <br />{{ t('general.services.title2') }}
      </h1>
    </section>
    <section>
      <!-- General Services -->
      <h2 class="text-h2 hidden md:block">{{ t('general.services.subtitle') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <IconCardComponent v-for="({ content, title, icon }) in languageSources.services" :content="content"
          :title="title" :icon="icon" />
      </div>
    </section>
    <section class="row">
      <div class="basis-full">
        <!-- Experience -->
        <h3 class="text-h3 mb-6 mt-5">{{ t('general.services.experience.title') }}</h3>
        <TimelineComponent
          v-for="({ role, type, additional_info, start_date, end_date, enterprise, isRecent, project, resume }, index) in languageSources.experience"
          :role="role" :type="(type as Type)" :additional_info="additional_info" :start_date="start_date" :end_date="end_date"
          :enterprise="enterprise" :is-recent="isRecent" :project="project" :resume="resume" :key="index" />

        <!-- Education -->
        <h3 class="text-h3 mb-6 mt-10">{{ t('general.services.education.title') }}</h3>
        <TimelineComponent
          v-for="({ role, type, additional_info, start_date, end_date, enterprise, isRecent, project, resume }, index) in languageSources.education"
          :role="role" :type="(type as Type)" :additional_info="additional_info" :start_date="start_date" :end_date="end_date"
          :enterprise="enterprise" :is-recent="isRecent" :project="project" :resume="resume" :key="index" />
      </div>
      <div class="basis-1/2">
        <!-- Idiomas -->
        <h3 class="text-h3 mb-6 mt-5">{{ t('general.services.languages.title') }}</h3>
        <div class="grid grid-cols-2 gap-x-8 gap-y-6">
          <IconCardComponent v-for="({ content, title, icon }) in languageSources.languages" :content="content"
            :title="title" :icon="icon" :order="Order.Col" />
        </div>

        <!-- Languages -->
        <h3 class="text-h3 mb-6 mt-10">{{ t('general.services.tech_languages.title') }}</h3>
        <ProgressBarComponent v-for="(language, i) in orderedLanguages" :key="`${language.tag}-${i}`"
          :color="language.color" :tag="language.tag" :value="language.value" />

        <!-- Framework & Libraries -->
        <h3 class="text-h3 mb-6 mt-10">{{ t('general.services.framelibs.title') }}</h3>
        <ProgressBarComponent v-for="(framelib, i) in orderedFrameLibs" :key="`${framelib.tag}-${i}`"
          :color="framelib.color" :tag="framelib.tag" :value="framelib.value" />

        <!-- Knowledges -->
        <h3 class="text-h3 mb-6 mt-10">{{ t('general.services.knowledges.title') }}</h3>
        <div class="flex flex-wrap gap-2 lg:gap-3 justify-evenly lg:justify-normal">
          <PillComponent v-for="(knowledge, i) in languageSources.knowledges" :key="`${knowledge}-${i}`"
            :text="knowledge" />
        </div>
      </div>
    </section>
  </WrapperLayout>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';

import { Order, Type, Bars } from '@/interfaces';

import useLanguageContext from '@/composables/useLanguageContext';

import WrapperLayout from '@/layouts/WrapperLayout.vue';
import IconCardComponent from '@/components/card/IconCardComponent.vue';

const TimelineComponent = defineAsyncComponent(() => import('@/components/timeline/TimelineComponent.vue'));
const ProgressBarComponent = defineAsyncComponent(() => import('@/components/progress-bar/ProgressBarComponent.vue'));
const PillComponent = defineAsyncComponent(() => import('@/components/pill/PillComponent.vue'));

import { orderObjectListByKey } from '@/shared/helpers/orderByValue';

const { t, languageSources } = useLanguageContext();

const orderedLanguages = computed(() => orderObjectListByKey<Bars>(languageSources.value.main_languages, 'value'));
const orderedFrameLibs = computed(() => orderObjectListByKey<Bars>(languageSources.value.framelibs, 'value'));
</script>
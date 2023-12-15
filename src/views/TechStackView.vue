<template>
  <article>
    <section>
      <h1 class="text-h1 leading-tight">Servicios &<br/>Stack de tecnologías</h1>
    </section>
    <section>
      <!-- General Services -->
      <h2 class="text-h2">Servicios generales</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <IconCardComponent
          v-for="({ content, title, icon }) in SERVICES"
          :content="content"
          :title="title"
          :icon="icon"
        />
      </div>
    </section>
    <section class="row">
      <div class="basis-full">

        <!-- Experience -->
        <h3 class="text-h3 mb-6 mt-10">Experiencia</h3>
        <TimelineComponent
          v-for="({ role, type, additional_info, date_range, enterprise, isRecent, project, resume }, index) in EXPERIENCE"
          :role="role"
          :type="(type as Type)"
          :additional_info="additional_info"
          :date_range="date_range"
          :enterprise="enterprise"
          :is-recent="isRecent"
          :project="project"
          :resume="resume"
          :key="index"
        />
        
        <!-- Education -->
        <h3 class="text-h3 mb-6 mt-10">Estudios académicos</h3>
        <TimelineComponent
          v-for="({ role, type, additional_info, date_range, enterprise, isRecent, project, resume }, index) in EDUCATION"
          :role="role"
          :type="(type as Type)"
          :additional_info="additional_info"
          :date_range="date_range"
          :enterprise="enterprise"
          :is-recent="isRecent"
          :project="project"
          :resume="resume"
          :key="index"
        />

      </div>
      <div class="basis-1/2">
        <!-- Languages -->
        <h3 class="text-h3 mb-6 mt-10">Lenguajes</h3>
        <ProgressBarComponent v-for="(language, i) in orderedLanguages" :key="`${language.tag}-${i}`" :color="language.color"
          :tag="language.tag" :value="language.value" />

        <!-- Framework & Libraries -->
        <h3 class="text-h3 mb-6 mt-10">Librerías & Frameworks</h3>
        <ProgressBarComponent v-for="(framelib, i) in orderedFrameLibs" :key="`${framelib.tag}-${i}`" :color="framelib.color"
          :tag="framelib.tag" :value="framelib.value" />

        <!-- Knowledges -->
        <h3 class="text-h3 mb-6 mt-10">Herramientas & Capacidades</h3>
        <div class="flex flex-wrap gap-2 md:gap-3 justify-evenly md:justify-normal">
          <PillComponent v-for="(knowledge, i) in KNOWLEDGES" :key="`${knowledge}-${i}`" :text="knowledge" />
        </div>

        <!-- Certifications -->
        <h3 class="text-h3 mb-6 mt-10">Certificaciones</h3>
        <div class="flex flex-col gap-4">
          <CCardComponent />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import LANGUAGES from '../shared/data/languages.json';
import FRAMELIBS from '../shared/data/framelibs.json';
import EXPERIENCE from '../shared/data/experience.json';
import KNOWLEDGES from '../shared/data/knowledges.json';
import EDUCATION from '../shared/data/education.json';
import SERVICES from '../shared/data/services.json';

import { Bars, Type } from '../interfaces';
import { orderObjectListByKey } from '../shared/helpers/orderByValue';

import TimelineComponent from '../components/timeline/TimelineComponent.vue';
import ProgressBarComponent from '../shared/components/progress-bar/ProgressBarComponent.vue';
import PillComponent from '../shared/components/pill/PillComponent.vue';
import CCardComponent from '../components/certification-card/CCardComponent.vue';
import IconCardComponent from '../shared/components/card/IconCardComponent.vue';

const orderedLanguages = computed(() => orderObjectListByKey<Bars>(LANGUAGES, 'value'));
const orderedFrameLibs = computed(() => orderObjectListByKey<Bars>(FRAMELIBS, 'value'));
</script>
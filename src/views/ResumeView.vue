<template>
  <article>
    <section class="row items-center mx-0 mt-0">
      <div class="w-full order-2 lg:basis-1/2 lg:order-1 px-8 pt-8 lg:m-auto">
        <span class="text-gray-400 text-lg">{{ t('general.role') }}</span>
        <h1 class="mt-2">{{ t('resume.greetings') }} <strong>José Duque.</strong></h1>
        <p v-html="htmlSanitizer(t('resume.excerpt'))" />
        <div class="button-container">
          <v-icon v-for="stack in TECH_STACK" class="hover:animate-wiggle" :name="stack.icon" scale="2.5" :title="stack.title" />
        </div>
      </div>
      <picture class="w-full order-1 lg:basis-1/2 lg:order-2 overflow-hidden">
        <img class="shadow grayscale hover:grayscale-0 transition-all duration-500 scale-110 hover:rotate-3 delay-200" src="../assets/avatar.png" alt="José Duque" />
      </picture>
    </section>
    <section>
      <h2 class="text-h2" v-text="t('resume.description.title')" />
      <p v-html="htmlSanitizer(t('resume.description.content'))" />
    </section>
  </article>
</template>

<script setup lang="ts">
import TECH_STACK from '../shared/data/stack.json';
import { useI18n } from 'vue-i18n';
import { htmlSanitizer } from '../shared/helpers/htmlSanitizer';

const { t } = useI18n({ useScope: 'global' });
</script>
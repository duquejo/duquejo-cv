import {  createI18n } from 'vue-i18n';
import Translation from './Translation';

import en from '@/i18n/locale/en-US/config.json';
import es from '@/i18n/locale/es-CO/config.json';

export type MessageSchema = typeof es;

const tConfig = Translation.getInstance()

tConfig.defineDefaultLocale();

const i18n = createI18n<[MessageSchema], 'es' | 'en'>({
  locale: tConfig.currentLocale,
  fallbackLocale: tConfig.fallbackLocale,
  legacy: false, // Vue 3
  globalInjection: true,
  warnHtmlMessage: false,
  messages: { es, en },
});

export default i18n;
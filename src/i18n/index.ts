import { createI18n } from 'vue-i18n';

import en from '@/i18n/locale/en-US/config.json';
import es from '@/i18n/locale/es-CO/config.json';

type MessageSchema = typeof es;

const i18n = createI18n<[MessageSchema], 'es' | 'en'>({
  locale: import.meta.env.VITE_I18N_LOCALE || 'es',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'es',
  legacy: false, // Vue 3
  globalInjection: true,
  warnHtmlMessage: false,
  messages: { es, en },
});

export default i18n;
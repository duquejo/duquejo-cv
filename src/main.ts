import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  BiGithub,
  CoLinkedinIn,
  MdEmailOutlined,
  BiChevronRight,
  BiChevronUp,
  CoHamburgerMenu,
  HiDatabase,
  MdLaptopmac,
  HiAcademicCap,
  BiFiletypeHtml,
  PrTimes,
  BiFiletypePdf,
  ViFileTypeTypescriptOfficial,
  ViFileTypeTailwind,
  ViFileTypeReactjs,
  ViFileTypeNode,
  ViFileTypeVue,
  RiEnglishInput,
  BiGlobe2
} from 'oh-vue-icons/icons';
import './style.css';

addIcons(
  BiGithub,
  CoLinkedinIn,
  MdEmailOutlined,
  BiChevronRight,
  CoHamburgerMenu,
  HiDatabase,
  BiChevronUp,
  MdLaptopmac,
  HiAcademicCap,
  BiFiletypeHtml,
  PrTimes,
  BiFiletypePdf,
  ViFileTypeTypescriptOfficial,
  ViFileTypeTailwind,
  ViFileTypeReactjs,
  ViFileTypeNode,
  ViFileTypeVue,
  RiEnglishInput,
  BiGlobe2
);

import enUS from './shared/locale/en-US/general.json';
import esCO from './shared/locale/es-CO/general.json';

type MessageSchema = typeof esCO;

const i18n = createI18n<[MessageSchema], 'es-CO' | 'en-US'>({
  locale: import.meta.env.I18N_LOCALE || 'es-CO',
  fallbackLocale: import.meta.env.I18N_FALLBACK_LOCALE || 'es-CO',
  legacy: false, // Vue 3
  messages: {
    'es-CO': esCO,
    'en-US': enUS,
  }
});

createApp(App)
  .component('v-icon', OhVueIcon )
  .use(i18n)
  .use(router)
  .mount('#app');
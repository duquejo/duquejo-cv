import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
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
);

createApp(App)
  .component('v-icon', OhVueIcon )
  .use(router)
  .mount('#app');
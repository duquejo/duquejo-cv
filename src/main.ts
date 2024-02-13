import { createApp } from 'vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue';
import router from './router';
import i18n from './i18n/config';
import { iconsToAdd } from './assets/icons';
import './style.css';

addIcons(...iconsToAdd);

const app = createApp(App)
  .component('v-icon', OhVueIcon )
  .use(VueQueryPlugin)
  .use(i18n)
  .use(router);

if (process.env.NODE_ENV === 'development') {
  app.config.performance = true;
}

app.mount('#app');
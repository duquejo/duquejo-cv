import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { iconsToAdd } from './assets/icons';
import './style.css';

addIcons(...iconsToAdd);

createApp(App)
  .component('v-icon', OhVueIcon )
  .use(i18n)
  .use(router)
  .mount('#app');
import { createI18n } from 'vue-i18n';

const defaultLocale = 'es';
const defaultOptions = {
  en: { hello: 'world' },
  fr: { hello: 'monde' },
  es: { hello: 'mundo' },
};

const createVueI18n = (locale = defaultLocale, messages: any = defaultOptions) => createI18n({
  locale,
  fallbackLocale: defaultLocale,
  legacy: false,
  allowComposition: true,
  warnHtmlMessage: false,
  messages,
});

export default createVueI18n;
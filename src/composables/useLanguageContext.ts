import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import CONFIG_CO from '../shared/locale/es-CO/config.json';
import CONFIG_US from '../shared/locale/en-US/config.json';

export enum SupportedLanguages {
  ES_CO = 'es-CO',
  EN_US = 'en-US',
};

type SourceType = Record<SupportedLanguages, any>;

const SOURCES: SourceType = {
  [SupportedLanguages.ES_CO]: CONFIG_CO,
  [SupportedLanguages.EN_US]: CONFIG_US,
}

const useLanguageContext = () => {
  const { t, locale } = useI18n({ useScope: 'global' });
  const languageSources = ref(SOURCES[locale.value as SupportedLanguages]);
  watch(locale, (val: string) => {
    switch (val) {
      case SupportedLanguages.ES_CO:
        return languageSources.value = SOURCES[SupportedLanguages.ES_CO];
      case SupportedLanguages.EN_US:
        return languageSources.value = SOURCES[SupportedLanguages.EN_US];
      default:
        console.error('Language not supported.')
        break;
    }
  });

  return {
    t,
    languageSources,
  };
};

export default useLanguageContext;
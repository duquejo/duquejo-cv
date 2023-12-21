import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const useLanguageContext = () => {
  const { t, locale, getLocaleMessage } = useI18n();

  const languageSources = ref<any>(getLocaleMessage(locale.value));

  watch(locale, (val: string) => {
    languageSources.value = getLocaleMessage(val);
  });

  return {
    t,
    languageSources,
  };
};

export default useLanguageContext;
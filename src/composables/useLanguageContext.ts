import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { Translation } from '@/i18n/Translation';
import { MessageSchema } from '@/i18n/config';

const useLanguageContext = () => {

  const { t, locale, getLocaleMessage } = useI18n();

  const translation = Translation.getInstance();

  const languageSources = ref<MessageSchema>(getLocaleMessage(locale.value));

  watch(locale, (val: string) => {
    languageSources.value = getLocaleMessage(val);
    translation.switchLanguage(val);
  });

  return {
    t,
    languageSources,
  };
};

export default useLanguageContext;
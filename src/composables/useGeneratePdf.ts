import { generate } from '@pdfme/generator';
import { generateInputs, generateBaseTemplate } from '@/components/pdf/config';
import { text } from '@pdfme/schemas';
import type { Ref } from 'vue';
import type { MessageSchema } from '@/i18n/config';
import { computed } from 'vue';

const useGeneratePdf = (locale: Ref<string>, languageSources: Ref<MessageSchema>) => {

  const plugins = { text };
  const template = computed(() => generateBaseTemplate(locale));
  const inputs = computed(() => generateInputs(languageSources));

  const createPdf = () => {
    generate({ template: template.value, plugins, inputs: inputs.value }).then((pdf) => {
      // Browser
      const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
      window.open(URL.createObjectURL(blob));
    });
  }

  return {
    createPdf,
  };
}

export default useGeneratePdf;
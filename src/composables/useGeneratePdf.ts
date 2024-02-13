import { computed } from 'vue';
import type { Ref } from 'vue';
import type { GenerateProps } from '@pdfme/common';
import type { MessageSchema } from '@/i18n/config';
import { generateInputs, generateBaseTemplate } from '@/components/pdf/config';

const loadPdfGenerator = () => import('@pdfme/generator');

const useGeneratePdf = (locale: Ref<string>, languageSources: Ref<MessageSchema>) => {

  const template = computed(() => generateBaseTemplate(locale));
  const inputs = computed(() => generateInputs(languageSources));

  const createPdf = async () => {

    const config: GenerateProps = {
      inputs: inputs.value,
      template: await template.value,
    };

    const { generate } = await loadPdfGenerator();

    generate(config).then((pdf) => {
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
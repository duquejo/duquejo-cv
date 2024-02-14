import { describe, expect, it, vi } from 'vitest';
import { ref } from 'vue';
import { MessageSchema } from '../../../src/i18n/config';
import useGeneratePdf from '../../../src/composables/useGeneratePdf';

const generateMock = vi.fn();
vi.mock('@pdfme/generator', () => ({
  generate: async () => generateMock,
}));

vi.mock('@/components/pdf/config', () => ({
  generateBaseTemplate: () => vi.fn(),
  generateInputs: () => vi.fn(),
}));

describe('+ useGeneratePdf composable tests', () => {

  it('validate initial state', () => {
    const locale = ref('es');
    const languageSources = ref<MessageSchema>({});
    const useGeneratePdfFn = useGeneratePdf(locale, languageSources);

    expect(useGeneratePdfFn.createPdf).toBeInstanceOf(Function);
  });
});
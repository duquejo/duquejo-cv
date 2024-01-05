import { beforeEach, describe, expect, it, vi } from 'vitest';
import useLanguageContext from '../../../src/composables/useLanguageContext';

import { useI18n } from 'vue-i18n';

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual('vue-i18n');
  return {
    ...actual,
    useI18n: vi.fn(),
  };
});

const mockUseI18n = vi.mocked(useI18n);

describe('+ useLanguageContext composable tests', () => {

  beforeEach(() => {
    mockUseI18n.mockReturnValue({
      t: (key: string) => key,
      locale: vi.fn(),
      getLocaleMessage: (key: string) => vi.fn(),
    });
  });

  it('Validate initial state', () => {
    const { t, languageSources } = useLanguageContext();
    expect(t).toBeTruthy();
    expect(languageSources).toBeTruthy();
  });
});
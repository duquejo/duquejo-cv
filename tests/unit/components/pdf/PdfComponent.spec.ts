import { beforeEach, describe, expect, it, vi } from 'vitest';
import { VueWrapper, shallowMount } from '@vue/test-utils';

import { useI18n } from 'vue-i18n';

import PdfComponent from '../../../../src/components/pdf/PdfComponent.vue';
import createVueI18n from '../../../mocks/mock-i18n';

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual('vue-i18n');
  return {
    ...actual,
    useI18n: vi.fn(),
  };
});

const mockUseI18n = vi.mocked(useI18n);

describe('+ PdfComponent.vue tests', () => {

  const i18n = createVueI18n();

  let wrapper: VueWrapper;

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseI18n.mockReturnValue({
      t: (key: string) => key,
      locale: vi.fn(),
      getLocaleMessage: (key: string) => vi.fn(),
    });
    wrapper = shallowMount(PdfComponent, {
      global: {
        plugins: [i18n],
      }
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(mockUseI18n).toHaveBeenCalled();
    expect(mockUseI18n).toHaveBeenCalledWith();
  });

  it('should have visible the PDF button with the ready state', () => {
    expect(wrapper.find('button').attributes('disabled')).toBeFalsy();
    expect(wrapper.find('.cursor-wait').exists()).toBeFalsy();
  });

  it('Should validate the PDF generation inner statuses', async () => {
    const btn = wrapper.find('button');
    await btn.trigger('click');
    expect(wrapper.find('.cursor-wait').exists()).toBeTruthy();
    expect(btn.attributes('disabled')).toBe('');
  });
});
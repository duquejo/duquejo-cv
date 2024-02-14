import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

import TechStackView from '../../../../src/views/TechStackView.vue';
import createVueI18n from "../../../mocks/mock-i18n";

import * as orderByValue from '../../../../src/shared/helpers/orderByValue';
import * as useLanguageContext from '../../../../src/composables/useLanguageContext';

describe('+ TechStackView tests', () => {

  const i18n = createVueI18n('en');

  const orderByValueSpy = vi.spyOn(orderByValue, 'orderObjectListByKey');
  const useLanguageContextSpy = vi.spyOn(useLanguageContext, 'default');

  const scrollIntoViewSpy = vi.fn();
  window.HTMLElement.prototype.scrollIntoView = scrollIntoViewSpy;

  it('Should match the snapshot', async () => {
    const wrapper = mount(TechStackView, {
      global: {
        plugins: [i18n],
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(orderByValueSpy).toHaveBeenCalled();
    expect(orderByValueSpy).toHaveBeenCalledTimes(2);
    
    expect(useLanguageContextSpy).toHaveBeenCalled();

    expect(scrollIntoViewSpy).toHaveBeenCalled();
    expect(scrollIntoViewSpy).toHaveBeenCalledWith({
      behavior: 'instant'
    });
  });
});
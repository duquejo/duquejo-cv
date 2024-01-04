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

  it('Should match the snapshot', () => {
    const wrapper = mount(TechStackView, {
      global: {
        plugins: [i18n],
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(orderByValueSpy).toHaveBeenCalled();
    expect(orderByValueSpy).toHaveBeenCalledTimes(2);
    
    expect(useLanguageContextSpy).toHaveBeenCalled();
  });
});
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

import WrapperLayout from '../../../src/layouts/WrapperLayout.vue';

describe('+ WrapperLayout tests', () => {

  const scrollIntoViewSpy = vi.fn();
  window.HTMLElement.prototype.scrollIntoView = scrollIntoViewSpy;

  it('Should match the snapshot', () => {
    const wrapper = shallowMount(WrapperLayout);

    expect(wrapper.html()).toMatchSnapshot();

    expect(scrollIntoViewSpy).toHaveBeenCalled();
    expect(scrollIntoViewSpy).toHaveBeenCalledWith({
      behavior: 'instant'
    });
  });
});
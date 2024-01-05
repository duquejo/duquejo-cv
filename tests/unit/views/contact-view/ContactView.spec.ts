import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import ContactView from '../../../../src/views/ContactView.vue';

describe('+ ContactView tests', () => {

  it('Should match the snapshot', () => {
    const wrapper = mount(ContactView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
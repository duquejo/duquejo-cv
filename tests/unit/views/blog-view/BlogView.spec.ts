import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import BlogView from '../../../../src/views/BlogView.vue';

describe('+ BlogView tests', () => {

  it('Should match the snapshot', () => {
    const wrapper = mount(BlogView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
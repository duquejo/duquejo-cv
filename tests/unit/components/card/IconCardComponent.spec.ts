
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import IconCardComponent from '../../../../src/components/card/IconCardComponent.vue';


describe('- IconCardComponent.vue tests', () => {

  it('Should match the snapshot', () => {
    const wrapper = shallowMount(IconCardComponent);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
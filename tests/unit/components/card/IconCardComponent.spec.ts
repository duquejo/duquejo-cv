
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import IconCardComponent from '../../../../src/components/card/IconCardComponent.vue';
import { Order } from '../../../../src/interfaces/icon-card';


describe('+ IconCardComponent.vue tests', () => {

  const properties = {
    title: 'john',
    content: 'doe',
    icon: 'foo-bar'
  };

  const wrapper = shallowMount(IconCardComponent, {
    props: properties,
  });

  it('Should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should render a card with it default row configuration', () => {
    expect(wrapper.classes()).toEqual([
      'icon-container',
      'flex-col',
      'lg:flex-row',
      'pl-4',
      'pr-8',
      'text-center',
      'lg:text-left'
    ]);
  });

  it('Should render a column ordered card', () => {
    const wrapperCol = shallowMount(IconCardComponent, {
      props: {
        ...properties,
        order: Order.Col,
      }
    });
    expect(wrapperCol.classes()).toEqual([
      'icon-container',
      'flex-col',
      'px-4',
      'text-center',
      'justify-start',
      'lg:justify-evenly',
      'lg:items-center'
    ]);
  });

  it('Should render the provided props', () => {
    const h4 = wrapper.find('h4');
    const p = wrapper.find('p');
    const icon = wrapper.find('v-icon');

    expect(h4.text()).toBe(properties.title);
    expect(p.text()).toBe(properties.content);
    expect(icon.attributes()).toEqual({
      name: properties.icon,
      scale: expect.any(String),
    });
  });
});
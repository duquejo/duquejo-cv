import { describe, expect, it, vi } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import createVueI18n from '../../../mocks/mock-i18n';
import LangSelectComponent from '../../../../src/components/language-select/LangSelectComponent.vue';

describe('+ LangSelectComponent.vue tests', () => {

  const i18n = createVueI18n();

  let wrapper: VueWrapper;
  wrapper = mount(LangSelectComponent, {
    global: {
      plugins: [i18n],
    },
  });

  it('Should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findComponent(LangSelectComponent)).toBeTruthy();
  });

  it('Should append the available classes', () => {
    expect(wrapper.classes()).toEqual(['text-gray-500', 'lg:text-gray-800', 'bg-transparent', 'text-base', 'lg:appearance-none', 'lg:w-10/12', 'text-center', 'outline-gray-300', 'cursor-pointer', 'capitalize' ]);
  });

  it('Should render a select element with the whole available locales', () => {
    const select = wrapper.find('select');
    expect(select.exists()).toBeTruthy();
    
    const options = select.findAll('option');
    expect(options).toHaveLength(3);

    expect(options[0].text()).toBe('en');
    expect(options[1].text()).toBe('es');
    expect(options[2].text()).toBe('fr');
  });

  it('should update the locate status if a specified option is selected', async () => {
    const newValue = 'fr';
    const select = wrapper.find('select');
    await select.setValue(newValue);
    expect(select.element.value).toBe(newValue);
  });
});
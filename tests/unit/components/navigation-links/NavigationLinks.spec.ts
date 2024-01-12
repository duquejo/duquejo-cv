import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import NavigationLinks from '../../../../src/components/navigation-links/NavigationLinks.vue';
import createVueI18n from '../../../mocks/mock-i18n';


describe('+ NavigationLinks.vue tests', () => {

  const i18n = createVueI18n('en');

  const createWrapper = (
    layout = 'menu', 
    size = 'medium'
  ) => shallowMount(NavigationLinks, {
    props: {
      layout,
      size
    },
    global: {
      plugins: [i18n],
      stubs: {
        RouterLink: RouterLinkStub,
      }
    },
  });

  beforeEach(async () => {
    vi.clearAllMocks();
  });

  it('Should match the snapshot', () => {
    const wrapper = createWrapper();

    expect(wrapper.html()).toMatchSnapshot();
    
    const link = wrapper.findComponent(RouterLinkStub);
    const linkSpy = vi.spyOn(link, 'trigger');
    expect(linkSpy).not.toHaveBeenCalledOnce();

    expect(wrapper.html()).toContain('general.menu.');
  });

  it('should emit "click" event when RouterLink is clicked', async () => {

    const wrapper = createWrapper();

    const links = wrapper.findAllComponents(RouterLinkStub);
    
    links.forEach( async link => {
      const linkSpy = vi.spyOn(link, 'trigger');
      await link.trigger('click');
      expect(linkSpy).toHaveBeenCalled();
    });
    
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('should load dynamic classes conditionally - menu', () => {
    const wrapper = createWrapper('menu', 'small');

    expect(wrapper.find('.navigation').classes()).toEqual([
      'navigation', 
      'w-full',
      'invisible', 
      'lg:visible', 
      'text-right', 
      'my-5',
      'space-y-2',
      'lg:p-0', 
      'px-8', 
      'py-10'
    ]);
    expect(wrapper.find('li').classes()).toContain('text-sm');
  });

  it('should load dynamic classes conditionally - fixed', () => {
    const wrapper = createWrapper('fixed', 'large');

    expect(wrapper.find('.navigation').classes()).toEqual([
      'navigation', 
      'w-full',
      'fixed',
      'flex',
      'bottom-0',
      'bg-gray-100',
      'justify-around',
      'px-4',
      'pb-4',
      'py-2.5',
      'border-t',
      'border-gray-200',
      'lg:hidden'
    ]);
    expect(wrapper.find('li').classes()).toContain('text-lg');
  });
});
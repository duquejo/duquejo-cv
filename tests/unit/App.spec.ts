import { beforeEach, describe, expect, it, vi } from 'vitest';
import { VueWrapper, shallowMount } from '@vue/test-utils';
import AppComponent from '../../src/App.vue';
import createVueI18n from '../mocks/mock-i18n';
import MenuComponent from '../../src/components/menu/MenuComponent.vue';
import SidebarComponent from '../../src/components/sidebar/SidebarComponent.vue';
import UpperHeaderComponent from '../../src/components/upper-header/UpperHeaderComponent.vue';


describe('+ App.vue tests', () => {

  const i18n = createVueI18n();

  let wrapper: VueWrapper;
  let typedWrapperVm: any;

  beforeEach(() => {
    vi.clearAllMocks();
    wrapper = shallowMount(AppComponent, {
      global: {
        plugins: [i18n],
        stubs: {
          'router-view': true
        }
      }
    });
    typedWrapperVm = (wrapper.vm as any);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findComponent(MenuComponent)).toBeTruthy();
    expect(wrapper.findComponent(SidebarComponent)).toBeTruthy();
    expect(wrapper.findComponent(UpperHeaderComponent)).toBeTruthy();
  });

  it('should toggle isOpen when onToggleMenu is called', () => {
    typedWrapperVm = (wrapper.vm as any);
    typedWrapperVm.onToggleMenu()
    expect(typedWrapperVm.isOpen).toBe(false);
    typedWrapperVm.onToggleMenu();
    expect(typedWrapperVm.isOpen).toBe(true);
  });

  it('should toggle isOpenMenu when onToggleSidebarMenu is called', () => {
    typedWrapperVm.onToggleSidebarMenu();
    expect(typedWrapperVm.isOpenMenu).toBe(true);
    typedWrapperVm.onToggleSidebarMenu();
    expect(typedWrapperVm.isOpenMenu).toBe(false);
  });

  it('should set isOpenMenu to false when onOutsideClick is called and isOpenMenu is true', () => {
    typedWrapperVm.isOpenMenu = true;
    typedWrapperVm.onOutsideClick();
    expect(typedWrapperVm.isOpenMenu).toBe(false);
  });

  it('should not change isOpenMenu when onOutsideClick is called and isOpenMenu is false', () => {
    typedWrapperVm.isOpenMenu = false;
    typedWrapperVm.onOutsideClick();
    expect(typedWrapperVm.isOpenMenu).toBe(false);
  });

  it('should compute mainClasses correctly', () => {
    typedWrapperVm.isOpenMenu = true;
    expect(typedWrapperVm.mainClasses).toEqual({
      'blur-sm': true,
    });
    typedWrapperVm.isOpenMenu = false;
    expect(typedWrapperVm.mainClasses).toEqual({
      'blur-sm': false,
    });
  });
});
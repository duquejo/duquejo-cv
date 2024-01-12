import { beforeEach, describe, expect, it, vi } from 'vitest';
import { VueWrapper, shallowMount } from '@vue/test-utils';

import { useI18n } from 'vue-i18n';

import createVueI18n from '../../../mocks/mock-i18n';
import MenuComponent from '../../../../src/components/menu/MenuComponent.vue';
import RecentCardComponent from '../../../../src/components/recent-card/RecentCardComponent.vue';
import createVueQuery from '../../../mocks/mock-vueQuery';

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual('vue-i18n');
  return {
    ...actual,
    useI18n: vi.fn(),
  };
});

const mockUseI18n = vi.mocked(useI18n);

describe('+ MenuComponent.vue tests', () => {

  const i18n = createVueI18n('en');

  let wrapper: VueWrapper;

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseI18n.mockReturnValue({
      t: (key: string) => key,
    });
    wrapper = shallowMount(MenuComponent, {
      global: {
        plugins: [i18n, createVueQuery],
      }
    });
  });

  it('Should match the snapshot with the defaults', () => {
    expect(wrapper.html()).toMatchSnapshot();

    expect(wrapper.findAllComponents(RecentCardComponent)).toHaveLength(0);

    const eventsIcon = wrapper.find('.icon');
    expect(eventsIcon.exists()).toBeTruthy();
    expect(eventsIcon.attributes('title')).toBe('general.menu.events_loading_description');
  });

  it('Should retrieve the translations', () => {
    expect(mockUseI18n).toHaveBeenCalled();
  });

  it('should emit the toggle event if the menu icon is triggered', async () => {
    const wrapperWithProps = shallowMount(MenuComponent, {
      props: {
        isOpen: false,
      },
      global: {
        plugins: [i18n, createVueQuery],
      }
    });

    const menuItem = wrapperWithProps.find('.icon');

    await menuItem.trigger('click');

    expect(menuItem.exists()).toBeTruthy();
    expect(wrapperWithProps.emitted('toggle'));
    
  });
});
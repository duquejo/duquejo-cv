import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest';
import { VueWrapper, shallowMount } from '@vue/test-utils';

import { useI18n } from 'vue-i18n';

import createVueI18n from '../../../mocks/mock-i18n';
import MenuComponent from '../../../../src/components/menu/MenuComponent.vue';
import RecentCardComponent from '../../../../src/components/recent-card/RecentCardComponent.vue';

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
  const events = [{}];

  let wrapper: VueWrapper;

  beforeEach(() => {
    mockUseI18n.mockReturnValue({
      t: (key: string) => key,
    });
    wrapper = shallowMount(MenuComponent, {
      global: {
        plugins: [i18n],
      }
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Should match the snapshot with the defaults', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findAllComponents(RecentCardComponent)).toHaveLength(0);
    expect(wrapper.findAll('.icon')).toHaveLength(0);
  });

  it('should render the menu selector and the fixed aside container if events are given', () => {
    const wrapperWithProps = shallowMount(MenuComponent, {
      props: {
        events,
      },
      global: {
        plugins: [i18n],
      }
    });

    expect(wrapperWithProps.html()).toMatchSnapshot();
    expect(wrapperWithProps.findAllComponents(RecentCardComponent)).toHaveLength(1);
    expect(wrapperWithProps.findAll('.icon')).toHaveLength(1);
  });

  it('Should show the correct sidebar classes if the menu is closed', () => {
    const wrapperWithProps = shallowMount(MenuComponent, {
      props: {
        events,
        isOpen: false
      },
      global: {
        plugins: [i18n],
      }
    });
    const sidebar = wrapperWithProps.find('div');

    expect(sidebar.classes()).toEqual([
      "fixed",
      "w-80",
      "h-auto",
      "top-0",
      "bottom-0",
      "my-4",
      "rounded",
      "z-10",
      "bg-gray-100",
      "shadow-md",
      "flex",
      "flex-col",
      "justify-between",
      "gap-2",
      "transition-all",
      "duration-500",
      "ease-in-out",
      "opacity-0",
      "translate-x-full",
      "right-0",
    ]);
  });

  it('Should show the correct sidebar classes if the menu is open', () => {
    const wrapperWithProps = shallowMount(MenuComponent, {
      props: {
        events,
        isOpen: true
      },
      global: {
        plugins: [i18n],
      }
    });
    const sidebar = wrapperWithProps.find('div');

    expect(sidebar.classes()).toEqual([
      'fixed',
      'w-80',
      'h-auto',
      'top-0',
      'bottom-0',
      'my-4',
      'rounded',
      'z-10',
      'bg-gray-100',
      'shadow-md',
      'flex',
      'flex-col',
      'justify-between',
      'gap-2',
      'transition-all',
      'duration-500',
      'ease-in-out',
      'opacity-100',
      'translate-x-0',
      'right-12',
    ]);
  });

  it('Should retrieve the translations', () => {
    expect(mockUseI18n).toHaveBeenCalled();
  });
});
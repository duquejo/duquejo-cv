import { describe, expect, it, vi, beforeEach } from 'vitest';
import { shallowMount, VueWrapper, RouterLinkStub } from '@vue/test-utils';

import SidebarComponent from '../../../../src/components/sidebar/SidebarComponent.vue';
import UpperHeaderComponent from '../../../../src/components/upper-header/UpperHeaderComponent.vue';
import createVueI18n from '../../../mocks/mock-i18n';

import { SocialLinksBuilder } from '../../../utils/SocialLinksBuilder';

describe('+ SidebarComponent.vue tests', () => {

  const i18n = createVueI18n('en');

  let wrapper: VueWrapper;

  const social_links = new SocialLinksBuilder()
    .withDefaultLinks()
    .build();

  const createWrapper = (
    isOpen = false, 
    socialLinks = social_links
  ) => shallowMount(SidebarComponent, {
    props: {
      isOpen,
      socialLinks
    },
    global: {
      plugins: [i18n],
      stubs: {
        RouterLink: RouterLinkStub,
        UpperHeaderComponent: UpperHeaderComponent,
      }
    },
  });

  beforeEach(async () => {
    vi.clearAllMocks();
  });

  it('Should match the snapshot', () => {
    wrapper = createWrapper();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should match the snapshot if socialLinks are not given', () => {
    wrapper = createWrapper(false, []);
    expect(wrapper.html()).toMatchSnapshot();

    const sidebarContainer = wrapper.find('.sidebar-news-container');
    expect(sidebarContainer.exists()).toBeFalsy();
  });

  it('should render with the sidebar closed by default', () => {
    wrapper = createWrapper();
    const sidebar = wrapper.find('#sidebar');
    expect(sidebar.classes()).toContain('left-0');
    expect(sidebar.classes()).not.toContain('left-full');
  });

  it('should render with the sidebar open if isOpen is true', () => {
    wrapper = createWrapper(true);
    const sidebar = wrapper.find('#sidebar');
    expect(sidebar.classes()).toContain('left-full');
    expect(sidebar.classes()).not.toContain('left-0');
  });

  it('should emit "toggle" event when UpperHeaderComponent is clicked', async () => {
    const wrapper = createWrapper();
    const upperHeader = wrapper.findComponent(UpperHeaderComponent);
    await upperHeader.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('toggle');
  });
});
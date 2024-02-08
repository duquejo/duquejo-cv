import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi, afterEach, beforeEach, MockInstance } from 'vitest';

import RecentCardComponent from '../../../../src/components/recent-card/RecentCardComponent.vue';
import PillComponent from '../../../../src/components/pill/PillComponent.vue';
import createVueI18n from '../../../mocks/mock-i18n';
import events from '../../../mocks/events.json';

describe('+ RecentCardComponent.vue tests', () => {

  let mockDate: MockInstance<[locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions], string>;

  const mockedDate = '12/22/2023, 1:00:00 PM';
  const i18n = createVueI18n('en');

  const pushEvent = events[0];
  const createEvent = events[1];
  const pullRequestEvent = events[2];
  const watchEvent = events[3];

  const createShallowMount = (eventType = pushEvent) => shallowMount(RecentCardComponent, {
    props: {
      event: eventType,
    },
    global: {
      plugins: [i18n],
      stubs: {
        PillComponent: PillComponent,
      }
    }
  });
  

  beforeEach(() => {
    mockDate = vi.spyOn(Date.prototype, 'toLocaleString').mockReturnValue(mockedDate);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Should match the snapshot', () => {

    const wrapper = createShallowMount();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render conditionally its sections based on event type - PushEvent', () => {
    const wrapper = createShallowMount(pushEvent);

    const typeContainer = wrapper.find('[data-test="rc-type"]');
    const typeSpan = typeContainer.find('span');
    const typeIcon = typeContainer.find('v-icon');

    const a = wrapper.findAll('p a');

    expect(a.length).toBeGreaterThan(0);
    expect(wrapper.findComponent(PillComponent).exists()).toBeFalsy();
    
    expect(typeContainer.text()).toBe(pushEvent.type);
    expect(typeIcon.attributes()).toEqual({ name: 'oi-repo-push', scale: '1' });
    expect(typeSpan.classes()).toContain('bg-red-400');
  });

  it('should render conditionally its sections based on event type - WatchEvent', () => {
    const wrapper = createShallowMount(watchEvent);

    const typeContainer = wrapper.find('[data-test="rc-type"]');
    const typeSpan = typeContainer.find('span');
    const typeIcon = typeContainer.find('v-icon');

    const a = wrapper.find('p a');

    expect(a.exists()).toBeFalsy();
    expect(wrapper.findComponent(PillComponent).exists()).toBeFalsy();
    
    expect(typeContainer.text()).toBe(watchEvent.type);
    expect(typeIcon.attributes()).toEqual({ name: 'ri-eye-2-line', scale: '1' });
    expect(typeSpan.classes()).toContain('bg-cyan-300');
  });

  it('should render conditionally its sections based on event type - CreateEvent', () => {
    const wrapper = createShallowMount(createEvent);

    const typeContainer = wrapper.find('[data-test="rc-type"]');
    const typeSpan = typeContainer.find('span');
    const typeIcon = typeContainer.find('v-icon');

    const a = wrapper.find('p a');

    expect(a.exists()).toBeFalsy();
    expect(wrapper.findComponent(PillComponent).exists()).toBeTruthy();

    expect(typeContainer.text()).toContain(createEvent.type);
    expect(typeIcon.attributes()).toEqual({ name: 'io-git-branch', scale: '1' });
    expect(typeSpan.classes()).toContain('bg-teal-400');
  });

  it('should render conditionally its sections based on event type - PullRequestEvent', () => {
    const wrapper = createShallowMount(pullRequestEvent);

    const typeContainer = wrapper.find('[data-test="rc-type"]');
    const typeSpan = typeContainer.find('span');
    const typeIcon = typeContainer.find('v-icon');

    const a = wrapper.find('p a');

    expect(a.exists()).toBeFalsy();
    expect(wrapper.findComponent(PillComponent).exists()).toBeTruthy();

    expect(typeContainer.text()).toBe(pullRequestEvent.type);
    expect(typeIcon.attributes()).toEqual({ name: 'io-git-pull-request-sharp', scale: '1' });
    expect(typeSpan.classes()).toContain('bg-yellow-400');
  });

  
  it('should render conditionally its sections based on event type - Default fallback', () => {
    const wrapper = createShallowMount({
      ...watchEvent,
      type: 'FooBar'
    });

    const typeContainer = wrapper.find('[data-test="rc-type"]');
    const typeIcon = typeContainer.find('v-icon');

    expect(typeIcon.attributes()).toEqual({ name: 'oi-repo-push', scale: '1' });
  });


  it('should render conditionally the date tag', () => {
    const wrapper = createShallowMount({
      ...pushEvent,
      created_at: 'foo-bar', // Invalid date
    });

    const date = wrapper.find('time');
    const typeContainer = wrapper.find('[data-test="rc-type"]');
    const typeIcon = typeContainer.find('v-icon');

    expect(typeIcon.attributes()).toEqual({ name: 'oi-repo-push', scale: '1' });
    expect(date.exists()).toBeFalsy();
  });
});
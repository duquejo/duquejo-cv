import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { VueWrapper, shallowMount } from '@vue/test-utils';
import ProgressBarComponent from '../../../../src/components/progress-bar/ProgressBarComponent.vue';
import { Bars } from '../../../../src/interfaces/bars';

describe('+ ProgressBarComponent.vue tests', () => {

  let wrapper: VueWrapper;

  const data: Bars = {
    color: '#10b981',
    tag: 'foo',
    value: 100
  };

  beforeEach(()=> {
    vi.clearAllMocks();
    vi.useFakeTimers();
    wrapper = shallowMount(ProgressBarComponent, {
      props: data,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks()
  });

  it('Should match the snapshot.', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should pass the props properly with the initial state', () => {
    const tag = wrapper.find('strong');
    const progress = wrapper.find('[data-test="progress"]');
    expect(tag.text()).toBe(data.tag);
    expect(progress.attributes().style).toContain(`width: 0%`);
  });

  it('Should render the progress bar with the 100% percentage progress', async () => {
    await vi.advanceTimersByTimeAsync(3000);
    const progress = wrapper.find('[data-test="progress"]');
    expect(progress.attributes().style).toContain(`width: 100%`);
  })
});
import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import TimelineComponent from '../../../../src/components/timeline/TimelineComponent.vue';
import { TimelineBuilder } from '../../../utils/TimelineBuilder';
import { Experience } from '../../../../src/interfaces/experience';

describe('+ TimelineComponent.vue tests', () => {

  const generateWrapper = (timeline?: Experience) => 
    shallowMount(TimelineComponent, {
      props: timeline && { ...timeline },
    }
  );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should match the snapshot - Paragraph', () => {
    const timeline = new TimelineBuilder().withParagraph().build();
    const wrapper = generateWrapper(timeline);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should match the snapshot - List', () => {
    const timelineList = new TimelineBuilder().withList().build();
    const wrapper = generateWrapper(timelineList);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should map the properties as expected with the paragraph type', () => {
    const timeline = new TimelineBuilder().withParagraph().build();
    const wrapper = generateWrapper(timeline);

    const time = wrapper.findAll('time');
    const timeSpan = wrapper.find('[data-test="time"]');
    const content = wrapper.find('p');
    const small = wrapper.find('small');
    
    expect(time[0].text()).toBe(timeline.start_date);
    expect(time[1].text()).toBe(timeline.end_date);
    expect(content.text()).toBe(timeline.resume);
    expect(small.text()).toBe(timeline.additional_info);

    expect(timeSpan.classes()).toContain('border-gray-400');
    expect(timeSpan.classes()).not.toContain('border-yellow-400');
  });

  it('should map the properties as expected with the list type', () => {
    const timelineList = new TimelineBuilder().withList().build();
    const wrapper = generateWrapper(timelineList);

    const detail = wrapper.find('[data-test="detail"]');
    const time = wrapper.findAll('time');
    const content = wrapper.findAll('ul li');
    const small = wrapper.find('small');
    
    expect(time[0].text()).toBe(timelineList.start_date);
    expect(time[1].text()).toBe(timelineList.end_date);
    expect(content).toHaveLength(2);
    expect(small.text()).toBe(timelineList.additional_info);

    expect(detail.classes()).toContain('bg-gray-400');
    expect(detail.classes()).not.toContain('bg-yellow-400');
  });

  it('should conditionate date classes - Recent date', () => {
    const timelineList = new TimelineBuilder().withParagraph().setIsRecent(true).build();
    const wrapper = generateWrapper(timelineList);

    const timeSpan = wrapper.find('[data-test="time"]');

    expect(timeSpan.classes()).toContain('border-yellow-400');
    expect(timeSpan.classes()).not.toContain('border-gray-400');
  });

  it('should conditionate detail classes - Recent detail', () => {
    const timelineList = new TimelineBuilder().withParagraph().setIsRecent(true).build();
    const wrapper = generateWrapper(timelineList);

    const detail = wrapper.find('[data-test="detail"]');

    expect(detail.classes()).toContain('bg-yellow-400');
    expect(detail.classes()).not.toContain('bg-gray-400');
  });

  it('should validate conditional start and end dates', () => {

    const timelineList = new TimelineBuilder()
      .withParagraph()
      .setStartDate('')
      .setEndDate('')
      .setIsRecent(true)
      .build();

    const wrapper = generateWrapper(timelineList);

    const time = wrapper.findAll('time');

    expect(time).toHaveLength(0);
  });
});
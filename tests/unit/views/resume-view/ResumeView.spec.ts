import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import ResumeView from '../../../../src/views/ResumeView.vue';
import createVueI18n from '../../../mocks/mock-i18n';
import * as utils from '../../../../src/shared/helpers/htmlSanitizer';

describe('+ ResumeView tests', () => {

  const i18n = createVueI18n('en');
  const htmlSanitizerSpy = vi.spyOn(utils, 'htmlSanitizer');

  const scrollIntoViewSpy = vi.fn();
  window.HTMLElement.prototype.scrollIntoView = scrollIntoViewSpy;

  it('Should match the snapshot', () => {
    const wrapper = mount(ResumeView, {
      global: {
        plugins: [i18n],
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(htmlSanitizerSpy).toHaveBeenCalled();
    expect(htmlSanitizerSpy).toHaveBeenCalledTimes(2);
    expect(htmlSanitizerSpy).toHaveBeenCalledWith('general.resume.excerpt2');
    expect(htmlSanitizerSpy).toHaveBeenCalledWith('general.resume.description.content');

    expect(scrollIntoViewSpy).toHaveBeenCalled();
    expect(scrollIntoViewSpy).toHaveBeenCalledWith({
      behavior: 'instant'
    });
  });

  it('should load the image after tick', async () => {
    // Arrange
    const wrapper = mount(ResumeView, {
      global: {
        plugins: [i18n],
      }
    }) as any;

    // Act & Assert
    expect(wrapper.find('img').classes('opacity-0'));
    expect(wrapper.vm.isPortraitLoaded).toBeFalsy();
    wrapper.vm.onLoaded();
    expect(wrapper.find('img').classes('opacity-100'));
    expect(wrapper.vm.isPortraitLoaded).toBeTruthy();
  });
});
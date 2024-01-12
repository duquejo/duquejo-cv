import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FooterComponent from '../../../../src/components/footer/FooterComponent.vue';
import { SocialLinksBuilder } from '../../../utils/SocialLinksBuilder';
import createVueI18n from "../../../mocks/mock-i18n";

describe('+ FooterComponent.vue tests', () => {

  const socialLinks = new SocialLinksBuilder().withDefaultLinks().build();

  const i18n = createVueI18n('en');

  const wrapper = shallowMount(FooterComponent, {
    props: {
      socialLinks,
    },
    global: {
      plugins: [i18n],
    }
  });

  it('Should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should render the social links if they are given', () => {
    const li = wrapper.findAll('li');
    expect(li.length).toBe(socialLinks.length);
  });

  it('Should validate if social links are provided', () => {
    const wrapperWithoutLinks = shallowMount(FooterComponent, {
      global: {
        plugins: [i18n],
      }
    });
    const li = wrapperWithoutLinks.findAll('li');
    expect(li.length).toBe(0);
  });

  it('Should generate the current year automatically', () => {
    const span = wrapper.find('span');
    expect(span.text()).toContain(new Date().getFullYear());
  });
});
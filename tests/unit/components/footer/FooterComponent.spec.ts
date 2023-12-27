import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FooterComponent from '../../../../src/components/footer/FooterComponent.vue';

describe('+ FooterComponent.vue tests', () => {

  const socialLinks = [
    {
      order: 1,
      icon: "bi-github",
      title: "Github",
      name: "github",
      url: "github.com"
    },
    {
      order: 2,
      icon: "co-linkedin-in",
      title: "LinkedLn",
      name: "linkedln",
      url: "linkedin.com"
    },
    {
      order: 3,
      icon: "john",
      title: "Doe",
      name: "johndoe",
      url: "john-doe.com"
    },
    {
      order: 4,
      icon: "foo",
      title: "Bar",
      name: "foobar",
      url: "foo-bar.com"
    },
  ];

  const wrapper = shallowMount(FooterComponent, {
    props: {
      socialLinks,
    },
  });


  it('Should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should render the social links if they are given', () => {
    const li = wrapper.findAll('li');
    expect(li.length).toBe(socialLinks.length);
  });

  it('Should validate if social links are provided', () => {
    const wrapperWithoutLinks = shallowMount(FooterComponent);
    const li = wrapperWithoutLinks.findAll('li');
    expect(li.length).toBe(0);
  });

  it('Should generate the current year automatically', () => {
    const span = wrapper.find('span');
    expect(span.text()).toContain(new Date().getFullYear());
  });
});
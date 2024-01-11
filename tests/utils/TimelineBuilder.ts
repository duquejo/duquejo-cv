import { Experience, Type } from '../../src/interfaces/experience';

export class TimelineBuilder {
  
  private timeline: Experience;

  constructor() {
    this.timeline;
  }

  public withParagraph() {
    this.timeline = {
      start_date: '2023',
      end_date: 'Present',
      enterprise: 'John Doe Co',
      isRecent: false,
      project: 'John Doe Company Project',
      role: 'Backend developer',
      type: Type.Paragraph,
      resume: 'foo bar, lorem ipsum sit amet-',
      additional_info: 'Skills: Azure Functions, Azure Service Bus.'
    };
    return this;
  }

  public withList() {
    this.timeline = {
      start_date: '11/07/2022',
      end_date: '28/04/2023',
      enterprise: 'Foo bar SAS',
      isRecent: false,
      project: 'Foo Bar SAS - Project',
      role: 'Senior backend developer',
      type: Type.List,
      resume: '<li>foo bar</li><li>lorem ipsum sit amet.</li>',
      additional_info: 'Skills: Git Flow, JWT.'
    };
    return this;
  }

  public setEndDate(endDate: string) {
    this.timeline = {
      ...this.timeline,
      end_date: endDate,
    };
    return this;
  }

  public setStartDate(startDate: string) {
    this.timeline = {
      ...this.timeline,
      start_date: startDate,
    };
    return this;
  }

  public setIsRecent(isRecent: boolean) {
    this.timeline = {
      ...this.timeline,
      isRecent,
    };
    return this;
  }

  public build() {
    return this.timeline;
  }
}
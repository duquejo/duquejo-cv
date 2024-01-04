import { SocialLinks } from '../../src/interfaces/social-links';

export class SocialLinksBuilder {

  private links: SocialLinks[];

  constructor() {
    this.links = [];  
  }

  public withDefaultLinks() {
    this.links.push(
      { order: 1, name: 'GitHub', title: 'gitHub', url: 'https://github.com', icon: 'bi-github' },
      { order: 2, name: 'LinkedIn', title: 'linkedIn', url: 'https://linkedin.com', icon: 'bi-linkedin' },
    );
    return this;
  }

  public build() {
    return this.links;
  }
}
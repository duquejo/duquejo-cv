import { describe, expect, it } from 'vitest';
import { htmlSanitizer } from '../../../../src/shared/helpers/htmlSanitizer';

describe('+ htmlSanitizer test', () => {

  it('should strip the expected tags from a given string', () => {
    // Arrange
    const html = `<div>Hi i'm a simulated XSS <script>alert();</script> attack!, I'm not going to remove tags like <b>b</b>, <strong>strong</strong>, <em>em</em>, <i>i</i>, <u>u</u>, <s>s</s>, </br>.</div>`;
    const expectedHtml = `Hi i'm a simulated XSS alert(); attack!, I'm not going to remove tags like <b>b</b>, <strong>strong</strong>, <em>em</em>, <i>i</i>, <u>u</u>, <s>s</s>, </br>.`;
    
    // Act
    const sanitizedHtml = htmlSanitizer(html);

    // Expect
    expect(sanitizedHtml).toBe(expectedHtml);
  });

});
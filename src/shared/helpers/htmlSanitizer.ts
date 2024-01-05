
/**
 * The `htmlSanitizer` function removes all HTML tags except for `<b>`, `<strong>`, `<em>`, `<i>`,
 * `<u>`, `<s>`, and `<br>` from a given HTML string.
 * @param {string} html - The `html` parameter is a string that represents an HTML code or snippet.
 * @returns The function `htmlSanitizer` returns a sanitized version of the input HTML string. It
 * removes all HTML tags except for the allowed tags (`<b>`, `<strong>`, `<em>`, `<i>`, `<u>`, `<s>`,
 * `<br>`).
 */
export const htmlSanitizer = (html: string) => {
  return html.replace(/<\/?(?!\/?(b|strong|em|i|u|s|br)\b)[^>]*>/gi, '');
};
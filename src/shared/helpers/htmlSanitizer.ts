export const htmlSanitizer = (html: string) => {
  return html.replace(/<\/?(?!\/?(b|strong|em|i|u|s|br)\b)[^>]*>/gi, '');
};
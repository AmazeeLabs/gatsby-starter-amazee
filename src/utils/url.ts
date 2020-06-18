/**
 * Checks if a url is absolute.
 * See https://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative/19709846
 */
export const isUrlAbsolute = (url: string) =>
  url.indexOf('://') > 0 || url.indexOf('//') === 0;

export const isUrlFragment = (url: string) => url.indexOf('#') === 0;

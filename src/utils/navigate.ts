import { navigate as gatsbyNavigate } from 'gatsby';
import { localizePath } from './languages';

/**
 * Override of the standard Gatsby `navigate` function.
 *
 * Adds support for multilingual links by automatically adding the current
 * language as a prefix.
 *
 * To be used identically to Gatsby's `navigate`.
 * https://www.gatsbyjs.org/docs/gatsby-link/#how-to-use-the-navigate-helper-function
 */
const navigate: (
  to: string,
  options?: object,
  language?: string,
) => Promise<void> = (to, options = {}, language = undefined) => {
  // If a language is given, use it instead of the current language.
  if (language) {
    to = localizePath(to, language);
  }

  // Otherwise, use the current language.
  else if (typeof window !== 'undefined' && window.__gatsby_language) {
    to = localizePath(to, window.__gatsby_language);
  }

  return gatsbyNavigate(to, options);
};

export default navigate;

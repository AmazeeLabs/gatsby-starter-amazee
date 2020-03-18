import { defaultLanguage } from './languages';
import { navigate as gatsbyNavigate } from 'gatsby';

/**
 * Override of the standard Gatsby `navigate` function.
 *
 * Adds support for multilingual links by automatically adding the current
 * language as a prefix.
 *
 * To be used identically to Gatsby's `navigate`.
 * https://www.gatsbyjs.org/docs/gatsby-link/#how-to-use-the-navigate-helper-function
 */
const navigate = (to: string, options = {}) => {
  if (typeof window === 'undefined') {
    return;
  }

  const language = window.__gatsby_language;
  if (language !== defaultLanguage) {
    to = `/${language}${to}`;
  }

  return gatsbyNavigate(to, options);
};

export default navigate;

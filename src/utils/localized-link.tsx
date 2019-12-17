import * as React from 'react';
import { defaultLanguage } from '../../languages';

import { Link as GatsbyLink, navigate as gatsbyNavigate, GatsbyLinkProps } from 'gatsby';
import { useTranslation } from 'react-i18next';

/**
 * Override of the standard Gatsby Link component.
 *
 * Adds support for multilingual links by automatically adding the current
 * language as a prefix.
 *
 * To be used identically to Gatsby Link.
 */
export function LocalizedLink<TState>({to, ...rest}: GatsbyLinkProps<TState>) {
  const {i18n} = useTranslation();
  const languagePrefix = i18n.language === defaultLanguage
    ? ''
    : `/${i18n.language}`;

  const newTarget = `${languagePrefix}${to}`;
  // @ts-ignore: Typing issue with Gatsby's link props.
  return <GatsbyLink to={newTarget} {...rest} />;
}

/**
 * Override of the standard Gatsby `navigate` function.
 *
 * Adds support for multilingual links by automatically adding the current
 * language as a prefix.
 *
 * To be used identically to Gatsby `navigate`.
 */
export const localizedNavigate = (to: string, options = {}) => {
  if (typeof window === 'undefined') {
    return;
  }

  const language = window.__gatsby_language;

  const languagePrefix = language === defaultLanguage
    ? ''
    : `${language}`;

  const link = `/${languagePrefix}${to}`;
  gatsbyNavigate(link, options);
};

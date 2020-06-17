import React from 'react';
// eslint-disable-next-line deprecate/import
import GatsbyLink, { GatsbyLinkProps } from 'gatsby-link';
import { useTranslation } from 'react-i18next';
import { defaultLanguage } from 'utils/i18n';

/**
 * Override of the standard Gatsby Link component.
 *
 * Adds support for multilingual links by automatically adding the current
 * language as a prefix.
 *
 * This can be used identically to Gatsby's Link.
 * https://www.gatsbyjs.org/docs/gatsby-link/
 */
const Link: React.FC<GatsbyLinkProps<any> & { toLanguage?: string }> = ({
  to,
  toLanguage,
  ...props
}) => {
  const { i18n } = useTranslation();
  // Allow the toLanguage prop to override the current site language.
  const language = toLanguage ? toLanguage : i18n.language;
  if (language && language !== defaultLanguage) {
    to = `/${language}${to}`;
  }

  // @ts-ignore: Typing issue with Gatsby's link props.
  return <GatsbyLink to={to} {...props} />;
};

export default Link;

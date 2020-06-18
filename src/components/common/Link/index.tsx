import React from 'react';
// eslint-disable-next-line deprecate/import
import GatsbyLink, { GatsbyLinkProps } from 'gatsby-link';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { localizePath } from 'utils/i18n';
import { isUrlAbsolute, isUrlFragment } from 'utils/url';

/**
 * Override of the standard Gatsby Link component.
 *
 * Adds support for multilingual links by automatically adding the current
 * language as a prefix.
 *
 * This can be used identically to Gatsby's Link.
 * https://www.gatsbyjs.org/docs/gatsby-link/
 */
export function LinkWithState<TState>({
  to,
  toLanguage,
  ...props
}: GatsbyLinkProps<TState> & { toLanguage?: string }) {
  // Allow the toLanguage prop to override the current site language.
  const { i18n } = useTranslation();
  const language = toLanguage ? toLanguage : i18n.language;

  // @ts-ignore: Typing issue with Gatsby's link props.
  return <GatsbyLink to={localizePath(to, language)} {...props} />;
}

const Link: React.FC<
  GatsbyLinkProps<any> & {
    noLinkStyles?: boolean;
    toLanguage?: string;
  }
> = ({ to, toLanguage, noLinkStyles, className, children, ...props }) => {
  const classes = classNames(className, { 'link-styles-off': noLinkStyles });

  // Handle non-local links or fragment links if given.
  // https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links
  if (isUrlAbsolute(to) || isUrlFragment(to)) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <LinkWithState
      to={to}
      toLanguage={toLanguage}
      className={classes}
      {...props}
    >
      {children}
    </LinkWithState>
  );
};

export default Link;

import * as React from 'react';
import PageWrapper from '../components/PageWrapper';
import { useEffect } from 'react';
import i18n from '../utils/i18n';
import { CurrentPathProvider } from '../hooks/current_path';
import { delocalizePath } from '../utils/languages';

declare global {
  interface Window {
    __gatsby_language: string;
  }
}

/**
 * Global layout component.
 *
 * This layout will be shared across all pages.
 *
 * TODO: Adapt this layout to your needs.
 * https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
 */
const Layout: React.FC<{
  /**
   * The location object passed in by Gatsby.
   */
  location: Location;
  /**
   * The page context assembled in gatsby-node.js
   */
  pageContext: {
    language: string;
  };
}> = ({ children, location, pageContext }) => {
  useEffect(() => {
    i18n.changeLanguage(pageContext.language);
    if (typeof window !== 'undefined') {
      window.__gatsby_language = pageContext.language;
    }
  }, [pageContext.language]);

  return (
    <CurrentPathProvider path={delocalizePath(location.pathname)}>
      <PageWrapper>{children}</PageWrapper>
    </CurrentPathProvider>
  );
};

export default Layout;

import * as React from 'react';
import { useEffect } from 'react';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import { CurrentPathProvider } from 'hooks/current_path';
import i18next, { defaultLanguage, delocalizePath } from 'utils/i18n';

export type GatsbyPageProps = {
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
};

/**
 * Global page wrapper component.
 */
const PageWrapper: React.FC<GatsbyPageProps> = ({
  children,
  location,
  pageContext,
}) => {
  const currentLanguage = pageContext.language || defaultLanguage;

  useEffect(() => {
    i18next.changeLanguage(currentLanguage);
    if (typeof window !== 'undefined') {
      window.__gatsby_language = currentLanguage;
    }
  }, [currentLanguage]);

  return (
    <CurrentPathProvider path={delocalizePath(location.pathname)}>
      <Header />
      <Navigation />
      {children}
    </CurrentPathProvider>
  );
};

export default PageWrapper;

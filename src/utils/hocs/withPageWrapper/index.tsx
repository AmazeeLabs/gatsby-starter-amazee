import React from 'react';
// eslint-disable-next-line deprecate/import
import PageWrapper from 'components/layouts/PageWrapper';
import i18next, { defaultLanguage, delocalizePath } from 'utils/i18n';
import { useEffect } from 'react';
import { CurrentPathProvider } from 'hooks/current_path';
import { HelmetProvider } from 'react-helmet-async';

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
 * Wraps every page to properly handle props added by Gatsby and by gatsby-node.
 *
 * @param PageComponent
 *   The component to wrap.
 */
const withPageWrapper = (
  PageComponent: React.FC<any>,
): React.FC<GatsbyPageProps> => ({ location, children, ...props }) => {
  const currentLanguage = props.pageContext.language || defaultLanguage;

  useEffect(() => {
    i18next.changeLanguage(currentLanguage);
    if (typeof window !== 'undefined') {
      window.__gatsby_language = currentLanguage;
    }
  }, [currentLanguage]);

  return (
    <CurrentPathProvider path={delocalizePath(location.pathname)}>
      <HelmetProvider>
        <PageWrapper>
          <PageComponent {...props}>{children}</PageComponent>
        </PageWrapper>
      </HelmetProvider>
    </CurrentPathProvider>
  );
};

export default withPageWrapper;

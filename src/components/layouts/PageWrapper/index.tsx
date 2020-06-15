import * as React from 'react';
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';
import Meta from 'components/Meta';
import Navigation from 'components/Navigation';
import { CurrentPathProvider } from 'hooks/current_path';
import i18next, {
  defaultLanguage,
  defaultTitleTemplate,
  delocalizePath,
} from 'utils/i18n';

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

  const { t } = useTranslation();

  return (
    <CurrentPathProvider path={delocalizePath(location.pathname)}>
      <HelmetProvider>
        <Helmet
          htmlAttributes={{
            lang: currentLanguage,
            // Needed for Open Graph meta tags.
            prefix: 'og: http://ogp.me/ns#',
          }}
          titleTemplate={defaultTitleTemplate(t)}
          defaultTitle={t('global.siteName')}
        />
        <Meta description={t('global.metadata.description')} />
        <Header />
        <Navigation />
        {children}
      </HelmetProvider>
    </CurrentPathProvider>
  );
};

export default PageWrapper;

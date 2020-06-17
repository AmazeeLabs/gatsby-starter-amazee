import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from 'components/global/Header';
import Meta from 'components/Meta';
import Navigation from 'components/global/Navigation';
import i18next, { defaultTitleTemplate } from 'utils/i18n';

/**
 * Global page wrapper component.
 *
 * Do not use the `PageWrapper` component directly. Instead use the
 * `withPageWrapper()` higher-order component.
 */
const PageWrapper: React.FC = ({ children }) => {
  const { t } = useTranslation();

  // NOTE: Add provider components in the withPageWrapper() HOC to ease testing.
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: i18next.language,
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
    </>
  );
};

export default PageWrapper;

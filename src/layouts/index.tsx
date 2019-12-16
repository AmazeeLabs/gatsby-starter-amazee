import * as React from 'react';
import { Header } from '../components/header/header';
import { StaticNavigation } from '../components/navigation/navigation';
import { ReactNode, useEffect } from 'react';
import i18n from '../../i18n';
import { CurrentPathProvider } from '../hooks/current_path';
import { delocalizePath } from '../components/languages/languages';
import { defaultLanguage } from '../../languages';

declare global {
  interface Window { __gatsby_language: string; }
}

interface LayoutProps {
  children: ReactNode
  location: Location
  pageContext: {
    language: string
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
const Layout = ({children, location, pageContext}: LayoutProps) => {

  useEffect(() => {
    i18n.changeLanguage(pageContext.language);
    if (typeof window !== 'undefined') {
      window.__gatsby_language = pageContext.language;
    }
  }, [pageContext.language]);

  return (
    <CurrentPathProvider path={delocalizePath(location.pathname, pageContext.language,  defaultLanguage)}>
      <div>
        <Header/>
        <StaticNavigation/>
        <div className="page-centered py-8">
          {children}
        </div>
      </div>
    </CurrentPathProvider>
  );
};

export default Layout;

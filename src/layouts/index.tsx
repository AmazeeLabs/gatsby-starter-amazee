import * as React from 'react';
import { Header } from '../components/header/header';
import { StaticNavigation } from '../components/navigation/navigation';
import { ReactNode, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

declare global {
  interface Window { __gatsby_language: string; }
}

const resources = {
  de: {
    translation: {
      'Amazee Labs Gatsby Starter': 'Amazee Labs Gatsby Starter - German'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

interface LayoutProps {
  children: ReactNode
  location: Location
  pageContext: {
    language: string
  }
}

const Layout = ({children, location, pageContext}: LayoutProps) => {
  const {i18n} = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(pageContext.language);
    if (typeof window !== 'undefined') {
      window.__gatsby_language = pageContext.language;
    }
  }, [i18n, pageContext.language]);
  return (
    <div>
      <Header/>
      <StaticNavigation currentPath={location.pathname}/>
      <div className="page-centered py-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;

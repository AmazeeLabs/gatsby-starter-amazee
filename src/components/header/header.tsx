import * as React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * A simple header component, displaying the page title.
 */
export const Header = () => {
  const {t} = useTranslation();
  return (
    <div className="page-centered font-black bg-amazee-yellow text-amazee-dark">
      <header className="text-2xl py-3">
        {t('Amazee Labs Gatsby Starter')}
      </header>
    </div>
  );
};

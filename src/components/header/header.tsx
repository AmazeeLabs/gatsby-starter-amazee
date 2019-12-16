import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from '../languages/languages';

/**
 * A simple header component, displaying the page title.
 */
export const Header = () => {
  const {t} = useTranslation();
  return (
    <div className="page-centered font-black bg-amazee-yellow text-amazee-dark sm:flex sm:content-between py-3">
      <header className="text-2xl">
        {t('Amazee Labs Gatsby Starter')}
      </header>
      <Languages/>
    </div>
  );
};

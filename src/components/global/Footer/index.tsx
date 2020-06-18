import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * A simple header component, displaying the page title and the language switcher.
 */
const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="page-centered py-4 bg-amazee-dark text-white text-sm">
      <p className="mb-0">
        © {new Date().getFullYear()} Amazee. {t('footer.legal.copyright')}
      </p>
    </footer>
  );
};

export default Footer;

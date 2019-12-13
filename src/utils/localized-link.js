import * as React from 'react';
import { defaultLanguage } from '../../languages';

import { Link as GatsbyLink, navigate as gatsbyNavigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

export const Link = ({to, ...rest}) => {
  const {i18n} = useTranslation();
  const languagePrefix = i18n.language === defaultLanguage
    ? ''
    : `${i18n.language}`;

  const newTarget = `/${languagePrefix}${to}`;
  return <GatsbyLink to={newTarget} {...rest} />;
};

export const navigate = (to, options = {}) => {
  if (typeof window === 'undefined') {
    return;
  }

  const language = window.__gatsby_language;

  const languagePrefix = language === defaultLanguage
    ? ''
    : `${language}`;

  const link = `/${languagePrefix}${to}`;
  gatsbyNavigate(link, options);
};

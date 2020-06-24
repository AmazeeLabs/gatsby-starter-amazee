// This group of utilities is for a specific set of i18n features.
//
// To learn about the general concepts behind i18n and Gatsby, see:
// https://www.gatsbyjs.org/blog/2020-02-19-how-to-build-multilingual-sites-with-gatsby/
// https://github.com/gatsbyjs/gatsby-i18n-source/blob/master/docs/docs/localization-i18n.md

import init from './init';
import {
  delocalizePath,
  defaultLanguage,
  languageCodes,
  languageNames,
  localizePath,
} from './languages';
import navigate from './navigate';
import {
  defaultTitleTemplate,
  getSectionTitleTemplate,
} from './titleTemplates';
import translations from './translations';

export default init;
export {
  defaultLanguage,
  defaultTitleTemplate,
  delocalizePath,
  getSectionTitleTemplate,
  languageCodes,
  languageNames,
  localizePath,
  navigate,
  translations,
};

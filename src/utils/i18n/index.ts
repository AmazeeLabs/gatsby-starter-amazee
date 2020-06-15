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

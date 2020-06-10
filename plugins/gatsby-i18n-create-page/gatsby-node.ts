/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Type definitions.
import { GatsbyNode } from 'gatsby';
type LocalizePath = (path: string, language: string) => string;
export type GatsbyI18nextCreatePagePluginOptions = {
  defaultLanguage: string;
  languageCodes: string[];
  localizePath?: LocalizePath;
  prefixDefaultLanguagePages?: boolean;
  rebuildDefaultLanguagePages?: boolean;
};

// https://www.gatsbyjs.org/docs/creating-and-modifying-pages/
export const onCreatePage: GatsbyNode['onCreatePage'] = async (
  { page, actions, reporter },
  pluginOptions,
) => {
  const { createPage, deletePage } = actions;

  const INVALID_LANGUAGE = '..';

  // Read the provided plugin options.
  const {
    defaultLanguage,
    languageCodes,
    localizePath: localizePathOption,
    rebuildDefaultLanguagePages: rebuildDefaultLanguagePagesOption,
    prefixDefaultLanguagePages: prefixDefaultLanguagePagesOption,
  } = {
    defaultLanguage: INVALID_LANGUAGE,
    languageCodes: [],
    ...pluginOptions,
  } as GatsbyI18nextCreatePagePluginOptions;

  if (defaultLanguage === INVALID_LANGUAGE) {
    reporter.panicOnBuild(
      `Error: The "defaultLanguage" option is required for the gatsby-i18n-create-page plugin.`,
    );
    return;
  }

  // If the user wants the default language to be prefixed, then we need to
  // rebuild the default language pages.
  const prefixDefaultLanguagePages = !!prefixDefaultLanguagePagesOption;
  const rebuildDefaultLanguagePages =
    prefixDefaultLanguagePages || !!rebuildDefaultLanguagePagesOption;

  // If the localizePath option is not given, create a localizePath function.
  const localizePath: LocalizePath =
    typeof localizePathOption !== 'undefined'
      ? localizePathOption
      : (path: string, language: string) =>
          prefixDefaultLanguagePages || language !== defaultLanguage
            ? `/${language}${path}`
            : path;

  // Optionally, rebuild the pages for the default language.
  if (rebuildDefaultLanguagePages) {
    deletePage(page);
  }

  // Build multilingual pages for all the given languages.
  languageCodes
    .filter(
      (language) => rebuildDefaultLanguagePages || language !== defaultLanguage,
    )
    .forEach((language) => {
      createPage<{
        language: string;
      }>({
        ...page,
        path: localizePath(page.path, language),
        context: {
          ...page.context,
          language,
        },
      });
    });
};

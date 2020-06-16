import { TFunction } from 'i18next';

export const defaultTitleTemplate = (t: TFunction) => {
  return `%s | ${t('global.siteName')}`;
};

/**
 * Helper function to make it easier to create a Helmet titleTemplate for a section.
 *
 * By default, the PageWrapper components sets the Helmet `titleTemplate` to be
 * '%s | The site name' (as returned by defaultTitleTemplate(t) below), where
 * `%s` is replaced with the specific `title` given for a page, e.g. if you set
 * the Helmet title to be "Blog", Helmet will add a title element to the page of
 * "Blog | The site name".
 *
 * If you want the title element of "My new blog post | The site name - Blog",
 * this function can provide the re-usable pieces you need. Usage:
 *
 * ```
 * const { t } = useTranslation();
 * const sectionTitleTemplate = getSectionTitleTemplate(t);
 * return (
 *   <Helmet
 *     titleTemplate={sectionTitleTemplate(t('metadata.title.blog-section')}
 *   />
 * );
 * ```
 */
export const getSectionTitleTemplate = (t: TFunction) => (
  sectionTitle: string,
) => {
  return `%s | ${t('global.siteName')} - ${sectionTitle}`;
};

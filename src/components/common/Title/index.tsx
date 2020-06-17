import * as React from 'react';
import { Helmet, HelmetProps } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { getSectionTitleTemplate } from 'utils/i18n';

const Title: React.FC<{
  className?: string;
  headTitle?: string;
  isHomepage?: boolean;
  sectionTitle?: string;
}> = ({ className, headTitle, sectionTitle, isHomepage, children }) => {
  const title = headTitle || children?.toString();
  const { t } = useTranslation();
  const helmetProps: HelmetProps = {};

  // Use the default Title on the homepage.
  if (!isHomepage && title) {
    helmetProps.title = title;
  }

  if (sectionTitle) {
    helmetProps.titleTemplate = getSectionTitleTemplate(t)(sectionTitle);
  }

  return (
    <>
      <Helmet {...helmetProps} />
      <h1 className={className}>{children}</h1>
    </>
  );
};

export default Title;

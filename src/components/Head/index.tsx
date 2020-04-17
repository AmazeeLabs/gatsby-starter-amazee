import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * A simple head component to manage metatags.
 */
const Head: React.FC<{
  title?: string;
  description?: string;
}> = ({ title, description }) => {
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        defaultTitle: string;
        titleTemplate: string;
        defaultDescription: string;
      };
    };
  }>(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
        }
      }
    }
  `);

  const {
    defaultTitle,
    defaultDescription,
    titleTemplate,
  } = data.site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <Helmet titleTemplate={titleTemplate} title={seo.title}>
      <meta name="description" content={seo.description} />
    </Helmet>
  );
};

export default Head;

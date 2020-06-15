import * as React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Manages complex metatags with simplified props.
 *
 * Open Graph: https://www.ogp.me/
 * Twitter Cards: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards
 */
const Meta: React.FC<{
  description?: string;
}> = ({ description }) => {
  return (
    <Helmet>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
    </Helmet>
  );
};

export default Meta;

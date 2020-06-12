import * as React from 'react';
import PageWrapper, { GatsbyPageProps } from 'components/layouts/PageWrapper';

/**
 * Wraps every page to properly handle props added by Gatsby and by gatsby-node.
 *
 * @param PageComponent
 *   The component to wrap.
 */
const withPageWrapper = (
  PageComponent: React.FC<any>,
): React.FC<GatsbyPageProps> => ({ location, children, ...props }) => (
  <PageWrapper location={location} pageContext={props.pageContext}>
    <PageComponent {...props}>{children}</PageComponent>
  </PageWrapper>
);

export default withPageWrapper;

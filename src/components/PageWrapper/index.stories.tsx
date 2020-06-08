import * as React from 'react';
import withPageWrapper from 'utils/hocs/withPageWrapper';
import PageWrapper from './index';

export default {
  title: 'HOCs/withPageWrapper',
  component: PageWrapper,
};

const mockGatsbyPageProps = {
  location: ({ pathname: '/' } as unknown) as Location,
  pageContext: { language: 'en' },
};
const ExampleComponent: React.FC = () => (
  <p>
    Add the PageWrapper component around your Gatsby-page-level component by
    using <code>withPageWrapper()</code>.
  </p>
);

export const Default = () => {
  const ExamplePageComponent = withPageWrapper(ExampleComponent);
  return <ExamplePageComponent {...mockGatsbyPageProps} />;
};

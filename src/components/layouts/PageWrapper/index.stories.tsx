import * as React from 'react';
import OneColumn from 'components/layouts/OneColumn';
import withPageWrapper from 'hocs/withPageWrapper';
import PageWrapper from './index';

export default {
  title: 'Components/Layouts/withPageWrapper',
  component: PageWrapper,
};

const mockGatsbyPageProps = {
  location: ({ pathname: '/' } as unknown) as Location,
  pageContext: { language: 'en' },
};
const ExampleComponent: React.FC = () => (
  <>
    <p style={{ marginTop: '3rem' }}>
      Add the PageWrapper component around your Gatsby-page-level component by
      using the <code>withPageWrapper()</code> HOC.
    </p>
    <p>
      Note that the `PageWrapper` component doesn’t add a layout wrapper around
      the page content.
    </p>
    <OneColumn>
      <p>For example, this content is wrapped in the `OneColumn` comonent.</p>
    </OneColumn>
  </>
);

export const Default = () => {
  const ExamplePageComponent = withPageWrapper(ExampleComponent);
  return <ExamplePageComponent {...mockGatsbyPageProps} />;
};

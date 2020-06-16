import * as React from 'react';
import OneColumn from 'components/layouts/OneColumn';
import { GatsbyPageProps } from 'hocs/withPageWrapper';
import PageWrapper from './index';

export default {
  title: 'Components/Layouts/withPageWrapper',
  component: PageWrapper,
};

// Mock the PageWrapper to show how the real one should be used in a
// non-storybook setting.
const withPageWrapper = (
  PageComponent: React.FC<any>,
): React.FC<GatsbyPageProps> => (props) => (
  <PageWrapper>
    <PageComponent {...props} />
  </PageWrapper>
);

const gatsbyPageProps: GatsbyPageProps = {
  location: ({ pathname: '/' } as unknown) as Location,
  pageContext: { language: 'en' },
};
const ExampleComponent: React.FC = () => (
  <>
    <p style={{ marginTop: '3rem' }}>
      Add the PageWrapper component around your Gatsby-page-level component by
      using the <code>withPageWrapper()</code> HOC.
    </p>

    <OneColumn>
      <p>
        By noticing the previous paragraph, you can see that the{' '}
        <code>PageWrapper</code> component doesn’t wrap any layout around the
        page content. You will need to add your own layout wrapper to the page
        content, e.g. this paragraph is wrapped in the <code>OneColumn</code>{' '}
        component.
      </p>
    </OneColumn>
  </>
);

export const Default = () => {
  const ExamplePageComponent = withPageWrapper(ExampleComponent);
  return <ExamplePageComponent {...gatsbyPageProps} />;
};

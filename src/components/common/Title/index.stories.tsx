import React from 'react';
import {
  withDefaultTitleTemplate,
  withOneColumn,
  withHelmetFYI,
} from 'utils/decorators';
import Title from './index';

export default {
  title: 'Components/Common/Title',
  component: Title,
  decorators: [withHelmetFYI, withOneColumn, withDefaultTitleTemplate],
};

export const Default = () => <Title>This is a page title</Title>;

export const WithHeadTitle = () => (
  <Title headTitle="This is the title used in the page head">
    A different title is used in the page head
  </Title>
);

export const IsHomepage = () => (
  <Title isHomepage>The homepage uses the default title in the page head</Title>
);

export const WithSectionTitle = () => (
  <Title sectionTitle="My Section">This is a section page title</Title>
);

export const WithSectionTitleOnly = () => (
  <>
    <Title sectionTitle="My Section" />
    <p>
      You can set the <code>sectionTitle</code> prop on <code>Title</code>{' '}
      without setting the <code>children</code> content of it. This is useful on
      components that handle routing for mulitple pages in a section.
    </p>
    <Title>The title of a route’s sub-page</Title>
  </>
);

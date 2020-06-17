import React from 'react';
import OneColumn from './index';

export default {
  title: 'Components/Layouts/One Column',
  component: OneColumn,
};

export const Default = () => (
  <OneColumn>
    <p>
      This is content that has been placed in the `OneColumn` component. Every
      child element of the component will be centered on the page. The
      `OneColumn` component spans the entire width of the page, so styles like
      background colors can be applied to it.
    </p>
  </OneColumn>
);

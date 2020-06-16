import React from 'react';
import { DecoratorFn } from '@storybook/react';

export const withHelmetFYI: DecoratorFn = (storyFn) => (
  <>
    {storyFn()}
    <p style={{ marginTop: '3rem' }}>
      Look at storybook’s Actions tab to see the tags added to the{' '}
      <code>&lt;head&gt;</code> of the page.
    </p>
  </>
);

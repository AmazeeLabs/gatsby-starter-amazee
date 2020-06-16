import React from 'react';
import { withHelmetFYI } from 'utils/decorators';
import Meta from './index';

export default {
  title: 'Components/Meta',
  component: Meta,
  decorators: [withHelmetFYI],
};

export const Description = () => (
  <>
    <Meta description="This is the meta description." />
  </>
);

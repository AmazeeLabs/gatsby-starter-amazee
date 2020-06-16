import React from 'react';
import { withHelmetFYI, withOneColumn } from 'utils/decorators';
import Meta from './index';

export default {
  title: 'Components/Meta',
  component: Meta,
  decorators: [withHelmetFYI, withOneColumn],
};

export const Description = () => (
  <>
    <Meta description="This is the meta description." />
  </>
);

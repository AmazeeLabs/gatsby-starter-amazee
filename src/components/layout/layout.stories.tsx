import * as React from 'react';
import Layout from '../layout/layout';

export default {
  title: 'Layout',
};

export const basic = () => <Layout><span>Hello Storybook!</span></Layout>;

basic.story = {
  name: 'Basic',
};

import React from 'react';
import { withOneColumn } from 'utils/decorators';
import LanguageSwitcher from './index';

export default {
  title: 'Components/LanguageSwitcher',
  component: LanguageSwitcher,
  decorators: [withOneColumn],
};

export const Default = () => <LanguageSwitcher />;

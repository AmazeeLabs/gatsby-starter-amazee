import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from './logo.svg';

const theme = create({
  base: 'light',
  brandTitle: 'Amazee Starter',
  // Note: this logo will need to be imported in preview.js in order for webpack
  // to bundle the image with Storybook.
  brandImage: logo,
});

addons.setConfig({
  panelPosition: 'bottom',
  theme,
});

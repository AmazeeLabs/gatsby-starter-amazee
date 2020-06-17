import { action } from '@storybook/addon-actions';
import { addDecorator, addParameters } from '@storybook/react';
import {
  withCurrentPathProviderFallback,
  withHelmetProvider,
} from 'utils/decorators';
import storySort from './storySort';

// Make sure the global stylesheet is added to the storybook build.
import '!style-loader!css-loader!postcss-loader!../src/styles/tailwind.css';

// Tell webpack to bundle the logo file used in Storybook manager.js.
import './logo.svg';

// Add global decorators.
addDecorator(withHelmetProvider);
addDecorator(withCurrentPathProviderFallback);

// Configure how Storybook looks.
addParameters({
  options: {
    showRoots: true,
    storySort: storySort({
      method: 'alphabetical',
      order: ['Home', 'Foundations', 'Pages', ['Home page'], 'Components'],
    }),
  },
});

// These modifications are from Gatsby docs:
// https://www.gatsbyjs.org/docs/visual-testing-with-storybook/

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from
// creating console errors you override it here.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing
// environment.
global.__BASE_PATH__ = '';

// This is to utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't inside
// a storybook.
window.___navigate = (pathname) => action('Navigate')(pathname);

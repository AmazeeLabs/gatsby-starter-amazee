import { action } from '@storybook/addon-actions';
import { addParameters } from '@storybook/react';
import storySort from './storySort';

// Make sure the global stylesheet is added to the storybook build.
import '!style-loader!css-loader!postcss-loader!../src/styles/tailwind.css';

// Tell webpack to bundle the logo file used in Storybook manager.js.
import './logo.svg';

// Configure how Storybook looks.
addParameters({
  options: {
    showRoots: true,
    storySort: storySort({
      method: 'alphabetical',
      order: ['Home', 'Foundations', 'Pages', 'Components'],
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
global.__PATH_PREFIX__ = '';

// This is to utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't inside
// a storybook.
window.___navigate = pathname => {
  action('Navigate')(pathname);
};

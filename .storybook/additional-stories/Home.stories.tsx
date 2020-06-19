import React from 'react';
import OneColumn from 'components/layouts/OneColumn';

export default {
  title: 'Foundations/Welcome',
};

// TODO: Change project name in Storybook.
const projectName = 'Amazee’s Gatsby Starter';

export const toProject = () => (
  <OneColumn>
    <h1>{projectName}</h1>
    <p>This is the style guide for {projectName}.</p>
    <h3>Keyboard shortcuts</h3>
    <p>
      To toggle the display of the “add-ons” panel, press the <kbd>A</kbd> key.
    </p>
    <p>
      More keyboard shortcuts are available.{' '}
      <a href="/?path=/settings/shortcuts">See the keyboard shortcuts page</a>{' '}
      or use the <b>circled … button</b> near the top left of this website.
    </p>
  </OneColumn>
);
toProject.story = {
  name: `to ${projectName}`,
};

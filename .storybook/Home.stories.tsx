import * as React from 'react';

export default {
  title: 'Home/Welcome',
};

// TODO: Change project name in Storybook.
const projectName = 'Amazee’s Gatsby Starter';

export const toProject = () => (
  <div className="p-8 max-w-full">
    <h1>{projectName}</h1>
    <p>This is the style guide for {projectName}.</p>
    <h4>Keyboard shortcuts</h4>
    <p>
      To toggle the display of the “add-ons” panel, press the <kbd>A</kbd> key.
    </p>
    <p>
      More keyboard shortcuts are available.{' '}
      <a href="/?path=/settings/shortcuts">See the keyboard shortcuts page</a>{' '}
      or use the <b>circled … button</b> near the top left of this website.
    </p>
  </div>
);
toProject.story = {
  name: `to ${projectName}`,
};

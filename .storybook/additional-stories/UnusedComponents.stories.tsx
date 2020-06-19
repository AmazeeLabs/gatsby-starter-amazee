import React from 'react';
import OneColumn from 'components/layouts/OneColumn';
import { projectName } from 'utils/decorators';

export default {
  title: 'Unused Components',
};

export const About = () => (
  <OneColumn>
    <h1>About the “Unused Components” category</h1>
    <p>
      These components are available to be used for your website. As you convert
      the demo designs into your new {projectName} design, you can remove the
      “Unused” word from the <code>.stories.tsx</code> story so that it appears
      in the “Components” category.
    </p>
    <p>
      Once you’ve finished adding new components, you can use this Storybook
      category to find unused components and delete them. This “About” story is
      located in: <code>.storybook/additional-stories</code>
    </p>
  </OneColumn>
);

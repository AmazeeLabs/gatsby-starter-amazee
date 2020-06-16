import React from 'react';
import { DecoratorFn } from '@storybook/react';
import OneColumn from 'components/layouts/OneColumn';

export const withOneColumn: DecoratorFn = (storyFn) => (
  <OneColumn>
    <div>{storyFn()}</div>
  </OneColumn>
);

import React from 'react';
import {
  HelmetProvider,
  Helmet,
  HelmetData,
  HelmetTags,
} from 'react-helmet-async';
import { DecoratorFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const escapeHtml = (unsafe: string) =>
  unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

type SimpleStore = { [key: string]: string };
const attrToTag = (tag: string, properties: SimpleStore) =>
  `<${tag} ${Object.keys(properties)
    .map((key) => `${key}="${escapeHtml(properties[key])}"`)
    .join(' ')} />`;

export const withHelmetProvider: DecoratorFn = (storyFn) => (
  <HelmetProvider>
    {storyFn()}
    <Helmet
      onChangeClientState={(state: HelmetData & HelmetTags) => {
        if (state.title) {
          action(`<title>${state.title?.toString()}</title>`)(
            'added to document',
          );
        }
        if (state.metaTags.length) {
          state.metaTags.forEach((tag) =>
            action(attrToTag('meta', (tag as unknown) as SimpleStore))(
              'added to document',
            ),
          );
        }
        if (Object.keys(state.htmlAttributes).length) {
          action(
            attrToTag('html', (state.htmlAttributes as unknown) as SimpleStore),
          )('added to document');
        }
        if (Object.keys(state.bodyAttributes).length) {
          action(
            attrToTag('body', (state.bodyAttributes as unknown) as SimpleStore),
          )('added to document');
        }
      }}
    />
  </HelmetProvider>
);

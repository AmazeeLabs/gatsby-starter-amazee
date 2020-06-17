import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { DecoratorFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Helmet's type definition of its state is "any", so we create our own
// definition.
type SimpleStore = { [key: string]: string };
type HelmetState = {
  title: string;
  titleAttributes: SimpleStore;
  baseTag: SimpleStore;
  metaTags: Array<SimpleStore>;
  linkTags: Array<SimpleStore>;
  scriptTags: Array<SimpleStore>;
  styleTags: Array<SimpleStore>;
  noscriptTags: Array<SimpleStore>;
  htmlAttributes: SimpleStore;
  bodyAttributes: SimpleStore;
  [key: string]: string | SimpleStore | Array<SimpleStore> | undefined;
};

/**
 * Escape a string with HTML entities.
 */
const escapeHtml = (unsafe: string) =>
  unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

/**
 * Convert an object into a string of HTML attributes.
 */
const toAttributes = (attributes: SimpleStore) => {
  const attributeKeys = Object.keys(attributes).filter(
    (property) => property !== 'cssText' && property !== 'innerHTML',
  );
  return !attributeKeys.length
    ? ''
    : ' ' +
        attributeKeys
          .map((key) => `${key}="${escapeHtml(attributes[key])}"`)
          .join(' ');
};

/**
 * Create an HTML element given a tag name and an object of its attributes.
 */
const toTag = (tag: string, properties: SimpleStore) =>
  properties['cssText'] || properties['innerHTML']
    ? `<${tag}${toAttributes(properties)}>...</${tag}>`
    : `<${tag}${toAttributes(properties)} />`;

/**
 * Decorates a story with an HelmetProvider and logs tags to the Actions tab.
 */
export const withHelmetProvider: DecoratorFn = (storyFn) => (
  <HelmetProvider>
    {storyFn()}
    <Helmet
      onChangeClientState={(state: HelmetState) => {
        // We mildly abuse the storybook Action API to list the tags that Helmet
        // has added to the document.
        const logAction = (tag: string) => action(tag)('added to document');

        // These are sorted with most interesting tags first.
        [
          { tag: 'title', key: 'title' },
          { tag: 'meta', key: 'metaTags' },
          { tag: 'link', key: 'linkTags' },
          { tag: 'html', key: 'htmlAttributes' },
          { tag: 'body', key: 'bodyAttributes' },
          { tag: 'script', key: 'scriptTags' },
          { tag: 'noscript', key: 'noscriptTags' },
          { tag: 'style', key: 'styleTags' },
          { tag: 'base', key: 'baseTag' },
        ].forEach(({ tag, key }) => {
          const tagState = state[key];
          if (Array.isArray(tagState)) {
            // Log each element in an array.
            if (tagState.length) {
              (tagState as SimpleStore[]).forEach((element) =>
                logAction(toTag(tag, element)),
              );
            }
          } else if (typeof tagState === 'object') {
            // Log the element's object of attributes.
            if (Object.keys(tagState).length) {
              logAction(toTag(tag, tagState as SimpleStore));
            }
          } else if (typeof tagState === 'string' && tagState.length) {
            // Log the string of the element and, optionally, its corresponding
            // *Attributes state object.
            const tagAttributes = state[`${key}Attributes`];
            logAction(
              `<${tag}${
                !tagAttributes ? '' : toAttributes(tagAttributes as SimpleStore)
              }>${tagState}</${tag}>`,
            );
          }
        });
      }}
    />
  </HelmetProvider>
);

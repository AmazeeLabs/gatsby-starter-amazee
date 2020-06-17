# About Components organization

The `src/components` folder is lightly organized by categories.

- `common`: contains components that are:

  - used frequently
  - and have no better folder to go in

  For example, the `button` component is used very frequently, but is better put in the `components/forms` folder.

- `containers`: contains components whose primary purpose is to contain a chunk of content. For example, a list or box component.

- `forms`: contains components related to forms.

- `global`: contains components that are ONLY used in any of:

  - the PageWrapper component
  - gatsby-ssr.ts
  - gatsby-browser.ts

  These components are NEVER used in any other part of the codebase, so while browsing `src/components` this folder can be ignored. See the [global folder's documentation](./global/_DONT_LOOK_HERE.md) for more info.

- `layouts`: contains components that are used for:

  - page layout
  - partial-page layouts
  - components controlling element positioning

- `misc`: contains components that cannot be otherwise categorized.

- `navigation`: contains components that deal with website navigation.

- `pages`: contains the components that are used to build the pages and templates in Gatsby, e.g. `src/pages` and `src/templates`. This folder can be further organized based on the directories used in the routing URLs.

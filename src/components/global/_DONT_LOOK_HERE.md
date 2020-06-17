# About "components/global"

The `components/global` folder contains components that are ONLY used in any of:

- the PageWrapper component
- gatsby-ssr.ts
- gatsby-browser.ts

## Why?

Since these components are used only in the places listed above, we tuck them
away inside this `global` folder to make navigating the other components easier. By placing them in this sub-folder, it is easier to ignore these components since you won't ever be including them in any other place in the codebase.

## So all components used on every page go here?

**No.** While all these components _are_ used on every page, we don't include other components that are used on every page, like the Link component, because those components are used by other places in the codebase, not just those places listed above. To repeat, this isn't a place to put any "used on every page" component.

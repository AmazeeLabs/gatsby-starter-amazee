/**
 * Current path hook.
 *
 * A very simple implementation of a react context hook, providing the current
 * path to all components that need it.
 *
 * TODO: Get familiar with react hooks:
 * https://reactjs.org/docs/hooks-intro.html
 * https://reactjs.org/docs/hooks-reference.html#usecontext
 */
import { useContext } from 'react';
import * as React from 'react';

// Create a new react context with initial value '/'.
const CurrentPathContext = React.createContext<string>('/');

// Provide a `CurrentPathProvider` component that is used to set the path in the
// global layout component (see `src/layouts/index.tsx).
export const CurrentPathProvider: React.FC<{ path: string }> = ({
  path,
  children,
}) => (
  <CurrentPathContext.Provider value={path}>
    {children}
  </CurrentPathContext.Provider>
);

// Expose a `useCurrentPath` hook for other components to quickly retrieve
// the current path context (see `src/components/languages/languages.tsx`).
export const useCurrentPath = () => useContext(CurrentPathContext);

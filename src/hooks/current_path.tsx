import { ReactNode, useContext } from 'react';
import * as React from 'react';

const CurrentPathContext = React.createContext<string>('/');

export const CurrentPathProvider = ({path, children}: {path: string, children: ReactNode}) => (
  <CurrentPathContext.Provider value={path}>{children}</CurrentPathContext.Provider>
);

export const useCurrentPath = () => useContext(CurrentPathContext);

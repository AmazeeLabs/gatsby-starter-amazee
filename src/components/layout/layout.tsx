import * as React from 'react';
import { ReactNode } from 'react';

export const test = () => true;

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="bg-amazee-yellow text-amazee-dark p-5 text-center font-bold hover:bg-amazee-blue">{children}</div>
  );
};

export default Layout;

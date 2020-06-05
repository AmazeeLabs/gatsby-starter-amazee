import * as React from 'react';
import classNames from 'classnames';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

const PageWrapper: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <>
    <Header />
    <Navigation />
    <div className={classNames(className, 'page-centered py-8')}>
      {children}
    </div>
  </>
);

export default PageWrapper;

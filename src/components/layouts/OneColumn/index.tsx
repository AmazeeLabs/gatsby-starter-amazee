import React from 'react';
import classNames from 'classnames';

const OneColumn: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <div className={classNames(className, 'page-centered py-8')}>{children}</div>
);

export default OneColumn;

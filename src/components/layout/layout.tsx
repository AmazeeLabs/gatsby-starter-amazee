import * as React from 'react';

require('./global.css');
const styles = require('./layout.module.css');

export default ({children}) => {
  return (
    <div className={styles.Layout}>{children}</div>
  );
}

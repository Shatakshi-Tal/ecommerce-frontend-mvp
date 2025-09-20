import React from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => (
  <div className={styles.loader} role="status" aria-label="Loading">
    <span>Loading...</span>
  </div>
);

export default Loader;
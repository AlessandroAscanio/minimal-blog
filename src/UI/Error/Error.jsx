import React from 'react';
import Link from 'next/link';

import styles from './Error.module.scss';

const Error = ({ text }) => {
  return (
    <div className={styles.error}>
      <h2 className="h4">{text}</h2>
      <Link href="/" className="btn btn-primary">
        Voltar para artigos
      </Link>
    </div>
  );
};

export default Error;

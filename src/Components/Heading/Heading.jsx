import React from 'react';

import styles from './Heading.module.scss';
import { BiSearch } from 'react-icons/bi';
import Logo from 'src/UI/Logo/Logo';

const Heading = () => {
  return (
    <section className={styles.heading}>
      <Logo />
      <dir className={styles.search}>
        <form action="/">
          <label htmlFor="search">buscar</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Buscar Artigos"
          />
          <button className={styles.button}>
            <BiSearch />
          </button>
        </form>
      </dir>
    </section>
  );
};

export default Heading;

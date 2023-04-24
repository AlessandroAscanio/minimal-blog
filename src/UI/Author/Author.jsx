import React from 'react';
import Image from 'next/image';
import client from 'src/sanity';
import { useNextSanityImage } from 'next-sanity-image';

import styles from './Author.module.scss';

const Author = ({ publishedAt = new Date(), author }) => {
  const { name, image } = author || {};

  const newDate = new Date(publishedAt);

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
  }).format(newDate);

  const imageProps = useNextSanityImage(client, image);

  return (
    <div className={styles.author}>
      <div className={styles.image}>
        <Image src={imageProps?.src} alt="autor" width={40} height={40} />
      </div>
      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <span className={styles.date}>{formattedDate}</span>
      </div>
    </div>
  );
};

export default Author;

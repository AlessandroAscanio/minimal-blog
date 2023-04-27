import React from 'react';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';

import Author from 'src/UI/Author/Author';

import styles from './Cardpost.module.scss';
import Image from 'next/image';
import client from 'src/sanity';

const Cardpost = ({ post, author }) => {
  const {
    author: authorRef,
    title,
    mainImage,
    publishedAt,
    short_text,
    slug,
  } = post || {};

  const { src, height, width } = useNextSanityImage(client, mainImage);
  const getAuthor = author.find((author) => author._id === authorRef._ref);

  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <Image src={src} alt={title} width={width} height={height} priority />
      </div>
      <div className={styles.content}>
        <h2 className="h3">{title}</h2>
        <p>{short_text}</p>
        <div className={styles.footer}>
          <Author author={getAuthor} publishedAt={publishedAt} />
          <Link href={`/post/${slug.current}`} className="h5">
            Continuar lendo &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cardpost;

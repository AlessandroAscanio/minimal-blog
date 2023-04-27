import imageURLBuilder from '@sanity/image-url';

import client from 'src/sanity';

const useSanityImage = () => {
  const builder = imageURLBuilder(client);

  const urlFor = (source) => {
    return builder.image(source);
  };

  return urlFor;
};

export default useSanityImage;

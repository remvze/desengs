import Masonry from 'react-masonry-css';

import { images } from '@/data/images';

import styles from './images.module.css';

export function Images() {
  return (
    <section className={styles.images}>
      <Masonry
        breakpointCols={{ 550: 1, 900: 2, default: 3 }}
        className={styles.masonry}
        columnClassName={styles.column}
      >
        {images.map(image => (
          <div className={styles.og} key={image.slug}>
            <a className={styles.image} href={`/inspiration/og/${image.slug}`}>
              <img
                alt={`OG of ${image.source.name}`}
                height={image.dimensions.height}
                loading="lazy"
                src={image.image}
                width={image.dimensions.width}
              />
            </a>

            <div className={styles.details}>
              <p>{image.source.name}</p>
              <a
                className={styles.link}
                href={image.source.url}
                rel="noreferrer"
                target="_blank"
              >
                {image.source.address}
              </a>
            </div>
          </div>
        ))}
      </Masonry>
    </section>
  );
}

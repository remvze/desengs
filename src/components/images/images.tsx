import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { images } from '@/data/images';

import styles from './images.module.css';

export function Images() {
  return (
    <section className={styles.images}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 1000: 3, 350: 1, 600: 2 }}
        gutterBreakPoints={{ 0: '20px' }}
      >
        <Masonry>
          {images.map(image => (
            <div className={styles.og} key={image.slug}>
              <a
                className={styles.image}
                href={`/inspiration/og/${image.slug}`}
              >
                <img
                  alt={`OG of ${image.source.name}`}
                  loading="lazy"
                  src={image.image}
                  style={{
                    aspectRatio: `${image.dimensions.width} / ${image.dimensions.height}`,
                  }}
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
      </ResponsiveMasonry>
    </section>
  );
}

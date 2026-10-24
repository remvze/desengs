import { useEffect, useState, type ReactElement } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

import { sponsors } from './index';
import { shuffle } from '@/helpers/random';
import styles from './gallery.module.css';

const PLACEMENT_INTERVAL = 7;

export function useSponsorCards(square = false) {
  const [orderedSponsors, setOrderedSponsors] = useState(sponsors);

  useEffect(() => {
    setOrderedSponsors(shuffle(sponsors));
  }, []);

  return (items: ReactElement[]) =>
    items.flatMap((item, index) => {
      const position = (index + 1) / PLACEMENT_INTERVAL - 1;
      if (
        (index + 1) % PLACEMENT_INTERVAL !== 0 ||
        index === items.length - 1 ||
        orderedSponsors.length === 0
      )
        return [item];

      const sponsor = orderedSponsors[position % orderedSponsors.length];
      const [title, ...description] = sponsor.name.split(':');

      return [
        item,
        <div className={styles.card} key={`sponsor-${position}`}>
          <a
            className={square ? styles.square : undefined}
            href={sponsor.url}
            rel="sponsored noreferrer"
            target="_blank"
          >
            <img alt={sponsor.alt} height={40} src={sponsor.logo} width={40} />
            <span className={styles.title}>{title}</span>
            <span className={styles.description}>
              {description.join(':').trim()}
            </span>
            <LuArrowUpRight aria-hidden="true" className={styles.arrow} />
          </a>
          <p className={styles.label}>Sponsored</p>
        </div>,
      ];
    });
}

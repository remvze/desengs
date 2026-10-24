import { useEffect, useState } from 'react';
import {
  LuArrowUpRight,
  LuChevronLeft,
  LuChevronRight,
  LuPause,
  LuPlay,
} from 'react-icons/lu';

import { sponsors } from './index';
import { shuffle } from '@/helpers/random';
import styles from './carousel.module.css';

const ROTATION_INTERVAL = 6000;

export function SponsorCarousel() {
  const [orderedSponsors, setOrderedSponsors] = useState(sponsors);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setOrderedSponsors(shuffle(sponsors));
    setPlaying(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const updateVisibility = () => setHidden(document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () =>
      document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    if (!playing || hovered || focused || hidden || orderedSponsors.length < 2)
      return;

    const timer = window.setTimeout(() => {
      setIndex(current => (current + 1) % orderedSponsors.length);
    }, ROTATION_INTERVAL);

    return () => window.clearTimeout(timer);
  }, [index, playing, hovered, focused, hidden, orderedSponsors.length]);

  const sponsor = orderedSponsors[index];
  if (!sponsor) return null;
  const [title, ...descriptionParts] = sponsor.name.split(':');
  const description = descriptionParts.join(':').trim();

  const navigate = (step: number) => {
    setIndex(
      current =>
        (current + step + orderedSponsors.length) % orderedSponsors.length,
    );
  };

  return (
    <aside
      aria-label="Sponsors"
      aria-roledescription="carousel"
      className={styles.carousel}
      onFocus={() => setFocused(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div
        aria-label={`${index + 1} of ${orderedSponsors.length}`}
        aria-live={playing && !hovered && !focused ? 'off' : 'polite'}
        aria-roledescription="slide"
        role="group"
      >
        <a
          className={styles.sponsor}
          href={sponsor.url}
          rel="noreferrer"
          target="_blank"
        >
          <img alt={sponsor.alt} height={32} src={sponsor.logo} width={32} />
          <span className={styles.copy}>
            <span className={styles.title}>{title}</span>
            {description && (
              <span className={styles.description}>{description}</span>
            )}
          </span>
          <LuArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className={styles.controls}>
        <span className={styles.label}>Sponsored</span>
        <button
          aria-label="Previous sponsor"
          type="button"
          onClick={() => navigate(-1)}
        >
          <LuChevronLeft aria-hidden="true" />
        </button>
        <div aria-label="Choose a sponsor" className={styles.positions}>
          {orderedSponsors.map((item, position) => (
            <button
              aria-current={position === index ? 'true' : undefined}
              aria-label={`Show ${item.name}`}
              key={item.url}
              type="button"
              onClick={() => setIndex(position)}
            >
              <span />
            </button>
          ))}
        </div>
        <button
          aria-label="Next sponsor"
          type="button"
          onClick={() => navigate(1)}
        >
          <LuChevronRight aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={
            playing ? 'Pause automatic rotation' : 'Start automatic rotation'
          }
          onClick={() => setPlaying(current => !current)}
        >
          {playing ? (
            <LuPause aria-hidden="true" />
          ) : (
            <LuPlay aria-hidden="true" />
          )}
        </button>
      </div>
    </aside>
  );
}

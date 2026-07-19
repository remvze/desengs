import type { Resources, Format } from '@/data/resources';
import { colors, formats, labels } from '@/data/resources';

import styles from './resources.module.css';
import { useMemo, useState } from 'react';
import { cn } from '@/helpers/styles';
import { formatDate } from '@/helpers/date';
import { pick } from '@/helpers/random';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react';

interface ResourcesProps {
  resources: Resources;
}

export function Resources({ resources }: ResourcesProps) {
  const [filters, setFilters] = useState<Format[]>([]);
  const [query, setQuery] = useState('');
  const [value, setValue] = useState('');
  const prefersReducedMotion = useReducedMotion();
  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);
  const x = useSpring(magneticX, { damping: 22, stiffness: 350 });
  const y = useSpring(magneticY, { damping: 22, stiffness: 350 });

  const filtered = useMemo(() => {
    if (!query.trim() && filters.length === 0) {
      return resources;
    }

    return resources.filter(
      resource =>
        (filters.length === 0 ? true : filters.includes(resource.format)) &&
        resource.title.toLowerCase().includes(query.trim().toLowerCase()),
    );
  }, [resources, filters, query]);

  const toggleFilter = (format: Format) => {
    if (filters.includes(format)) {
      setFilters(prev => prev.filter(f => f !== format));
    } else {
      setFilters(prev => [...prev, format]);
    }
  };

  return (
    <>
      <section className={styles.resources}>
        <h2 className={styles.title}>
          Browse <i>Resources:</i>
        </h2>

        <div className={styles.formats}>
          <form
            onSubmit={e => {
              e.preventDefault();
              setQuery(value);
            }}
          >
            <input
              placeholder="Search here..."
              value={value}
              onChange={e => setValue(e.currentTarget.value)}
            />
          </form>

          {formats.map(format => (
            <button
              className={cn(filters.includes(format) && styles.active)}
              key={format}
              onClick={() => toggleFilter(format)}
            >
              {filters.includes(format) && (
                <>
                  <div className={cn(styles.corner, styles.one)} />
                  <div className={cn(styles.corner, styles.two)} />
                  <div className={cn(styles.corner, styles.three)} />
                  <div className={cn(styles.corner, styles.four)} />
                </>
              )}
              <div
                className={styles.color}
                style={{ background: colors[format] }}
              />{' '}
              <span>{labels[format]}</span>
            </button>
          ))}
          <button
            disabled={filters.length === 0 && query.trim().length === 0}
            onClick={() => {
              setFilters([]);
              setQuery('');
              setValue('');
            }}
          >
            Clear All
          </button>
        </div>

        {filtered.length > 0 ? (
          <ul className={styles.list}>
            {filtered.map(resource => (
              <li key={resource.id}>
                <div
                  className={styles.color}
                  style={{ background: colors[resource.format] }}
                />
                <a href={resource.url} rel="noreferrer" target={'_blank'}>
                  {resource.title}{' '}
                  <span>
                    {resource.description && `• ${resource.description}`}
                  </span>
                </a>
                <div className={styles.divider} />
                <p className={styles.date}>
                  {formatDate(new Date(resource.date))}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.notFound}>No resources were found.</p>
        )}
      </section>

      <div className={styles.randomButtonPosition}>
        <motion.button
          className={styles.randomButton}
          style={{ x, y }}
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            const randomResource = pick(resources);

            window.location.href = randomResource.url;
          }}
          onPointerLeave={() => {
            magneticX.set(0);
            magneticY.set(0);
          }}
          onPointerMove={event => {
            if (prefersReducedMotion || event.pointerType === 'touch') return;

            const bounds = event.currentTarget.getBoundingClientRect();
            magneticX.set(
              (event.clientX - (bounds.left + bounds.width / 2)) * 0.35,
            );
            magneticY.set(
              (event.clientY - (bounds.top + bounds.height / 2)) * 0.35,
            );
          }}
        >
          Random Resource!
        </motion.button>
      </div>
    </>
  );
}

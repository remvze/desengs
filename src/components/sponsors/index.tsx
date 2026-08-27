import { LuArrowUpRight } from 'react-icons/lu';
import { useState, useRef } from 'react';
import { Tooltip } from '@base-ui/react/tooltip';
import { motion } from 'framer-motion';

import styles from './sponsors.module.css';
import { cn } from '@/helpers/styles';

const sponsors = [
  {
    alt: 'Interfaces Logo',
    logo: '/sponsors/interfaces-logo.svg',
    name: 'Interfaces: The Design Engineering Magazine',
    url: 'https://curation.systems/s/interfaces-dev',
  },
  {
    alt: 'Resurf Logo',
    logo: '/sponsors/resurf-logo.svg',
    name: 'Resurf: Save Anything Worth Keeping',
    url: 'https://curation.systems/s/resurf-so',
  },
  {
    alt: 'React Bits Pro Logo',
    logo: '/sponsors/reactbits-pro-logo.svg',
    name: 'React Bits Pro: React Components, Blocks & Templates',
    url: 'https://curation.systems/s/pro-reactbits-dev',
  },
  {
    alt: 'Details Logo',
    logo: '/sponsors/details-logo.svg',
    name: 'Details: Give Your AI Taste',
    url: 'https://curation.systems/s/details-so',
  },
];

type Sponsor = (typeof sponsors)[number];
type View = 'rows' | 'columns';

const VIEW_STORAGE_KEY = 'desengs:sponsors-view';

function SponsorLink({ sponsor }: { sponsor: Sponsor }) {
  const [open, setOpen] = useState(false);
  const actionsRef = useRef<Tooltip.Root.Actions>(null);

  return (
    <Tooltip.Root
      actionsRef={actionsRef}
      disableHoverablePopup
      open={open}
      onOpenChange={(nextOpen, eventDetails) => {
        if (!nextOpen) eventDetails.preventUnmountOnClose();
        setOpen(nextOpen);
      }}
    >
      <Tooltip.Trigger
        render={
          <a href={sponsor.url} rel="noreferrer" target="_blank">
            <img alt={sponsor.alt} src={sponsor.logo} />
          </a>
        }
      />
      <Tooltip.Portal>
        <Tooltip.Positioner
          className={styles.tooltipPositioner}
          side="bottom"
          sideOffset={8}
        >
          <Tooltip.Popup
            className={styles.tooltip}
            render={
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: -4 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                animate={
                  open
                    ? { filter: 'blur(0px)', opacity: 1, scale: 1, y: 0 }
                    : { filter: 'blur(2px)', opacity: 0, scale: 0.96, y: -4 }
                }
                onAnimationComplete={() => {
                  if (!open) actionsRef.current?.unmount();
                }}
              />
            }
          >
            {sponsor.name}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export function Sponsors() {
  const [view, setView] = useState<View>(() => {
    const storedView = window.localStorage.getItem(VIEW_STORAGE_KEY);

    return storedView === 'rows' || storedView === 'columns'
      ? storedView
      : 'rows';
  });

  const updateView = (nextView: View) => {
    setView(nextView);
    window.localStorage.setItem(VIEW_STORAGE_KEY, nextView);
  };

  return (
    <div className={styles.sponsors}>
      <div className={styles.title}>
        Sponsors
        <div className={styles.views}>
          <button
            className={cn(view === 'rows' && styles.active)}
            onClick={() => updateView('rows')}
          >
            <div className={cn(styles.icon, styles.rows)}>
              <span />
              <span />
              <span />
            </div>
          </button>
          <button
            className={cn(view === 'columns' && styles.active)}
            onClick={() => updateView('columns')}
          >
            <div className={cn(styles.icon, styles.columns)}>
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </div>

      {view === 'rows' && (
        <ul className={styles.items}>
          {sponsors.map(sponsor => (
            <li key={sponsor.name}>
              <a href={sponsor.url} rel="noreferrer" target="_blank">
                <img alt={sponsor.alt} src={sponsor.logo} />
                <p>
                  {sponsor.name}{' '}
                  <span>
                    <LuArrowUpRight />
                  </span>
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}

      {view === 'columns' && (
        <Tooltip.Provider delay={0}>
          <ul className={styles.columns}>
            {sponsors.map(sponsor => (
              <li key={sponsor.name}>
                <SponsorLink sponsor={sponsor} />
              </li>
            ))}
          </ul>
        </Tooltip.Provider>
      )}
    </div>
  );
}

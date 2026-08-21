import { Tooltip } from '@base-ui/react/tooltip';
import { motion, useReducedMotion } from 'motion/react';
import { LuArrowRight } from 'react-icons/lu';

import styles from './sponsors.module.css';

const sponsors = [
  {
    alt: 'Interfaces Logo',
    logo: '/sponsors/interfaces-logo.svg',
    name: 'Interfaces: Design Engineering Magazine',
    url: 'https://interfaces.dev/?ref=desengs.com',
  },
];

export function Sponsors() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={styles.sponsors}>
      <p>
        Sponsored By
        <span>
          <LuArrowRight />
        </span>
      </p>
      <div className={styles.items}>
        <Tooltip.Provider delay={0}>
          {sponsors.map(sponsor => (
            <Tooltip.Root key={sponsor.name}>
              <Tooltip.Trigger
                aria-label={sponsor.name}
                render={
                  <a href={sponsor.url} rel="noreferrer" target="_blank">
                    <img alt={sponsor.alt} src={sponsor.logo} />
                  </a>
                }
              />
              <Tooltip.Portal keepMounted>
                <Tooltip.Positioner side="bottom" sideOffset={8}>
                  <Tooltip.Popup
                    className={styles.tooltip}
                    render={(props, state) => {
                      // Motion defines gesture handlers with signatures that differ
                      // from the native handlers supplied by Base UI.
                      /* eslint-disable react/prop-types */
                      const {
                        onAnimationStart,
                        onDrag,
                        onDragEnd,
                        onDragStart,
                        ...motionProps
                      } = props;
                      /* eslint-enable react/prop-types */

                      void [onAnimationStart, onDrag, onDragEnd, onDragStart];

                      return (
                        <motion.div
                          {...motionProps}
                          initial={false}
                          animate={{
                            opacity: state.open ? 1 : 0,
                            scale: state.open ? 1 : 0.96,
                            y: state.open ? 0 : -4,
                          }}
                          transition={
                            prefersReducedMotion
                              ? { duration: 0 }
                              : { duration: 0.16, ease: 'easeOut' }
                          }
                        />
                      );
                    }}
                  >
                    <Tooltip.Arrow className={styles.tooltipArrow} />
                    {sponsor.name}
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
        </Tooltip.Provider>
      </div>
    </div>
  );
}

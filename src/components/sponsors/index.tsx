import { LuArrowUpRight } from 'react-icons/lu';

import styles from './sponsors.module.css';

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
];

export function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <p className={styles.title}>Sponsored By:</p>
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
    </div>
  );
}

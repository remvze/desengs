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
  return (
    <div className={styles.sponsors}>
      <p className={styles.title}>Sponsored By:</p>
      <ul className={styles.items}>
        {sponsors.map(sponsor => (
          <li key={sponsor.name}>
            <a href={sponsor.url} rel="noreferrer" target="_blank">
              <img alt={sponsor.alt} src={sponsor.logo} />
              <p>{sponsor.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

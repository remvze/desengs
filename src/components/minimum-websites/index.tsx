import { websites } from '@/data/minimum';
import { Container } from '../container';
import styles from './websites.module.css';

export function MinimumWebsites() {
  return (
    <Container wide>
      <div className={styles.websites}>
        {websites.map(website => (
          <div className={styles.website} key={website.slug}>
            <a href={`/minimum/${website.slug}`}>
              <img alt={website.name} loading="lazy" src={website.screenshot} />
            </a>
            <div className={styles.info}>
              <p>{website.name}</p>
              <a href={website.url} rel="noreferrer" target="_blank">
                {website.address}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

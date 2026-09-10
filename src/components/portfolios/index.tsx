import { portfolios } from '@/data/portfolios';
import { Container } from '../container';
import styles from './portfolios.module.css';

export function Portfolios() {
  return (
    <Container wide>
      <div className={styles.portfolios}>
        {portfolios.map(portfolio => (
          <div className={styles.portfolio} key={portfolio.slug}>
            <a href={`/inspiration/portfolios/${portfolio.slug}`}>
              <img
                alt={`${portfolio.name} portfolio`}
                loading="lazy"
                src={portfolio.screenshot}
              />
            </a>
            <div className={styles.info}>
              <p>{portfolio.name}</p>
              <a href={portfolio.url} rel="noreferrer" target="_blank">
                {portfolio.address}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

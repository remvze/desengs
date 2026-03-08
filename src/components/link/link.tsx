import styles from './link.module.css';

interface LinkProps {
  text: string;
  url: string;
}

export function Link({ text, url }: LinkProps) {
  return (
    <a className={styles.button} href={url} rel="noreferrer" target="_blank">
      (
      <div>
        <span>{text}</span>
        <span>{text}</span>
      </div>
      )
    </a>
  );
}

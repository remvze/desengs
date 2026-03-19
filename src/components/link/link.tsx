import styles from './link.module.css';

interface LinkProps {
  blank?: boolean;
  text: string;
  url: string;
}

export function Link({ blank = false, text, url }: LinkProps) {
  return (
    <a
      className={styles.button}
      href={url}
      {...(blank ? { target: '_blank' } : {})}
    >
      (
      <div>
        <span>{text}</span>
        <span>{text}</span>
      </div>
      )
    </a>
  );
}

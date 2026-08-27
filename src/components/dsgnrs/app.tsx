import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import styles from './app.module.css';
import { pick } from '@/helpers/random';
import { Container } from '../container';
import { cn } from '@/helpers/styles';
import { x as designers } from '@/data/designers';
import { sponsors } from '../sponsors';

export function App() {
  return (
    <div className={styles.app}>
      <div className={styles.sponsors}>
        {sponsors.map(sponsor => (
          <a
            href={sponsor.url}
            key={sponsor.url}
            rel="noreferrer"
            target="_blank"
          >
            <img alt={sponsor.alt} src={sponsor.logo} />
          </a>
        ))}
      </div>

      <div className={styles.pattern} />

      <div className={styles.wrapper}>
        <Button />
        <div className={cn(styles.lines, styles.one)} />
        <div className={cn(styles.lines, styles.two)} />
        <div className={cn(styles.circle, styles.one)} />
        <div className={cn(styles.circle, styles.two)} />
        <div className={cn(styles.dot, styles.one)} />
        <div className={cn(styles.dot, styles.two)} />
        <div className={cn(styles.dot, styles.three)} />
        <div className={cn(styles.dot, styles.four)} />
        <div className={styles.outer} />
      </div>

      <div className={styles.details}>
        <Container>
          <h1>DesEngs/DSGNRS</h1>
          <p>Exceptional designers to follow.</p>
          <div className={styles.links}>
            <a href="/">[DesEngs]</a>
            <a href="/dsgnrs/list">[All {designers.length}]</a>
          </div>
        </Container>
      </div>
    </div>
  );
}

function Button() {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, left, top, width } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const handleTouch = (e: React.TouchEvent<HTMLButtonElement>) => {
    const touch = e.touches[0];

    if (!ref.current || !touch) return;

    const { clientX, clientY } = touch;
    const { height, left, top, width } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const handleClick = () => {
    const randomDesigner = pick(designers);
    const url = `https://x.com/${randomDesigner.username}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      animate={{ x, y }}
      className={styles.button}
      ref={ref}
      style={{ position: 'relative' }}
      transition={{ damping: 15, mass: 0.1, stiffness: 150, type: 'spring' }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      onMouseLeave={reset}
      onMouseMove={handleMouse}
      onTouchEnd={reset}
      onTouchMove={handleTouch}
    >
      <div className={styles.noise} />

      <motion.div
        animate={{ x: x * 0.3, y: y * 0.3 }}
        className={styles.one}
        transition={{ damping: 15, mass: 0.1, stiffness: 150, type: 'spring' }}
      />

      <motion.div
        animate={{ x: x * 0.2, y: y * 0.2 }}
        className={styles.two}
        transition={{
          damping: 15,
          mass: 0.1,
          stiffness: 150,
          type: 'spring',
        }}
      />

      <motion.span
        animate={{ x: x * 0.3, y: y * 0.3 }}
        transition={{
          damping: 15,
          mass: 0.1,
          stiffness: 150,
          type: 'spring',
        }}
      >
        Discover Designer
      </motion.span>
    </motion.button>
  );
}

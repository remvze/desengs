import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './logo.module.css';

export function Logo() {
  const { scrollY } = useScroll();

  const rotate = useSpring(scrollY, {
    damping: 20,
    mass: 1,
    stiffness: 50,
  });

  return (
    <motion.img
      alt="DesEngs Logo"
      className={styles.logo}
      src="/logo.svg"
      style={{ rotate }}
    />
  );
}

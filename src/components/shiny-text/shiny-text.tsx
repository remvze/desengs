import { cn } from '@/helpers/styles';
import styles from './shiny-text.module.css';

interface ShinyTextProps {
  className?: string;
  disabled?: boolean;
  speed?: number;
  text: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  className = '',
  disabled = false,
  speed = 5,
  text,
}: ShinyTextProps) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={cn(styles.shinyText, disabled && styles.disabled, className)}
      style={{ animationDuration }}
    >
      {text}
    </span>
  );
};

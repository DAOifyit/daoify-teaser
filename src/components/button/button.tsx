import { ReactNode } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
};

const Button = ({ children, className, href, target, onClick }: Props) => {
  return href ? (
    <Link href={href} target={target} className={`${styles.button} ${className ?? ''}`}>
      {children}
    </Link>
  ) : (
    <button className={`${styles.button} ${className ?? ''}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
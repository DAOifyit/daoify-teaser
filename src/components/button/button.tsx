import { ReactNode, forwardRef } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  className,
  href,
  target,
  disabled,
  onClick,
}: Props) => {
  return href ? (
    <Link
      href={href}
      target={target}
      className={`${styles.button} ${className ?? ''}`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${styles.button} ${className ?? ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

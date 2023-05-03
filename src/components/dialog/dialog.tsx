import * as DialogRadix from '@radix-ui/react-dialog';
import { useEffect } from 'react';
import styles from './dialog.module.scss';
import Button from '../button/button';
import Image from 'next/image';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function Dialog({ open, onClose }: Props) {
  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyPress);

    return () => window.removeEventListener('keydown', onKeyPress);
  }, [onClose]);

  return (
    <DialogRadix.Root open={open}>
      <DialogRadix.Portal>
        <DialogRadix.Overlay className={styles.overlay} onClick={onClose} />
        <DialogRadix.Content className={styles.content}>
          <Image src="/icons/logo.svg" alt="Daoify Logo" height={50} width={50} />

          <div className={styles.header}>
            <h3>Join Waitlist</h3>
            <span>Join our growing waitlist and we will reach out to you as soon as possible.</span>
          </div>

          <div className={styles.form}>
            <label>Email address</label>
            <input type="email" placeholder="Enter your mail" />
          </div>

          <Button>Join</Button>
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  );
}

import { yupResolver } from '@hookform/resolvers/yup';
import * as DialogRadix from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../button/button';
import styles from './dialog.module.scss';

type FormInput = {
  email: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email('Please provide a valid email.')
      .required('Please enter your email.'),
  })
  .required();

export default function Dialog({ open, onClose, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

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
          <Image
            src="/icons/logo.svg"
            alt="Daoify Logo"
            height={50}
            width={50}
          />

          <div className={styles.header}>
            <h3>Join Waitlist</h3>
            <span>
              Join our growing waitlist and we will reach out to you as soon as
              possible.
            </span>
          </div>

          {/* <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label>Email address</label>
            <input {...register('email')} />
            <p>{errors.email?.message}</p>
          </form> */}

          <Button href="https://forms.gle/W8ihgALH6SeouDKF6" target="_blank">
            Join
          </Button>
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  );
}

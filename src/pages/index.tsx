import Button from '@/components/button/button';
import Cobe from '@/components/cobe/cobe';
import Dialog from '@/components/dialog/dialog';
// import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const styles = {};
export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === 'Enter') {
        setOpen(true);
      }
    };

    window.addEventListener('keydown', onKeyPress);

    return () => window.removeEventListener('keydown', onKeyPress);
  }, []);

  return (
    <>
      <Head>
        <title>DAOify - Next Gen Legal DAO Setup</title>
        <meta name="description" content="DAOify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <Image src="/icons/logo.svg" alt="Daoify Logo" height={50} width={50} />

        <Button onClick={() => setOpen(true)}>Join Waitlist</Button>
      </nav>

      <main className={styles.main}>
        <div>
          <h1>Latest Legal Wrapper for DAOs</h1>
          <p>Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum</p>

          <div className={styles.cta} onClick={() => setOpen(true)}>
            Press
            <div className={styles.wrapper}>
              <span className={styles.key}>⌘</span>
              +
              <span className={styles.key}>⏎</span>
            </div>
            for the waitlist
          </div>
        </div>
        <Cobe />
      </main>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={console.log}
      />
    </>
  );
}
import Button from '@/components/button/button';
import Cobe from '@/components/cobe/cobe';
import Dialog from '@/components/dialog/dialog';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

      <nav className="flex justify-between items-center w-full p-8">
        <Image src="/icons/logo.svg" alt="Daoify Logo" height={50} width={50} />

        <Button onClick={() => setOpen(true)}>Join Waitlist</Button>
      </nav>

      <main className="flex flex-col px-10 py-5 md:grid grid-cols-2 items-center px-26 py-8">
        <div>
          <h1 className="text-5xl">Latest Legal Wrapper for DAOs</h1>
          <p className='mt-4 mb-8 text-2xl'>Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum</p>

          <div className={"relative flex gap-2 cursor-pointer hover:opacity-50"} onClick={() => setOpen(true)}>
            Press
            <div>
              <span className={"inline-flex h-5 w-5 justify-center items-center rounded bg-white text-black mr-1"}>⌘</span>
              +
              <span className={"inline-flex h-5 w-5 justify-center items-center rounded bg-white text-black ml-1"}>⏎</span>
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
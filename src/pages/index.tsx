import styles from '@/styles/Home.module.scss';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import createGlobe from 'cobe';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/button/button';
import Image from 'next/image';
import Dialog from '@/components/dialog/dialog';

export default function Home() {
  const [open, setOpen] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;
    let globe: any;

    if (canvasRef?.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          // longitude latitude
          // { location: [37.7595, -122.4367], size: 0.03 },
          // { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: state => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        },
      });
    }

    return () => {
      globe.destroy();
    };
  }, []);

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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <Image src="/icons/logo.svg" alt="Daoify Logo" height={50} width={50} />

        <Button onClick={() => setOpen(true)}>Join Waitlist</Button>
      </nav>

      <main className={styles.main}>
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
        />
      </main>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={console.log}
      />
    </>
  );
}

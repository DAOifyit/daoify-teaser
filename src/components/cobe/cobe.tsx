import { WidthIcon } from "@radix-ui/react-icons";
import createGlobe from "cobe";
import { useRef, useEffect } from "react";

export default function Cobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;
    let width = canvasRef.current!.offsetWidth;
    let globe: any;

    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);

    window.addEventListener('resize', onResize);

    if (canvasRef?.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [],
        onRender: state => {
          state.phi = phi;
          phi += 0.01;
          state.width = width * 2
          state.height = width * 2
        },
      });

      setTimeout(() => canvasRef.current!.style.opacity = '1')
    }

    return () => {
      window.removeEventListener('resize', onResize);
      globe.destroy();
    };
  }, []);


  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
    />
  );
};

'use client';
import { useEffect, useRef } from 'react';

export default function BgVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Only load & play on desktop — mobile never fetches the file
    if (!window.matchMedia('(min-width: 768px)').matches) return;
    const video = ref.current;
    if (!video) return;
    video.src = src;
    video.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload="none"
      className="absolute inset-0 w-full h-full object-cover hidden md:block"
    />
  );
}

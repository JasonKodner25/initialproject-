'use client';
import { useEffect, useRef, useState } from 'react';

export default function BgVideo({
  src,
  mobileSrc,
}: {
  src: string;
  mobileSrc?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    video.src = isMobile && mobileSrc ? mobileSrc : src;
    video.play().catch(() => {});
  }, [src, mobileSrc]);

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload="none"
      onPlaying={() => setPlaying(true)}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
        playing ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}

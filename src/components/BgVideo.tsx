'use client';
import { useEffect, useRef, useState } from 'react';

export default function BgVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.src = src;
    video.play().catch(() => {});
  }, [src]);

  return (
    <>
      {/* Static poster — visible immediately, no JS needed */}
      {poster && (
        <img
          src={poster}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {/* Video fades in only once it's actually playing */}
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
    </>
  );
}

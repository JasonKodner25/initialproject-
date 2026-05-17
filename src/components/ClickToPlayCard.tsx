'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface Props {
  src: string;
  label: string;
  desc: string;
}

export default function ClickToPlayCard({ src, label, desc }: Props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    setPlaying(true);
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
  }

  function handleEnded() {
    setPlaying(false);
  }

  return (
    <div className="bg-[#0d1628] border border-[#0d3d54] rounded-xl overflow-hidden flex flex-col group hover:border-[#1a8fbf]/40 transition-all duration-300">
      <div
        className="relative w-full aspect-[4/3] bg-[#080e1a] cursor-pointer"
        onClick={!playing ? handlePlay : undefined}
      >
        <video
          ref={videoRef}
          /* #t=0.001 forces first-frame thumbnail on iOS Safari */
          src={`${src}#t=0.001`}
          preload="metadata"
          muted
          playsInline
          onEnded={handleEnded}
          className="w-full h-full object-cover"
        />

        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity group-hover:bg-black/30">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                <Play size={26} className="text-white ml-1" fill="white" />
              </div>
              <span className="text-white/70 text-[10px] tracking-[0.2em] uppercase font-semibold">
                Click to Watch
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-1">
        <div className="text-white font-bold text-sm">{label}</div>
        <div className="text-[#7a99b8] text-xs leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

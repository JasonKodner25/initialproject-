'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import Lightbox from './Lightbox';

interface Props {
  src: string;
  label: string;
  desc: string;
}

export default function PhotoCard({ src, label, desc }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0d1628] border border-[#0d3d54] rounded-xl overflow-hidden flex flex-col group hover:border-[#1a8fbf]/40 transition-all duration-300">
        <div className="relative w-full aspect-[4/3] bg-[#080e1a]">
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Expand button */}
          <button
            onClick={() => setOpen(true)}
            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-md bg-black/50 border border-white/15 text-white/70 hover:text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
            aria-label="View full size"
          >
            <Maximize2 size={13} />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-1">
          <div className="text-white font-bold text-sm">{label}</div>
          <div className="text-[#7a99b8] text-xs leading-relaxed">{desc}</div>
        </div>
      </div>

      {open && <Lightbox src={src} alt={label} onClose={() => setOpen(false)} />}
    </>
  );
}

'use client';

import { useState } from 'react';
import { Camera } from 'lucide-react';

const shots = [
  { id: 'birdseye',   label: "Bird's Eye",   video: null },
  { id: 'orbit',      label: 'Orbit',         video: '/kodnervideo.mp4' },
  { id: 'tracking',   label: 'Tracking Shot', video: null },
  { id: 'reveal',     label: 'Reveal',        video: null },
  { id: 'low',        label: 'Low Altitude',  video: null },
  { id: 'hyperlapse', label: 'Hyperlapse',    video: null },
];

export default function ShotsTabs() {
  const [active, setActive] = useState(shots[0].id);
  const activeShot = shots.find((s) => s.id === active)!;

  return (
    <div>
      {/* Tab row */}
      <div className="flex gap-2 flex-wrap justify-center mb-8">
        {shots.map((shot) => (
          <button
            key={shot.id}
            onClick={() => setActive(shot.id)}
            className={`px-5 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
              active === shot.id
                ? 'bg-[#e8701a] text-white shadow-lg shadow-[#e8701a]/20'
                : 'bg-[#0d1628] border border-[#0d3d54] text-[#7a99b8] hover:text-white hover:border-[#e8701a]/40'
            }`}
          >
            {shot.label}
          </button>
        ))}
      </div>

      {/* Content panel */}
      {activeShot.video ? (
        <div className="flex justify-center">
          <video
            key={activeShot.video}
            src={activeShot.video}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl border border-[#0d3d54] max-w-sm w-full"
          />
        </div>
      ) : (
        <div className="relative aspect-[16/9] rounded-xl bg-[#0d1628] border border-[#0d3d54] overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(#e8701a 1px, transparent 1px), linear-gradient(90deg, #e8701a 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8701a]/5 via-transparent to-[#1a8fbf]/5" />

          <div className="relative flex flex-col items-center gap-4 select-none">
            <Camera size={52} className="text-[#1a3a54]" strokeWidth={1} />
            <div className="text-[#2a4a68] text-3xl sm:text-4xl font-black tracking-widest uppercase">
              {activeShot.label}
            </div>
            <div className="text-[#1a3040] text-[10px] tracking-[0.4em] uppercase">Photo / Video Placeholder</div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d1628] to-transparent" />
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, #e8701a, #1a8fbf)' }}
          />
        </div>
      )}
    </div>
  );
}

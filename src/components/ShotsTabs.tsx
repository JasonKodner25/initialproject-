'use client';

import { useState } from 'react';
import { Camera, Video } from 'lucide-react';

const domains = [
  {
    id: 'video',
    label: 'Videography',
    icon: Video,
    shots: [
      { id: 'birdseye',   label: "Bird's Eye",   video: null },
      { id: 'orbital',    label: 'Orbital',       video: '/videoooo.mp4' },
      { id: 'landscape',  label: 'Landscape 3x',  video: '/Aerial_Website0.mp4' },
      { id: 'hyperlapse', label: 'Hyperlapse',    video: '/firstlapse.mp4' },
    ],
  },
  {
    id: 'photo',
    label: 'Photography',
    icon: Camera,
    shots: [
      { id: 'straightdown', label: 'Straight Down',    video: null },
      { id: 'goldenhour',   label: 'Golden Hour',      video: null },
      { id: 'facade',       label: 'Facade Approach',  video: null },
      { id: 'elevated',     label: 'Elevated Context', video: null },
    ],
  },
];

export default function ShotsTabs() {
  const [activeDomain, setActiveDomain] = useState(domains[0].id);
  const [activeShot, setActiveShot] = useState(domains[0].shots[0].id);

  const domain = domains.find((d) => d.id === activeDomain)!;
  const shot = domain.shots.find((s) => s.id === activeShot) ?? domain.shots[0];

  function handleDomainChange(id: string) {
    setActiveDomain(id);
    setActiveShot(domains.find((d) => d.id === id)!.shots[0].id);
  }

  return (
    <div>
      {/* Domain tabs */}
      <div className="flex justify-center gap-3 mb-6">
        {domains.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleDomainChange(id)}
            className={`flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-bold tracking-wide transition-all ${
              activeDomain === id
                ? 'bg-[#1a8fbf] text-white shadow-lg shadow-[#1a8fbf]/20'
                : 'bg-[#0d1628] border border-[#0d3d54] text-[#7a99b8] hover:text-white hover:border-[#1a8fbf]/40'
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      {/* Shot tabs */}
      <div className="flex gap-2 flex-wrap justify-center mb-8">
        {domain.shots.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveShot(s.id)}
            className={`px-5 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
              activeShot === s.id
                ? 'bg-[#e8701a] text-white shadow-lg shadow-[#e8701a]/20'
                : 'bg-[#0d1628] border border-[#0d3d54] text-[#7a99b8] hover:text-white hover:border-[#e8701a]/40'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div className="relative aspect-[16/9] rounded-xl bg-[#0d1628] border border-[#0d3d54] overflow-hidden flex items-center justify-center">
        {shot.video ? (
          <video
            key={shot.video}
            src={shot.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <>
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
              {activeDomain === 'video' ? (
                <Video size={52} className="text-[#1a3a54]" strokeWidth={1} />
              ) : (
                <Camera size={52} className="text-[#1a3a54]" strokeWidth={1} />
              )}
              <div className="text-[#2a4a68] text-3xl sm:text-4xl font-black tracking-widest uppercase">
                {shot.label}
              </div>
              <div className="text-[#1a3040] text-[10px] tracking-[0.4em] uppercase">Photo / Video Placeholder</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d1628] to-transparent" />
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, #e8701a, #1a8fbf)' }}
            />
          </>
        )}
      </div>
    </div>
  );
}

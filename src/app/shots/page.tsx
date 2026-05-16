'use client';

import { useState } from 'react';
import { Camera, Video, Mountain, Building2 } from 'lucide-react';

type Domain = 'landscape' | 'realestate';
type MediaType = 'video' | 'photo';

interface Shot {
  id: string;
  label: string;
  media: string | null;
}

const data: Record<Domain, Record<MediaType, Shot[]>> = {
  landscape: {
    video: [
      { id: 'birdseye',   label: "Bird's Eye",  media: null },
      { id: 'orbital',    label: 'Orbital',      media: '/videoooo.mp4' },
      { id: 'landscape',  label: 'Landscape 3x', media: '/Aerial_Website0.mp4' },
      { id: 'hyperlapse', label: 'Hyperlapse',   media: '/firstlapse (1).mp4' },
    ],
    photo: [
      { id: 'straightdown', label: 'Straight Down',    media: null },
      { id: 'goldenhour',   label: 'Golden Hour',      media: null },
      { id: 'facade',       label: 'Facade Approach',  media: null },
      { id: 'elevated',     label: 'Elevated Context', media: null },
    ],
  },
  realestate: {
    video: [
      { id: 're-approach',    label: 'Facade Approach',     media: null },
      { id: 're-driveway',    label: 'Driveway Reveal',     media: null },
      { id: 're-neighborhood',label: 'Neighborhood Context',media: null },
      { id: 're-twilight',    label: 'Twilight / Blue Hour',media: null },
    ],
    photo: [
      { id: 're-straightdown', label: 'Straight Down',       media: null },
      { id: 're-sideview',     label: 'Side View',           media: null },
      { id: 're-lot',          label: 'Elevated Lot View',   media: null },
      { id: 're-context',      label: 'Neighborhood Context',media: null },
    ],
  },
};

export default function ShotsPage() {
  const [domain, setDomain]     = useState<Domain>('realestate');
  const [media, setMedia]       = useState<MediaType>('video');
  const [activeShot, setActiveShot] = useState('re-approach');

  const shots = data[domain][media];
  const shot  = shots.find((s) => s.id === activeShot) ?? shots[0];

  function switchDomain(d: Domain) {
    setDomain(d);
    setMedia('video');
    setActiveShot(data[d]['video'][0].id);
  }

  function switchMedia(m: MediaType) {
    setMedia(m);
    setActiveShot(data[domain][m][0].id);
  }

  return (
    <main className="pt-20">
      {/* Page header */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">Portfolio</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Types of Shots</h1>
          <div className="section-divider mt-4" />
        </div>
      </section>

      <section className="py-16 bg-[#05080f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Domain tabs */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => switchDomain('realestate')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-all ${
                domain === 'realestate'
                  ? 'bg-[#1a8fbf] text-white shadow-lg shadow-[#1a8fbf]/20'
                  : 'bg-[#0d1628] border border-[#0d3d54] text-[#7a99b8] hover:text-white hover:border-[#1a8fbf]/40'
              }`}
            >
              <Building2 size={15} /> Real Estate
            </button>
            <button
              onClick={() => switchDomain('landscape')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-all ${
                domain === 'landscape'
                  ? 'bg-[#e8701a] text-white shadow-lg shadow-[#e8701a]/20'
                  : 'bg-[#0d1628] border border-[#0d3d54] text-[#7a99b8] hover:text-white hover:border-[#e8701a]/40'
              }`}
            >
              <Mountain size={15} /> Landscape
            </button>
          </div>

          {/* Media type tabs */}
          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => switchMedia('video')}
              className={`flex items-center gap-2 px-5 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                media === 'video'
                  ? 'bg-[#0d1628] border border-[#1a8fbf] text-[#1a8fbf]'
                  : 'bg-[#0d1628] border border-[#0d3d54] text-[#7a99b8] hover:text-white hover:border-[#1a8fbf]/40'
              }`}
            >
              <Video size={13} /> Videography
            </button>
            <button
              onClick={() => switchMedia('photo')}
              className={`flex items-center gap-2 px-5 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                media === 'photo'
                  ? 'bg-[#0d1628] border border-[#1a8fbf] text-[#1a8fbf]'
                  : 'bg-[#0d1628] border border-[#0d3d54] text-[#7a99b8] hover:text-white hover:border-[#1a8fbf]/40'
              }`}
            >
              <Camera size={13} /> Photography
            </button>
          </div>

          {/* Shot tabs */}
          <div className="flex gap-2 flex-wrap justify-center mb-8">
            {shots.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveShot(s.id)}
                className={`px-5 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                  shot.id === s.id
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
            {shot.media ? (
              <video
                key={shot.media}
                src={shot.media}
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
                  {media === 'video'
                    ? <Video size={52} className="text-[#1a3a54]" strokeWidth={1} />
                    : <Camera size={52} className="text-[#1a3a54]" strokeWidth={1} />}
                  <div className="text-[#2a4a68] text-2xl sm:text-4xl font-black tracking-widest uppercase text-center px-4">
                    {shot.label}
                  </div>
                  <div className="text-[#1a3040] text-[10px] tracking-[0.4em] uppercase">Coming Soon</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d1628] to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #e8701a, #1a8fbf)' }} />
              </>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}

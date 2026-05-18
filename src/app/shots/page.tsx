import Image from 'next/image';
import { Camera, Video, Mountain, Building2, Aperture, Clapperboard } from 'lucide-react';
import Link from 'next/link';
import ClickToPlayCard from '@/components/ClickToPlayCard';
import PhotoCard from '@/components/PhotoCard';

interface Shot {
  label: string;
  desc: string;
  type: 'photo' | 'video';
  media: string | null;
  poster?: string;
}

const realEstatePhotos: Shot[] = [
  {
    label: 'Straight Down',
    type: 'photo',
    media: '/birdseyephoto.jpg',
    desc: 'Overhead nadir shot showing the full roof, property footprint, and surrounding lot.',
  },
  {
    label: 'Rear View',
    type: 'photo',
    media: '/backyardphoto.jpg',
    desc: 'Aerial perspective of the rear of the property, showcasing the backyard, outdoor space, and grounds.',
  },
  {
    label: 'Elevated Lot View',
    type: 'photo',
    media: '/sideshotphoto.jpg',
    desc: 'Mid-altitude angle showing the full lot, landscaping, and immediate surroundings.',
  },
  {
    label: 'Neighborhood Context',
    type: 'photo',
    media: '/DJI_20260515184651_0247_D.jpg',
    desc: 'Wide aerial frame placing the property within the surrounding neighborhood.',
  },
];

const realEstateVideos: Shot[] = [
  {
    label: 'Full Property View',
    type: 'video',
    media: '/fullpropertyview.mp4',
    desc: 'Comprehensive aerial overview capturing the entire property, grounds, and surrounding context in one shot.',
  },
  {
    label: 'Facade Approach',
    type: 'video',
    media: '/officalrealestate_2approach.mp4',
    desc: 'Smooth cinematic reveal flying toward and rising up the front of the home.',
  },
  {
    label: 'Side Profile',
    type: 'video',
    media: '/SideOrbitShot.mp4',
    poster: '/sideshotphoto.jpg',
    desc: 'Lateral aerial pass revealing the full side of the property, depth, and outdoor space.',
  },
  {
    label: 'Driveway Reveal',
    type: 'video',
    media: '/drivewayreveal_official.mp4',
    desc: 'Low-altitude track following the driveway to the entrance for a dramatic arrival.',
  },
  {
    label: 'Backyard View',
    type: 'video',
    media: '/backyardofficial.mp4',
    poster: '/poster-backyard.jpg',
    desc: 'Sweeping clip showing the backyard, outdoor space, and surrounding grounds.',
  },
  {
    label: 'Horizontal',
    type: 'video',
    media: '/OfficialSideways1.mp4',
    desc: 'Golden or blue-hour footage shot during ideal lighting to make listings stand out.',
  },
];

const landscapeVideos: Shot[] = [
  {
    label: 'Orbital',
    type: 'video',
    media: '/videoooo.mp4',
    desc: 'Smooth 360° circle around a focal point, perfect for dramatic terrain or landmarks.',
  },
  {
    label: 'Cinematic Landscape',
    type: 'video',
    media: '/Aerial_Website0.mp4',
    poster: '/poster-cinematic.jpg',
    desc: 'Wide sweeping flyovers capturing coastlines, trails, parks, and open terrain.',
  },
  {
    label: 'Hyperlapse',
    type: 'video',
    media: '/firstlapse.mp4',
    desc: 'Time-compressed aerial movement creating dynamic, high-energy motion sequences.',
  },
  {
    label: 'Golden Hour',
    type: 'video',
    media: '/kodneraerialhomepage.mp4',
    poster: '/poster-goldenhour.jpg',
    desc: 'Aerial footage captured during golden hour — warm tones, long shadows, and cinematic light.',
  },
];

const landscapePhotos: Shot[] = [
  {
    label: 'Straight Down',
    type: 'photo',
    media: '/IMG_3513.jpeg',
    desc: 'Nadir perspective turning land and water into striking abstract compositions.',
  },
  {
    label: 'Horizon',
    type: 'photo',
    media: null,
    desc: 'Subject aligned to the horizon line for a clean, dramatic composition with sky and terrain in balance.',
  },
  {
    label: 'Elevated Panorama',
    type: 'photo',
    media: null,
    desc: 'High-altitude wide-angle frames showing sweeping vistas and horizon lines.',
  },
  {
    label: '3x Wideshot',
    type: 'photo',
    media: '/DJI_20260416065653_0188_D.jpeg',
    desc: 'Triple-width aerial frame capturing expansive coastal and terrain scenes in full context.',
  },
];

function ShotCard({ shot }: { shot: Shot }) {
  const isVideo = shot.type === 'video';
  return (
    <div className="bg-[#0d1628] border border-[#0d3d54] rounded-xl overflow-hidden flex flex-col group hover:border-[#1a8fbf]/40 transition-all duration-300">
      <div className="relative w-full aspect-[4/3] bg-[#080e1a]">
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 relative">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(#1a8fbf 1px, transparent 1px), linear-gradient(90deg, #1a8fbf 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          {isVideo
            ? <Video size={32} className="text-[#1a3a54]" strokeWidth={1} />
            : <Camera size={32} className="text-[#1a3a54]" strokeWidth={1} />}
          <span className="text-[#1a3040] text-[10px] tracking-[0.3em] uppercase">Coming Soon</span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-1">
        <div className="text-white font-bold text-sm">{shot.label}</div>
        <div className="text-[#7a99b8] text-xs leading-relaxed">{shot.desc}</div>
      </div>
    </div>
  );
}

function MediaDivider({ type, accentColor }: { type: 'photo' | 'video'; accentColor: string }) {
  const isPhoto = type === 'photo';
  return (
    <div className="flex items-center gap-3 mb-5">
      <div
        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase"
        style={{ background: `${accentColor}12`, border: `1px solid ${accentColor}30`, color: accentColor }}
      >
        {isPhoto ? <Aperture size={13} /> : <Clapperboard size={13} />}
        {isPhoto ? 'Photo' : 'Video'}
      </div>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${accentColor}30, transparent)` }} />
    </div>
  );
}

function SectionHeader({ domain }: { domain: 'realestate' | 'landscape' }) {
  const isRE = domain === 'realestate';
  return (
    <div className="flex items-center gap-6 mb-10">
      <div className="relative flex-shrink-0">
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: isRE
              ? 'linear-gradient(135deg, #0d2a3d 0%, #0a1f35 50%, #061525 100%)'
              : 'linear-gradient(135deg, #2a1400 0%, #1f1000 50%, #150a00 100%)',
            border: '1px solid #1a8fbf40',
            boxShadow: '0 0 32px #1a8fbf18, inset 0 1px 0 #1a8fbf20',
          }}
        >
          {isRE ? (
            <><Building2 size={32} className="sm:hidden" color="#1a8fbf" strokeWidth={1.5} /><Building2 size={38} className="hidden sm:block" color="#1a8fbf" strokeWidth={1.5} /></>
          ) : (
            <><Mountain size={32} className="sm:hidden" color="#1a8fbf" strokeWidth={1.5} /><Mountain size={38} className="hidden sm:block" color="#1a8fbf" strokeWidth={1.5} /></>
          )}
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full" style={{ background: '#1a8fbf', boxShadow: '0 0 8px #1a8fbf' }} />
      </div>
      <div>
        <div className="text-xs tracking-[0.3em] uppercase font-semibold mb-1" style={{ color: '#1a8fbf' }}>
          {isRE ? 'Listings & Properties' : 'Nature & Terrain'}
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-none">
          {isRE ? 'Real Estate' : 'Landscape'}
        </h2>
        <p className="text-[#7a99b8] text-sm mt-2">
          {isRE
            ? 'Exterior photography and video designed to make listings stand out.'
            : 'Sweeping aerial coverage of coastlines, parks, trails, and natural terrain.'}
        </p>
      </div>
    </div>
  );
}

export default function ShotsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#1a8fbf] text-xs tracking-[0.3em] uppercase font-medium mb-3">Portfolio</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Showcase</h1>
          <div className="section-divider mt-4" />
        </div>
      </section>

      {/* Real Estate */}
      <section id="realestate" className="py-16 bg-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader domain="realestate" />
          <MediaDivider type="photo" accentColor="#1a8fbf" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {realEstatePhotos.map((s) =>
              s.media
                ? <PhotoCard key={s.label} src={s.media} label={s.label} desc={s.desc} />
                : <ShotCard key={s.label} shot={s} />
            )}
          </div>
          <MediaDivider type="video" accentColor="#1a8fbf" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {realEstateVideos.map((s) =>
              s.media
                ? <ClickToPlayCard key={s.label} src={s.media} label={s.label} desc={s.desc} poster={s.poster} />
                : <ShotCard key={s.label} shot={s} />
            )}
          </div>
        </div>
      </section>

      {/* Landscape */}
      <section id="landscape" className="py-16 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader domain="landscape" />
          <MediaDivider type="photo" accentColor="#1a8fbf" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {landscapePhotos.map((s) =>
              s.media
                ? <PhotoCard key={s.label} src={s.media} label={s.label} desc={s.desc} />
                : <ShotCard key={s.label} shot={s} />
            )}
          </div>
          <MediaDivider type="video" accentColor="#1a8fbf" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {landscapeVideos.map((s) =>
              s.media
                ? <ClickToPlayCard key={s.label} src={s.media} label={s.label} desc={s.desc} poster={s.poster} />
                : <ShotCard key={s.label} shot={s} />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#0a1220] border-t border-[#0d3d54]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#7a99b8] text-sm sm:text-base font-bold mb-5">
            Interested in a specific shot type? Get in touch to discuss your project.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-[#2d7a50] text-white text-sm font-bold tracking-wide rounded hover:bg-[#3a9463] transition-all">
            Book a Session
          </Link>
        </div>
      </section>
    </main>
  );
}

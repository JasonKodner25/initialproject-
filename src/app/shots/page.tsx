import Image from 'next/image';
import { Camera, Video, Mountain, Building2 } from 'lucide-react';
import Link from 'next/link';

interface Shot {
  label: string;
  desc: string;
  type: 'photo' | 'video';
  media: string | null;
}

const realEstateShots: Shot[] = [
  {
    label: 'Straight Down',
    type: 'photo',
    media: '/birdseyephoto.jpg',
    desc: 'Overhead nadir shot showing the full roof, property footprint, and surrounding lot.',
  },
  {
    label: 'Side View',
    type: 'photo',
    media: '/sideshotphoto.jpg',
    desc: 'Eye-level facade perspective highlighting architectural detail and curb appeal.',
  },
  {
    label: 'Elevated Lot View',
    type: 'photo',
    media: null,
    desc: 'Mid-altitude angle showing the full lot, landscaping, and immediate surroundings.',
  },
  {
    label: 'Neighborhood Context',
    type: 'photo',
    media: '/neighborhood-context.jpg',
    desc: 'Wide aerial frame placing the property within the surrounding neighborhood.',
  },
  {
    label: 'Facade Approach',
    type: 'video',
    media: null,
    desc: 'Smooth cinematic reveal flying toward and rising up the front of the home.',
  },
  {
    label: 'Driveway Reveal',
    type: 'video',
    media: null,
    desc: 'Low-altitude track following the driveway to the entrance for a dramatic arrival.',
  },
  {
    label: 'Neighborhood Flyover',
    type: 'video',
    media: null,
    desc: 'Sweeping clip showing proximity to streets, parks, and nearby amenities.',
  },
  {
    label: 'Twilight / Blue Hour',
    type: 'video',
    media: null,
    desc: 'Golden or blue-hour footage shot during ideal lighting to make listings stand out.',
  },
];

const landscapeShots: Shot[] = [
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
    desc: 'Wide sweeping flyovers capturing coastlines, trails, parks, and open terrain.',
  },
  {
    label: 'Hyperlapse',
    type: 'video',
    media: '/firstlapse.mp4',
    desc: 'Time-compressed aerial movement creating dynamic, high-energy motion sequences.',
  },
  {
    label: "Bird's Eye",
    type: 'video',
    media: null,
    desc: 'Straight-down shot revealing natural patterns and scale from directly above.',
  },
  {
    label: 'Straight Down',
    type: 'photo',
    media: null,
    desc: 'Nadir perspective turning land and water into striking abstract compositions.',
  },
  {
    label: 'Golden Hour',
    type: 'photo',
    media: null,
    desc: 'Warm-light photography capturing landscapes at sunrise or sunset.',
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
  const hasMedia = shot.media !== null;
  const isVideo = shot.type === 'video';

  return (
    <div className="bg-[#0d1628] border border-[#0d3d54] rounded-xl overflow-hidden flex flex-col group hover:border-[#1a8fbf]/50 transition-all">
      {/* Media area */}
      <div className="relative w-full aspect-[4/3] bg-[#080e1a]">
        {hasMedia && isVideo ? (
          <video
            src={shot.media!}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : hasMedia ? (
          <Image
            src={shot.media!}
            alt={shot.label}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(#1a8fbf 1px, transparent 1px), linear-gradient(90deg, #1a8fbf 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {isVideo
              ? <Video size={36} className="text-[#1a3a54]" strokeWidth={1} />
              : <Camera size={36} className="text-[#1a3a54]" strokeWidth={1} />}
            <span className="text-[#1a3040] text-[10px] tracking-[0.3em] uppercase relative">Coming Soon</span>
          </div>
        )}

        {/* Badge */}
        <div className={`absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide ${
          isVideo
            ? 'bg-[#05080f]/80 border border-[#1a8fbf]/50 text-[#1a8fbf]'
            : 'bg-[#05080f]/80 border border-[#e8701a]/50 text-[#e8701a]'
        }`}>
          {isVideo ? <Video size={9} /> : <Camera size={9} />}
          {isVideo ? 'Video' : 'Photo'}
        </div>
      </div>

      {/* Label + description */}
      <div className="p-4 flex flex-col gap-1">
        <div className="text-white font-bold text-sm">{shot.label}</div>
        <div className="text-[#7a99b8] text-xs leading-relaxed">{shot.desc}</div>
      </div>
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  color,
  label,
  subtitle,
}: {
  icon: React.ElementType;
  color: string;
  label: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">{label}</h2>
        <p className="text-[#7a99b8] text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

export default function ShotsPage() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">Portfolio</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Types of Shots</h1>
          <div className="section-divider mt-4 mb-6" />
          <p className="text-[#7a99b8] text-sm sm:text-base max-w-2xl leading-relaxed">
            Browse every shot type I offer — from real estate photography to cinematic landscape footage. Each card shows a live example or a preview of what&apos;s coming.
          </p>
        </div>
      </section>

      {/* Real Estate */}
      <section className="py-16 bg-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Building2}
            color="#1a8fbf"
            label="Real Estate"
            subtitle="Exterior photography and video designed to make listings stand out and attract buyers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {realEstateShots.map((s) => (
              <ShotCard key={s.label} shot={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Landscape */}
      <section className="py-16 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Mountain}
            color="#e8701a"
            label="Landscape"
            subtitle="Sweeping aerial coverage of coastlines, parks, trails, and natural terrain."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {landscapeShots.map((s) => (
              <ShotCard key={s.label} shot={s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#0a1220] border-t border-[#0d3d54]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#7a99b8] text-sm sm:text-base font-bold mb-5">
            Interested in a specific shot type? Get in touch to discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#2d7a50] text-white text-sm font-bold tracking-wide rounded hover:bg-[#3a9463] transition-all"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </main>
  );
}

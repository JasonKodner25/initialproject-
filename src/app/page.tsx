import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Play, Award, Camera, Video, Map } from 'lucide-react';

const highlights = [
  { icon: Camera, label: 'Photography', desc: 'Stunning aerial stills' },
  { icon: Video, label: 'Videography', desc: 'Cinematic aerial footage' },
  { icon: Map, label: 'Mapping', desc: 'Precision aerial mapping' },
  { icon: Award, label: 'Licensed', desc: 'FAA Part 107 certified' },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020509] via-[#05080f] to-[#0a1220]" />

        {/* Atmospheric grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#1a8fe3 1px, transparent 1px), linear-gradient(90deg, #1a8fe3 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1a8fe3]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 mb-8 drop-shadow-2xl">
            <Image
              src="/DroneLogo.png"
              alt="Kodner Aerial Services"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Tagline */}
          <div className="text-[#1a8fe3] text-xs sm:text-sm tracking-[0.4em] uppercase font-medium mb-4">
            AIR · LAND · VIEW
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none mb-4">
            Precision Imaging&nbsp;
            <span className="gradient-text">From Above</span>
          </h1>

          <p className="text-[#7a99b8] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Professional drone photography &amp; videography — capturing breathtaking perspectives for real estate, landscapes, events, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-[#1a8fe3] text-white font-bold tracking-wide rounded hover:bg-[#38bdf8] transition-all glow-blue text-sm sm:text-base"
            >
              Explore Services
            </Link>
            <Link
              href="/gallery"
              className="flex items-center gap-2 px-8 py-4 border border-[#1a3354] text-[#7a99b8] font-semibold rounded hover:border-[#1a8fe3] hover:text-white transition-all text-sm sm:text-base"
            >
              <Play size={16} />
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#3d5a78] text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="text-[#3d5a78]" />
        </div>
      </section>

      {/* ── Intro / About Snippet ────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <div className="text-[#1a8fe3] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Welcome
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Kodner Aerial Services
              </h2>
              <div className="section-divider mb-6" />
              <div className="space-y-4 text-[#7a99b8] text-sm sm:text-base leading-relaxed">
                <p>
                  [Intro paragraph placeholder — add your personal story, background, and what drives your passion for aerial photography here. Tell visitors who you are and what makes your work unique.]
                </p>
                <p>
                  [Second paragraph placeholder — describe your experience, the areas you serve, and the types of clients and projects you specialize in.]
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-8 px-6 py-3 border border-[#1a8fe3] text-[#1a8fe3] text-sm font-semibold rounded hover:bg-[#1a8fe3] hover:text-white transition-all"
              >
                Learn More About Me
              </Link>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-[#0d1628] border border-[#1a3354] rounded-lg p-6 hover:border-[#1a8fe3]/50 transition-all group"
                >
                  <Icon size={28} className="text-[#1a8fe3] mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-bold text-base mb-1">{label}</div>
                  <div className="text-[#7a99b8] text-xs">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Teaser ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#1a8fe3] text-xs tracking-[0.3em] uppercase font-medium mb-3">Portfolio</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Recent Work</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-lg bg-[#0d1628] border border-[#1a3354] group cursor-pointer ${
                  i === 0 ? 'col-span-2 md:col-span-2' : ''
                }`}
                style={{ aspectRatio: i === 0 ? '16/7' : '4/3' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#3d5a78] text-xs">Photo Placeholder {i + 1}</span>
                </div>
                <div className="absolute inset-0 bg-[#1a8fe3]/0 group-hover:bg-[#1a8fe3]/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Camera size={28} className="text-[#1a8fe3]" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 bg-[#1a8fe3] text-white text-sm font-bold rounded hover:bg-[#38bdf8] transition-all glow-blue tracking-wide"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#05080f] border-y border-[#1a3354]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to See the World{' '}
            <span className="gradient-text">From a New Angle?</span>
          </h2>
          <p className="text-[#7a99b8] text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s capture your next project from above. Get in touch to discuss your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#1a8fe3] text-white font-bold tracking-wide rounded hover:bg-[#38bdf8] transition-all glow-blue text-sm sm:text-base"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Play, Award, Camera, Video, Map } from 'lucide-react';

const highlights = [
  { icon: Camera, label: 'Photography', desc: 'Stunning aerial stills' },
  { icon: Video, label: 'Videography', desc: 'Cinematic aerial footage' },
  { icon: Map, label: 'Mapping', desc: 'Precision aerial mapping' },
  { icon: Award, label: 'Licensed', desc: 'FAA Part 107 certified' },
];

const collections = [
  {
    name: 'Santa Cruz',
    description: 'Natural Bridges State Beach',
    date: 'April 16, 2026',
    cover: '/DJI_20260416065653_0188_D.jpeg',
    count: 8,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020509] via-[#05080f] to-[#0a1220]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#e8701a 1px, transparent 1px), linear-gradient(90deg, #e8701a 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#e8701a]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-8 drop-shadow-2xl">
            <Image src="/kodneraeriallogoofficial.png" alt="Kodner Aerial Services" fill priority className="object-contain mix-blend-multiply" />
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-none mb-4">
            PRECISE IMAGING&nbsp;<span className="gradient-text">FROM ABOVE</span>
          </h1>
          <p className="text-[#7a99b8] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Professional drone photography &amp; videography — capturing breathtaking perspectives for real estate, landscapes, events, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="/services" className="px-8 py-4 bg-[#e8701a] text-white font-bold tracking-wide rounded hover:bg-[#f4952a] transition-all glow-blue text-sm sm:text-base">
              Explore Services
            </Link>
            <Link href="/gallery" className="flex items-center gap-2 px-8 py-4 border border-[#3d2010] text-[#7a99b8] font-semibold rounded hover:border-[#e8701a] hover:text-white transition-all text-sm sm:text-base">
              <Play size={16} />
              View Gallery
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#4a3018] text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="text-[#4a3018]" />
        </div>
      </section>

      {/* ── Intro / About Snippet ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">Welcome</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">Kodner Aerial Services</h2>
              <div className="section-divider mb-6" />
              <div className="space-y-4 text-[#7a99b8] text-sm sm:text-base leading-relaxed">
                <p>[Intro paragraph placeholder — add your personal story, background, and what drives your passion for aerial photography here.]</p>
                <p>[Second paragraph placeholder — describe your experience, the areas you serve, and the types of clients and projects you specialize in.]</p>
              </div>
              <Link href="/about" className="inline-block mt-8 px-6 py-3 border border-[#e8701a] text-[#e8701a] text-sm font-semibold rounded hover:bg-[#e8701a] hover:text-white transition-all">
                Learn More About Me
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-[#0d1628] border border-[#3d2010] rounded-lg p-6 hover:border-[#e8701a]/50 transition-all group">
                  <Icon size={28} className="text-[#e8701a] mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-bold text-base mb-1">{label}</div>
                  <div className="text-[#7a99b8] text-xs">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Collections ───────────────────────────────────────── */}
      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">Portfolio</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Collections</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((col) => (
              <Link
                key={col.name}
                href="/gallery"
                className="group relative overflow-hidden rounded-xl border border-[#3d2010] hover:border-[#e8701a]/60 transition-all bg-[#0d1628] block"
              >
                {/* Cover photo */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={col.cover}
                    alt={col.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                  {/* Photo count badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#05080f]/80 backdrop-blur-sm border border-[#e8701a]/40 rounded text-[#e8701a] text-xs font-semibold">
                    {col.count} photos
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="text-white font-black text-xl mb-1 group-hover:text-[#e8701a] transition-colors">{col.name}</div>
                  <div className="text-[#7a99b8] text-sm">{col.description}</div>
                  <div className="text-[#4a3018] text-xs mt-1">{col.date}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="inline-block px-8 py-3 bg-[#e8701a] text-white text-sm font-bold rounded hover:bg-[#f4952a] transition-all glow-blue tracking-wide">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#05080f] border-y border-[#3d2010]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to See the World{' '}
            <span className="gradient-text">From a New Angle?</span>
          </h2>
          <p className="text-[#7a99b8] text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s capture your next project from above. Get in touch to discuss your vision.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-[#e8701a] text-white font-bold tracking-wide rounded hover:bg-[#f4952a] transition-all glow-blue text-sm sm:text-base">
            Book a Session
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Award, Camera, Video, Shield, Radio, Mountain, Building2, ArrowRight } from 'lucide-react';

const highlights = [
  { icon: Camera, label: 'Photography', desc: 'Stunning aerial stills' },
  { icon: Video,  label: 'Videography', desc: 'Cinematic aerial footage' },
  { icon: Award,  label: 'Licensed',    desc: 'FAA Part 107 certified' },
];

const airSpecs = [
  { label: 'Flight Time',        value: '41 min' },
  { label: 'Max Speed',          value: '47 mph' },
  { label: 'Main Sensor',        value: '1" CMOS · 50 MP' },
  { label: 'Video',              value: '4K / 6K' },
  { label: 'Range',              value: '19.8 miles' },
  { label: 'Obstacle Detection', value: 'Omnidirectional' },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020509] via-[#05080f] to-[#0a1220]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#1a8fbf 1px, transparent 1px), linear-gradient(90deg, #1a8fbf 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8701a]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1a8fbf]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto pt-16">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 mb-6 drop-shadow-2xl">
            <Image src="/kodneraeriallogoofficial.png" alt="Kodner Aerial Services" fill priority className="object-contain mix-blend-multiply" />
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-none mb-4">
            AERIAL PERSPECTIVE,&nbsp;<span className="text-[#e8701a]">CINEMATIC PRECISION</span>
          </h1>
          <p className="text-[#7a99b8] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Professional drone photography &amp; videography — capturing breathtaking perspectives for real estate, landscapes, events, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="/services" className="px-8 py-4 bg-[#e8701a] text-white font-bold tracking-wide rounded hover:bg-[#f4952a] transition-all glow-blue text-sm sm:text-base">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#e8701a] text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="text-[#e8701a]" />
        </div>
      </section>

      {/* ── Why Kodner Aerial */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020509] via-[#05080f] to-[#0a1220]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#1a8fbf 1px, transparent 1px), linear-gradient(90deg, #1a8fbf 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8701a]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1a8fbf]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Video first */}
          <div className="flex justify-center mb-12">
            <div
              className="relative p-[2px] rounded-2xl shadow-2xl w-full"
              style={{ background: 'linear-gradient(145deg, #e8701a 0%, #0a1220 50%, #1a8fbf 100%)' }}
            >
              <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-[#e8701a] rounded-tl-2xl z-10" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-[#1a8fbf] rounded-br-2xl z-10" />
              <div className="bg-[#05080f] rounded-[14px] overflow-hidden" style={{ aspectRatio: '2/1' }}>
                <video src="/edit1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>

          {/* Heading + description */}
          <div className="text-center mb-10">
            <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">Welcome</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">Why Kodner Aerial?</h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-[#7a99b8] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 text-left">
              Based in the Bay Area, I specialize in cinematic aerial photography and videography, offering a wide range of dynamic drone shots designed to showcase each subject from its most compelling perspective. One of the Bay Area&apos;s only drone operators with both an FAA Part 107 certificate and a Private Pilot License. Every project is planned and executed with a strong understanding of airspace, weather, and FAA regulations, with safety and precision at the core of every flight.
            </p>
            <Link href="/about" className="inline-block px-6 py-3 border border-[#e8701a] text-[#e8701a] text-sm font-semibold rounded hover:bg-[#e8701a] hover:text-white transition-all">
              Learn More About Me
            </Link>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-[#0d1628] border border-[#0d3d54] rounded-lg p-4 hover:border-[#1a8fbf]/60 transition-all group text-center">
                <Icon size={24} className="text-[#1a8fbf] mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <div className="text-white font-bold text-sm mb-1">{label}</div>
                <div className="text-[#7a99b8] text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I Offer */}
      <section className="py-20 bg-[#05080f] border-t border-[#0d3d54]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#1a8fbf] text-xs tracking-[0.3em] uppercase font-medium mb-3">Specialties</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">What I Offer</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Real Estate */}
            <div className="group bg-[#0d1628] border border-[#0d3d54] rounded-2xl p-8 hover:border-[#1a8fbf]/60 transition-all flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#1a8fbf]/10 border border-[#1a8fbf]/20 flex items-center justify-center">
                <Building2 size={24} className="text-[#1a8fbf]" />
              </div>
              <div>
                <h3 className="text-white font-black text-xl mb-2">Real Estate Footage</h3>
                <p className="text-[#7a99b8] text-sm leading-relaxed">
                  I shoot a variety of exterior home footage that help real estate agents find their ideal look. Types of shots include facade approaches, elevated lot overviews, neighborhood context, and twilight photography designed to make listings stand out.
                </p>
              </div>
              <Link
                href="/shots#realestate"
                className="mt-auto flex items-center gap-2 text-[#1a8fbf] text-sm font-semibold hover:gap-3 transition-all"
              >
                Explore Shots <ArrowRight size={15} />
              </Link>
            </div>

            {/* Landscape */}
            <div className="group bg-[#0d1628] border border-[#3d2010] rounded-2xl p-8 hover:border-[#e8701a]/60 transition-all flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#e8701a]/10 border border-[#e8701a]/20 flex items-center justify-center">
                <Mountain size={24} className="text-[#e8701a]" />
              </div>
              <div>
                <h3 className="text-white font-black text-xl mb-2">Landscape</h3>
                <p className="text-[#7a99b8] text-sm leading-relaxed">
                  Sweeping aerial coverage of coastlines, parks, trails, natural terrain, and much more! Types of shots include Bird&apos;s eye views, orbital shots, hyperlapse, and cinematic landscape sequences.
                </p>
              </div>
              <Link
                href="/shots#landscape"
                className="mt-auto flex items-center gap-2 text-[#e8701a] text-sm font-semibold hover:gap-3 transition-all"
              >
                Explore Shots <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Use */}
      <section className="py-20 sm:py-28 bg-[#0a1220] border-y border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#0d3d54]">
              <Image src="/air3s.webp" alt="DJI Air 3S" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="flex items-center gap-1 px-2.5 py-1 bg-[#05080f]/80 backdrop-blur-sm border border-[#e8701a]/40 text-[#e8701a] text-xs font-semibold rounded">
                  <Video size={10} /> 4K Video
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 bg-[#05080f]/80 backdrop-blur-sm border border-[#e8701a]/40 text-[#e8701a] text-xs font-semibold rounded">
                  <Shield size={10} /> Obstacle Detection
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Radio size={22} className="text-[#1a8fbf]" />
                <h2 className="text-3xl sm:text-4xl font-black text-white">What I Use</h2>
              </div>
              <div className="section-divider mb-6" />
              <p className="text-[#7a99b8] text-sm sm:text-base leading-relaxed mb-8">
                The primary platform for every shoot, offering 4K imaging. The Air 3S packs a 1-inch CMOS sensor and dual-lens system into a compact frame — giving cinema-quality results without the bulk.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {airSpecs.map(({ label, value }) => (
                  <div key={label} className="bg-[#0d1628] border border-[#0d3d54] rounded-lg px-4 py-3">
                    <div className="text-[#1a4a5c] text-[10px] uppercase tracking-widest mb-1">{label}</div>
                    <div className="text-white font-bold text-sm">{value}</div>
                  </div>
                ))}
              </div>
              <Link href="/equipment" className="inline-block px-6 py-3 border border-[#1a8fbf] text-[#1a8fbf] text-sm font-semibold rounded hover:bg-[#1a8fbf] hover:text-white transition-all">
                View Full Equipment List
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner */}
      <section className="py-10 bg-[#0a1220] border-t border-[#0d3d54]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#7a99b8] text-sm sm:text-base font-bold mb-5">
            Interested in a booking? Get in touch to discuss further details.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-[#2d7a50] text-white text-sm font-bold tracking-wide rounded hover:bg-[#3a9463] transition-all">
            Book a Session
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import { Camera, Home, Video, Compass, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  accent: string;
}

const services: Service[] = [
  {
    icon: Compass,
    title: 'Landscape Photography',
    tagline: 'Nature from 400 feet up',
    description: 'From coastal cliffs to mountain ridgelines, I capture California’s terrain the way it was meant to be seen. Aerial stills that give you a sense of scale no ground-level shot can match.',
    features: ['4K aerial stills', 'Golden hour shoots', 'RAW file delivery', 'Print-ready resolution'],
    accent: '#e8701a',
  },
  {
    icon: Home,
    title: 'Real Estate Photography',
    tagline: 'Make every property shine',
    description: 'A strong aerial shot can be the difference between a listing that gets clicks and one that gets passed over. I work fast and deliver clean, MLS-ready images within 24–48 hours.',
    features: ['Exterior & aerial stills', 'MLS-ready delivery', '24–48 hr turnaround', 'Virtual tour support'],
    accent: '#1a8fbf',
  },
  {
    icon: Video,
    title: 'Aerial Videography',
    tagline: 'Cinematic motion from the sky',
    description: 'Whether it’s a slow pull-back over a ridgeline or a low tracking shot through open terrain, I shoot footage that actually looks cinematic. Color graded and ready to drop into your edit.',
    features: ['4K / 6K video', 'Color graded delivery', 'Cinematic LUT styling', 'Custom music sync'],
    accent: '#e8701a',
  },
  {
    icon: Camera,
    title: 'Events Coverage',
    tagline: 'Your big moments, from above',
    description: 'Weddings, races, festivals — if it’s happening outside, I can put a camera above it. You get shots that no photographer on the ground could ever pull off.',
    features: ['Weddings & festivals', 'Same-day highlights', 'Photo & video combo', 'Fully licensed & insured'],
    accent: '#1a8fbf',
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* ── Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">What I Offer</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Services</h1>
          <div className="section-divider mt-4" />
          <p className="text-[#7a99b8] text-sm sm:text-base mt-4 max-w-xl">
            Professional aerial solutions tailored to your project. All services performed by an FAA Part 107 licensed, fully insured operator.
          </p>
        </div>
      </section>

      {/* ── Services Grid */}
      <section className="py-16 sm:py-20 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="bg-[#0d1628] border border-[#0d3d54] rounded-xl overflow-hidden hover:border-opacity-60 transition-all group flex flex-col"
                  style={{ ['--hover-border' as string]: svc.accent }}
                >
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)` }}
                  />

                  <div className="p-7 flex flex-col flex-1">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                      style={{ background: `${svc.accent}15`, border: `1px solid ${svc.accent}30` }}
                    >
                      <Icon size={22} style={{ color: svc.accent }} />
                    </div>

                    <h3 className="text-white font-black text-xl mb-1 group-hover:text-[#1a8fbf] transition-colors">
                      {svc.title}
                    </h3>
                    <div className="text-xs font-medium mb-4" style={{ color: svc.accent }}>
                      {svc.tagline}
                    </div>

                    <p className="text-[#7a99b8] text-sm leading-relaxed mb-5 flex-1">
                      {svc.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#7a99b8]">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: svc.accent }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-[#0d3d54] pt-4 mt-auto flex items-center justify-between">
                      <div>
                        <div className="text-[#1a4a5c] text-xs">Starting from</div>
                        <div className="text-white font-bold text-lg">— / project</div>
                      </div>
                      <Link
                        href="/contact"
                        className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#e8701a] border border-[#e8701a]/30 rounded hover:bg-[#e8701a] hover:text-white hover:border-[#e8701a] transition-all"
                      >
                        Book
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Custom Work Banner */}
      <section className="py-16 bg-[#0a1220] border-t border-[#0d3d54]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Need Something Custom?
          </h2>
          <p className="text-[#7a99b8] text-sm sm:text-base mb-7 max-w-lg mx-auto">
            Every project is different. Reach out to discuss your specific needs — package pricing and custom flight plans are available.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#e8701a] text-white text-sm font-bold rounded hover:bg-[#f4952a] transition-all glow-blue tracking-wide"
          >
            Get a Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

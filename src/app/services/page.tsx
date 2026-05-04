import Link from 'next/link';
import { Camera, Home, Video, Compass, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  tagline: string;
  features: string[];
  accent: string;
}

const services: Service[] = [
  {
    icon: Compass,
    title: 'Landscape Photography',
    tagline: 'Capturing California\'s terrain from coastal cliffs to mountainline ridges',
    features: ['4K aerial stills', 'Golden hour shoots', 'RAW file delivery', 'Print-ready resolution'],
    accent: '#e8701a',
  },
  {
    icon: Home,
    title: 'Real Estate Photography',
    tagline: 'Exterior aerial stills',
    features: ['MLS-ready delivery', '24–48 hr turnaround', 'Virtual tour support'],
    accent: '#1a8fbf',
  },
  {
    icon: Video,
    title: 'Aerial Videography',
    tagline: 'Cinematic motion from the sky',
    features: ['4K / 6K video', 'Color graded delivery', 'Cinematic LUT styling', 'Custom music sync'],
    accent: '#e8701a',
  },
  {
    icon: Camera,
    title: 'Events Coverage',
    tagline: 'Capturing memorable events',
    features: ['In-progress', 'Part 107 rules followed strictly in this domain'],
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
                  className="bg-[#0d1628] border border-[#0d3d54] rounded-xl overflow-hidden transition-all group flex flex-col"
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
                    <div className="text-xs font-medium mb-5" style={{ color: svc.accent }}>
                      {svc.tagline}
                    </div>

                    <ul className="space-y-2 mb-6 flex-1">
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

                    <div className="border-t border-[#0d3d54] pt-4 mt-auto">
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold border rounded transition-all"
                        style={{
                          color: svc.accent,
                          borderColor: `${svc.accent}40`,
                        } as React.CSSProperties}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = svc.accent;
                          (e.currentTarget as HTMLElement).style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                          (e.currentTarget as HTMLElement).style.color = svc.accent;
                        }}
                      >
                        Contact for Pricing
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

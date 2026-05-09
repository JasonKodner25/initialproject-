import Link from 'next/link';
import { Camera, Home, Video, Compass, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  tagline: string;
  features: string[];
  accent: 'orange' | 'blue';
}

const services: Service[] = [
  {
    icon: Compass,
    title: 'Landscape Photography',
    tagline: 'Capturing California\'s terrain from coastal cliffs to mountainline ridges',
    features: ['4K aerial stills', 'Golden hour shoots', 'RAW file delivery', 'Print-ready resolution'],
    accent: 'orange',
  },
  {
    icon: Home,
    title: 'Real Estate Photography',
    tagline: 'Exterior aerial stills',
    features: ['MLS-ready delivery', '24–48 hr turnaround', 'Virtual tour support'],
    accent: 'blue',
  },
  {
    icon: Video,
    title: 'Aerial Videography',
    tagline: 'Cinematic motion from the sky',
    features: ['4K / 6K video', 'Color graded delivery', 'Cinematic LUT styling', 'Custom music sync'],
    accent: 'orange',
  },
  {
    icon: Camera,
    title: 'Events Coverage',
    tagline: 'Capturing memorable events',
    features: ['In-progress', 'Part 107 rules followed strictly in this domain'],
    accent: 'blue',
  },
];

const accentStyles = {
  orange: {
    bar: 'from-[#e8701a]',
    iconBg: 'bg-[#e8701a]/10 border-[#e8701a]/30',
    iconColor: 'text-[#e8701a]',
    tagline: 'text-[#e8701a]',
    dot: 'bg-[#e8701a]',
    btn: 'text-[#e8701a] border-[#e8701a]/40 hover:bg-[#e8701a] hover:text-white hover:border-[#e8701a]',
  },
  blue: {
    bar: 'from-[#1a8fbf]',
    iconBg: 'bg-[#1a8fbf]/10 border-[#1a8fbf]/30',
    iconColor: 'text-[#1a8fbf]',
    tagline: 'text-[#1a8fbf]',
    dot: 'bg-[#1a8fbf]',
    btn: 'text-[#1a8fbf] border-[#1a8fbf]/40 hover:bg-[#1a8fbf] hover:text-white hover:border-[#1a8fbf]',
  },
};

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
              const s = accentStyles[svc.accent];
              return (
                <div
                  key={svc.title}
                  className="bg-[#0d1628] border border-[#0d3d54] rounded-xl overflow-hidden transition-all group flex flex-col"
                >
                  <div className={`h-1 w-full bg-gradient-to-r ${s.bar} to-transparent`} />

                  <div className="p-7 flex flex-col flex-1">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 border ${s.iconBg}`}>
                      <Icon size={22} className={s.iconColor} />
                    </div>

                    <h3 className="text-white font-black text-xl mb-1 group-hover:text-[#1a8fbf] transition-colors">
                      {svc.title}
                    </h3>
                    <div className={`text-xs font-medium mb-5 ${s.tagline}`}>
                      {svc.tagline}
                    </div>

                    <ul className="space-y-2 mb-6 flex-1">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#7a99b8]">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot}`} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-[#0d3d54] pt-4 mt-auto">
                      <Link
                        href="/contact"
                        className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold border rounded transition-all ${s.btn}`}
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Need Something Custom?</h2>
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

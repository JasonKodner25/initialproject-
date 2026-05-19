import Link from 'next/link';
import { Camera, Home, Video, Mountain, ArrowRight, Aperture, Clapperboard } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Kodner Aerial Services',
  description: 'Drone photography and videography services — landscape, real estate, aerial video, and events coverage. FAA Part 107 certified, Bay Area.',
};

const realEstateServices = [
  {
    icon: Aperture,
    medium: 'Photography',
    tagline: 'Aerial stills that make listings stand out',
    features: [
      'MLS-ready delivery',
      'Nadir, elevated lot, and facade angles',
      '24–48 hr turnaround',
      'RAW + edited file delivery',
    ],
  },
  {
    icon: Clapperboard,
    medium: 'Videography',
    tagline: 'Cinematic property footage from the sky',
    features: [
      '4K aerial video',
      'Facade approaches, driveway reveals, orbitals',
      'Color graded delivery',
      'Custom music sync available',
    ],
  },
];

const landscapeServices = [
  {
    icon: Aperture,
    medium: 'Photography',
    tagline: "California's terrain from coastal cliffs to mountain ridges",
    features: [
      '4K aerial stills',
      'Golden hour & blue hour shoots',
      'RAW file delivery',
      'Print-ready resolution',
    ],
  },
  {
    icon: Clapperboard,
    medium: 'Videography',
    tagline: 'Sweeping cinematic sequences over natural terrain',
    features: [
      '4K / 6K aerial video',
      'Orbitals, hyperlapses, flyovers',
      'Color graded with cinematic LUTs',
      'Custom music sync available',
    ],
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

      {/* ── Real Estate */}
      <section className="py-16 bg-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#1a8fbf]/10 border border-[#1a8fbf]/20 flex items-center justify-center">
              <Home size={20} className="text-[#1a8fbf]" />
            </div>
            <div>
              <div className="text-[#1a8fbf] text-xs tracking-[0.3em] uppercase font-semibold">Listings & Properties</div>
              <h2 className="text-2xl font-black text-white">Real Estate</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {realEstateServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.medium} className="bg-[#0d1628] border border-[#0d3d54] rounded-xl overflow-hidden flex flex-col group hover:border-[#1a8fbf]/50 transition-all">
                  <div className="h-1 w-full bg-gradient-to-r from-[#1a8fbf] to-transparent" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 border bg-[#1a8fbf]/10 border-[#1a8fbf]/30">
                      <Icon size={22} className="text-[#1a8fbf]" />
                    </div>
                    <h3 className="text-white font-black text-xl mb-1">Real Estate {svc.medium}</h3>
                    <div className="text-[#1a8fbf] text-xs font-medium mb-5">{svc.tagline}</div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#7a99b8]">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#1a8fbf]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-[#0d3d54] pt-4 mt-auto">
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold border rounded transition-all text-[#1a8fbf] border-[#1a8fbf]/40 hover:bg-[#1a8fbf] hover:text-white"
                      >
                        Contact for Pricing <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Landscape */}
      <section className="py-16 bg-[#05080f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#e8701a]/10 border border-[#e8701a]/20 flex items-center justify-center">
              <Mountain size={20} className="text-[#e8701a]" />
            </div>
            <div>
              <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-semibold">Nature & Terrain</div>
              <h2 className="text-2xl font-black text-white">Landscape</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {landscapeServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.medium} className="bg-[#0d1628] border border-[#3d2010] rounded-xl overflow-hidden flex flex-col group hover:border-[#e8701a]/50 transition-all">
                  <div className="h-1 w-full bg-gradient-to-r from-[#e8701a] to-transparent" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 border bg-[#e8701a]/10 border-[#e8701a]/30">
                      <Icon size={22} className="text-[#e8701a]" />
                    </div>
                    <h3 className="text-white font-black text-xl mb-1">Landscape {svc.medium}</h3>
                    <div className="text-[#e8701a] text-xs font-medium mb-5">{svc.tagline}</div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#7a99b8]">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#e8701a]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-[#3d2010] pt-4 mt-auto">
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold border rounded transition-all text-[#e8701a] border-[#e8701a]/40 hover:bg-[#e8701a] hover:text-white"
                      >
                        Contact for Pricing <ArrowRight size={12} />
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
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

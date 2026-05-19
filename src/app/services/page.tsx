import Link from 'next/link';
import { Home, Mountain, ArrowRight, Aperture, Clapperboard, CalendarClock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Kodner Aerial Services',
  description: 'Drone photography and videography services — landscape, real estate, and events. FAA Part 107 certified, Bay Area.',
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
      <section className="py-16 bg-[#05080f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Real Estate */}
            <div className="bg-[#0d1628] border border-[#0d3d54] rounded-xl overflow-hidden flex flex-col group hover:border-[#1a8fbf]/50 transition-all">
              <div className="h-1 w-full bg-gradient-to-r from-[#1a8fbf] to-transparent" />
              <div className="p-7 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 border bg-[#1a8fbf]/10 border-[#1a8fbf]/30">
                  <Home size={22} className="text-[#1a8fbf]" />
                </div>
                <h3 className="text-white font-black text-xl mb-1">Real Estate</h3>
                <div className="text-[#1a8fbf] text-xs font-medium mb-6">Listings &amp; Properties</div>

                <div className="space-y-5 flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Aperture size={12} className="text-[#1a8fbf]" />
                      <span className="text-[#1a8fbf] text-[10px] font-bold uppercase tracking-widest">Photography</span>
                    </div>
                    <ul className="space-y-1.5">
                      {['MLS-ready delivery', '24–48 hr turnaround', 'RAW + edited files'].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#7a99b8]">
                          <div className="w-1 h-1 rounded-full flex-shrink-0 bg-[#1a8fbf]" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clapperboard size={12} className="text-[#1a8fbf]" />
                      <span className="text-[#1a8fbf] text-[10px] font-bold uppercase tracking-widest">Videography</span>
                    </div>
                    <ul className="space-y-1.5">
                      {['4K aerial video', 'Color graded delivery', 'Custom music sync available'].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#7a99b8]">
                          <div className="w-1 h-1 rounded-full flex-shrink-0 bg-[#1a8fbf]" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-[#0d3d54] pt-4 mt-6">
                  <Link href="/contact" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold border rounded transition-all text-[#1a8fbf] border-[#1a8fbf]/40 hover:bg-[#1a8fbf] hover:text-white">
                    Contact for Pricing <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Landscape */}
            <div className="bg-[#0d1628] border border-[#3d2010] rounded-xl overflow-hidden flex flex-col group hover:border-[#e8701a]/50 transition-all">
              <div className="h-1 w-full bg-gradient-to-r from-[#e8701a] to-transparent" />
              <div className="p-7 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 border bg-[#e8701a]/10 border-[#e8701a]/30">
                  <Mountain size={22} className="text-[#e8701a]" />
                </div>
                <h3 className="text-white font-black text-xl mb-1">Landscape</h3>
                <div className="text-[#e8701a] text-xs font-medium mb-6">Nature &amp; Terrain</div>

                <div className="space-y-5 flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Aperture size={12} className="text-[#e8701a]" />
                      <span className="text-[#e8701a] text-[10px] font-bold uppercase tracking-widest">Photography</span>
                    </div>
                    <ul className="space-y-1.5">
                      {['Golden hour &amp; blue hour shoots', 'RAW + edited files', 'Print-ready resolution'].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#7a99b8]">
                          <div className="w-1 h-1 rounded-full flex-shrink-0 bg-[#e8701a]" /><span dangerouslySetInnerHTML={{ __html: f }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clapperboard size={12} className="text-[#e8701a]" />
                      <span className="text-[#e8701a] text-[10px] font-bold uppercase tracking-widest">Videography</span>
                    </div>
                    <ul className="space-y-1.5">
                      {['4K / 6K aerial video', 'Color graded with cinematic LUTs', 'Custom music sync available'].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#7a99b8]">
                          <div className="w-1 h-1 rounded-full flex-shrink-0 bg-[#e8701a]" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-[#3d2010] pt-4 mt-6">
                  <Link href="/contact" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold border rounded transition-all text-[#e8701a] border-[#e8701a]/40 hover:bg-[#e8701a] hover:text-white">
                    Contact for Pricing <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Events Coverage */}
            <div className="bg-[#0d1628] border border-[#0d3d54] rounded-xl overflow-hidden flex flex-col opacity-70">
              <div className="h-1 w-full bg-gradient-to-r from-[#7a99b8]/40 to-transparent" />
              <div className="p-7 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 border bg-[#7a99b8]/10 border-[#7a99b8]/20">
                  <CalendarClock size={22} className="text-[#7a99b8]" />
                </div>
                <h3 className="text-white font-black text-xl mb-1">Events Coverage</h3>
                <div className="text-[#7a99b8] text-xs font-medium mb-6">Aerial photo &amp; video for live events</div>

                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block px-3 py-1.5 bg-[#7a99b8]/10 border border-[#7a99b8]/20 rounded text-[#7a99b8] text-xs font-bold tracking-widest uppercase mb-3">
                      In Progress
                    </div>
                    <p className="text-[#4a6a80] text-xs leading-relaxed">
                      This service is currently being developed. Check back soon.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#0d3d54] pt-4 mt-6">
                  <Link href="/contact" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold border rounded transition-all text-[#7a99b8] border-[#7a99b8]/30 hover:bg-[#7a99b8]/10">
                    Get Notified <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

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
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#e8701a] text-white text-sm font-bold rounded hover:bg-[#f4952a] transition-all glow-blue tracking-wide">
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

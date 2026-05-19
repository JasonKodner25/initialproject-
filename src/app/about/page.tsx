import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Kodner Aerial Services',
  description: 'Learn about Jason Kodner — Bay Area drone pilot, FAA Part 107 certified, and Aviation Management graduate from San José State University.',
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* ── Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white">About Me</h1>
        </div>
      </section>

      {/* ── Profile Section */}
      <section className="py-20 bg-[#05080f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: stacked photos */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl border-2 border-[#0d3d54] overflow-hidden bg-[#0d1628]">
                <Image
                  src="/withdrone.webp"
                  alt="Jason Kodner"
                  width={600}
                  height={900}
                  className="w-full h-auto object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e8701a] rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#1a8fbf] rounded-br-2xl" />
              </div>
              <div className="relative aspect-[16/9] rounded-xl border border-[#0d3d54] overflow-hidden bg-[#0d1628]">
                <Image src="/DSC00720.webp" alt="Jason Kodner" fill loading="lazy" className="object-cover" />
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#e8701a] rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#1a8fbf] rounded-br-xl" />
              </div>
            </div>

            {/* Right: text */}
            <div className="flex flex-col gap-7">
              <div>
                <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-2">My Story</div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">Jason Kodner</h2>
                <div className="text-[#1a8fbf] text-sm font-medium mb-5">Founder &amp; Lead Pilot</div>
              </div>

              <p className="text-[#7a99b8] text-sm sm:text-base leading-relaxed">
                Hello! My name is Jason Kodner, a Bay Area native and Aviation Management graduate from San José State University. Aviation has always been a central passion of mine, from flying fixed-wing aircraft to following the rapid advancement of autonomous flight. That passion naturally led me to aerial photography and videography, where I enjoy combining aviation and visual storytelling to capture scenes from perspectives that are possible from above.
              </p>

              <p className="text-[#7a99b8] text-sm sm:text-base leading-relaxed">
                Outside of aviation, I enjoy playing ice hockey, mountain biking, and spending as much time outdoors as possible. I have a deep appreciation for nature and the unique landscapes that continue to inspire both my work and my perspective of the world!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Mission Statement */}
      <section className="py-20 bg-[#0a1220] border-y border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-3xl mx-auto bg-[#0d1628] border border-[#0d3d54] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-4 left-6 text-[#1a8fbf]/10 text-[8rem] font-serif leading-none select-none">&ldquo;</div>
              <div className="relative">
                <p className="text-white text-lg sm:text-xl leading-relaxed italic font-light mb-6">
                  Elevating the role of aerial imaging today, while preparing for a future shaped by autonomous flight.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-[2px] bg-[#e8701a]" />
                  <span className="text-[#e8701a] text-sm font-semibold tracking-wide">Jason Kodner</span>
                  <div className="w-10 h-[2px] bg-[#1a8fbf]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

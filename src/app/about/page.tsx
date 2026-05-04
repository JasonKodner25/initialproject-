import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* ── Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">Get to Know Me</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">About Me</h1>
          <div className="section-divider mt-4" />
        </div>
      </section>

      {/* ── Profile Section */}
      <section className="py-20 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT — portrait photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-72 sm:w-96 aspect-[3/4] rounded-2xl border-2 border-[#0d3d54] overflow-hidden bg-[#0d1628]">
                <Image src="/kodneraboutme.JPG" alt="Jason Kodner" fill className="object-cover" priority />
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e8701a] rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#1a8fbf] rounded-br-2xl" />
              </div>
            </div>

            {/* RIGHT — name, bio, cessna photo */}
            <div className="flex flex-col gap-7">
              {/* Name + tags */}
              <div>
                <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-2">My Story</div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">Jason Kodner</h2>
                <div className="text-[#1a8fbf] text-sm font-medium mb-4">Founder &amp; Lead Pilot</div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['FAA Part 107', 'Private Pilot', 'Fully Insured'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#1a8fbf]/10 border border-[#1a8fbf]/30 text-[#1a8fbf] text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="section-divider" />
              </div>

              {/* Bio */}
              <p className="text-[#7a99b8] text-sm sm:text-base leading-relaxed">
                Hello! My name is Jason Kodner, a Bay Area native and Aviation Management graduate from
                San Jose State University. I am deeply fascinated by several domains of aviation,
                including aircraft design, propulsion systems, real-world operations, and the rapidly
                evolving world of autonomous flight. I hold both a Private Pilot Certificate and a
                Part 107 Remote Pilot Certificate, and I am driven by a long-term goal of contributing
                meaningfully to the future of autonomous aviation.
              </p>

              {/* Cessna photo */}
              <div className="relative w-full aspect-[16/9] rounded-xl border border-[#0d3d54] overflow-hidden bg-[#0d1628]">
                <Image src="/aboutmepart2.jpg" alt="Jason Kodner in front of a Cessna 172" fill className="object-cover" />
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#e8701a] rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#1a8fbf] rounded-br-xl" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Mission Statement */}
      <section className="py-20 bg-[#0a1220] border-y border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">What Drives Me</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">My Passion for Aviation</h2>
            <div className="section-divider mx-auto mb-8" />
            <div className="max-w-3xl mx-auto bg-[#0d1628] border border-[#0d3d54] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-4 left-6 text-[#1a8fbf]/10 text-[8rem] font-serif leading-none select-none">&ldquo;</div>
              <div className="relative">
                <p className="text-white text-lg sm:text-xl leading-relaxed italic font-light mb-6">
                  [Mission statement placeholder — write a powerful, personal statement about why you are passionate about aerial photography and aviation.]
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

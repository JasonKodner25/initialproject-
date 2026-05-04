import Link from 'next/link';
import { ExternalLink, Camera, Video, Play } from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.6 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.3 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.3 2.7 23.7 7.1 23.9 8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
  </svg>
);

const posts = [
  { icon: Camera, label: 'Aerial Photography', desc: 'High-resolution stills from every shoot — landscapes, real estate, events, and more.' },
  { icon: Video,  label: 'Short Videos',       desc: 'Vertical reels and cinematic clips from flights across the Bay Area and beyond.' },
  { icon: Play,   label: 'Behind the Scenes',  desc: 'Flight prep, locations, and a look at how the shots come together.' },
];

export default function MediaPage() {
  return (
    <main className="pt-20">
      {/* ── Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">Follow Along</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Media</h1>
          <div className="section-divider mt-4" />
          <p className="text-[#7a99b8] text-sm sm:text-base mt-4 max-w-xl">
            Photos and short videos from every flight, posted on Instagram.
          </p>
        </div>
      </section>

      {/* ── Instagram CTA */}
      <section className="py-20 sm:py-28 bg-[#05080f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0d1628] border border-[#0d3d54] rounded-2xl p-10 sm:p-14 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e8701a] to-[#1a8fbf] flex items-center justify-center mb-6 shadow-lg">
              <InstagramIcon />
            </div>
            <div className="text-[#7a99b8] text-sm uppercase tracking-widest mb-2">Instagram</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">@kodner.aerial</h2>
            <div className="section-divider mx-auto my-5" />
            <p className="text-[#7a99b8] text-sm sm:text-base leading-relaxed max-w-lg mb-8">
              Aerial photos and short vertical videos from shoots across the Bay Area and California.
              Follow along for the latest work straight from the drone.
            </p>
            <a
              href="https://www.instagram.com/kodner.aerial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#e8701a] text-white font-bold rounded hover:bg-[#f4952a] transition-all glow-blue tracking-wide text-sm"
            >
              <InstagramIcon />
              Follow on Instagram
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── What I Post */}
      <section className="py-20 bg-[#0a1220] border-t border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#1a8fbf] text-xs tracking-[0.3em] uppercase font-medium mb-3">What to Expect</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">What I Post</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {posts.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-[#0d1628] border border-[#0d3d54] rounded-xl p-7 text-center hover:border-[#1a8fbf]/50 transition-all group">
                <div className="w-12 h-12 bg-[#1a8fbf]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a8fbf]/20 transition-colors">
                  <Icon size={22} className="text-[#1a8fbf]" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{label}</h3>
                <p className="text-[#7a99b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="py-14 bg-[#05080f] border-t border-[#0d3d54]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#7a99b8] text-sm sm:text-base font-bold mb-5">
            Want your project featured? Get in touch and let&apos;s make something worth posting.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-[#e8701a] text-white text-sm font-bold rounded hover:bg-[#f4952a] transition-all glow-blue tracking-wide">
            Book a Shoot
          </Link>
        </div>
      </section>
    </main>
  );
}

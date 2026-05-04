import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.6 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.3 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.3 2.7 23.7 7.1 23.9 8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M23.5 6.2s-.3-1.9-1.1-2.7c-1-.8-2.1-.8-2.6-.9C16.8 2.4 12 2.4 12 2.4s-4.8 0-7.8.2c-.5.1-1.6.1-2.6.9C.8 4.3.5 6.2.5 6.2S.2 8.3.2 10.5v2c0 2.2.3 4.3.3 4.3s.3 1.9 1.1 2.7c1 .8 2.3.8 2.9.9C6.3 20.6 12 20.6 12 20.6s4.8 0 7.8-.2c.5-.1 1.6-.1 2.6-.9.8-.8 1.1-2.7 1.1-2.7s.3-2.1.3-4.3v-2c0-2.2-.3-4.3-.3-4.3zM9.7 15V8.6l7 3.2-7 3.2z"/>
  </svg>
);

const channels = [
  {
    Icon: InstagramIcon,
    platform: 'Instagram',
    handle: '@kodner.aerial',
    description: 'Aerial photos and short vertical videos from shoots across the Bay Area and California.',
    href: 'https://www.instagram.com/kodner.aerial/',
    gradient: 'from-[#e8701a] to-[#1a8fbf]',
    label: 'Follow on Instagram',
  },
  {
    Icon: YoutubeIcon,
    platform: 'YouTube',
    handle: '@KodnerAerial',
    description: 'Full cinematic aerial footage, flight highlights, and behind-the-scenes content.',
    href: 'https://www.youtube.com/@KodnerAerial',
    gradient: 'from-[#e8701a] to-[#c0392b]',
    label: 'Subscribe on YouTube',
  },
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
            Photos, videos, and cinematic aerial content across Instagram and YouTube.
          </p>
        </div>
      </section>

      {/* ── Channels */}
      <section className="py-24 bg-[#05080f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          {channels.map(({ Icon, platform, handle, description, href, gradient, label }) => (
            <div key={platform} className="bg-[#0d1628] border border-[#0d3d54] rounded-2xl p-10 flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg`}>
                <Icon />
              </div>
              <div className="text-[#7a99b8] text-sm uppercase tracking-widest mb-1">{platform}</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">{handle}</h2>
              <div className="section-divider mx-auto my-5" />
              <p className="text-[#7a99b8] text-sm sm:text-base leading-relaxed max-w-md mb-8">{description}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#e8701a] text-white font-bold rounded hover:bg-[#f4952a] transition-all glow-blue tracking-wide text-sm"
              >
                {label}
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA */}
      <section className="py-12 bg-[#0a1220] border-t border-[#0d3d54]">
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

import { Play, Bell, ExternalLink } from 'lucide-react';

const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M23.5 6.2s-.3-1.9-1.1-2.7c-1-.8-2.1-.8-2.6-.9C16.8 2.4 12 2.4 12 2.4s-4.8 0-7.8.2c-.5.1-1.6.1-2.6.9C.8 4.3.5 6.2.5 6.2S.2 8.3.2 10.5v2c0 2.2.3 4.3.3 4.3s.3 1.9 1.1 2.7c1 .8 2.3.8 2.9.9C6.3 20.6 12 20.6 12 20.6s4.8 0 7.8-.2c.5-.1 1.6-.1 2.6-.9.8-.8 1.1-2.7 1.1-2.7s.3-2.1.3-4.3v-2c0-2.2-.3-4.3-.3-4.3zM9.7 15V8.6l7 3.2-7 3.2z"/>
  </svg>
);

const placeholderVideos = [
  { id: 1, title: 'Coastal Aerial Tour — 4K Cinematic',     views: '—', duration: '0:00', category: 'Landscape' },
  { id: 2, title: 'Real Estate Showcase — Luxury Estate',   views: '—', duration: '0:00', category: 'Real Estate' },
  { id: 3, title: 'Construction Progress — Phase 1',        views: '—', duration: '0:00', category: 'Construction' },
  { id: 4, title: 'Drone Flying Tips for Beginners',        views: '—', duration: '0:00', category: 'Tutorial' },
  { id: 5, title: 'Sunset Mountain Range — Time Lapse',     views: '—', duration: '0:00', category: 'Landscape' },
  { id: 6, title: 'Behind the Scenes — Equipment Setup',    views: '—', duration: '0:00', category: 'BTS' },
];

export default function YoutubePage() {
  return (
    <main className="pt-20">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#1a3354]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end gap-6 justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#1a8fe3] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              <YoutubeIcon size={14} />
              <span>Video Content</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white">YouTube Channel</h1>
            <div className="section-divider mt-4" />
          </div>
          <a
            href="https://youtube.com/@kodneraerialservices"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold text-sm rounded hover:bg-red-500 transition-colors flex-shrink-0"
          >
            <YoutubeIcon size={18} />
            Subscribe on YouTube
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* ── Channel Hero / Embed Placeholder ────────────────────────── */}
      <section className="py-16 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Main embed placeholder */}
            <div className="lg:col-span-3">
              <div className="text-[#1a8fe3] text-xs tracking-[0.3em] uppercase font-medium mb-4">
                Featured Video
              </div>
              <div className="relative w-full aspect-video bg-[#0d1628] border border-[#1a3354] rounded-xl overflow-hidden flex items-center justify-center group">
                <div className="flex flex-col items-center gap-4 text-center px-6">
                  <div className="w-20 h-20 bg-red-600/20 border border-red-600/40 rounded-full flex items-center justify-center">
                    <Play size={32} className="text-red-500 ml-1" fill="currentColor" />
                  </div>
                  <div className="text-white font-semibold">YouTube Embed Placeholder</div>
                  <p className="text-[#7a99b8] text-sm max-w-sm">
                    Replace this block with your YouTube embed code. Paste the <code className="text-[#1a8fe3] bg-[#1a8fe3]/10 px-1 rounded text-xs">&lt;iframe&gt;</code> from YouTube Share → Embed here.
                  </p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#1a8fe3]/30 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#1a8fe3]/30 rounded-br-xl" />
              </div>
            </div>

            {/* Channel info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-[#0d1628] border border-[#1a3354] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-red-600/20 border border-red-600/40 rounded-full flex items-center justify-center flex-shrink-0">
                    <YoutubeIcon size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">Kodner Aerial Services</div>
                    <div className="text-[#7a99b8] text-xs">@kodneraerialservices</div>
                  </div>
                </div>

                <p className="text-[#7a99b8] text-sm leading-relaxed mb-5">
                  [Channel description placeholder — describe what viewers can expect from your channel. Talk about the types of videos you post, how often you upload, and what makes your content unique. Include any specialties like 4K cinematic drone footage, tutorials, BTS content, or local area tours.]
                </p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Subscribers', value: '—' },
                    { label: 'Total Views', value: '—' },
                    { label: 'Videos', value: '—' },
                    { label: 'Upload Frequency', value: 'Weekly' },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-[#0a1220] border border-[#1a3354] rounded-lg p-3 text-center">
                      <div className="text-white font-bold text-base">{value}</div>
                      <div className="text-[#3d5a78] text-xs mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://youtube.com/@kodneraerialservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-500 transition-colors"
                  >
                    <Bell size={15} />
                    Subscribe &amp; Hit the Bell
                  </a>
                  <a
                    href="https://youtube.com/@kodneraerialservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-[#1a3354] text-[#7a99b8] text-sm font-semibold rounded hover:border-[#1a8fe3] hover:text-white transition-all"
                  >
                    <ExternalLink size={15} />
                    Visit Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Grid ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a1220] border-t border-[#1a3354]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[#1a8fe3] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Recent Uploads
            </div>
            <h2 className="text-3xl font-black text-white">Latest Videos</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderVideos.map((video) => (
              <div
                key={video.id}
                className="bg-[#0d1628] border border-[#1a3354] rounded-xl overflow-hidden hover:border-[#1a8fe3]/40 transition-all group cursor-pointer"
              >
                {/* Thumbnail placeholder */}
                <div className="relative w-full aspect-video bg-[#0a1220] flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-[#3d5a78]">
                    <Play size={28} className="group-hover:text-red-500 transition-colors" />
                    <span className="text-xs">Video Thumbnail</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-mono">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 bg-[#1a8fe3]/20 border border-[#1a8fe3]/30 text-[#1a8fe3] text-[10px] rounded">
                      {video.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-[#1a8fe3] transition-colors">
                    {video.title}
                  </h3>
                  <div className="text-[#3d5a78] text-xs">{video.views} views</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://youtube.com/@kodneraerialservices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-500 transition-colors"
            >
              <YoutubeIcon size={18} />
              View All Videos on YouTube
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

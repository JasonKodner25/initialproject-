import { User, Target, Heart, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision',
    desc: 'Every shot is composed with care, ensuring the highest quality images and footage for your project.',
  },
  {
    icon: Heart,
    title: 'Passion',
    desc: 'Aviation and photography have been lifelong passions — that dedication shows in every frame captured.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'FAA Part 107 certified and fully insured. Operating safely and professionally on every flight.',
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#3d2010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Get to Know Me
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">About Me</h1>
          <div className="section-divider mt-4" />
        </div>
      </section>

      {/* ── Profile Section ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Profile photo placeholder */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-[#0d1628] border-2 border-[#3d2010] overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-[#4a3018]">
                  <User size={64} strokeWidth={1} />
                  <span className="text-sm">Profile Photo</span>
                  <span className="text-xs text-center px-4">Replace with your photo</span>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e8701a] rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e8701a] rounded-br-2xl" />
              </div>

              {/* Name card */}
              <div className="bg-[#0d1628] border border-[#3d2010] rounded-xl p-5 w-full max-w-sm">
                <div className="text-white font-bold text-xl mb-1">Jason Kodner</div>
                <div className="text-[#e8701a] text-sm font-medium mb-3">Founder &amp; Lead Pilot</div>
                <div className="flex flex-wrap gap-2">
                  {['FAA Part 107', 'Licensed Pilot', 'Fully Insured'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#e8701a]/10 border border-[#e8701a]/30 text-[#e8701a] text-xs rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div>
              <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                My Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
                Passion Meets Precision
              </h2>
              <div className="section-divider mb-7" />

              <div className="space-y-5 text-[#7a99b8] text-sm sm:text-base leading-relaxed">
                <p>
                  [Bio paragraph 1 — introduce yourself, your background, and how you got started in drone photography. Share your journey from first learning to fly to turning it into a professional service.]
                </p>
                <p>
                  [Bio paragraph 2 — describe your training, certifications, and professional experience. Mention any notable projects, clients, or achievements that define your work.]
                </p>
                <p>
                  [Bio paragraph 3 — share what makes your approach unique. Talk about your artistic vision, technical skills, and commitment to delivering outstanding results for every client.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Statement ────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a1220] border-y border-[#3d2010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              What Drives Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              My Passion for Aviation
            </h2>
            <div className="section-divider mx-auto mb-8" />

            {/* Mission block */}
            <div className="max-w-3xl mx-auto bg-[#0d1628] border border-[#3d2010] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              {/* Decorative quote mark */}
              <div className="absolute top-4 left-6 text-[#e8701a]/10 text-[8rem] font-serif leading-none select-none">
                &ldquo;
              </div>
              <div className="relative">
                <p className="text-white text-lg sm:text-xl leading-relaxed italic font-light mb-6">
                  [Mission statement placeholder — write a powerful, personal statement about why you are passionate about aerial photography and aviation. What does this work mean to you? What impact do you want to have for your clients?]
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-[2px] bg-[#e8701a]" />
                  <span className="text-[#e8701a] text-sm font-semibold tracking-wide">Jason Kodner</span>
                  <div className="w-10 h-[2px] bg-[#e8701a]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Core Values
            </div>
            <h2 className="text-3xl font-black text-white">How I Work</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#0d1628] border border-[#3d2010] rounded-xl p-8 text-center hover:border-[#e8701a]/50 transition-all group"
              >
                <div className="w-14 h-14 bg-[#e8701a]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#e8701a]/20 transition-colors">
                  <Icon size={26} className="text-[#e8701a]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-[#7a99b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

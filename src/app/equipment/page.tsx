import Image from 'next/image';
import { Camera, Cpu, Radio, Shield, Video } from 'lucide-react';

type EquipCategory = 'Drone' | 'Camera' | 'Accessory' | 'Software';

interface SpecGroup {
  title: string;
  specs: string[];
}

interface EquipItem {
  id: number;
  name: string;
  category: EquipCategory;
  description: string;
  icon: React.ElementType;
  specs: string[];
  specGroups?: SpecGroup[];
  src?: string;
  badges?: string[];
}

const equipment: EquipItem[] = [
  {
    id: 1,
    name: 'DJI Air 3S',
    category: 'Drone',
    description:
      'The primary flight platform for Kodner Aerial Services. Omnidirectional obstacle detection ensures safe, confident operation in complex environments.',
    icon: Radio,
    src: '/air3s.webp',
    badges: ['4K Video', 'Obstacle Detection'],
    specs: [],
    specGroups: [
      {
        title: 'Aircraft',
        specs: [
          'Max Speed: 47 mph (60 mph w/ tailwind)',
          'Ascent / Descent: 22 mph',
          'Max Altitude: 19,700 ft (6,000 m)',
          'Flight Time: 41 min / ~2 hrs (3 batteries)',
          'Max Range: 19.8 miles (32 km)',
          'GPS: GPS + Galileo + BeiDou',
          'Onboard Storage: 42 GB',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Primary Camera System',
    category: 'Camera',
    description:
      'Dual-lens imaging system integrated into the DJI Air 3S — a 1-inch CMOS wide sensor paired with a 1/1.3-inch tele sensor, delivering 50 MP stills and cinema-quality 4K/6K video.',
    icon: Camera,
    src: '/djicamera.jpg',
    specs: [],
    specGroups: [
      {
        title: 'Camera',
        specs: [
          'Wide: 1" CMOS · 50 MP · 24mm f/1.8',
          'Tele: 1/1.3" CMOS · 48 MP · 70mm f/2.8',
          'Wide FOV: 84° · Focus: 0.5 m – ∞',
          'Tele FOV: 35° · Focus: 3 m – ∞',
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Remote Controller',
    category: 'Accessory',
    description:
      'DJI Air 3S extended-range controller providing real-time HD monitoring and precise aircraft control.',
    icon: Cpu,
    src: '/djiremote.jpg',
    specGroups: [
      {
        title: 'Display & Storage',
        specs: [
          'Built-in 5.5-inch 1080p touchscreen',
          '32 GB onboard storage',
        ],
      },
      {
        title: 'Power',
        specs: [
          'Battery life: up to 3 hours',
          'Charge time: 1.5 hours',
        ],
      },
      {
        title: 'Transmission',
        specs: [
          'OcuSync 4.0 — 1080p live video @ 60 fps up to 12.4 miles',
        ],
      },
    ],
    specs: [],
  },
  {
    id: 8,
    name: 'Editing Software',
    category: 'Software',
    description:
      'DaVinci Resolve is a professional-grade color grading and video editing platform used to deliver polished, cinema-quality footage from every shoot.',
    icon: Cpu,
    src: '/davinciresolve.avif',
    specs: ['Color Grading: Yes', 'LUT Support: Yes', 'RAW Editing: Yes', 'Export: 4K+'],
  },
];

const categoryColors: Record<EquipCategory, string> = {
  Drone: 'text-[#e8701a] bg-[#e8701a]/10 border-[#e8701a]/30',
  Camera: 'text-[#f4952a] bg-[#f4952a]/10 border-[#f4952a]/30',
  Accessory: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  Software: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
};

export default function EquipmentPage() {
  return (
    <main className="pt-20">
      {/* ── Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#3d2010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">The Arsenal</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Equipment</h1>
          <div className="section-divider mt-4" />
          <p className="text-[#7a99b8] text-sm sm:text-base mt-4 max-w-xl">
            Professional-grade gear for professional results. Every job uses the right tools for the mission.
          </p>
        </div>
      </section>

      {/* ── Category Legend */}
      <section className="py-6 bg-[#0a1220] border-b border-[#3d2010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
          {(Object.keys(categoryColors) as EquipCategory[]).map((cat) => (
            <span key={cat} className={`px-3 py-1.5 border rounded text-xs font-semibold ${categoryColors[cat]}`}>
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ── Equipment Grid */}
      <section className="py-16 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {equipment.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-[#0d1628] border border-[#3d2010] rounded-xl overflow-hidden hover:border-[#e8701a]/40 transition-all group flex flex-col"
                >
                  {/* Photo */}
                  <div className="relative w-full aspect-[4/3] bg-[#0a1220] border-b border-[#3d2010] flex flex-col items-center justify-center gap-2 overflow-hidden">
                    {item.src ? (
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    ) : (
                      <>
                        <Icon size={36} strokeWidth={1.5} className="text-[#4a3018] group-hover:text-[#e8701a] transition-colors" />
                        <span className="text-[#4a3018] text-xs">Equipment Photo</span>
                      </>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-0.5 border rounded text-[10px] font-semibold ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                    </div>
                    {item.badges && (
                      <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                        {item.badges.map((badge) => (
                          <span
                            key={badge}
                            className="flex items-center gap-1 px-2 py-0.5 bg-[#05080f]/80 backdrop-blur-sm border border-[#e8701a]/40 text-[#e8701a] text-[10px] rounded font-semibold"
                          >
                            {badge === '4K Video' && <Video size={10} />}
                            {badge === 'Obstacle Detection' && <Shield size={10} />}
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#e8701a] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[#7a99b8] text-xs leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.specGroups ? (
                      <div className="space-y-4 mt-auto">
                        {item.specGroups.map((group) => (
                          <div key={group.title}>
                            <div className="text-[#e8701a] text-[10px] font-bold uppercase tracking-widest mb-2">
                              {group.title}
                            </div>
                            <div className="space-y-1.5">
                              {group.specs.map((spec) => (
                                <div key={spec} className="flex items-start gap-2 text-xs">
                                  <div className="w-1 h-1 bg-[#e8701a] rounded-full flex-shrink-0 mt-1.5" />
                                  <span className="text-[#7a99b8]">{spec}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1.5 mt-auto">
                        {item.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2 text-xs">
                            <div className="w-1 h-1 bg-[#e8701a] rounded-full flex-shrink-0" />
                            <span className="text-[#7a99b8]">{spec}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="py-16 bg-[#0a1220] border-t border-[#3d2010]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            The Right Tool for Every Shot
          </h2>
          <p className="text-[#7a99b8] text-sm sm:text-base mb-7">
            Professional equipment is only part of the equation. Experience, creativity, and safety make all the difference.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#e8701a] text-white text-sm font-bold rounded hover:bg-[#f4952a] transition-all glow-blue tracking-wide"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </main>
  );
}

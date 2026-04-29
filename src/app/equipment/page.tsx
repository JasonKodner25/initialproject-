import { Camera, Cpu, Radio, Battery, Package } from 'lucide-react';

type EquipCategory = 'Drone' | 'Camera' | 'Accessory' | 'Software';

interface EquipItem {
  id: number;
  name: string;
  category: EquipCategory;
  description: string;
  icon: React.ElementType;
  specs: string[];
}

const equipment: EquipItem[] = [
  {
    id: 1,
    name: 'Primary Drone',
    category: 'Drone',
    description: '[Drone name placeholder — e.g., DJI Mavic 3 Pro, Air 3, Mini 4 Pro, etc.] — describe your primary flight platform and what makes it ideal for professional aerial work.',
    icon: Radio,
    specs: ['Flight Time: — min', 'Max Range: — km', 'Wind Resistance: Level —', 'Weight: — g'],
  },
  {
    id: 2,
    name: 'Secondary / Backup Drone',
    category: 'Drone',
    description: '[Second drone placeholder] — your backup or specialized platform for specific shooting scenarios.',
    icon: Radio,
    specs: ['Flight Time: — min', 'Max Range: — km', 'Camera: — MP', 'Weight: — g'],
  },
  {
    id: 3,
    name: 'Primary Camera System',
    category: 'Camera',
    description: '[Camera name placeholder] — the imaging system mounted to your primary drone. Describe the sensor, resolution, and image quality.',
    icon: Camera,
    specs: ['Resolution: — MP / — K', 'Sensor: —', 'Aperture: f/—', 'ISO Range: —'],
  },
  {
    id: 4,
    name: 'Ground Camera',
    category: 'Camera',
    description: '[Ground camera placeholder — e.g., Sony Alpha, Canon EOS, DJI Osmo Pocket] — used for ground-level and close-up photography to complement aerial shots.',
    icon: Camera,
    specs: ['Resolution: — MP', 'Video: — K / — fps', 'Lens: —', 'Stabilization: —'],
  },
  {
    id: 5,
    name: 'Intelligent Batteries',
    category: 'Accessory',
    description: '[Battery system placeholder] — high-capacity intelligent flight batteries that extend your operational window on-site.',
    icon: Battery,
    specs: ['Capacity: — mAh', 'Voltage: — V', 'Charge Time: — min', 'Quantity: — units'],
  },
  {
    id: 6,
    name: 'Remote Controller',
    category: 'Accessory',
    description: '[Controller placeholder] — extended-range controller providing real-time HD monitoring and precise aircraft control.',
    icon: Cpu,
    specs: ['Display: — inch', 'Range: — km', 'Battery: — min', 'Transmission: —'],
  },
  {
    id: 7,
    name: 'ND Filter Kit',
    category: 'Accessory',
    description: '[Filter kit placeholder] — neutral density filters essential for maintaining correct exposure and motion blur in varying lighting conditions.',
    icon: Package,
    specs: ['ND4, ND8, ND16, ND32', 'Polarized options', 'Material: —', 'Compatibility: —'],
  },
  {
    id: 8,
    name: 'Editing Software',
    category: 'Software',
    description: '[Software placeholder — e.g., Adobe Premiere Pro, DaVinci Resolve, Lightroom] — professional post-processing pipeline for color grading and final delivery.',
    icon: Cpu,
    specs: ['Color Grading: Yes', 'LUT Support: Yes', 'RAW Editing: Yes', 'Export: 4K+'],
  },
];

const categoryColors: Record<EquipCategory, string> = {
  Drone: 'text-[#1a8fe3] bg-[#1a8fe3]/10 border-[#1a8fe3]/30',
  Camera: 'text-[#f97316] bg-[#f97316]/10 border-[#f97316]/30',
  Accessory: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  Software: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
};

export default function EquipmentPage() {
  return (
    <main className="pt-20">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#1a3354]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#1a8fe3] text-xs tracking-[0.3em] uppercase font-medium mb-3">The Arsenal</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Equipment</h1>
          <div className="section-divider mt-4" />
          <p className="text-[#7a99b8] text-sm sm:text-base mt-4 max-w-xl">
            Professional-grade gear for professional results. Every job uses the right tools for the mission.
          </p>
        </div>
      </section>

      {/* ── Category Legend ──────────────────────────────────────────── */}
      <section className="py-6 bg-[#0a1220] border-b border-[#1a3354]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
          {(Object.keys(categoryColors) as EquipCategory[]).map((cat) => (
            <span
              key={cat}
              className={`px-3 py-1.5 border rounded text-xs font-semibold ${categoryColors[cat]}`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ── Equipment Grid ───────────────────────────────────────────── */}
      <section className="py-16 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {equipment.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-[#0d1628] border border-[#1a3354] rounded-xl overflow-hidden hover:border-[#1a8fe3]/40 transition-all group flex flex-col"
                >
                  {/* Photo placeholder */}
                  <div className="relative w-full aspect-[4/3] bg-[#0a1220] border-b border-[#1a3354] flex flex-col items-center justify-center gap-2">
                    <Icon
                      size={36}
                      strokeWidth={1.5}
                      className="text-[#3d5a78] group-hover:text-[#1a8fe3] transition-colors"
                    />
                    <span className="text-[#3d5a78] text-xs">Equipment Photo</span>
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-0.5 border rounded text-[10px] font-semibold ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#1a8fe3] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[#7a99b8] text-xs leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>

                    {/* Specs */}
                    <div className="space-y-1.5 mt-auto">
                      {item.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-xs">
                          <div className="w-1 h-1 bg-[#1a8fe3] rounded-full flex-shrink-0" />
                          <span className="text-[#7a99b8]">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a1220] border-t border-[#1a3354]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            The Right Tool for Every Shot
          </h2>
          <p className="text-[#7a99b8] text-sm sm:text-base mb-7">
            Professional equipment is only part of the equation. Experience, creativity, and safety make all the difference.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#1a8fe3] text-white text-sm font-bold rounded hover:bg-[#38bdf8] transition-all glow-blue tracking-wide"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </main>
  );
}

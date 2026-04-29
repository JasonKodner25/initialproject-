'use client';

import { useState } from 'react';
import { Camera, X } from 'lucide-react';

type Category = 'All' | 'Landscape' | 'Real Estate' | 'Construction' | 'Events' | 'Wildlife';

const categories: Category[] = ['All', 'Landscape', 'Real Estate', 'Construction', 'Events', 'Wildlife'];

const placeholderItems: { id: number; category: Exclude<Category, 'All'>; label: string; aspect: string }[] = [
  { id: 1,  category: 'Landscape',   label: 'Mountain Vista',         aspect: 'aspect-[4/3]' },
  { id: 2,  category: 'Real Estate', label: 'Luxury Home Exterior',   aspect: 'aspect-square' },
  { id: 3,  category: 'Landscape',   label: 'River Valley Sunrise',   aspect: 'aspect-[16/9]' },
  { id: 4,  category: 'Construction',label: 'Commercial Site Survey', aspect: 'aspect-[4/3]' },
  { id: 5,  category: 'Real Estate', label: 'Lakefront Property',     aspect: 'aspect-[3/4]' },
  { id: 6,  category: 'Events',      label: 'Outdoor Wedding',        aspect: 'aspect-[4/3]' },
  { id: 7,  category: 'Landscape',   label: 'Autumn Forest',          aspect: 'aspect-square' },
  { id: 8,  category: 'Wildlife',    label: 'Coastal Shoreline',      aspect: 'aspect-[16/9]' },
  { id: 9,  category: 'Real Estate', label: 'Golf Community',         aspect: 'aspect-[4/3]' },
  { id: 10, category: 'Construction','label': 'Bridge Progress',      aspect: 'aspect-[3/4]' },
  { id: 11, category: 'Landscape',   label: 'Desert Dunes at Dusk',   aspect: 'aspect-[4/3]' },
  { id: 12, category: 'Events',      label: 'City Festival',          aspect: 'aspect-square' },
  { id: 13, category: 'Real Estate', label: 'Suburban Neighborhood',  aspect: 'aspect-[16/9]' },
  { id: 14, category: 'Wildlife',    label: 'Wetlands Panorama',      aspect: 'aspect-[3/4]' },
  { id: 15, category: 'Landscape',   label: 'Coastal Cliffs',         aspect: 'aspect-[4/3]' },
  { id: 16, category: 'Construction','label': 'High-Rise Development', aspect: 'aspect-square' },
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'All' ? placeholderItems : placeholderItems.filter((i) => i.category === active);

  return (
    <main className="pt-20">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#1a3354]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#1a8fe3] text-xs tracking-[0.3em] uppercase font-medium mb-3">Portfolio</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Gallery</h1>
          <div className="section-divider mt-4" />
          <p className="text-[#7a99b8] text-sm sm:text-base mt-4 max-w-xl">
            Aerial photography and videography across landscapes, real estate, construction sites, and beyond. Replace placeholders with your own work.
          </p>
        </div>
      </section>

      {/* ── Filter Bar ──────────────────────────────────────────────── */}
      <section className="py-8 bg-[#05080f] border-b border-[#1a3354] sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                  active === cat
                    ? 'bg-[#1a8fe3] text-white shadow-lg shadow-[#1a8fe3]/20'
                    : 'bg-[#0d1628] border border-[#1a3354] text-[#7a99b8] hover:text-white hover:border-[#1a8fe3]/50'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({placeholderItems.filter((i) => i.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Masonry Grid ────────────────────────────────────────────── */}
      <section className="py-12 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="masonry-grid">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={`masonry-item relative overflow-hidden rounded-lg bg-[#0d1628] border border-[#1a3354] cursor-pointer group hover:border-[#1a8fe3]/50 transition-all ${item.aspect}`}
                onClick={() => setLightbox(item.id)}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <Camera size={24} className="text-[#3d5a78]" />
                  <span className="text-[#3d5a78] text-xs text-center px-2">{item.label}</span>
                  <span className="text-[#1a3354] text-[10px] border border-[#1a3354] px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1a8fe3]/0 group-hover:bg-[#1a8fe3]/10 transition-all" />

                {/* Category badge */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-1 bg-[#05080f]/80 backdrop-blur-sm text-[#1a8fe3] text-[10px] rounded font-medium border border-[#1a8fe3]/30">
                    {item.category}
                  </span>
                </div>

                {/* Expand icon */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-7 h-7 bg-[#1a8fe3] rounded flex items-center justify-center">
                    <Camera size={13} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#3d5a78]">No photos in this category yet.</div>
          )}
        </div>
      </section>

      {/* ── Lightbox ────────────────────────────────────────────────── */}
      {lightbox !== null && (() => {
        const item = placeholderItems.find((i) => i.id === lightbox);
        if (!item) return null;
        return (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative bg-[#0d1628] border border-[#1a3354] rounded-2xl p-8 max-w-2xl w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 text-[#7a99b8] hover:text-white transition-colors"
              >
                <X size={22} />
              </button>
              <div className="w-full aspect-video bg-[#0a1220] border border-[#1a3354] rounded-lg flex flex-col items-center justify-center gap-3">
                <Camera size={36} className="text-[#3d5a78]" />
                <span className="text-[#3d5a78] text-sm">{item.label}</span>
                <span className="text-[#1a3354] text-xs">Replace with actual photo</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">{item.label}</div>
                <div className="text-[#1a8fe3] text-xs font-medium mt-1">{item.category}</div>
              </div>
            </div>
          </div>
        );
      })()}
    </main>
  );
}

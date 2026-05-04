'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, X, Images, Tag, ChevronLeft } from 'lucide-react';

type Category = 'All' | 'Landscape' | 'Real Estate' | 'Construction' | 'Events' | 'Wildlife';
type View = 'categories' | 'albums';

const categories: Category[] = ['All', 'Landscape', 'Real Estate', 'Construction', 'Events', 'Wildlife'];

interface GalleryItem {
  id: number;
  category: Exclude<Category, 'All'>;
  label: string;
  location?: string;
  date?: string;
  src?: string;
  aspect: string;
  album?: string;
}

const galleryItems: GalleryItem[] = [
  // Santa Cruz 4/16/26
  { id: 1,  category: 'Landscape', label: 'Natural Bridges Aerial',  location: 'Natural Bridges State Beach, Santa Cruz', date: 'April 16, 2026', src: '/DJI_20260416065653_0188_D.jpeg', aspect: 'aspect-[16/9]', album: 'Santa Cruz 4/16/26' },
  { id: 2,  category: 'Landscape', label: 'Coastal Dawn Flight',     location: 'Natural Bridges State Beach, Santa Cruz', date: 'April 16, 2026', src: '/DJI_20260416070936_0204_D.jpeg', aspect: 'aspect-[4/3]',  album: 'Santa Cruz 4/16/26' },
  { id: 3,  category: 'Landscape', label: 'Shoreline from Above',    location: 'Natural Bridges State Beach, Santa Cruz', date: 'April 16, 2026', src: '/DJI_20260416071343_0209_D.jpeg', aspect: 'aspect-[4/3]',  album: 'Santa Cruz 4/16/26' },
  { id: 4,  category: 'Landscape', label: 'Santa Cruz Coastline',    location: 'Natural Bridges State Beach, Santa Cruz', date: 'April 16, 2026', src: '/DJI_20260416072131_0221_D.jpeg', aspect: 'aspect-[16/9]', album: 'Santa Cruz 4/16/26' },
  { id: 5,  category: 'Landscape', label: 'Natural Bridges Beach',   location: 'Natural Bridges State Beach, Santa Cruz', date: 'April 16, 2026', src: '/IMG_3322.jpeg',                  aspect: 'aspect-[4/3]',  album: 'Santa Cruz 4/16/26' },
  { id: 6,  category: 'Landscape', label: 'Coastal View',            location: 'Natural Bridges State Beach, Santa Cruz', date: 'April 16, 2026', src: '/IMG_3510.jpeg',                  aspect: 'aspect-square', album: 'Santa Cruz 4/16/26' },
  { id: 7,  category: 'Landscape', label: 'Beach at Natural Bridges', location: 'Natural Bridges State Beach, Santa Cruz', date: 'April 16, 2026', src: '/IMG_3512.jpeg',                 aspect: 'aspect-[4/3]',  album: 'Santa Cruz 4/16/26' },
  { id: 8,  category: 'Landscape', label: 'Santa Cruz Shore',        location: 'Natural Bridges State Beach, Santa Cruz', date: 'April 16, 2026', src: '/IMG_3513.jpeg',                  aspect: 'aspect-[3/4]',  album: 'Santa Cruz 4/16/26' },

  // Calibazas Bike Park 4/29/26
  { id: 14, category: 'Events', label: 'Bike Park Shot 1', location: 'Calibazas Bike Park', date: 'April 29, 2026', src: '/caliphoto5.jpg',  aspect: 'aspect-[4/3]',  album: 'Calibazas Bike Park Photoshoot' },
  { id: 15, category: 'Events', label: 'Bike Park Shot 2', location: 'Calibazas Bike Park', date: 'April 29, 2026', src: '/caliphoto1.jfif', aspect: 'aspect-[4/3]',  album: 'Calibazas Bike Park Photoshoot' },
  { id: 16, category: 'Events', label: 'Bike Park Shot 3', location: 'Calibazas Bike Park', date: 'April 29, 2026', src: '/caliphoto2.jfif', aspect: 'aspect-[4/3]',  album: 'Calibazas Bike Park Photoshoot' },
  { id: 17, category: 'Events', label: 'Bike Park Shot 4', location: 'Calibazas Bike Park', date: 'April 29, 2026', src: '/caliphoto3.jfif', aspect: 'aspect-[4/3]',  album: 'Calibazas Bike Park Photoshoot' },
  { id: 18, category: 'Events', label: 'Bike Park Shot 5', location: 'Calibazas Bike Park', date: 'April 29, 2026', src: '/caliphoto4.jfif', aspect: 'aspect-[4/3]',  album: 'Calibazas Bike Park Photoshoot' },

  // Placeholders
  { id: 9,  category: 'Real Estate',  label: 'Luxury Home Exterior',   aspect: 'aspect-[4/3]' },
  { id: 10, category: 'Real Estate',  label: 'Lakefront Property',     aspect: 'aspect-[3/4]' },
  { id: 11, category: 'Construction', label: 'Commercial Site Survey', aspect: 'aspect-[4/3]' },
  { id: 12, category: 'Wildlife',     label: 'Coastal Shoreline',      aspect: 'aspect-[16/9]' },
];

function getAlbums() {
  const map = new Map<string, GalleryItem[]>();
  for (const item of galleryItems) {
    if (item.album) {
      const existing = map.get(item.album) ?? [];
      map.set(item.album, [...existing, item]);
    }
  }
  return map;
}

const albums = getAlbums();

export default function GalleryPage() {
  const [view, setView] = useState<View>('categories');
  const [active, setActive] = useState<Category>('All');
  const [openAlbum, setOpenAlbum] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filteredByCategory = active === 'All' ? galleryItems : galleryItems.filter((i) => i.category === active);
  const albumItems = openAlbum ? (albums.get(openAlbum) ?? []) : [];
  const displayItems = view === 'categories' ? filteredByCategory : albumItems;
  const lightboxItem = galleryItems.find((i) => i.id === lightbox);

  return (
    <main className="pt-20">
      {/* ── Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#3d2010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">Portfolio</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Gallery</h1>
          <div className="section-divider mt-4" />
          <p className="text-[#7a99b8] text-sm sm:text-base mt-4 max-w-xl">
            Aerial photography and videography across landscapes, real estate, construction sites, and beyond.
          </p>
        </div>
      </section>

      {/* ── View Toggle + Filters */}
      <section className="py-6 bg-[#05080f] border-b border-[#3d2010] sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => { setView('categories'); setOpenAlbum(null); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                view === 'categories' ? 'bg-[#e8701a] text-white' : 'bg-[#0d1628] border border-[#3d2010] text-[#7a99b8] hover:text-white hover:border-[#e8701a]/50'
              }`}
            >
              <Tag size={13} /> By Category
            </button>
            <button
              onClick={() => { setView('albums'); setOpenAlbum(null); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                view === 'albums' ? 'bg-[#e8701a] text-white' : 'bg-[#0d1628] border border-[#3d2010] text-[#7a99b8] hover:text-white hover:border-[#e8701a]/50'
              }`}
            >
              <Images size={13} /> Albums
            </button>
          </div>

          {view === 'categories' && (
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-1.5 rounded text-xs font-semibold tracking-wide transition-all ${
                    active === cat
                      ? 'bg-[#e8701a] text-white shadow-lg shadow-[#e8701a]/20'
                      : 'bg-[#0d1628] border border-[#3d2010] text-[#7a99b8] hover:text-white hover:border-[#e8701a]/50'
                  }`}
                >
                  {cat}
                  {cat !== 'All' && <span className="ml-1.5 opacity-60">({galleryItems.filter((i) => i.category === cat).length})</span>}
                </button>
              ))}
            </div>
          )}

          {view === 'albums' && openAlbum && (
            <button onClick={() => setOpenAlbum(null)} className="flex items-center gap-1.5 text-[#7a99b8] hover:text-white text-xs transition-colors">
              <ChevronLeft size={14} /> All Albums
            </button>
          )}
        </div>
      </section>

      {/* ── Albums Grid */}
      {view === 'albums' && !openAlbum && (
        <section className="py-12 bg-[#05080f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from(albums.entries()).map(([name, items]) => {
                const cover = items.find((i) => i.src);
                return (
                  <button
                    key={name}
                    onClick={() => setOpenAlbum(name)}
                    className="group relative overflow-hidden rounded-xl border border-[#3d2010] hover:border-[#e8701a]/60 transition-all text-left bg-[#0d1628]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      {cover?.src ? (
                        <Image src={cover.src} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 50vw" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#0a1220]"><Images size={32} className="text-[#4a3018]" /></div>
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                    </div>
                    <div className="p-4">
                      <div className="text-white font-bold text-base">{name}</div>
                      <div className="text-[#e8701a] text-xs mt-1">{items.length} photos</div>
                      {items[0]?.location && <div className="text-[#7a99b8] text-xs mt-0.5">{items[0].location}</div>}
                      {items[0]?.date && <div className="text-[#4a3018] text-xs mt-0.5">{items[0].date}</div>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Album Photo Grid */}
      {view === 'albums' && openAlbum && (
        <section className="py-12 bg-[#05080f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-white">{openAlbum}</h2>
              <div className="text-[#e8701a] text-sm mt-1">{albumItems.length} photos</div>
              {albumItems[0]?.location && <div className="text-[#7a99b8] text-xs mt-0.5">{albumItems[0].location}</div>}
              {albumItems[0]?.date && <div className="text-[#4a3018] text-xs mt-0.5">{albumItems[0].date}</div>}
            </div>
            <div className="masonry-grid">
              {displayItems.map((item) => (
                <PhotoCard key={item.id} item={item} onOpen={() => setLightbox(item.id)} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Category Grid */}
      {view === 'categories' && (
        <section className="py-12 bg-[#05080f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="masonry-grid">
              {filteredByCategory.map((item) => (
                <PhotoCard key={item.id} item={item} onOpen={() => setLightbox(item.id)} />
              ))}
            </div>
            {filteredByCategory.length === 0 && (
              <div className="text-center py-20 text-[#4a3018]">No photos in this category yet.</div>
            )}
          </div>
        </section>
      )}

      {/* ── Lightbox */}
      {lightbox !== null && lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} className="absolute -top-10 right-0 text-[#7a99b8] hover:text-white transition-colors">
              <X size={24} />
            </button>
            {lightboxItem.src ? (
              <div className="relative w-full max-h-[75vh] aspect-video rounded-xl overflow-hidden">
                <Image src={lightboxItem.src} alt={lightboxItem.label} fill className="object-contain" sizes="100vw" />
              </div>
            ) : (
              <div className="w-full aspect-video bg-[#0d1628] border border-[#3d2010] rounded-xl flex flex-col items-center justify-center gap-3">
                <Camera size={36} className="text-[#4a3018]" />
                <span className="text-[#4a3018] text-sm">{lightboxItem.label}</span>
              </div>
            )}
            <div className="text-center">
              <div className="text-white font-bold text-lg">{lightboxItem.label}</div>
              {lightboxItem.location && <div className="text-[#e8701a] text-sm mt-1">{lightboxItem.location}</div>}
              {lightboxItem.date && <div className="text-[#7a99b8] text-xs mt-1">{lightboxItem.date}</div>}
              {lightboxItem.album && <div className="text-[#4a3018] text-xs mt-1">Album: {lightboxItem.album}</div>}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function PhotoCard({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  return (
    <div
      className={`masonry-item relative overflow-hidden rounded-lg border border-[#3d2010] cursor-pointer group hover:border-[#e8701a]/50 transition-all ${item.aspect} ${item.src ? 'bg-black' : 'bg-[#0d1628]'}`}
      onClick={onOpen}
    >
      {item.src ? (
        <Image src={item.src} alt={item.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <Camera size={24} className="text-[#4a3018]" />
          <span className="text-[#4a3018] text-xs text-center px-2">{item.label}</span>
          <span className="text-[#3d2010] text-[10px] border border-[#3d2010] px-2 py-0.5 rounded">{item.category}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all" />
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
        <div className="text-white text-xs font-semibold">{item.label}</div>
        {item.location && <div className="text-[#e8701a] text-[10px] mt-0.5">{item.location}</div>}
      </div>
      <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="px-2 py-1 bg-[#05080f]/80 backdrop-blur-sm text-[#e8701a] text-[10px] rounded font-medium border border-[#e8701a]/30">{item.category}</span>
      </div>
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-7 h-7 bg-[#e8701a] rounded flex items-center justify-center"><Camera size={13} className="text-white" /></div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Camera, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const prevImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx === 0 ? GALLERY_ITEMS.length - 1 : selectedIdx - 1);
  };

  const nextImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx === GALLERY_ITEMS.length - 1 ? 0 : selectedIdx + 1);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#ea8245] uppercase tracking-widest font-semibold mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Atmosphere &amp; Plating</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-normal">
              Visual Impressions
            </h2>
          </div>
          
          <div className="max-w-md text-sm text-[#8c8477]">
            <p>
              A glimpse into the wood-fired kitchen, artisan stoneware, and moody evening light at Ember &amp; Spice. Click any photo to view in high definition.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            // First item spans 2 columns on lg for visual interest
            const isSpanTwo = index === 0;

            return (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-xl overflow-hidden bg-[#15151c] border border-[#242430] cursor-pointer ${
                  isSpanTwo ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${isSpanTwo ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                  
                  {/* Subtle dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Scrim with caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#ea8245] font-semibold">
                          {item.category}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl text-white font-medium mt-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#a69d90] line-clamp-1 mt-0.5">
                          {item.caption}
                        </p>
                      </div>

                      <div className="p-2 rounded-lg bg-black/50 text-white/80 group-hover:text-white group-hover:bg-[#ea8245] group-hover:text-black transition-all">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation left */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation right */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-5xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <img
                src={GALLERY_ITEMS[selectedIdx].image}
                alt={GALLERY_ITEMS[selectedIdx].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>

            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#ea8245] font-semibold">
                {GALLERY_ITEMS[selectedIdx].category}
              </span>
              <h4 className="font-display text-2xl mt-1">
                {GALLERY_ITEMS[selectedIdx].title}
              </h4>
              <p className="text-sm text-[#b0a79a] mt-1">
                {GALLERY_ITEMS[selectedIdx].caption}
              </p>
              <div className="text-xs text-[#6e675c] mt-2 tabular-nums">
                {selectedIdx + 1} of {GALLERY_ITEMS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

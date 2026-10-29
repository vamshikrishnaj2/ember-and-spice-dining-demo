import React from 'react';
import { MenuItem } from '../data/restaurantData';
import { Flame, Plus, Check } from 'lucide-react';

interface FeaturedDishesProps {
  dishes: MenuItem[];
  onAddToBag: (item: MenuItem) => void;
  bagItemIds: Set<string>;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({ dishes, onAddToBag, bagItemIds }) => {
  const featured = dishes.filter(d => d.isFeatured);

  return (
    <section className="py-20 bg-[#09090b] border-y border-[#1c1c24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#ea8245] uppercase tracking-widest font-semibold mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>Culinary Highlights</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
              Signature Hearth Dishes
            </h2>
          </div>
          
          <div className="max-w-md text-sm text-[#9f9689] leading-relaxed">
            <p>
              Each dish is crafted around wood fire, slow charcoal smoking, and freshly toasted whole spice pastes. Fictional demo menu creations.
            </p>
          </div>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => {
            const isInBag = bagItemIds.has(item.id);
            return (
              <article
                key={item.id}
                className="group flex flex-col bg-[#131317] border border-[#23232c] hover:border-[#383848] rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                {/* Image Slot */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#181820]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a24] to-[#121217] text-[#8e8578]">
                      <Flame className="w-8 h-8 opacity-40" />
                    </div>
                  )}
                  
                  {/* Subtle scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent opacity-80" />

                  {/* Clean unboxed category indicator */}
                  <div className="absolute top-3 left-3 text-[11px] uppercase tracking-wider text-[#d48c5b] font-medium bg-[#131317]/80 backdrop-blur-sm px-2 py-0.5 rounded">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Price and Name */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display text-xl text-white font-medium group-hover:text-[#ea8245] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-mono text-base font-semibold text-[#f0eae1] tabular-nums shrink-0">
                        ${item.samplePrice}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#9a9184] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Dietary notes without pills */}
                  <div className="pt-3 border-t border-[#1e1e26] flex items-center justify-between gap-2 text-[11px] text-[#787166]">
                    <div className="flex items-center gap-1.5 truncate">
                      <span>{item.dietary.join(' · ')}</span>
                    </div>

                    {/* Add to tasting bag button */}
                    <button
                      onClick={() => onAddToBag(item)}
                      className={`shrink-0 p-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1 text-xs font-medium ${
                        isInBag
                          ? 'bg-[#29221b] text-[#ea8245] border border-[#52331f]'
                          : 'bg-[#1b1b22] text-[#d6cec3] hover:bg-[#e07a38] hover:text-black border border-[#2a2a35]'
                      }`}
                      title={isInBag ? "Dish in tasting bag" : "Add to demo tasting bag"}
                      aria-label={`${isInBag ? 'Remove from' : 'Add to'} tasting bag: ${item.name}`}
                    >
                      {isInBag ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#ea8245]" />
                          <span className="text-[10px]">Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span className="text-[10px]">Tasting</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Explore Full Menu prompt */}
        <div className="mt-12 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d48c5b] hover:text-white transition-colors font-semibold group cursor-pointer"
          >
            <span>Explore Complete Seasonal Menu</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

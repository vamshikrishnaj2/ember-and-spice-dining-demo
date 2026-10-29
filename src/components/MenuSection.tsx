import React, { useState, useMemo } from 'react';
import { MenuItem } from '../data/restaurantData';
import { Search, Flame, Plus, Check, Sparkles, Filter } from 'lucide-react';

interface MenuSectionProps {
  items: MenuItem[];
  onAddToBag: (item: MenuItem) => void;
  bagItemIds: Set<string>;
}

type CategoryType = 'All' | 'Starters' | 'Mains' | 'Breads' | 'Desserts' | 'Beverages';

export const MenuSection: React.FC<MenuSectionProps> = ({ items, onAddToBag, bagItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  const categories: CategoryType[] = ['All', 'Starters', 'Mains', 'Breads', 'Desserts', 'Beverages'];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category check
      if (activeCategory !== 'All' && item.category !== activeCategory) {
        return false;
      }
      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesIngredients = item.ingredients?.some(i => i.toLowerCase().includes(q)) ?? false;
        if (!matchesName && !matchesDesc && !matchesIngredients) return false;
      }
      // Dietary filter
      if (dietaryFilter === 'vegetarian') {
        if (!item.dietary.some(d => d.toLowerCase().includes('vegetarian') || d.toLowerCase().includes('vegan'))) {
          return false;
        }
      } else if (dietaryFilter === 'gluten-free') {
        if (!item.dietary.some(d => d.toLowerCase().includes('gluten-free'))) {
          return false;
        }
      } else if (dietaryFilter === 'wood-fired') {
        if (!item.dietary.some(d => d.toLowerCase().includes('wood-fired'))) {
          return false;
        }
      }
      return true;
    });
  }, [items, activeCategory, searchQuery, dietaryFilter]);

  // Group by category if "All" is active for clean editorial sectioning
  const displayedCategories: ('Starters' | 'Mains' | 'Breads' | 'Desserts' | 'Beverages')[] = 
    activeCategory === 'All' 
      ? ['Starters', 'Mains', 'Breads', 'Desserts', 'Beverages']
      : [activeCategory as any];

  return (
    <section id="menu" className="py-24 bg-[#0e0e12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Clear Demo Notice */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#ea8245] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seasonal Culinary Collection</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
            The Dining Menu
          </h2>

          <p className="text-sm sm:text-base text-[#a39a8c]">
            Designed for communal dining and shared discovery. Cooked over open flames and custom charcoal hearths.
          </p>

          {/* Mandatory Demo Pricing Label */}
          <div className="pt-2">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#d48c5b] bg-[#1a1410] border border-[#3b271a] px-3 py-1 rounded">
              Sample Demo Pricing · All Figures Illustrative
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 space-y-6">
          
          {/* Category Tabs (Segmented Control per Frontend Design constitution) */}
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-2 scrollbar-none gap-1 p-1.5 bg-[#141419] border border-[#22222c] rounded-xl max-w-3xl mx-auto">
            {categories.map((cat) => {
              const count = cat === 'All' ? items.length : items.filter(i => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-[#e07a38] text-black shadow-sm'
                      : 'text-[#9f9689] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] tabular-nums ${activeCategory === cat ? 'text-black/70' : 'text-[#6c6559]'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Filters row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#787166] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search dish or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#141419] border border-[#262633] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#686257] focus:outline-none focus:border-[#ea8245] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#8e8578] hover:text-white cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Dietary Selector */}
            <div className="flex items-center gap-2 text-xs overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-[#6d665a] shrink-0 flex items-center gap-1">
                <Filter className="w-3 h-3" />
                Filter:
              </span>
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer whitespace-nowrap ${
                  dietaryFilter === 'all'
                    ? 'text-white font-medium bg-[#22222d]'
                    : 'text-[#877e71] hover:text-[#ded8cf]'
                }`}
              >
                All Diets
              </button>
              <button
                onClick={() => setDietaryFilter('vegetarian')}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer whitespace-nowrap ${
                  dietaryFilter === 'vegetarian'
                    ? 'text-[#4ade80] font-medium bg-[#14281a]'
                    : 'text-[#877e71] hover:text-[#ded8cf]'
                }`}
              >
                Vegetarian
              </button>
              <button
                onClick={() => setDietaryFilter('gluten-free')}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer whitespace-nowrap ${
                  dietaryFilter === 'gluten-free'
                    ? 'text-[#facc15] font-medium bg-[#2d2813]'
                    : 'text-[#877e71] hover:text-[#ded8cf]'
                }`}
              >
                Gluten-Free
              </button>
              <button
                onClick={() => setDietaryFilter('wood-fired')}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer whitespace-nowrap ${
                  dietaryFilter === 'wood-fired'
                    ? 'text-[#ea8245] font-medium bg-[#291b13]'
                    : 'text-[#877e71] hover:text-[#ded8cf]'
                }`}
              >
                Wood-Fired Only
              </button>
            </div>

          </div>

        </div>

        {/* Menu Items Container */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#131317] border border-[#22222b] rounded-xl max-w-lg mx-auto">
            <p className="text-sm text-[#9f9689] mb-3">No dishes match your active filter.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="text-xs uppercase tracking-wider text-[#ea8245] underline font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {displayedCategories.map((category) => {
              const categoryItems = filteredItems.filter(i => i.category === category);
              if (categoryItems.length === 0) return null;

              return (
                <div key={category} className="space-y-8">
                  
                  {/* Category Header */}
                  <div className="border-b border-[#23232c] pb-4 flex items-baseline justify-between">
                    <h3 className="font-display text-2xl sm:text-3xl text-white font-normal tracking-wide">
                      {category}
                    </h3>
                    <span className="text-xs text-[#7d7568] uppercase tracking-wider">
                      {categoryItems.length} {categoryItems.length === 1 ? 'Selection' : 'Selections'}
                    </span>
                  </div>

                  {/* Two-Column Editorial Dish Listing - High Legibility */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                    {categoryItems.map((dish) => {
                      const isInBag = bagItemIds.has(dish.id);

                      return (
                        <div
                          key={dish.id}
                          className="group border-b border-[#1b1b22] pb-6 flex flex-col justify-between hover:border-[#343444] transition-colors"
                        >
                          <div>
                            {/* Dish Title & Price Line */}
                            <div className="flex items-baseline justify-between gap-4 mb-1.5">
                              <h4 className="font-display text-xl sm:text-2xl text-white font-medium group-hover:text-[#ea8245] transition-colors">
                                {dish.name}
                              </h4>
                              <div className="flex items-center gap-2 shrink-0">
                                <span className="font-mono text-base font-semibold text-[#f5efe6] tabular-nums">
                                  ${dish.samplePrice}
                                </span>
                              </div>
                            </div>

                            {/* Description - Refined Readability */}
                            <p className="text-sm text-[#a8a092] leading-relaxed mb-3">
                              {dish.description}
                            </p>

                            {/* Ingredients or Pairing note */}
                            {dish.pairingNote && (
                              <p className="text-xs text-[#8c8273] italic mb-2">
                                <span className="text-[#a49987] not-italic font-medium">Recommended Pairing: </span>
                                {dish.pairingNote}
                              </p>
                            )}
                          </div>

                          {/* Bottom metadata & tasting bag action */}
                          <div className="pt-2 flex items-center justify-between gap-3 text-xs">
                            
                            {/* Clean typographic metadata without pill badges */}
                            <div className="flex items-center gap-1.5 text-[11px] text-[#71695d] flex-wrap">
                              {dish.dietary.map((tag, idx) => (
                                <React.Fragment key={tag}>
                                  <span>{tag}</span>
                                  {idx < dish.dietary.length - 1 && <span aria-hidden="true">·</span>}
                                </React.Fragment>
                              ))}
                            </div>

                            {/* Add to tasting button */}
                            <button
                              onClick={() => onAddToBag(dish)}
                              className={`shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                                isInBag
                                  ? 'bg-[#2a221b] text-[#ea8245] border border-[#52331f]'
                                  : 'bg-[#181820] text-[#c7beaf] hover:bg-[#e07a38] hover:text-black border border-[#2a2a36]'
                              }`}
                              aria-label={`${isInBag ? 'Remove' : 'Add'} ${dish.name} to tasting selection`}
                            >
                              {isInBag ? (
                                <>
                                  <Check className="w-3 h-3 text-[#ea8245]" />
                                  <span>Added</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3 h-3" />
                                  <span>Tasting</span>
                                </>
                              )}
                            </button>

                          </div>

                        </div>
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Dietary / Allergens Note at Menu Bottom */}
        <div className="mt-16 p-6 bg-[#131317] border border-[#22222b] rounded-xl text-xs text-[#8e8578] space-y-2">
          <div className="font-semibold text-[#ded8cf] uppercase tracking-wider text-[11px]">
            Culinary Transparency &amp; Allergies
          </div>
          <p className="leading-relaxed">
            Please inform our service team of any severe dietary allergies before ordering. All our hearth breads are baked in an oven that processes wheat. Gluten-free preparations are cooked with dedicated utensils over isolated charcoal grates. Sample pricing displayed for demonstration only.
          </p>
        </div>

      </div>
    </section>
  );
};

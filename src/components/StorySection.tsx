import React from 'react';
import { Flame, Compass, HeartHandshake } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#141418] border-y border-[#242430] text-[#ebe7de] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Intro Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#ea8245] font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Culinary Philosophy</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl text-white font-normal">
            Born From Fire, Rooted in Spice
          </h2>

          <p className="text-base text-[#a89f91] leading-relaxed">
            Ember &amp; Spice is a fictional dining concept created to celebrate ancient hearth-cooking methods, hand-pounded spice blends, and the lost art of lingering at the table.
          </p>
        </div>

        {/* Story Grid with Warm Editorial Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Warm Amber Scrim */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2b2b3a] bg-[#1a1a24] shadow-2xl p-2.5">
              <div className="aspect-[16/10] overflow-hidden rounded-xl relative">
                <img
                  src="/images/restaurant_interior_ambiance_1790713048514.jpg"
                  alt="Interior dining room of Ember and Spice featuring charred wood finishes and warm hearth lighting"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-[#d48c5b] uppercase tracking-wider font-semibold">
                    The Foundry Hearth Room
                  </p>
                  <p className="font-display text-lg text-white font-medium">
                    Designed for warm conversation and unhurried dining
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Editorial Pillars */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Pillar 01 */}
            <div className="space-y-2 border-l-2 border-[#ea8245]/40 pl-6 py-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ea8245] font-semibold">
                <Flame className="w-3.5 h-3.5" />
                <span>01. The Elemental Flame</span>
              </div>
              <h3 className="font-display text-2xl text-white font-medium">
                Cooking with Live White Oak Embers
              </h3>
              <p className="text-sm text-[#9f9689] leading-relaxed">
                Rather than hiding behind rapid gas burners, every prime cut, whole sea bass, and flatbread passes directly through our open hearth. White oak embers deliver an irreplaceable char that seals in moisture while imparting gentle wood smoke.
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="space-y-2 border-l-2 border-[#ea8245]/40 pl-6 py-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ea8245] font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>02. The Architecture of Spice</span>
              </div>
              <h3 className="font-display text-2xl text-white font-medium">
                Toasted Whole, Ground Daily
              </h3>
              <p className="text-sm text-[#9f9689] leading-relaxed">
                Spice is not about overwhelming heat; it is about layering perfume, earthiness, and acidity. We dry-roast green cardamom, black cumin, fenugreek, and star anise in heavy cast-iron skillets every morning before hand-grinding them into our house marinades.
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="space-y-2 border-l-2 border-[#ea8245]/40 pl-6 py-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ea8245] font-semibold">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>03. Generous Hospitality</span>
              </div>
              <h3 className="font-display text-2xl text-white font-medium">
                Reasons to Stay
              </h3>
              <p className="text-sm text-[#9f9689] leading-relaxed">
                Our tagline is our service mantra. We never turn tables hastily. From warm spiced tea upon arrival to sharing clay pots of slow-simmered lentils with blistered naan, dining here is intended as an intimate evening sanctuary.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

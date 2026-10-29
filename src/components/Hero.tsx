import React from 'react';
import { ArrowDown, Flame, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-16 lg:py-24">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d9682c]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Subtle editorial kicker */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs text-[#d48c5b] uppercase tracking-widest font-semibold">
              <Flame className="w-4 h-4 text-[#ea8245]" />
              <span>Wood-Fired Hearth &amp; Ground Spices</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal text-white leading-[1.08] tracking-tight">
              Good food.<br />
              <span className="italic font-light text-[#ded8cd]">Good reasons</span> to stay.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#bfb7aa] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              A contemporary dining concept bringing bold flavours and warm hospitality.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#e07a38] hover:bg-[#ea8948] transition-all duration-200 rounded-lg shadow-lg hover:shadow-orange-500/10 cursor-pointer text-center"
              >
                Explore Menu
              </a>

              <a
                href="#visit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#ded8cf] bg-[#1a1a22] hover:bg-[#252530] hover:text-white border border-[#323240] transition-all duration-200 rounded-lg cursor-pointer text-center"
              >
                Find Us
              </a>
            </div>

            {/* Quick trust/essential facts bar without pill enclosures */}
            <div className="pt-4 border-t border-[#22222a] flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#8f8679]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#ea8245]" />
                <span>Dinner Service 17:30 – 22:30</span>
              </div>
              <span className="text-[#3c3c4a]" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ea8245]" />
                <span>Foundry Arts District</span>
              </div>
              <span className="text-[#3c3c4a]" aria-hidden="true">·</span>
              <span className="text-[#c4bbb0]">Sample Demo Pricing</span>
            </div>

          </div>

          {/* Right Column: Large High-Fidelity Food Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative dark frame with single elevation */}
              <div className="relative rounded-2xl overflow-hidden bg-[#18181f] border border-[#2a2a35] shadow-2xl p-2 sm:p-3">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-xl bg-[#111116]">
                  <img
                    src="/images/hero_ember_dining_1790713003383.jpg"
                    alt="Wood-fired ribeye steak with charred peppers and cumin glaze at Ember and Spice"
                    className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                  
                  {/* Subtle contrast gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Caption overlay in photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="flex items-center gap-2 text-xs text-[#ea8245] uppercase tracking-wider font-medium">
                      <span>Featured Hearth Specialty</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#c8c0b4]">$46 Sample Demo</span>
                    </div>
                    <p className="font-display text-xl text-white font-medium mt-0.5">
                      Charred Prime Ribeye &amp; Cumin Glaze
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative hearth accent block */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-[#16161c] border border-[#2d2d3a] p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3.5 max-w-xs">
                <div className="w-10 h-10 rounded-lg bg-[#271d17] border border-[#482c1a] flex items-center justify-center shrink-0 text-[#ea8245]">
                  <Flame className="w-5 h-5" />
                </div>
                <div className="text-left text-xs">
                  <div className="text-white font-medium">White Oak Embers</div>
                  <div className="text-[#8c8375] leading-tight mt-0.5">Charcoal hearth heating up to 800°F daily</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

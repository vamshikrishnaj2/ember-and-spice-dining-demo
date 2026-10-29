import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Clock, Navigation, Car, Train, Copy, Check, ExternalLink } from 'lucide-react';

export const VisitUsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'map' | 'transit' | 'parking'>('map');

  const copyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="visit" className="py-24 bg-[#0d0d10] text-[#ebe7de] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ea8245] font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Foundry Arts District</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-normal">
            Visit Ember &amp; Spice
          </h2>
          <p className="text-sm sm:text-base text-[#9a9184] mt-2">
            Located in the historic Foundry District, our dining room and hearth counter welcome walk-ins and reservation enquiries.
          </p>
        </div>

        {/* Two-Column Grid: Hours & Address on Left, Stylized Map & Arrival Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours & Address Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Opening Hours Card */}
            <div className="p-6 sm:p-8 bg-[#141419] border border-[#262633] rounded-2xl shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#242430]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#ea8245]" />
                  <h3 className="font-display text-2xl text-white font-medium">Opening Hours</h3>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4ade80] bg-[#142618] border border-[#234529] px-2.5 py-1 rounded">
                  Open Today
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs">
                {RESTAURANT_INFO.hours.map((schedule, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#1c1c24] gap-1">
                    <span className="font-medium text-white text-sm">{schedule.day}</span>
                    <div className="flex items-center gap-3 text-[#aba295] tabular-nums">
                      <span>Lunch: {schedule.lunch}</span>
                      <span className="text-[#4b453b]" aria-hidden="true">·</span>
                      <span>Dinner: {schedule.dinner}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 text-[11px] text-[#857d72] italic bg-[#181820] p-3 rounded-lg border border-[#22222d]">
                {RESTAURANT_INFO.kitchenLastCall}
              </div>
            </div>

            {/* Address & Quick Copy Card */}
            <div className="p-6 sm:p-8 bg-[#141419] border border-[#262633] rounded-2xl shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-[#ea8245]" />
                  <h3 className="font-display text-2xl text-white font-medium">The Sanctuary</h3>
                </div>
                <span className="text-xs text-[#7d7568] uppercase tracking-wider">Demo Location</span>
              </div>

              <div>
                <p className="text-base text-white font-medium">
                  {RESTAURANT_INFO.address.street}
                </p>
                <p className="text-sm text-[#ada497]">
                  {RESTAURANT_INFO.address.quarter}, {RESTAURANT_INFO.address.city}
                </p>
                <p className="text-xs text-[#827a6e] mt-1">
                  {RESTAURANT_INFO.address.crossStreets}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={copyAddress}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#20202a] hover:bg-[#2b2b38] border border-[#343444] text-xs font-medium text-white rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                      <span>Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#ea8245]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href="#reservation"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#e07a38] hover:bg-[#ea8948] text-xs font-semibold uppercase tracking-wider text-black rounded-lg transition-colors cursor-pointer"
                >
                  <span>Demo Reserve</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Stylized Interactive Map Preview & Travel Guides */}
          <div className="lg:col-span-7 bg-[#141419] border border-[#262633] rounded-2xl overflow-hidden shadow-xl flex flex-col">
            
            {/* Map Header Tabs */}
            <div className="p-4 border-b border-[#23232e] bg-[#111116] flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('map')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeTab === 'map' ? 'bg-[#262633] text-white shadow-sm' : 'text-[#8b8376] hover:text-white'
                  }`}
                >
                  District Map
                </button>
                <button
                  onClick={() => setActiveTab('transit')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeTab === 'transit' ? 'bg-[#262633] text-white shadow-sm' : 'text-[#8b8376] hover:text-white'
                  }`}
                >
                  Public Transit
                </button>
                <button
                  onClick={() => setActiveTab('parking')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeTab === 'parking' ? 'bg-[#262633] text-white shadow-sm' : 'text-[#8b8376] hover:text-white'
                  }`}
                >
                  Valet &amp; Parking
                </button>
              </div>

              <div className="text-[11px] text-[#6d665a] hidden sm:block">
                Metropolis Grid 42.4°N, 71.1°W
              </div>
            </div>

            {/* Map Canvas / Stylized View */}
            {activeTab === 'map' && (
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#09090c] overflow-hidden flex items-center justify-center">
                {/* SVG Vector Map Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#262638" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Major avenue paths */}
                  <path d="M 0 140 Q 300 130 800 160" stroke="#3b3b4f" strokeWidth="3" fill="none" />
                  <path d="M 120 0 Q 150 200 180 500" stroke="#3b3b4f" strokeWidth="2.5" fill="none" />
                  <path d="M 400 0 L 420 500" stroke="#ea8245" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                  
                  {/* River or park block */}
                  <rect x="520" y="30" width="220" height="130" rx="16" fill="#121820" />
                  <text x="560" y="90" fill="#2d4050" fontSize="11" fontFamily="sans-serif">FOUNDRY CANAL</text>
                  
                  <text x="30" y="130" fill="#4d4d60" fontSize="10" fontFamily="sans-serif">IRONWOOD BLVD</text>
                  <text x="210" y="240" fill="#ea8245" fontSize="11" fontFamily="sans-serif" fontWeight="bold">HEARTHSTONE LANE</text>
                </svg>

                {/* Animated Hearth Pin */}
                <div className="relative z-10 flex flex-col items-center group cursor-pointer">
                  {/* Glowing pulse */}
                  <div className="absolute -inset-3 bg-[#ea8245]/20 rounded-full blur-md animate-pulse" />
                  
                  <div className="relative bg-[#ea8245] text-black p-3 rounded-full shadow-2xl border-2 border-white flex items-center justify-center">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>

                  <div className="mt-2.5 bg-[#14141a]/95 backdrop-blur-md border border-[#3b3b4d] px-3.5 py-1.5 rounded-lg shadow-xl text-center">
                    <div className="font-display text-white text-sm font-semibold">Ember &amp; Spice</div>
                    <div className="text-[10px] text-[#ea8245]">48 Hearthstone Lane</div>
                  </div>
                </div>

                {/* Map Control Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#8c8477]">
                  <div className="bg-[#111116]/90 px-3 py-1.5 rounded-md border border-[#272733] text-[11px]">
                    Simulated District View · No GPS Tracking
                  </div>
                  <button
                    onClick={copyAddress}
                    className="bg-[#242432]/90 hover:bg-[#343446] text-white px-3 py-1.5 rounded-md border border-[#3d3d52] transition-colors cursor-pointer text-[11px] flex items-center gap-1"
                  >
                    <Navigation className="w-3 h-3 text-[#ea8245]" />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>
            )}

            {/* Transit View */}
            {activeTab === 'transit' && (
              <div className="p-6 sm:p-8 space-y-6 flex-1 bg-[#121217]">
                <div className="flex items-center gap-3 text-white font-medium">
                  <Train className="w-5 h-5 text-[#ea8245]" />
                  <span className="font-display text-xl">Metropolis Transit &amp; Subway</span>
                </div>
                <div className="space-y-4 text-xs text-[#a49b8e] leading-relaxed">
                  <div className="p-4 bg-[#191922] border border-[#2b2b3a] rounded-xl space-y-1">
                    <div className="font-semibold text-white">Foundry District Metro Station</div>
                    <p>{RESTAURANT_INFO.address.transitNote}</p>
                  </div>
                  <div className="p-4 bg-[#191922] border border-[#2b2b3a] rounded-xl space-y-1">
                    <div className="font-semibold text-white">Ashwood Tramway</div>
                    <p>Lines 4 &amp; 9 stop at the corner of Ember Way &amp; Hearthstone Lane every 8 minutes.</p>
                  </div>
                  <div className="p-4 bg-[#191922] border border-[#2b2b3a] rounded-xl space-y-1">
                    <div className="font-semibold text-white">Ride-Hail &amp; Taxi Drop-off</div>
                    <p>Designated private drop-off zone directly outside the main wooden archway.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Parking View */}
            {activeTab === 'parking' && (
              <div className="p-6 sm:p-8 space-y-6 flex-1 bg-[#121217]">
                <div className="flex items-center gap-3 text-white font-medium">
                  <Car className="w-5 h-5 text-[#ea8245]" />
                  <span className="font-display text-xl">Valet &amp; Self-Parking</span>
                </div>
                <div className="space-y-4 text-xs text-[#a49b8e] leading-relaxed">
                  <div className="p-4 bg-[#191922] border border-[#2b2b3a] rounded-xl space-y-1">
                    <div className="font-semibold text-white">Complimentary Valet Service</div>
                    <p>{RESTAURANT_INFO.address.parkingNote}</p>
                  </div>
                  <div className="p-4 bg-[#191922] border border-[#2b2b3a] rounded-xl space-y-1">
                    <div className="font-semibold text-white">Foundry Garage (Multi-Story)</div>
                    <p>200 spaces available at 12 Ironwood Blvd (2 blocks north). $8 flat evening rate after 18:00.</p>
                  </div>
                  <div className="p-4 bg-[#191922] border border-[#2b2b3a] rounded-xl space-y-1">
                    <div className="font-semibold text-white">Electric Vehicle Charging</div>
                    <p>4 Level-2 charging stations available within the valet courtyard.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Travel Summary Footer */}
            <div className="p-4 bg-[#0f0f13] border-t border-[#23232e] text-[11px] text-[#787165] flex items-center justify-between">
              <span>Cross Streets: {RESTAURANT_INFO.address.crossStreets}</span>
              <span className="text-[#a89f92]">Accessible Entrance Available</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

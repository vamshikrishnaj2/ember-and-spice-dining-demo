import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowUp, ShieldAlert, Flame } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#1a1a22] text-[#c9c2b5] pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#1c1c26]">
          
          {/* Brand & Concept Narrative */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="font-display text-2xl sm:text-3xl text-white tracking-wide block">
              Ember &amp; Spice
            </a>
            <p className="text-sm text-[#91887b] leading-relaxed">
              {RESTAURANT_INFO.subtext}
            </p>
            <div className="pt-2 text-xs text-[#d48c5b] flex items-center gap-1.5 font-medium">
              <Flame className="w-3.5 h-3.5 text-[#ea8245]" />
              <span>Wood-Fired Hearth &amp; Hand-Pounded Spices</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#9f9689]">
              <li>
                <a href="#home" className="hover:text-[#ea8245] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#ea8245] transition-colors">Seasonal Menu</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#ea8245] transition-colors">Our Philosophy</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#ea8245] transition-colors">Photography</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#ea8245] transition-colors">Hours &amp; Location</a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#ea8245] transition-colors">Demo Reservation</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ea8245] transition-colors">Contact Concierge</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Quick Glance */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-semibold">
              Hours of Service
            </div>
            <div className="space-y-2 text-xs text-[#9f9689]">
              <div>
                <span className="text-[#ded8cf] font-medium block">Mon – Fri:</span>
                <span>12:00 – 15:00 · 17:30 – 22:30</span>
              </div>
              <div>
                <span className="text-[#ded8cf] font-medium block">Saturday:</span>
                <span>12:30 – 15:30 · 17:00 – 23:30</span>
              </div>
              <div>
                <span className="text-[#ded8cf] font-medium block">Sunday:</span>
                <span>12:00 – 16:00 (Brunch) · 17:30 – 21:30</span>
              </div>
            </div>
          </div>

          {/* Address & Direct Concierge */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-semibold">
              Sanctuary Location
            </div>
            <div className="space-y-1.5 text-xs text-[#9f9689]">
              <p className="text-white">{RESTAURANT_INFO.address.street}</p>
              <p>{RESTAURANT_INFO.address.quarter}</p>
              <p>{RESTAURANT_INFO.address.city}</p>
              <p className="pt-2 text-white font-medium">{RESTAURANT_INFO.contact.phoneDisplay}</p>
              <p>{RESTAURANT_INFO.contact.email}</p>
            </div>
          </div>

        </div>

        {/* Demo Disclaimer & Legal Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#716a5f]">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldAlert className="w-4 h-4 text-[#ea8245] shrink-0" />
            <span>
              <strong>Fictional Concept Notice:</strong> Ember &amp; Spice is a design &amp; code demonstration. No real reviews, awards, customers, locations, or ratings are claimed.
            </span>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <span>© 2026 Ember &amp; Spice · Demo Portfolio</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#141419] hover:bg-[#202028] text-[#ded8cf] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

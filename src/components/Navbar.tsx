import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Clock, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  tastingBagCount: number;
  onOpenBag: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ tastingBagCount, onOpenBag }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0c0c0e]/95 backdrop-blur-md border-b border-[#22222a] py-3.5 shadow-lg'
            : 'bg-[#0c0c0e]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              className="font-display text-2xl sm:text-3xl text-white tracking-wide hover:text-[#ea8245] transition-colors whitespace-nowrap"
            >
              Ember &amp; Spice
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-widest text-[#bbb3a7]">
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#menu" className="hover:text-white transition-colors">
                Menu
              </a>
              <a href="#story" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#gallery" className="hover:text-white transition-colors">
                Gallery
              </a>
              <a href="#visit" className="hover:text-white transition-colors">
                Visit Us
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              {/* Tasting Bag button */}
              <button
                onClick={onOpenBag}
                className="relative p-2 text-[#d2c9bd] hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5"
                aria-label={`View tasting bag (${tastingBagCount} items)`}
                title="Curated tasting menu bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {tastingBagCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#d9682c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                    {tastingBagCount}
                  </span>
                )}
              </button>

              {/* Primary CTA */}
              <a
                href="#menu"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium uppercase tracking-wider text-black bg-[#e07a38] hover:bg-[#ea8948] transition-colors rounded-lg whitespace-nowrap shadow-sm"
              >
                View Menu
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#d2c9bd] hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-6">
            <div className="flex items-center justify-between pb-6 border-b border-[#25252e]">
              <span className="font-display text-2xl text-white">Ember &amp; Spice</span>
              <button
                onClick={closeMenu}
                className="p-2 text-[#9f9689] hover:text-white transition-colors rounded-lg cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-5 text-base font-medium text-[#ded8cf]">
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-[#ea8245] transition-colors py-1 border-b border-[#1f1f26]"
              >
                Home
              </a>
              <a
                href="#menu"
                onClick={closeMenu}
                className="hover:text-[#ea8245] transition-colors py-1 border-b border-[#1f1f26] flex items-center justify-between"
              >
                <span>Menu</span>
                <span className="text-xs text-[#8e8578] uppercase tracking-wider">Explore All</span>
              </a>
              <a
                href="#story"
                onClick={closeMenu}
                className="hover:text-[#ea8245] transition-colors py-1 border-b border-[#1f1f26]"
              >
                About Our Hearth
              </a>
              <a
                href="#gallery"
                onClick={closeMenu}
                className="hover:text-[#ea8245] transition-colors py-1 border-b border-[#1f1f26]"
              >
                Photo Gallery
              </a>
              <a
                href="#visit"
                onClick={closeMenu}
                className="hover:text-[#ea8245] transition-colors py-1 border-b border-[#1f1f26]"
              >
                Visit Us &amp; Opening Hours
              </a>
              <a
                href="#reservation"
                onClick={closeMenu}
                className="hover:text-[#ea8245] transition-colors py-1 border-b border-[#1f1f26]"
              >
                Demo Reservation Enquiry
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-[#ea8245] transition-colors py-1"
              >
                Contact &amp; Private Dining
              </a>
            </nav>

            <div className="mt-8">
              <a
                href="#menu"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center py-3 text-sm font-semibold uppercase tracking-wider text-black bg-[#e07a38] hover:bg-[#ea8948] transition-colors rounded-lg"
              >
                View Menu
              </a>
            </div>
          </div>

          {/* Quick info snippet in mobile menu */}
          <div className="p-6 bg-[#131317] border-t border-[#22222a] text-xs text-[#968d80] space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#ea8245] shrink-0" />
              <span>{RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.quarter}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ea8245] shrink-0" />
              <span>Tonight: 17:30 – 22:30 (Dinner)</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#ea8245] shrink-0" />
              <span>{RESTAURANT_INFO.contact.phoneDisplay}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

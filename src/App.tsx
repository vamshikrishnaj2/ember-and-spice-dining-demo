/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DemoNoticeBanner } from './components/DemoNoticeBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedDishes } from './components/FeaturedDishes';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { GallerySection } from './components/GallerySection';
import { VisitUsSection } from './components/VisitUsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { TastingBagDrawer } from './components/TastingBagDrawer';
import { MENU_ITEMS, MenuItem } from './data/restaurantData';

export default function App() {
  const [tastingBag, setTastingBag] = useState<MenuItem[]>([]);
  const [isBagOpen, setIsBagOpen] = useState(false);

  // Toggle dish in tasting flight
  const handleToggleBagItem = (item: MenuItem) => {
    setTastingBag((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveBagItem = (id: string) => {
    setTastingBag((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearBag = () => {
    setTastingBag([]);
  };

  const bagItemIds = new Set(tastingBag.map((item) => item.id));

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#ebe7de] font-sans flex flex-col selection:bg-[#ea8245] selection:text-black">
      {/* 1. DEMO NOTICE BANNER */}
      <DemoNoticeBanner />

      {/* 2. NAVBAR */}
      <Navbar
        tastingBagCount={tastingBag.length}
        onOpenBag={() => setIsBagOpen(true)}
      />

      {/* MAIN SECTIONS */}
      <main className="flex-1">
        {/* 3. HERO */}
        <Hero />

        {/* 4. FEATURED DISHES */}
        <FeaturedDishes
          dishes={MENU_ITEMS}
          onAddToBag={handleToggleBagItem}
          bagItemIds={bagItemIds}
        />

        {/* 5. MENU */}
        <MenuSection
          items={MENU_ITEMS}
          onAddToBag={handleToggleBagItem}
          bagItemIds={bagItemIds}
        />

        {/* 6. RESTAURANT STORY */}
        <StorySection />

        {/* 7. GALLERY */}
        <GallerySection />

        {/* 8. VISIT US */}
        <VisitUsSection />

        {/* 9. RESERVATION/ENQUIRY CTA */}
        <ReservationSection />

        {/* 10. CONTACT */}
        <ContactSection />
      </main>

      {/* 11. FOOTER */}
      <Footer />

      {/* TASTING BAG SLIDE-OVER DRAWER */}
      <TastingBagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={tastingBag}
        onRemoveItem={handleRemoveBagItem}
        onClearBag={handleClearBag}
      />

      {/* MOBILE QUICK ACTION BAR (<15% sticky cap) */}
      <MobileQuickBar
        tastingBagCount={tastingBag.length}
        onOpenBag={() => setIsBagOpen(true)}
      />
    </div>
  );
}

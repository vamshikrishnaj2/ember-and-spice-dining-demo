import React from 'react';
import { BookOpen, Clock, MapPin, CalendarDays, ShoppingBag } from 'lucide-react';

interface MobileQuickBarProps {
  tastingBagCount: number;
  onOpenBag: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ tastingBagCount, onOpenBag }) => {
  return (
    <div 
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0d11]/95 backdrop-blur-md border-t border-[#262633] px-3 py-2 flex items-center justify-around shadow-2xl h-14"
      aria-label="Mobile quick navigation"
    >
      <a
        href="#menu"
        className="flex flex-col items-center justify-center text-[10px] uppercase tracking-wider text-[#ada497] hover:text-[#ea8245] transition-colors py-0.5 px-2"
      >
        <BookOpen className="w-4 h-4 text-[#ea8245] mb-0.5" />
        <span>Menu</span>
      </a>

      <a
        href="#visit"
        className="flex flex-col items-center justify-center text-[10px] uppercase tracking-wider text-[#ada497] hover:text-[#ea8245] transition-colors py-0.5 px-2"
      >
        <Clock className="w-4 h-4 text-[#ea8245] mb-0.5" />
        <span>Hours</span>
      </a>

      <a
        href="#visit"
        className="flex flex-col items-center justify-center text-[10px] uppercase tracking-wider text-[#ada497] hover:text-[#ea8245] transition-colors py-0.5 px-2"
      >
        <MapPin className="w-4 h-4 text-[#ea8245] mb-0.5" />
        <span>Find Us</span>
      </a>

      <button
        onClick={onOpenBag}
        className="relative flex flex-col items-center justify-center text-[10px] uppercase tracking-wider text-[#ada497] hover:text-[#ea8245] transition-colors py-0.5 px-2 cursor-pointer"
        aria-label={`Open tasting bag (${tastingBagCount} dishes)`}
      >
        <ShoppingBag className="w-4 h-4 text-[#ea8245] mb-0.5" />
        {tastingBagCount > 0 && (
          <span className="absolute top-0 right-2 w-3.5 h-3.5 bg-[#d9682c] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
            {tastingBagCount}
          </span>
        )}
        <span>Tasting</span>
      </button>

      <a
        href="#reservation"
        className="flex items-center justify-center px-3 py-1.5 rounded-lg bg-[#e07a38] text-black text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm"
      >
        <span>Reserve</span>
      </a>
    </div>
  );
};

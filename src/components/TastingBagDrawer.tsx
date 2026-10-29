import React from 'react';
import { MenuItem } from '../data/restaurantData';
import { X, Trash2, ArrowRight, ShieldAlert, Sparkles, ChefHat } from 'lucide-react';

interface TastingBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onRemoveItem: (id: string) => void;
  onClearBag: () => void;
}

export const TastingBagDrawer: React.FC<TastingBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearBag
}) => {
  if (!isOpen) return null;

  const sampleSubtotal = items.reduce((sum, item) => sum + item.samplePrice, 0);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tasting-bag-title"
    >
      <div className="w-full max-w-md bg-[#131317] border-l border-[#262633] h-full flex flex-col justify-between text-[#ded8cf] shadow-2xl">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#22222d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="w-5 h-5 text-[#ea8245]" />
            <div>
              <h2 id="tasting-bag-title" className="font-display text-xl text-white font-medium">
                Your Tasting Selection
              </h2>
              <span className="text-[11px] text-[#8e8578] uppercase tracking-wider">
                {items.length} {items.length === 1 ? 'Dish' : 'Dishes'} Curated
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#8b8377] hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close tasting bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Sparkles className="w-8 h-8 text-[#ea8245]/40 mx-auto" />
              <p className="font-display text-lg text-white">Your Tasting Flight is Empty</p>
              <p className="text-xs text-[#8e8578] max-w-xs mx-auto">
                Explore the menu and click "Tasting" on any starter, hearth main, bread, or dessert to build your personalized dinner flight.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-[#202029] hover:bg-[#2b2b37] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 bg-[#181820] border border-[#262633] rounded-xl flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#ea8245] uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-display text-base text-white font-medium leading-snug">
                      {item.name}
                    </h3>
                    <div className="text-[11px] text-[#7d7568]">
                      {item.dietary.slice(0, 2).join(' · ')}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                    <span className="font-mono text-sm font-semibold text-white tabular-nums">
                      ${item.samplePrice}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#6d665b] hover:text-[#f87171] p-1 transition-colors cursor-pointer"
                      title="Remove item"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={onClearBag}
                  className="text-xs text-[#7d7568] hover:text-[#d6cec3] underline transition-colors cursor-pointer"
                >
                  Clear Selection
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer with Calculation & Demo CTA */}
        {items.length > 0 && (
          <div className="p-6 bg-[#0f0f13] border-t border-[#22222d] space-y-4">
            
            {/* Sample Price Total */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#a49b8e]">Sample Demo Subtotal</span>
              <span className="font-mono text-xl font-bold text-white tabular-nums">
                ${sampleSubtotal}
              </span>
            </div>

            {/* Demo Notice */}
            <div className="p-2.5 bg-[#1b1511] border border-[#3b2315] rounded-lg text-[10px] text-[#d48c5b] flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Sample calculation for demonstration only. No real charges apply.</span>
            </div>

            {/* Direct reservation link */}
            <a
              href="#reservation"
              onClick={onClose}
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#e07a38] hover:bg-[#ea8948] transition-colors rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Request Tasting in Demo Reservation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

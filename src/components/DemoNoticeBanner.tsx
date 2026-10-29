import React, { useState } from 'react';
import { Info, X, ShieldAlert, Sparkles, ExternalLink } from 'lucide-react';

export const DemoNoticeBanner: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Top Demo Banner */}
      {!isDismissed ? (
        <aside 
          aria-label="Demo Portfolio Notice"
          className="relative z-50 bg-[#171412] border-b border-[#382619] text-[#e8ded1] px-4 py-2.5 text-xs tracking-wide"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="inline-flex items-center gap-1 font-semibold text-[#ea8245] uppercase tracking-wider text-[11px] shrink-0">
                <ShieldAlert className="w-3.5 h-3.5" />
                DEMO CONCEPT — Fictional brand
              </span>
              <span className="hidden sm:inline text-[#6f675f]">|</span>
              <span className="text-[#c7bfb5]">
                Portfolio demonstration. Pricing, menus, and reservations are simulated samples.
              </span>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowModal(true)}
                className="underline hover:text-white transition-colors cursor-pointer text-[11px] font-medium"
              >
                Project Details
              </button>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1 text-[#8f8578] hover:text-white transition-colors cursor-pointer rounded"
                aria-label="Collapse demo banner"
                title="Collapse demo banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>
      ) : (
        /* Floating mini badge if banner collapsed */
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-20 sm:bottom-6 right-4 z-40 bg-[#1c1917]/90 hover:bg-[#292524] text-[#d6cec3] border border-[#44382c] px-3 py-1.5 rounded-full text-xs font-medium shadow-xl backdrop-blur-md flex items-center gap-1.5 transition-all cursor-pointer"
          title="View demo project disclaimer"
        >
          <Info className="w-3.5 h-3.5 text-[#ea8245]" />
          <span>Fictional Demo</span>
        </button>
      )}

      {/* Project Details Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <div className="bg-[#141418] border border-[#2e2e38] max-w-lg w-full p-6 md:p-8 rounded-xl shadow-2xl relative text-[#ded8cf]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-[#888177] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-3 text-[#ea8245]">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-semibold">Design &amp; Engineering Showcase</span>
            </div>

            <h2 id="demo-modal-title" className="font-display text-2xl md:text-3xl text-white font-medium mb-3">
              About Ember &amp; Spice Demo
            </h2>

            <div className="space-y-3.5 text-sm text-[#bab1a5] leading-relaxed">
              <p>
                This web application is a high-fidelity demonstration created to showcase contemporary restaurant web design, clear typography, intuitive menu legibility, and seamless customer interactions.
              </p>
              
              <div className="p-3.5 bg-[#1b1b22] border border-[#2d2d38] rounded-lg space-y-2 text-xs text-[#cbc2b6]">
                <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
                  Fictional Entity Guidelines:
                </div>
                <ul className="list-disc list-inside space-y-1 text-[#ada497]">
                  <li>All dishes, drink pairings, and ingredients are fictional culinary designs.</li>
                  <li>All prices are illustrative sample figures for layout demonstration.</li>
                  <li>No actual reservations or financial transactions take place.</li>
                  <li>No claims of external ratings, Michelin stars, or customer reviews are made.</li>
                </ul>
              </div>

              <p className="text-xs text-[#8f867a]">
                Built with modern React, TypeScript, Tailwind CSS, and editorial photography. Designed with full keyboard navigation and mobile responsiveness.
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#e07a38] hover:bg-[#ea8948] transition-colors rounded-lg cursor-pointer"
              >
                Understood &amp; Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

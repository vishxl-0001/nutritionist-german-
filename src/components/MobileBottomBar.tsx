import React from 'react';
import { Calculator, Utensils, Calendar, Sparkles, MessageCircle } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-3 py-2 shadow-lg select-none">
      <div className="flex items-center justify-around">
        <button
          onClick={() => onNavigate('calculator')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-700 active:scale-95 transition-transform"
        >
          <div className="p-1 rounded-lg hover:bg-slate-100">
            <Calculator className="w-5 h-5 text-slate-700" />
          </div>
          <span className="text-[10px] font-bold">Rechner</span>
        </button>

        <button
          onClick={() => onNavigate('meal-planner')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-700 active:scale-95 transition-transform"
        >
          <div className="p-1 rounded-lg hover:bg-slate-100">
            <Utensils className="w-5 h-5 text-slate-700" />
          </div>
          <span className="text-[10px] font-bold">Pläne</span>
        </button>

        {/* Center Booking Action */}
        <button
          onClick={onOpenBooking}
          className="relative -top-4 flex flex-col items-center group active:scale-95 transition-transform"
          aria-label="Termin vereinbaren"
        >
          <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-brand-700 via-brand-600 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-brand-600/35 ring-4 ring-white animate-pulse-glow">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-extrabold text-brand-800 mt-1">Termin</span>
        </button>

        <button
          onClick={() => onNavigate('quiz')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-700 active:scale-95 transition-transform"
        >
          <div className="p-1 rounded-lg hover:bg-slate-100">
            <Sparkles className="w-5 h-5 text-slate-700" />
          </div>
          <span className="text-[10px] font-bold">Test</span>
        </button>

        <a
          href="https://wa.me/4917630632723?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Ern%C3%A4hrungsberatung%20im%20Ern%C3%A4hrungsTreff%20Lilienthal."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-emerald-700 active:scale-95 transition-transform"
        >
          <div className="p-1 rounded-lg hover:bg-emerald-50">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-[10px] font-bold text-emerald-700">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Menu, 
  X, 
  Phone, 
  ChevronRight, 
  Utensils, 
  Calculator, 
  Award,
  HeartPulse,
  MessageCircle,
  MapPin,
  Star,
  Clock
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100/80'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo ErnährungsTreff Lilienthal */}
            <div 
              onClick={() => handleLinkClick('hero')} 
              className="flex items-center gap-2.5 cursor-pointer group select-none"
            >
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-700 via-brand-600 to-emerald-500 flex items-center justify-center shadow-md shadow-brand-600/25 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                <span className="text-white font-black text-sm tracking-tight font-display">ETL</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 font-display">
                    ErnährungsTreff<span className="text-brand-600"> Lilienthal</span>
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-bold text-slate-500 -mt-0.5 flex items-center gap-1.5">
                  <span>Ernährungsberatung</span>
                  <span className="w-1 h-1 rounded-full bg-brand-500" />
                  <span className="text-amber-600 flex items-center gap-0.5 font-extrabold">
                    <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" /> 5.0 Google
                  </span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/85 backdrop-blur-md border border-slate-200/90 px-3 py-1.5 rounded-full shadow-xs">
              <button
                onClick={() => handleLinkClick('calculator')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Kalorienrechner
              </button>
              <button
                onClick={() => handleLinkClick('meal-planner')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Ernährungspläne
              </button>
              <button
                onClick={() => handleLinkClick('quiz')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Stoffwechsel-Test
              </button>
              <button
                onClick={() => handleLinkClick('transformations')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Erfolgsberichte
              </button>
              <button
                onClick={() => handleLinkClick('programs')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Beratungsangebote
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Über die Praxis
              </button>
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* WhatsApp Quick Direct Link */}
              <a
                href="https://wa.me/4917630632723?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Ern%C3%A4hrungsberatung%20im%20Ern%C3%A4hrungsTreff%20Lilienthal."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-emerald-700 bg-white/80 hover:bg-emerald-50 border border-slate-200 shadow-2xs hover:shadow-xs transition-all"
                title="Direkt per WhatsApp kontaktieren"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>+49 176 30632723</span>
              </a>

              {/* Termin Buchen Modal Button */}
              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Termin vereinbaren</span>
                </span>
              </button>
            </div>

            {/* Mobile Hamburger & Quick Action Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-xs active:scale-95 transition-transform"
              >
                Termin
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 bg-white/90 border border-slate-200 shadow-xs active:scale-95 transition-transform focus:outline-none"
                aria-label="Menü öffnen"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-extrabold text-xs">
                    ETL
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 font-display text-base">
                      ErnährungsTreff<span className="text-brand-600"> Lilienthal</span>
                    </span>
                    <span className="block text-[11px] text-slate-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-600" /> Zur alten Wörpe 8, Lilienthal
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
                  aria-label="Menü schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Trust Badge Pill */}
              <div className="mt-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span>5.0 Sterne auf Google Maps</span>
                </div>
                <p className="text-[11px] text-emerald-800">
                  Praxis in Lilienthal & bequeme Online-Beratung für die Region Bremen & bundesweit.
                </p>
              </div>

              <div className="py-5 flex flex-col gap-1.5">
                {[
                  { id: 'calculator', label: 'Kalorien- & Makronährstoffrechner', icon: Calculator },
                  { id: 'meal-planner', label: 'Wochenpläne & Vollwert-Rezepte', icon: Utensils },
                  { id: 'quiz', label: '60-Sekunden Stoffwechsel-Test', icon: Sparkles },
                  { id: 'transformations', label: 'Echte Vorher-Nachher-Erfolge', icon: Award },
                  { id: 'programs', label: 'Beratungspakete & Preise', icon: Calendar },
                  { id: 'about', label: 'Über Uns & Praxiskonzept', icon: HeartPulse },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50/80 text-left font-medium text-slate-700 hover:text-brand-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100/70 flex items-center justify-center text-brand-700">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="https://wa.me/4917630632723?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Ern%C3%A4hrungsberatung%20im%20Ern%C3%A4hrungsTreff%20Lilienthal."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 active:scale-98 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +49 176 30632723</span>
              </a>

              <a
                href="tel:+4917630632723"
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 active:scale-98 transition-transform"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Direkt anrufen: 0176 30632723</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 active:scale-98 transition-transform"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Ersttermin anfragen</span>
              </button>

              <div className="text-center text-[10px] text-slate-500 pt-1 flex items-center justify-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>Mo – Fr nach Vereinbarung (auch Spättermine ab 16:00 Uhr)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

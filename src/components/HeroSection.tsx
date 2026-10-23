import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  MessageCircle, 
  MapPin, 
  Heart, 
  Phone, 
  Users,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onNavigate }) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'interactive3d' | 'praxis'>('praxis');

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden mesh-gradient-bg">
      {/* Background organic blur blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/35 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy, Badges, and Action Triggers */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Top Verified Clinic Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-200/90 shadow-xs mb-5 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-500 animate-ping" />
              <span className="text-xs font-bold text-slate-800 tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                <span>Zur alten Wörpe 8, 28865 Lilienthal</span>
                <span className="text-slate-300">•</span>
                <span className="text-brand-800 font-extrabold">ErnährungsTreff</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] mb-4 font-display">
              Schluss mit Diätfrust und{' '}
              <span className="text-brand-600 underline decoration-amber-400 decoration-wavy underline-offset-4">
                Jo-Jo-Effekt.
              </span>{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
                Ernährung, die zu Ihrem Leben passt.
              </span>
            </h1>

            {/* Badge Einzelberatung & Gruppenangebote */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold mb-4 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-amber-600" />
              <span>Individuelle Einzelberatung & inspirierende Gruppenangebote in Lilienthal</span>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              Ohne Shakes, ohne Pillen und ohne quälende Verbote. Im <strong>ErnährungsTreff Lilienthal</strong> begleite ich Sie zu einer gesunden, genussvollen Ernährung – wissenschaftlich fundiert, praxistauglich und genau auf Ihren Stoffwechsel abgestimmt.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-700 via-brand-600 to-emerald-600 text-white font-bold text-base shadow-3d hover:shadow-float hover:-translate-y-0.5 transition-all duration-300 active:scale-98 flex items-center justify-center gap-3 group"
              >
                <span>Ersttermin anfragen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/4917630632723?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Ern%C3%A4hrungsberatung%20im%20Ern%C3%A4hrungsTreff%20Lilienthal."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/95 hover:bg-emerald-50/80 text-slate-800 hover:text-emerald-800 border border-slate-200/90 font-bold text-base shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: +49 176 30632723</span>
              </a>
            </div>

            {/* Micro Benefits & Social Proof from Google Maps */}
            <div className="pt-6 border-t border-slate-200/70 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Google Reviews rating */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
                  G
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-black text-slate-900 ml-1">5.0 / 5.0</span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold">
                    Verifizierte 5-Sterne-Bewertung auf Google Maps
                  </p>
                </div>
              </div>

              {/* Tag Lilienthal & Region Bremen */}
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white/85 px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Praxis in Lilienthal • Region Bremen & Online</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Switcher between 3D Model & Practice Card */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2 mb-4 bg-white/80 p-1.5 rounded-2xl border border-slate-200/80 shadow-2xs backdrop-blur-md">
              <button
                onClick={() => setActiveHeroTab('praxis')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeHeroTab === 'praxis'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                <span>Praxis & Standort</span>
              </button>
              <button
                onClick={() => setActiveHeroTab('interactive3d')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeHeroTab === 'interactive3d'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Interaktives 3D-Bio-Modell</span>
              </button>
            </div>

            {/* Main Interactive Showcase Card */}
            <Card3DTilt maxTilt={5} className="w-full max-w-md sm:max-w-lg">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-float hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                
                {activeHeroTab === 'praxis' ? (
                  /* Practice Identity Card */
                  <div className="space-y-4">
                    {/* Top indicator bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                      <div className="flex items-center gap-2 font-bold text-slate-800">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Offizielle Praxis • ErnährungsTreff</span>
                      </div>
                      <span className="text-[11px] font-extrabold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                        28865 Lilienthal
                      </span>
                    </div>

                    {/* Practice Hero Photo & Map Card */}
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900 to-slate-900 p-6 text-white shadow-inner">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col gap-3">
                        <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold w-fit">
                          <Compass className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Lilienthal bei Bremen</span>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                          ErnährungsTreff Lilienthal
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                          Ganzheitliche Ernährungsberatung & Ernährungstherapie in persönlicher Wohlfühlatmosphäre.
                        </p>

                        <div className="pt-2 flex flex-col gap-2 text-xs">
                          <div className="flex items-center gap-2 text-white/90">
                            <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span className="font-medium">Zur alten Wörpe 8, 28865 Lilienthal</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/90">
                            <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <a href="tel:+4917630632723" className="font-bold hover:underline">
                              +49 176 30632723
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-white/90">
                            <Clock className="w-4 h-4 text-amber-300 flex-shrink-0" />
                            <span>Öffnungszeiten: Termine nach Vereinbarung (auch Spättermine ab 16:00 Uhr)</span>
                          </div>
                        </div>

                        <div className="pt-2 flex items-center gap-2">
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=Ern%C3%A4hrungsTreff+Lilienthal+Zur+alten+W%C3%B6rpe+8+28865+Lilienthal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-emerald-50 transition-colors"
                          >
                            <span>Google Maps Route</span>
                            <ExternalLink className="w-3 h-3 text-slate-600" />
                          </a>

                          <a
                            href="tel:+4917630632723"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            <span>Anrufen</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-600">
                      <div className="flex items-center gap-1.5 text-slate-800 font-bold">
                        <ShieldCheck className="w-4 h-4 text-brand-600" />
                        <span>Qualifizierte Fachpraxis</span>
                      </div>
                      <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md font-bold">
                        Neupatienten willkommen
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Interactive 3D Model View */
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-xs">
                      <span className="font-bold text-slate-800">3D Stoffwechsel-Visualisierung</span>
                      <span className="text-[11px] text-slate-500">Drehbar mit Maus / Touch</span>
                    </div>
                    <Hero3DCanvas />
                  </div>
                )}

              </div>
            </Card3DTilt>

            {/* Highlight Badges placed neatly below the card */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-5 w-full max-w-md sm:max-w-lg">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/80 shadow-2xs text-center hover-lift">
                <span className="text-[10px] font-bold text-slate-500 block uppercase">Konzept</span>
                <span className="text-xs font-extrabold text-brand-800">0% Jo-Jo-Gefahr</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/80 shadow-2xs text-center hover-lift">
                <span className="text-[10px] font-bold text-slate-500 block uppercase">Beratung</span>
                <span className="text-xs font-extrabold text-slate-800">Einzeln & Gruppe</span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/80 shadow-2xs text-center hover-lift">
                <span className="text-[10px] font-bold text-slate-500 block uppercase">Standort</span>
                <span className="text-xs font-extrabold text-slate-800">Zur alten Wörpe 8</span>
              </div>
            </div>

          </div>

        </div>

        {/* Trust Badges Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200/70">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
            Schwerpunkte & Leistungsbereiche im ErnährungsTreff Lilienthal
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-slate-700 font-bold text-xs sm:text-sm">
            {[
              'Wissenschaftlich fundierte Ernährungsberatung',
              'Individuelle Einzelbetreuung & Workshops',
              'Darmgesundheit & Mikrobiom-Aufbau',
              'Nachhaltiger Fettabbau ohne Hungern',
              'Hormonbalance, Schilddrüse & Stoffwechsel',
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/80 px-3.5 py-2 rounded-full border border-slate-200/70 shadow-2xs hover:border-brand-300 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

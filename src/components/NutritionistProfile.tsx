import React, { useState } from 'react';
import { 
  HeartPulse, 
  ArrowRight, 
  MapPin, 
  MessageCircle, 
  ShieldCheck,
  Phone,
  Sparkles
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

export const NutritionistProfile: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [activePillar, setActivePillar] = useState<number>(0);
  const [imgSrc, setImgSrc] = useState('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80');

  const pillars = [
    {
      title: 'Keine Diätpulver oder Ersatzshakes',
      desc: 'Kein Verkauf von überflüssigen Nahrungsergänzungen oder teuren Pülverchen. Sie lernen, wie Sie mit ganz normalen, frischen Lebensmitteln aus dem Markt satt und vital werden.',
      icon: '🥑'
    },
    {
      title: 'Ernährungspsychologie & Genuss ohne Reue',
      desc: 'Wir lösen emotionalen Hunger, Stressessen und das ständige schlechte Gewissen. Essen soll guttun, Freude bereiten und ein Quell von Wohlbefinden sein.',
      icon: '🧠'
    },
    {
      title: 'Darmgesundheit & aktives Mikrobiom',
      desc: 'Rund 70% der Immunabwehr sitzen im Darm. Wir gehen den Ursachen von Blähbauch, Völlegefühl und Unverträglichkeiten auf den Grund, um Entzündungen zu lindern.',
      icon: '🧬'
    },
    {
      title: '100% alltagstauglich & familientauglich',
      desc: 'Ihr Ernährungsplan fügt sich nahtlos in Ihren Berufsalltag, Restaurantbesuche und Familienfeste ein. Nur was realistisch ist, hält ein Leben lang.',
      icon: '🍽️'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & 3D Interactive Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <Card3DTilt maxTilt={6} className="w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-float border border-slate-200/90 bg-slate-900 group hover-lift">
                
                {/* Practice Photo with fallback */}
                <div className="relative h-96 sm:h-[460px] w-full bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">
                  <img
                    src={imgSrc}
                    alt="Ernährungsberatung ErnährungsTreff Lilienthal"
                    onError={() => {
                      setImgSrc('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80');
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  
                  {/* Bottom details */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-600/95 backdrop-blur-sm text-xs font-bold mb-2 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Qualifizierte Ernährungsberatung</span>
                    </div>
                    <h3 className="text-2xl font-black font-display tracking-tight text-white drop-shadow-sm">
                      ErnährungsTreff Lilienthal
                    </h3>
                    <p className="text-xs text-slate-200 font-medium">
                      Praxis für Ernährungsberatung & Ernährungstherapie
                    </p>
                  </div>
                </div>

                {/* Floating Credential Badge */}
                <div className="p-4 bg-white/95 backdrop-blur-md border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <span className="font-bold text-slate-800">Zur alten Wörpe 8, 28865 Lilienthal</span>
                  </div>
                  <span className="text-brand-700 font-black whitespace-nowrap">5.0 ★ Google</span>
                </div>

              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Narrative, Philosophy, and Credentials (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-4 border border-brand-200">
              <HeartPulse className="w-3.5 h-3.5 text-brand-600" />
              <span>Unsere Praxisphilosophie</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-6">
              "Keine einseitigen Verbote. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
                Gemeinsam finden wir Ihren persönlichen Weg."
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              In unserer Praxis <strong>Zur alten Wörpe 8 in Lilienthal</strong> wissen wir, dass jeder Mensch eine ganz persönliche Geschichte mit Lebensmitteln, Wohlbefinden und dem eigenen Körper mitbringt. Viele Klienten kommen nach jahrelangen Diäten enttäuscht zu uns – erschöpft vom Kalorienzählen und dem frustrierenden Jo-Jo-Effekt.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Unser Versprechen: Wir hören Ihnen aufmerksam zu, analysieren Ihren Alltag und begleiten Sie mit wissenschaftlich fundierten, praxiserprobten Strategien. Keine Verbote, keine Wunderpillen – sondern echtes Wissen, darmfreundliche Ernährung und nachhaltiger Genuss.
            </p>

            {/* Philosophy Interactive Pillars */}
            <div className="mb-8">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">
                Die 4 Säulen unseres Konzepts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActivePillar(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      activePillar === idx
                        ? 'border-brand-500 bg-brand-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-lg">{pillar.icon}</span>
                      <h5 className="text-xs font-bold text-slate-900">{pillar.title}</h5>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm active:scale-98"
              >
                <span>Termin in Lilienthal anfragen</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>

              <a
                href="https://wa.me/4917630632723?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Ern%C3%A4hrungsberatung%20im%20Ern%C3%A4hrungsTreff%20Lilienthal."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: +49 176 30632723</span>
              </a>

              <a
                href="tel:+4917630632723"
                className="px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-98"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>0176 30632723</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

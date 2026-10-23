import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  ShieldCheck, 
  MessageCircle, 
  Check, 
  ArrowRight,
  Clock,
  Star
} from 'lucide-react';

export const Footer: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-28 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-800 to-emerald-900 rounded-3xl p-8 sm:p-12 mb-16 border border-emerald-500/25 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/50 inline-block mb-3">
              Kostenlose Ernährungstipps & Rezeptideen
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white mb-3">
              Saisonale Menüs, alltagstaugliche Vollwertrezepte & fundiertes Ernährungswissen
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Tragen Sie sich unverbindlich ein für praktische Impulse zu Darmgesundheit, Stoffwechselaktivierung und Wohlfühlgewicht – 100% spamfrei.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm bg-emerald-900/40 p-3.5 rounded-xl border border-emerald-700/50">
                <Check className="w-5 h-5" />
                <span>Vielen Dank für Ihre Anmeldung! Sie erhalten in Kürze unseren praktischen Einkaufsleitfaden.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Ihre E-Mail-Adresse eingeben"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-500 hover:from-brand-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-98"
                >
                  <span>Kostenlos abonnieren</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14 text-xs sm:text-sm">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-600 flex items-center justify-center text-white font-black text-sm">
                ETL
              </div>
              <span className="text-2xl font-black font-display tracking-tight text-white">
                ErnährungsTreff<span className="text-brand-400"> Lilienthal</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6 text-xs">
              Praxis für individuelle Ernährungsberatung & Ernährungstherapie in Lilienthal (bei Bremen). Schluss mit quälenden Diäten und Jo-Jo-Effekt – für dauerhafte Gesundheit, Vitalität und Leichtigkeit.
            </p>

            {/* Google Rating mini banner */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700 mb-6 max-w-sm">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-200">5.0 auf Google Maps</span>
              <span className="text-slate-400 text-[11px]">• Verifizierte Praxis</span>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://wa.me/4917630632723?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Ern%C3%A4hrungsberatung%20im%20Ern%C3%A4hrungsTreff%20Lilienthal."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                title="WhatsApp Kontakt"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+4917630632723"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"
                title="Praxistelefon anrufen"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ern%C3%A4hrungsTreff+Lilienthal+Zur+alten+W%C3%B6rpe+8+28865+Lilienthal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"
                title="Auf Google Maps ansehen"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Kontakt & Standort Lilienthal */}
          <div>
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs mb-4">Praxisstandort</h4>
            <ul className="space-y-3 text-slate-400 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  ErnährungsTreff Lilienthal <br />
                  Zur alten Wörpe 8 <br />
                  28865 Lilienthal, Deutschland
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+4917630632723" className="hover:text-white transition-colors">
                  Telefon: +49 176 30632723
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/4917630632723?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Ern%C3%A4hrungsberatung%20im%20Ern%C3%A4hrungsTreff%20Lilienthal." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-bold text-emerald-400"
                >
                  WhatsApp: +49 176 30632723
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 border-t border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  Sprechzeiten: <br />
                  <strong>Mo – Fr nach Vereinbarung</strong> <br />
                  <span className="text-[11px] text-slate-500">Auch Spättermine ab 16:00 Uhr möglich</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Schnelle Navigation */}
          <div>
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs mb-4">Themen & Tools</h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-emerald-400 transition-colors">
                  Kalorien- & Makrorechner
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('meal-planner')} className="hover:text-emerald-400 transition-colors">
                  Wochenpläne & Vollwert-Rezepte
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quiz')} className="hover:text-emerald-400 transition-colors">
                  60-Sekunden Stoffwechsel-Test
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transformations')} className="hover:text-emerald-400 transition-colors">
                  Erfahrungsberichte aus der Praxis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-emerald-400 transition-colors">
                  Beratungsangebote & Preise
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors">
                  Über die Praxis & Konzept
                </button>
              </li>
            </ul>
          </div>

          {/* Schwerpunkte */}
          <div>
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs mb-4">Schwerpunkte</h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li>Nachhaltiger Fettabbau ohne Jo-Jo-Effekt</li>
              <li>Darmgesundheit & Reizdarmtherapie</li>
              <li>Ernährungspsychologie & Heißhungerabbau</li>
              <li>Hormone, Wechseljahre & Schilddrüse</li>
              <li>Krankenkassen-Bezuschussung (§ 20/43 SGB V)</li>
              <li>Online-Beratung für die Region Bremen & bundesweit</li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-500" />
            <span>© {new Date().getFullYear()} ErnährungsTreff Lilienthal • Alle Rechte vorbehalten.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Datenschutz (DSGVO)</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Cookie-Einstellungen</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

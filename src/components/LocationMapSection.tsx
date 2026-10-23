import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ExternalLink, 
  Navigation, 
  Star, 
  Calendar,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

interface LocationMapSectionProps {
  onOpenBooking: () => void;
}

export const LocationMapSection: React.FC<LocationMapSectionProps> = ({ onOpenBooking }) => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Ern%C3%A4hrungsTreff+Lilienthal+Zur+alten+W%C3%B6rpe+8+28865+Lilienthal";
  const embedMapUrl = "https://maps.google.com/maps?q=Zur%20alten%20W%C3%B6rpe%208,%2028865%20Lilienthal,%20Germany&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location-map" className="py-20 lg:py-28 bg-[#fafaf8] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-3 border border-brand-200">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Praxisstandort & Anfahrt</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
            Besuchen Sie uns im <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
              ErnährungsTreff Lilienthal
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Ruhig und verkehrsgünstig gelegen in Lilienthal (bei Bremen). Kostenfreie Parkplätze direkt vor Ort vorhanden. Termine nach individueller Vereinbarung – auch bequem am späten Nachmittag.
          </p>
        </div>

        {/* Map & Practice Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/90 shadow-soft flex flex-col justify-between">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden border border-slate-100 bg-slate-100">
              <iframe
                title="Google Maps Standort ErnährungsTreff Lilienthal"
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Floating Top Badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200/80 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5 pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-600 animate-pulse" />
                <span>Zur alten Wörpe 8, 28865 Lilienthal</span>
              </div>
            </div>

            {/* Quick Map Action Bar */}
            <div className="pt-3 px-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 font-medium flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-brand-600" />
                <span>Plus Code: <strong>5W78+G3 Lilienthal, Germany</strong></span>
              </span>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors active:scale-98"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-300" />
                <span>In Google Maps öffnen & Route planen</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Practice Information & Contact Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Card3DTilt maxTilt={5} className="h-full">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft h-full flex flex-col justify-between">
                
                <div>
                  {/* Top Rating Badge */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-black text-slate-900 ml-1.5">5.0 / 5.0</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Verifizierter Standort
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-display mb-1">
                    ErnährungsTreff Lilienthal
                  </h3>
                  <p className="text-xs text-brand-700 font-bold mb-6">
                    Praxis für Ernährungsberatung & Ernährungstherapie
                  </p>

                  {/* Information list */}
                  <div className="space-y-4 text-xs sm:text-sm">
                    
                    {/* Address */}
                    <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Adresse</span>
                        <p className="font-bold text-slate-900">Zur alten Wörpe 8</p>
                        <p className="text-slate-600">28865 Lilienthal, Deutschland</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Telefon / WhatsApp</span>
                        <a href="tel:+4917630632723" className="font-bold text-slate-900 hover:text-brand-700 transition-colors block">
                          +49 176 30632723
                        </a>
                        <span className="text-[11px] text-slate-500">Direkter Anruf & WhatsApp möglich</span>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Sprechzeiten</span>
                        <p className="font-bold text-slate-900">Montag bis Freitag</p>
                        <p className="text-slate-600">Individuelle Termine nach Vereinbarung</p>
                        <span className="text-[11px] text-amber-700 font-bold block mt-0.5">
                          • Auch Spättermine ab 16:00 Uhr für Berufstätige
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-6 mt-6 border-t border-slate-100 space-y-2.5">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-700 via-brand-600 to-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Termin in der Praxis Lilienthal vereinbaren</span>
                  </button>

                  <a
                    href="https://wa.me/4917630632723?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20einen%20Ern%C3%A4hrungsberatungstermin%20im%20Ern%C3%A4hrungsTreff%20Lilienthal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Per WhatsApp kontaktieren</span>
                  </a>
                </div>

              </div>
            </Card3DTilt>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Check, Zap, ArrowRight, Star, MessageCircle, ShieldCheck } from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

interface ServicesPricingProps {
  onOpenBooking: () => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState<'full' | 'monthly'>('full');

  const plans = [
    {
      id: 'erstberatung',
      name: 'Erstberatung & Anamnese',
      popular: false,
      tag: 'Der optimale Start',
      priceFull: '69 €',
      priceMonthly: '69 €',
      duration: '70 Minuten Intensiv-Termin',
      description: 'Ideal für eine gründliche Bestandsaufnahme, Besprechung von Blutwerten und erste konkrete Schritte für Ihren Alltag.',
      features: [
        '70-minütige Einzelsitzung (Vor Ort in Lilienthal oder per Video)',
        'Detaillierte Ernährungs- & Lebensstilanalyse',
        'Durchsicht vorhandener Labor- & Blutwerte',
        'Erster konkreter, alltagstauglicher Ernährungsleitfaden',
        'Einkaufsratgeber & Orientierungshilfe für Lebensmittel',
        'Präventionsbescheinigung für die Krankenkasse möglich',
      ],
      cta: 'Erstberatung anfragen'
    },
    {
      id: 'programm12',
      name: '12-Wochen-Ernährungsprogramm',
      popular: true,
      tag: 'Praxis-Favorit',
      priceFull: '295 €',
      priceMonthly: '105 €/Monat',
      duration: '3 Monate persönliche Begleitung (6 Termine)',
      description: 'Unser bewährtes Programm für nachhaltige Gewichtsreduktion, Abbau von Heißhunger und dauerhafte Festigung neuer Gewohnheiten.',
      features: [
        'Inklusive ausführlicher 70-Minuten Erstberatung',
        '5 Folgetermine zur kontinuierlichen Feinabstimmung',
        'WhatsApp-Begleitung bei Fragen im Alltag oder beim Einkauf',
        'Flexible Mahlzeitenpläne & leckere Vollwert-Rezepte',
        'Strategien gegen emotionalen Hunger & Stressessen',
        'Konzept gegen Jo-Jo-Effekt für lebenslanges Wohlfühlgewicht',
      ],
      cta: '12-Wochen-Programm starten'
    },
    {
      id: 'darm_therapie',
      name: 'Darmgesundheit & Stoffwechsel',
      popular: false,
      tag: 'Bei Beschwerden',
      priceFull: '485 €',
      priceMonthly: '165 €/Monat',
      duration: '4 Monate gezielte Therapiebegleitung',
      description: 'Intensives Konzept bei Reizdarm, chronischem Blähbauch, Nahrungsmittelunverträglichkeiten oder hormonellen Disbalancen.',
      features: [
        'Umfasst alle Leistungen des 12-Wochen-Programms',
        '3-Phasen-Konzept: Entlastung, Darmsanierung & schonende Reintegration',
        'Unterstützung bei Fruktose-, Laktose- oder Histaminintoleranz',
        'Evidenzbasierte Empfehlungen zu Prä- & Probiotika',
        'Prioritärer WhatsApp-Kontakt bei akuten Beschwerden',
        'Abstimmung mit Ihrem behandelnden Haus- oder Facharzt',
      ],
      cta: 'Darm-Therapie anfragen'
    }
  ];

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#fafaf8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-3 border border-brand-200">
            <Zap className="w-3.5 h-3.5 text-brand-600" />
            <span>Transparente Beratungsangebote</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
            Ernährungsberatung & Begleitung <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
              Genau auf Ihre Ziele abgestimmt
            </span>
          </h2>
          <p className="text-slate-600 text-base">
            Keine Knebelverträge, keine verpflichtenden Zusatzprodukte. Gesetzliche Krankenkassen bezuschussen zertifizierte Ernährungsberatung häufig mit <strong>bis zu 80–100 %</strong> nach § 20 / § 43 SGB V.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-2 bg-slate-200/80 p-1 rounded-full mt-8">
            <button
              onClick={() => setBillingCycle('full')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'full' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Einmalzahlung (mit Preisvorteil)
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bequeme Ratenzahlung (monatlich)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <Card3DTilt key={plan.id} maxTilt={6} className="h-full">
              <div
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover-lift ${
                  plan.popular
                    ? 'bg-white border-2 border-brand-600 shadow-3d lg:-translate-y-2'
                    : 'bg-white/95 border border-slate-200/90 shadow-soft'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-700 to-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>{plan.tag}</span>
                  </div>
                )}

                <div>
                  {!plan.popular && (
                    <span className="inline-block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      {plan.tag}
                    </span>
                  )}

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-brand-700 font-bold mb-4">
                    {plan.duration}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-4 pb-4 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 font-display tracking-tight">
                      {billingCycle === 'full' ? plan.priceFull : plan.priceMonthly}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      {billingCycle === 'monthly' && plan.id !== 'erstberatung' ? ' / Monat' : ' inkl. MwSt.'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-brand-700 to-emerald-600 text-white hover:shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/4917630632723?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20folgendes%20Angebot:%20${encodeURIComponent(plan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition-colors flex items-center justify-center gap-1.5 active:scale-98"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Fragen unkompliziert per WhatsApp</span>
                  </a>
                </div>

              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Krankenkassen Hinweis Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Krankenkassen-Zuschuss möglich (§ 20 / § 43 SGB V)</h4>
              <p className="text-xs text-slate-600">
                Viele gesetzliche & private Kassen (Techniker, Barmer, AOK, DAK etc.) erstatten einen Großteil der Kosten. Sprechen Sie uns gerne an!
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-xs font-bold hover:bg-emerald-100 transition-colors whitespace-nowrap active:scale-98"
          >
            Jetzt unverbindlich anfragen
          </button>
        </div>

      </div>
    </section>
  );
};

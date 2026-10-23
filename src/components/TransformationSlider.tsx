import React, { useState } from 'react';
import { 
  Award, 
  ArrowLeftRight, 
  ChevronRight, 
  Quote
} from 'lucide-react';

interface CaseStudy {
  id: string;
  name: string;
  age: number;
  location: string;
  condition: string;
  duration: string;
  beforeImg: string;
  afterImg: string;
  metrics: { label: string; before: string; after: string; delta: string }[];
  quote: string;
  protocol: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'sabine',
    name: 'Sabine K.',
    age: 38,
    location: 'Lilienthal',
    condition: 'Dauerhafter Gewichtsverlust & Ende des Jo-Jo-Effekts',
    duration: '14 Wochen',
    beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Körpergewicht', before: '83.5 kg', after: '68.2 kg', delta: '-15.3 kg' },
      { label: 'Nüchtern-Insulin', before: '17.5 µU/ml', after: '5.6 µU/ml', delta: '-68%' },
      { label: 'Taillenumfang', before: '95 cm', after: '77 cm', delta: '-18 cm' },
    ],
    quote: "Ich hatte jahrelang eine Diät nach der anderen gemacht – immer mit Verzicht und anschließendem Jo-Jo-Effekt. Im ErnährungsTreff Lilienthal habe ich endlich gelernt, satt zu werden, ohne Verbote zu leben und meinen Körper zu verstehen. Die beste Entscheidung meines Lebens!",
    protocol: 'Alltagstaugliche Vollwerternährung, sättigende Proteinkombinationen & achtsame Regulierung von Heißhunger.'
  },
  {
    id: 'michael',
    name: 'Michael B.',
    age: 46,
    location: 'Lilienthal / Raum Bremen',
    condition: 'Senkung von Blutfettwerten & viszeralem Bauchfett',
    duration: '12 Wochen',
    beforeImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Viszeralfett-Level', before: 'Stufe 13', after: 'Stufe 7', delta: '-46%' },
      { label: 'Triglyceride', before: '238 mg/dl', after: '96 mg/dl', delta: '-60%' },
      { label: 'Blutdruck', before: '142/92', after: '118/76', delta: 'Normal' },
    ],
    quote: "Mein Hausarzt war bei der letzten Blutkontrolle begeistert. Ich habe nicht nur zwei Hosengrößen weniger, sondern fühle mich nach dem Essen nicht mehr träge und habe wieder volle Energie für Sport und Familie.",
    protocol: 'Austausch von hochverarbeiteten Lebensmitteln gegen frische Vollwertkost, gezielte Omega-3-Strategie und strukturierter Mahlzeitenrhythmus.'
  },
  {
    id: 'sandra',
    name: 'Sandra M.',
    age: 31,
    location: 'Lilienthal',
    condition: 'Chronischer Blähbauch, Reizdarm & hormonelle Dysbalance',
    duration: '10 Wochen',
    beforeImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Bauchbeschwerden', before: '9 / 10', after: '1 / 10', delta: 'Gelöst' },
      { label: 'Zykluslänge', before: '55-65 Tage', after: '29 Tage', delta: 'Regulär' },
      { label: 'Energie & Wohlbefinden', before: 'Erschöpft', after: 'Vital', delta: '+100%' },
    ],
    quote: "Mein Bauch war abends so aufgebläht, dass ich keine normale Hose mehr tragen konnte. Durch die gezielte Darmanalyse und schonende Ernährungsumstellung im ErnährungsTreff habe ich endlich wieder ein leichtes, freies Bauchgefühl!",
    protocol: 'Gezieltes FODMAP-Stufenkonzept, Darmschleimhaut-Regeneration & mikrobiomfreundliche Ballaststoffzufuhr.'
  }
];

export const TransformationSlider: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [activeStudyIndex, setActiveStudyIndex] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50); // 0 to 100%

  const current = caseStudies[activeStudyIndex];

  return (
    <section id="transformations" className="py-20 lg:py-28 bg-[#fafaf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-3 border border-brand-200">
            <Award className="w-3.5 h-3.5 text-brand-600" />
            <span>Erfahrungsberichte aus der Praxis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
            Echte Klienten. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
              Dauerhafte Ergebnisse ohne Jo-Jo-Effekt
            </span>
          </h2>
          <p className="text-slate-600 text-base">
            Wir messen Erfolg nicht allein in Kilogramm auf der Waage, sondern an Laborwerten, Vitalität, Körperzusammensetzung und wie frei und wohl Sie sich in Ihrem Körper fühlen.
          </p>
        </div>

        {/* Case Study Selection Pills */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => {
                setActiveStudyIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-95 ${
                activeStudyIndex === idx
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cs.name} ({cs.duration})
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft">
          
          {/* Left Column: Interactive Before/After Split Image (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="relative w-full max-w-md h-80 sm:h-96 rounded-2xl overflow-hidden select-none shadow-md border border-slate-200">
              
              {/* After Image (Full background) */}
              <img
                src={current.afterImg}
                alt="Nach der Betreuung im ErnährungsTreff"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={current.beforeImg}
                  alt="Vor der Betreuung"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%', objectPosition: 'left center' }}
                />
              </div>

              {/* Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center -ml-3.5 border border-slate-200">
                  <ArrowLeftRight className="w-4 h-4 text-brand-600" />
                </div>
              </div>

              {/* Slider Input overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                aria-label="Schieberegler zum Vergleichen von Vorher und Nachher"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                Vorher
              </div>
              <div className="absolute top-3 right-3 bg-brand-600/90 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                Nachher
              </div>
            </div>

            <p className="text-xs text-slate-500 font-semibold mt-3 text-center">
              ↔ Regler mit Maus oder Finger ziehen für den direkten Vergleich
            </p>

          </div>

          {/* Right Column: Clinical Metrics and Patient Narrative (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-brand-800 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                  {current.condition} • {current.duration}
                </span>
                <span className="text-xs text-slate-500 font-bold">{current.location}</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 font-display mb-3">
                {current.name}, {current.age} Jahre
              </h3>

              {/* Quote */}
              <div className="relative p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 mb-6">
                <Quote className="w-6 h-6 text-emerald-400 absolute top-2 right-3 opacity-40" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed relative z-10">
                  "{current.quote}"
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover-lift">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block mb-0.5">
                      {m.label}
                    </span>
                    <div className="text-xs text-slate-400 line-through font-semibold mb-0.5">
                      {m.before}
                    </div>
                    <div className="text-sm font-black text-slate-900 font-display">
                      {m.after}
                    </div>
                    <span className="inline-block mt-1 text-[10px] font-black text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                      {m.delta}
                    </span>
                  </div>
                ))}
              </div>

              {/* Clinical Protocol */}
              <div className="text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">Angewandtes Konzept:</span>
                <p>{current.protocol}</p>
              </div>

            </div>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
            >
              <span>Ähnliche Ergebnisse erreichen – Ersttermin anfragen</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

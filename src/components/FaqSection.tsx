import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  {
    category: 'Ernährung & Alltag',
    question: 'Muss ich mein Essen abwiegen oder mein Leben lang Kalorien zählen?',
    answer: 'Ganz klar: Nein. Unser Ziel im ErnährungsTreff Lilienthal ist eine intuitive und alltagstaugliche Ernährungsweise. Wir nutzen einfache visuelle Orientierungshilfen (wie das Tellermodell und Handportionen), damit Sie ein natürliches Gefühl für Portionsgrößen entwickeln – ganz ohne Küchenwaage oder Tracking-Stress.'
  },
  {
    category: 'Standort & Termine',
    question: 'Wo genau befindet sich die Praxis und gibt es auch Online-Beratung?',
    answer: 'Unsere Praxis befindet sich in Lilienthal (bei Bremen) unter der Adresse Zur alten Wörpe 8, 28865 Lilienthal. Es stehen gute Park- und Anfahrtsmöglichkeiten zur Verfügung. Sollten Sie von weiter her kommen oder beruflich eingespannt sein, bieten wir alle Beratungstermine auch flexibel per Video-Sprechstunde an.'
  },
  {
    category: 'Krankenkassen & Kosten',
    question: 'Bezuschussen gesetzliche oder private Krankenkassen die Beratung?',
    answer: 'Ja! Als qualifizierte Ernährungsfachkraft stellen wir Ihnen nach Abschluss die Unterlagen für die Krankenkasse (§ 20 / § 43 SGB V) aus. Die meisten gesetzlichen Krankenkassen (wie Techniker, Barmer, AOK, DAK, IKK etc.) sowie private Beihilfen erstatten zwischen 70% und 100% der Kosten.'
  },
  {
    category: 'Ernährung & Alltag',
    question: 'Werden mir Shakes, Diätpillen oder Abnehmprodukte verkauft?',
    answer: 'Niemals. Im ErnährungsTreff Lilienthal setzen wir zu 100% auf vollwertige, echte Lebensmittel aus dem Supermarkt oder vom regionalen Wochenmarkt. Wir verkaufen keine Pülverchen, Fettblocker oder Ersatzmahlzeiten.'
  },
  {
    category: 'Begleitung & Support',
    question: 'Wie funktioniert die persönliche WhatsApp-Begleitung zwischen den Terminen?',
    answer: 'In unseren mehrwöchigen Beratungspaketen haben Sie einen direkten WhatsApp-Kanal zu uns. Stehen Sie im Supermarkt und sind bei einer Zutatenliste unsicher, oder sind Sie am Wochenende zum Essen eingeladen? Sie können jederzeit unkompliziert Fragen stellen und erhalten zeitnah Orientierung.'
  },
  {
    category: 'Darm & Gesundheit',
    question: 'Ich leide unter ständigem Blähbauch, Völlegefühl oder Reizdarmsymptomen – wie wird mir geholfen?',
    answer: 'Darmgesundheit ist eines unserer Kerngebiete. Wir führen eine ausführliche Symptomanalyse durch, prüfen Ernährungsprotokolle und bestehende Befunde und etablieren ein schonendes Stufenkonzept (FODMAP-orientiert, Schleimhautberuhigung und gezielte Mikrobiom-Stärkung), um die Beschwerden an der Wurzel zu packen.'
  }
];

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['Alle', 'Ernährung & Alltag', 'Standort & Termine', 'Begleitung & Support', 'Darm & Gesundheit', 'Krankenkassen & Kosten'];

  const filtered = selectedCategory === 'Alle' 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#fafaf8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-3 border border-brand-200">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            <span>Häufige Fragen & Antworten</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display mb-3">
            Fragen & Antworten (FAQ)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Wissenswertes rund um Ihren Termin, das Praxiskonzept und die Krankenkassen-Bezuschussung im ErnährungsTreff Lilienthal.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all hover-lift"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {item.question}
                  </span>
                  <div className={`p-1 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-100 text-brand-700' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3 animate-fadeIn font-medium">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

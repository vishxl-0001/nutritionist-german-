import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Award,
  MessageCircle
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

interface AssessmentQuizProps {
  onOpenBooking: () => void;
}

export const AssessmentQuiz: React.FC<AssessmentQuizProps> = ({ onOpenBooking }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleSelectOption = (step: number, option: string) => {
    const updated = { ...answers, [step]: option };
    setAnswers(updated);

    if (step < 3) {
      setCurrentStep(step + 1);
    } else {
      setIsFinished(true);
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#22c55e', '#16a34a', '#fbbf24', '#38bdf8']
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentStep(1);
    setIsFinished(false);
  };

  return (
    <section id="quiz" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-3 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Kostenloser Schnell-Check (60 Sekunden)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display mb-3">
            Ermitteln Sie Ihr persönliches <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
              Stoffwechsel- & Ernährungsprofil
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Beantworten Sie 3 gezielte Fragen, um herauszufinden, was Ihren Stoffwechsel bisher ausgebremst hat, und erhalten Sie eine professionelle Ersteinschätzung.
          </p>
        </div>

        {/* Quiz Container with 3D feel */}
        <Card3DTilt maxTilt={5} className="w-full">
          <div className="bg-gradient-to-b from-white to-slate-50/70 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-3d">
            
            {!isFinished ? (
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                    Frage {currentStep} von 3
                  </span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentStep === step ? 'w-8 bg-brand-600' : currentStep > step ? 'w-4 bg-emerald-400' : 'w-4 bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Frage 1 */}
                {currentStep === 1 && (
                  <div className="animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 font-display">
                      Was ist Ihr wichtigstes Anliegen oder die größte Hürde?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: 'Hartnäckiges Gewicht & Jo-Jo-Effekt', desc: 'Frühere Crash-Diäten haben den Stoffwechsel verlangsamt', icon: '🔥' },
                        { title: 'Blähbauch, Völlegefühl & Darmträgheit', desc: 'Häufiges Druckgefühl im Bauch und Unverträglichkeiten', icon: '🥑' },
                        { title: 'Leistungstiefs & Heißhunger auf Süßes', desc: 'Ständige Müdigkeit am Nachmittag und unkontrollierte Gelüste', icon: '⚡' },
                        { title: 'Hormone, Schilddrüse oder Wechseljahre', desc: 'Gewichtszunahme trotz scheinbar gesunder Ernährung', icon: '🌸' },
                      ].map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectOption(1, opt.title)}
                          className="p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 bg-white text-left transition-all duration-200 group flex items-start gap-3.5 shadow-2xs active:scale-98"
                        >
                          <span className="text-2xl p-2 rounded-xl bg-slate-50 group-hover:bg-brand-100 transition-colors">
                            {opt.icon}
                          </span>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                              {opt.title}
                            </p>
                            <p className="text-[11px] text-slate-500 leading-tight">
                              {opt.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Frage 2 */}
                {currentStep === 2 && (
                  <div className="animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 font-display">
                      Wie fühlt sich Ihr Körper typischerweise 1–2 Stunden nach dem Essen an?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: 'Bleierne Müdigkeit & Verlangen nach Süßem', desc: 'Zeichen für rasche Blutzuckerspitzen und anschließenden Absturz', icon: '🥱' },
                        { title: 'Aufgeblähter Bauch, Völle oder Trägheit', desc: 'Möglicher Hinweis auf Fehlgärung oder unausgewogenes Mikrobiom', icon: '🫧' },
                        { title: 'Wieder hungrig, als hätte man nichts gegessen', desc: 'Mangel an sättigenden Nährstoffen oder hormonelle Fehlsignale', icon: '🍽️' },
                        { title: 'Angenehm satt, energiegeladen & klar im Kopf', desc: 'Optimale Verträglichkeit und ausgewogene Mahlzeitenzusammenstellung', icon: '✨' },
                      ].map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectOption(2, opt.title)}
                          className="p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 bg-white text-left transition-all duration-200 group flex items-start gap-3.5 shadow-2xs active:scale-98"
                        >
                          <span className="text-2xl p-2 rounded-xl bg-slate-50 group-hover:bg-brand-100 transition-colors">
                            {opt.icon}
                          </span>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                              {opt.title}
                            </p>
                            <p className="text-[11px] text-slate-500 leading-tight">
                              {opt.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Frage 3 */}
                {currentStep === 3 && (
                  <div className="animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 font-display">
                      Wie würden Sie Ihr aktuelles Verhältnis zum Essen beschreiben?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: 'Kreislauf aus Verzicht und emotionalem Essen', desc: 'Ständige Gedanken ans Essen, gefolgt von Frust und Schuldgefühlen', icon: '🌙' },
                        { title: 'Angst vor Kohlenhydraten oder bestimmten Speisen', desc: 'Vermeintliche Diät-Regeln schränken die Lebensfreude ein', icon: '📉' },
                        { title: 'Ich esse eigentlich gesund, aber der Körper reagiert nicht', desc: 'Es fehlt der rote Faden, der zu Ihrem individuellen Stoffwechsel passt', icon: '🥗' },
                        { title: 'Zeitdruck, Berufsstress & unregelmäßige Mahlzeiten', desc: 'Im Alltagstrubel bleibt die gesunde Ernährung oft auf der Strecke', icon: '🥡' },
                      ].map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectOption(3, opt.title)}
                          className="p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 bg-white text-left transition-all duration-200 group flex items-start gap-3.5 shadow-2xs active:scale-98"
                        >
                          <span className="text-2xl p-2 rounded-xl bg-slate-50 group-hover:bg-brand-100 transition-colors">
                            {opt.icon}
                          </span>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                              {opt.title}
                            </p>
                            <p className="text-[11px] text-slate-500 leading-tight">
                              {opt.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : (
              /* Instant Result Card */
              <div className="animate-fadeIn text-center sm:text-left">
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-700 to-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-500/30">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Ersteinschätzung ausgewertet</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 font-display">
                      Profil: Verlangsamter Stoffwechsel & Diätmüdigkeit
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Ihre Antworten deuten auf einen durch frühere Einschränkungen gedrosselten Grundumsatz hin, begleitet von Blutzuckerschwankungen und unruhiger Verdauung.
                    </p>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-left hover-lift">
                    <span className="text-[11px] font-bold text-brand-800 uppercase block mb-1">Schritt 1</span>
                    <p className="text-xs font-bold text-slate-800 mb-1">Schluss mit Verzicht</p>
                    <p className="text-[11px] text-slate-600">Ausreichend vollwertige Lebensmittel essen, um den Stoffwechsel wieder hochzufahren.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-100 text-left hover-lift">
                    <span className="text-[11px] font-bold text-amber-800 uppercase block mb-1">Schritt 2</span>
                    <p className="text-xs font-bold text-slate-800 mb-1">Darmberuhigung</p>
                    <p className="text-[11px] text-slate-600">Darmfreundliche Lebensmittel einführen, um Gärungsprozesse und Blähungen zu stoppen.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-100 text-left hover-lift">
                    <span className="text-[11px] font-bold text-teal-800 uppercase block mb-1">Schritt 3</span>
                    <p className="text-xs font-bold text-slate-800 mb-1">Blutzucker-Balance</p>
                    <p className="text-[11px] text-slate-600">Kluge Kombinationen aus Ballaststoffen und Proteinen gegen Energielöcher.</p>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-700 via-brand-600 to-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span>Ergebnis im Erstgespräch besprechen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/4917630632723?text=Hallo,%20ich%20habe%20den%20Ern%C3%A4hrungs-Check%20auf%20Ihrer%20Website%20gemacht%20und%20m%C3%B6chte%20gerne%20einen%20Beratungstermin%20anfragen."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors flex items-center justify-center gap-2 active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Per WhatsApp nachfragen</span>
                  </a>

                  <button
                    onClick={restartQuiz}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors flex items-center justify-center gap-2 active:scale-98"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Test wiederholen</span>
                  </button>
                </div>

              </div>
            )}

          </div>
        </Card3DTilt>

      </div>
    </section>
  );
};

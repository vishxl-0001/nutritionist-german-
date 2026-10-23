import React, { useState } from 'react';
import { 
  X, 
  Video, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  CalendarCheck,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [format, setFormat] = useState<string>('in_person');
  const [selectedDate, setSelectedDate] = useState<string>('Morgen');
  const [selectedTime, setSelectedTime] = useState<string>('16:00');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Nachhaltiger Fettabbau & Ende des Jo-Jo-Effekts',
    notes: ''
  });

  if (!isOpen) return null;

  const dates = [
    { label: 'Morgen', day: 'Nächster Termin', slots: '2 freie Plätze' },
    { label: 'Übermorgen', day: 'In 48 Std.', slots: '3 freie Plätze' },
    { label: 'Donnerstag', day: 'Diese Woche', slots: '4 freie Plätze' },
    { label: 'Freitag', day: 'Diese Woche', slots: '1 freier Platz' },
    { label: 'Nächste Woche', day: 'Montag', slots: '5 freie Plätze' },
  ];

  const timeSlots = [
    '09:30',
    '11:00',
    '14:00',
    '16:00',
    '17:30',
    '19:00'
  ];

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  const formatLabels: Record<string, string> = {
    in_person: 'Vor Ort in Lilienthal (Zur alten Wörpe 8)',
    virtual: 'Online-Videoberatung (Region Bremen & bundesweit)',
    couple: 'Paar- oder Familienberatung'
  };

  const whatsappMessage = `Hallo, ich habe eine Terminanfrage über die Website gestellt:
- Name: ${formData.name}
- Beratungsart: ${formatLabels[format] || format}
- Wunschtermin: ${selectedDate} um ${selectedTime} Uhr
- Telefon: ${formData.phone}
- Anliegen: ${formData.goal}`;

  const whatsappUrl = `https://wa.me/4917630632723?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
              ETL
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 font-display">Beratungstermin anfragen</h3>
              <p className="text-xs text-slate-500 font-semibold">ErnährungsTreff Lilienthal • Zur alten Wörpe 8</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors active:scale-95"
            aria-label="Modal schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {/* Step 1: Format */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-4">
                Schritt 1: Wählen Sie die Beratungsform
              </h4>
              <div className="space-y-3 mb-6">
                {[
                  {
                    id: 'in_person',
                    title: 'Persönlich in der Praxis in Lilienthal',
                    sub: 'Zur alten Wörpe 8, 28865 Lilienthal (gute Parkmöglichkeiten)',
                    icon: MapPin,
                    badge: 'Praxis vor Ort'
                  },
                  {
                    id: 'virtual',
                    title: 'Bequeme Online-Videoberatung',
                    sub: 'Von zu Hause via Video, mit genau der gleichen Betreuungsqualität',
                    icon: Video,
                    badge: 'Sehr flexibel'
                  },
                  {
                    id: 'couple',
                    title: 'Paar- oder Familienberatung',
                    sub: 'Gemeinsam gesunde Alltagsroutinen und Wohlfühlrezepte etablieren',
                    icon: Users,
                    badge: '2 Personen'
                  }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setFormat(item.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between active:scale-98 ${
                        format === item.id
                          ? 'border-brand-500 bg-brand-50/70 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2.5 rounded-xl mt-0.5 ${
                          format === item.id ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{item.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">{item.sub}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-brand-800 bg-brand-100 px-2 py-0.5 rounded-full ml-2 flex-shrink-0">
                        {item.badge}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
              >
                <span>Weiter zur Terminauswahl</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-4">
                Schritt 2: Wählen Sie Ihren Wunschzeitraum
              </h4>

              {/* Day selection */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                {dates.map((d, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDate(d.label)}
                    className={`p-3 rounded-2xl text-left border transition-all active:scale-98 ${
                      selectedDate === d.label
                        ? 'border-brand-500 bg-brand-50/80 text-brand-950 font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <p className="text-xs font-bold">{d.label}</p>
                    <p className="text-[11px] text-slate-500">{d.day}</p>
                    <span className="inline-block mt-1 text-[9px] font-black text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                      {d.slots}
                    </span>
                  </button>
                ))}
              </div>

              {/* Time selection */}
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Bevorzugte Uhrzeit (Mo – Fr, auch Spättermine)
              </label>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {timeSlots.map((time, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all active:scale-98 ${
                      selectedTime === time
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {time} Uhr
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 active:scale-98"
                >
                  Zurück
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>Weiter zu Ihren Kontaktdaten</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Patient Form */}
          {step === 3 && (
            <form onSubmit={handleComplete} className="animate-fadeIn space-y-4">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                Schritt 3: Ihre Kontaktdaten
              </h4>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Vor- und Nachname *</label>
                <input
                  type="text"
                  required
                  placeholder="z. B. Sabine Meyer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Telefonnummer (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="z. B. 0176 12345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">E-Mail-Adresse *</label>
                  <input
                    type="email"
                    required
                    placeholder="ihre-email@beispiel.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Hauptanliegen der Beratung</label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-500 bg-white"
                >
                  <option>Nachhaltiger Fettabbau & Ende des Jo-Jo-Effekts</option>
                  <option>Darmgesundheit: Blähbauch, Reizdarm oder Unverträglichkeiten</option>
                  <option>Hormonelle Balance: Schilddrüse, Zyklus oder Wechseljahre</option>
                  <option>Ernährungspsychologie: Heißhunger & Stressessen</option>
                  <option>Sport- & Leistungsoptimierung</option>
                  <option>Familienernährung & Kinder</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Anmerkungen oder vorliegende Diagnosen (optional)</label>
                <textarea
                  rows={2}
                  placeholder="Beschreiben Sie kurz Ihr Anliegen oder ob bereits ärztliche Befunde vorliegen..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 active:scale-98"
                >
                  Zurück
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-700 to-emerald-600 hover:from-brand-800 hover:to-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm active:scale-98"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Terminanfrage unverbindlich absenden</span>
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Success & WhatsApp Direct Trigger */}
          {step === 4 && (
            <div className="animate-fadeIn text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-black text-slate-900 font-display mb-1">
                Terminanfrage erfolgreich erhalten!
              </h4>
              <p className="text-xs text-slate-600 mb-6 max-w-sm mx-auto">
                Vielen Dank! Wir haben Ihre Wunschangaben vermerkt und melden uns zeitnah per Telefon oder WhatsApp zur finalen Terminbestätigung.
              </p>

              {/* Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs mb-6 space-y-1.5">
                <p><strong className="text-slate-800">Name:</strong> {formData.name}</p>
                <p><strong className="text-slate-800">Beratung:</strong> {formatLabels[format]}</p>
                <p><strong className="text-slate-800">Wunschzeit:</strong> {selectedDate} um {selectedTime} Uhr</p>
                <p><strong className="text-slate-800">Telefon:</strong> {formData.phone}</p>
                <p><strong className="text-slate-800">Praxis:</strong> ErnährungsTreff Lilienthal (Zur alten Wörpe 8)</p>
              </div>

              {/* Direct WhatsApp button */}
              <div className="space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direkt per WhatsApp bestätigen (+49 176 30632723)</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold"
                >
                  Fenster schließen
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

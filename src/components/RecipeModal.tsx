import React from 'react';
import { X, Clock, Flame, Users, Sparkles, Check, ChefHat, ShieldCheck, Heart } from 'lucide-react';

export interface RecipeData {
  id: string;
  name: string;
  category: string;
  image: string;
  time: string;
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
  description: string;
  benefits: string[];
  ingredients: string[];
  instructions: string[];
  micronutrients: { label: string; amount: string; dv: string }[];
}

interface RecipeModalProps {
  recipe: RecipeData | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  const [checkedIngredients, setCheckedIngredients] = React.useState<Record<number, boolean>>({});

  if (!recipe) return null;

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col">
        
        {/* Header Image with Floating Close Button */}
        <div className="relative h-56 sm:h-72 w-full flex-shrink-0">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 backdrop-blur-md shadow-md transition-all active:scale-95"
            aria-label="Rezept schließen"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              {recipe.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-display leading-tight">{recipe.name}</h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
              <Flame className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Kalorien</span>
                <span className="text-base font-black text-slate-900 font-display">{recipe.calories} kcal</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-100 flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-600" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Zubereitung</span>
                <span className="text-base font-black text-slate-900 font-display">{recipe.time}</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-teal-50 border border-teal-100 flex items-center gap-3">
              <Users className="w-5 h-5 text-teal-600" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Portionen</span>
                <span className="text-base font-black text-slate-900 font-display">{recipe.servings} Person</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-purple-50 border border-purple-100 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Eiweiß</span>
                <span className="text-base font-black text-slate-900 font-display">{recipe.protein}g</span>
              </div>
            </div>
          </div>

          {/* Ernährungsphysiologische Vorteile */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              Gesundheitlicher Mehrwert & Stoffwechselnutzen
            </h4>
            <div className="flex flex-wrap gap-2">
              {recipe.benefits.map((b, idx) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-full bg-emerald-100/70 text-brand-950 font-bold border border-brand-200">
                  ✓ {b}
                </span>
              ))}
            </div>
          </div>

          {/* Interaktive Zutatenliste mit Abhaken */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-amber-500" />
                Zutaten ({recipe.ingredients.length})
              </h4>
              <span className="text-xs text-slate-500 font-medium">Antippen zum Abhaken</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {recipe.ingredients.map((ing, idx) => {
                const isChecked = !!checkedIngredients[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                      isChecked
                        ? 'bg-emerald-50/50 border-emerald-200 text-slate-400 line-through'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-brand-300'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                      isChecked ? 'bg-brand-600 border-brand-600 text-white' : 'border-slate-300'
                    }`}>
                      {isChecked && <Check className="w-3 h-3" />}
                    </div>
                    <span className="text-xs font-semibold">{ing}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Schritt-für-Schritt-Zubereitung */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Schritt-für-Schritt-Zubereitung
            </h4>
            <ol className="space-y-3">
              {recipe.instructions.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-xs sm:text-sm text-slate-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-900 font-black flex items-center justify-center text-xs">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Wichtige Mikronährstoffe */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
              Ausgewählte Mikronährstoffe (% empfohlene Tageszufuhr)
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {recipe.micronutrients.map((micro, idx) => (
                <div key={idx} className="bg-white p-2.5 rounded-xl border border-slate-100">
                  <p className="text-[11px] text-slate-500 font-medium">{micro.label}</p>
                  <p className="text-sm font-black text-slate-900 font-display">{micro.amount}</p>
                  <p className="text-[10px] text-brand-700 font-bold">{micro.dv} Tagesbedarf</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>ErnährungsTreff Lilienthal • Natürliche Vollwerternährung</span>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold active:scale-98 transition-transform"
          >
            Rezept schließen
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Utensils, 
  Clock, 
  Flame, 
  BookOpen
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';
import { RecipeModal, RecipeData } from './RecipeModal';

const weeklyMealData: Record<string, RecipeData[]> = {
  'Montag': [
    {
      id: 'mo-1',
      name: 'Vollkorn-Sauerteigbrot mit Avocado, Tomate & pochiertem Landei',
      category: 'Vitales Frühstück',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
      time: '10 Min.',
      servings: 1,
      calories: 410,
      protein: 24,
      carbs: 28,
      fats: 22,
      fiber: 6,
      description: 'Ausgewogenes Power-Frühstück: Hochwertiges Eiweiß, komplexe Kohlenhydrate und ungesättigte Fettsäuren für langanhaltende Konzentration.',
      benefits: ['Cholin & Lutein für Nervenkraft und Gedächtnis', 'Wertvolle Polyphenole & einfach ungesättigte Fettsäuren', 'Keine Blutzuckerspitzen – kein Vormittagstief'],
      ingredients: [
        '1 dicke Scheibe handwerkliches Vollkorn-Sauerteigbrot',
        '2 frische Eier aus regionaler Freilandhaltung (pochiert oder weich gekocht)',
        '1/2 reife Avocado, fein zerdrückt',
        '1 aromatische Strauchtomate in Scheiben',
        '1 Handvoll Rucola oder Babyspinat',
        'Prise Meersalz, bunter Pfeffer und frischer Schnittlauch'
      ],
      instructions: [
        'Das Sauerteigbrot im Toaster oder in der Pfanne leicht knusprig anrösten.',
        'Die Eier in leicht siedendem Wasser mit einem Schuss Apfelessig 3–4 Minuten pochieren.',
        'Die zerdrückte Avocado auf dem warmen Brot verstreichen, mit Tomatenscheiben und Rucola belegen.',
        'Die pochierten Eier vorsichtig daraufsetzen.',
        'Mit einer Prise Meersalz, frischem Pfeffer und Schnittlauch vollenden.'
      ],
      micronutrients: [
        { label: 'Cholin', amount: '280mg', dv: '51%' },
        { label: 'Vitamin D3', amount: '85 IE', dv: '22%' },
        { label: 'Lycopin', amount: '3.4mg', dv: 'Optimal' },
        { label: 'Kalium', amount: '560mg', dv: '15%' },
      ]
    },
    {
      id: 'mo-2',
      name: 'Ofenfrisches Lachsfilet auf Quinoa & buntem Röstgemüse',
      category: 'Ausgewogenes Mittagessen',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=80',
      time: '25 Min.',
      servings: 1,
      calories: 560,
      protein: 42,
      carbs: 38,
      fats: 24,
      fiber: 9,
      description: 'Hervorragende Quelle für entzündungshemmende Omega-3-Fettsäuren (EPA/DHA), kombiniert mit darmfreundlichen Ballaststoffen.',
      benefits: ['Schützt Gefäße und dämpft zelluläre Entzündungen', 'Präbiotische Ballaststoffe für das Darmmikrobiom', 'Hohe Nährstoffdichte ohne Völlegefühl'],
      ingredients: [
        '160g frisches Lachsfilet (nachhaltiger Wild- oder Bio-Fang)',
        '60g Quinoa (im Gemüsefond bissfest gegart)',
        '1 kleine Zucchini und 1 rote Paprika in Würfeln',
        '1 Tasse frischer Blattspinat',
        '1 EL kaltgepresstes Olivenöl & Saft einer halben Bio-Zitrone',
        'Kräuter der Provence, Meersalz und Pfeffer'
      ],
      instructions: [
        'Backofen auf 190°C vorheizen. Das Gemüse mit etwas Olivenöl und Kräutern 18 Min. rösten.',
        'Quinoa in der doppelten Menge Wasser mit Lorbeerblatt ca. 12–14 Min. sanft köcheln.',
        'Den Lachs mit Zitrone beträufeln und in der Pfanne oder im Ofen saftig garen.',
        'Die Quinoa mit dem Röstgemüse und frischem Blattspinat mischen.',
        'Mit dem Lachsfilet anrichten und mit frischem Zitronenabrieb garnieren.'
      ],
      micronutrients: [
        { label: 'Omega-3 (EPA/DHA)', amount: '2.3g', dv: '195%' },
        { label: 'Vitamin B12', amount: '4.8µg', dv: '200%' },
        { label: 'Magnesium', amount: '125mg', dv: '32%' },
        { label: 'Selen', amount: '48µg', dv: '87%' },
      ]
    },
    {
      id: 'mo-3',
      name: 'Cremiger Naturjoghurt mit Waldheidelbeeren, Walnüssen & Zimt',
      category: 'Gesunder Nachmittagssnack',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
      time: '4 Min.',
      servings: 1,
      calories: 220,
      protein: 18,
      carbs: 14,
      fats: 9,
      fiber: 4,
      description: 'Lebende Milchsäurebakterien vereint mit zellschützenden Anthocyanen und gesunden Fetten gegen Heißhunger.',
      benefits: ['Stärkt die Darmflora durch aktive Probiotika', 'Stabiler Blutzucker vor dem Abendessen', 'Ohne jeglichen Zuckerzusatz'],
      ingredients: [
        '150g stichfester griechischer Naturjoghurt oder cremiger Bio-Magerquark',
        '1 Handvoll frische Heidelbeeren (Blaubeeren)',
        '4–5 halbe Walnusskerne, grob gehackt',
        '1 TL Chiasamen',
        '1 Prise echter Ceylon-Zimt'
      ],
      instructions: [
        'Den Joghurt in eine Schale geben.',
        'Mit Heidelbeeren und gehackten Walnüssen bestreuen.',
        'Mit Chiasamen und Ceylon-Zimt verfeinern (Zimt unterstützt die Insulinsensitivität).'
      ],
      micronutrients: [
        { label: 'Calcium', amount: '235mg', dv: '24%' },
        { label: 'Anthocyane', amount: '380mg', dv: 'Optimal' },
        { label: 'Alpha-Linolensäure', amount: '1.2g', dv: '75%' },
        { label: 'Zink', amount: '1.9mg', dv: '18%' },
      ]
    },
    {
      id: 'mo-4',
      name: 'Würzige Kürbis-Lauch-Cremesuppe mit gedämpftem Kabeljau',
      category: 'Regeneratives Abendessen',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80',
      time: '20 Min.',
      servings: 1,
      calories: 380,
      protein: 34,
      carbs: 26,
      fats: 11,
      fiber: 7,
      description: 'Leicht bekömmliches, wärmendes Abendessen. Reich an Tryptophan für einen tiefen, erholsamen Nachtschlaf.',
      benefits: ['Leicht verdaulich ohne nächtliches Völlegefühl', 'Fördert die natürliche Melatoninsynthese', 'Beruhigt das vegetative Nervensystem'],
      ingredients: [
        '180g frisches Kabeljaufilet (Dorsch)',
        '250g feines Kürbis-Lauch-Püree mit etwas Ingwer und Muskat',
        '1 EL geröstete Kürbiskerne',
        '1 TL kaltgepresstes Kürbiskernöl oder Rapsöl',
        'Meersalz, weißer Pfeffer und Petersilie'
      ],
      instructions: [
        'Den Kabeljau schonend im Dämpfeinsatz oder Ofen ca. 8 Min. sanft garen.',
        'Die Kürbissuppe erwärmen und mit Muskat und einem Hauch Ingwer abschmecken.',
        'Die Suppe in einen tiefen Teller füllen und das zarte Fischfilet in die Mitte setzen.',
        'Mit gerösteten Kürbiskernen und feinen Kräutern anrichten.'
      ],
      micronutrients: [
        { label: 'Tryptophan', amount: '310mg', dv: '110%' },
        { label: 'Beta-Carotin', amount: '4800µg', dv: '80%' },
        { label: 'Phosphor', amount: '290mg', dv: '41%' },
        { label: 'Jod', amount: '75µg', dv: '50%' },
      ]
    }
  ],
  'Dienstag': [
    {
      id: 'di-1',
      name: 'Frisches Spinat-Kräuter-Omelett mit Ziegenkäse & Avocado',
      category: 'Vitales Frühstück',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
      time: '10 Min.',
      servings: 1,
      calories: 420,
      protein: 26,
      carbs: 8,
      fats: 30,
      fiber: 5,
      description: 'Niedrige glykämische Last für anhaltende mentale Klarheit und Konzentration über den gesamten Vormittag.',
      benefits: ['Stabile Energie ohne Blutzuckerachterbahn', 'Reich an organischem Magnesium und Folat', 'Langanhaltendes Sättigungsgefühl'],
      ingredients: [
        '2–3 Eier aus Freilandhaltung',
        '1 Handvoll frischer Babyspinat',
        '30g milder Ziegenfrischkäse oder Ziegenrolle',
        '1/3 reife Avocado in Spalten',
        '1 TL natives Raps- oder Olivenöl'
      ],
      instructions: [
        'Die Eier mit einer Prise Salz und Pfeffer verquirlen.',
        'Den Spinat kurz in der Pfanne mit wenigen Tropfen Öl zusammenfallen lassen.',
        'Die Eimasse darübergießen, den Ziegenkäse darüberkrümeln und bei mittlerer Hitze stocken lassen.',
        'Mit den Avocadospalten servieren.'
      ],
      micronutrients: [
        { label: 'Magnesium', amount: '95mg', dv: '25%' },
        { label: 'Folat (Folsäure)', amount: '160µg', dv: '40%' },
        { label: 'Vitamin B6', amount: '0.4mg', dv: '25%' },
        { label: 'Eisen', amount: '2.8mg', dv: '18%' }
      ]
    },
    {
      id: 'di-2',
      name: 'Herzhafter Berglinseneintopf mit Wurzelgemüse & Kräutern',
      category: 'Ausgewogenes Mittagessen',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80',
      time: '35 Min.',
      servings: 1,
      calories: 520,
      protein: 28,
      carbs: 64,
      fats: 12,
      fiber: 18,
      description: 'Traditionelle Hülsenfrüchte neu gedacht: Füttert gesunde Darmbakterien mit resistenter Stärke und liefert pflanzliches Eisen.',
      benefits: ['Optimale Nahrung für kurzkettige Fettsäuren im Darm', 'Niedriger glykämischer Index', '100% cholesterinfrei & ballaststoffreich'],
      ingredients: [
        '80g braune Berglinsen oder Alblinsen',
        '1 Karotte, 1/2 Stange Lauch, 1 Stück Knollensellerie gewürfelt',
        '1 Zehe Knoblauch & 1 Lorbeerblatt',
        '1 TL milder Kreuzkümmel und Majoran',
        '1 EL kaltgepresstes Rapsöl & 1 Spritzer Bio-Apfelessig'
      ],
      instructions: [
        'Gemüsewürfel sanft andünsten, Linsen und Gewürze zugeben.',
        'Mit Gemüsebrühe aufgießen und ca. 25–30 Min. sanft garen, bis die Linsen sämig sind.',
        'Mit einem Schuss Apfelessig und frischen Kräutern abschmecken.'
      ],
      micronutrients: [
        { label: 'Eisen (pflanzlich)', amount: '6.5mg', dv: '38%' },
        { label: 'Folat', amount: '320µg', dv: '80%' },
        { label: 'Ballaststoffe', amount: '18g', dv: '72%' },
        { label: 'Kalium', amount: '790mg', dv: '22%' }
      ]
    },
    {
      id: 'di-3',
      name: 'Gedämpfter Zimtapfel mit knackigen gerösteten Mandeln',
      category: 'Gesunder Nachmittagssnack',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
      time: '6 Min.',
      servings: 1,
      calories: 195,
      protein: 6,
      carbs: 22,
      fats: 10,
      fiber: 5,
      description: 'Schonendes Pektin legt sich wie ein Schutzbalsam auf die Magenschleimhaut und beruhigt die Verdauung.',
      benefits: ['Schützendes Apfelpektin für die Schleimhaut', 'Einfach ungesättigte Fettsäuren & Vitamin E', 'Wohltuend warm bei Süßhunger'],
      ingredients: [
        '1 regionaler Bio-Apfel (z. B. Boskoop oder Elstar)',
        '1 TL Ceylon-Zimt',
        '20g ungesalzene Mandelkerne, kurz geröstet',
        '1 TL Zitronensaft'
      ],
      instructions: [
        'Den Apfel in Spalten schneiden, mit Zimt und Zitrone beträufeln.',
        'Für 3 Min. im Topf oder in der Mikrowelle warm andämpfen.',
        'Warm mit den knackigen Mandelkernen genießen.'
      ],
      micronutrients: [
        { label: 'Vitamin E', amount: '4.8mg', dv: '32%' },
        { label: 'Apfelpektin', amount: '3.2g', dv: 'Optimal' },
        { label: 'Magnesium', amount: '45mg', dv: '12%' },
        { label: 'Mangan', amount: '0.6mg', dv: '30%' }
      ]
    },
    {
      id: 'di-4',
      name: 'Zartes Zanderfilet auf sautiertem Fenchel & Kräuterkartoffeln',
      category: 'Regeneratives Abendessen',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
      time: '25 Min.',
      servings: 1,
      calories: 390,
      protein: 38,
      carbs: 24,
      fats: 14,
      fiber: 5,
      description: 'Feiner heimischer Speisefisch. Reich an Jod und Selen, kombiniert mit krampflösendem Fenchel.',
      benefits: ['Extrem mageres, leicht verdauliches Protein', 'Ätherische Fenchelöle gegen Blähbauch', 'Unterstützt die Schilddrüsenfunktion'],
      ingredients: [
        '180g frisches Zanderfilet mit Haut',
        '1 kleine Knolle Fenchel, in feine Streifen gehobelt',
        '2 kleine Pellkartoffeln vom Vortag (resistente Stärke)',
        '1 EL Olivenöl, etwas Zitronensaft & Fenchelgrün',
        'Meersalz und weißer Pfeffer'
      ],
      instructions: [
        'Fenchelstreifen in Olivenöl sanft dünsten, bis sie glasig und aromatisch sind.',
        'Pellkartoffelscheiben kurz mitanbraten.',
        'Zanderfilet auf der Hautseite kross anbraten, kurz wenden und glasig durchziehen lassen.',
        'Mit Fenchelgrün und Zitronensaft servieren.'
      ],
      micronutrients: [
        { label: 'Jod', amount: '88µg', dv: '58%' },
        { label: 'Selen', amount: '44µg', dv: '80%' },
        { label: 'Vitamin C', amount: '42mg', dv: '45%' },
        { label: 'Kalium', amount: '810mg', dv: '23%' }
      ]
    }
  ],
  'Mittwoch': [
    {
      id: 'mi-1',
      name: 'Warmer Beeren-Porridge mit Chiasamen & cremigem Mandelmus',
      category: 'Vitales Frühstück',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=80',
      time: '8 Min.',
      servings: 1,
      calories: 430,
      protein: 16,
      carbs: 52,
      fats: 16,
      fiber: 11,
      description: 'Reich an löslichen Beta-Glucanen für gesunde Cholesterinwerte und ein ausgeglichenes Mikrobiom.',
      benefits: ['Senkt LDL-Cholesterin durch Beta-Glucan', 'Stärkt die Darmbarriere nachhaltig', 'Wärmt den Magen am Morgen'],
      ingredients: [
        '50g zarte Vollkorn-Haferflocken',
        '200ml ungesüßte Hafer- oder Mandelmilch (oder Wasser)',
        '1 EL Chiasamen & 1 TL geschrotete Leinsamen',
        '1 Tasse warme Beerenmischung (Himbeeren, Blaubeeren)',
        '1 gehäufter TL weißes Mandelmus',
        'Prise Vanille und Ceylon-Zimt'
      ],
      instructions: [
        'Haferflocken und Pflanzendrink mit Chiasamen aufkochen und 3–4 Min. quellen lassen.',
        'Die warmen Beeren unterheben.',
        'Mit Mandelmus und etwas Zimt toppen.'
      ],
      micronutrients: [
        { label: 'Beta-Glucan', amount: '3.6g', dv: '120%' },
        { label: 'Magnesium', amount: '138mg', dv: '36%' },
        { label: 'Zink', amount: '2.4mg', dv: '24%' },
        { label: 'Eisen', amount: '3.4mg', dv: '22%' }
      ]
    },
    {
      id: 'mi-2',
      name: 'Bunte Quinoa-Bowl mit Bio-Hähnchenbrust, Avocado & Tahini-Dressing',
      category: 'Ausgewogenes Mittagessen',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80',
      time: '20 Min.',
      servings: 1,
      calories: 540,
      protein: 44,
      carbs: 40,
      fats: 20,
      fiber: 8,
      description: 'Volle Nährstoffpower: Reines Bio-Eiweiß, gesunde Fette aus Sesam und Avocado sowie komplexe Energie.',
      benefits: ['Vollständiges Aminosäurenprofil', 'Hoher Calciumgehalt durch Sesammus (Tahini)', 'Perfekt zum Vorbereiten (Meal Prep)'],
      ingredients: [
        '150g Bio-Hähnchenbrustfilet (in Streifen gebraten)',
        '60g Quinoa gekocht',
        'Gurkenscheiben, Kirschtomaten, geriebene Karotten & Kichererbsen',
        '1 EL Sesammus (Tahini) mit Zitronensaft und etwas Wasser verrührt',
        'Frischer Koriander oder Petersilie'
      ],
      instructions: [
        'Hähnchenstreifen mit etwas Kräutersalz saftig anbraten.',
        'Quinoa als Basis in eine Schale geben.',
        'Das bunte Rohkostgemüse und die Kichererbsen kreisförmig anrichten.',
        'Mit den warmen Hähnchenstreifen belegen und das cremige Tahini-Dressing darüberträufeln.'
      ],
      micronutrients: [
        { label: 'Niacin (B3)', amount: '14mg', dv: '95%' },
        { label: 'Calcium', amount: '190mg', dv: '19%' },
        { label: 'Phosphor', amount: '410mg', dv: '58%' },
        { label: 'Zink', amount: '3.1mg', dv: '31%' }
      ]
    },
    {
      id: 'mi-3',
      name: 'Knackige Gemüsesticks mit hausgemachtem Kräuter-Leinöl-Quark',
      category: 'Gesunder Nachmittagssnack',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
      time: '5 Min.',
      servings: 1,
      calories: 180,
      protein: 19,
      carbs: 11,
      fats: 6,
      fiber: 4,
      description: 'Der Klassiker aus der traditionellen Ernährungstherapie: Wertvolles Leinöl gebunden in Milcheiweiß.',
      benefits: ['Maximale Bioverfügbarkeit von Omega-3', 'Erfrischend und sättigend', 'Reich an l-Glutamin für die Darmwand'],
      ingredients: [
        '120g Magerquark cremig geschlagen',
        '1 TL frisches Leinöl (kaltgepresst)',
        'Viel Schnittlauch, Petersilie und Kresse',
        'Gurken-, Karotten- und Paprikasticks zum Dippen'
      ],
      instructions: [
        'Den Quark mit Leinöl, Salz, Pfeffer und den frischen Kräutern glattrühren.',
        'Das knackige Gemüse in mundgerechte Sticks schneiden und frisch dippen.'
      ],
      micronutrients: [
        { label: 'Omega-3 (ALA)', amount: '2.4g', dv: '150%' },
        { label: 'Calcium', amount: '160mg', dv: '16%' },
        { label: 'Vitamin C', amount: '65mg', dv: '72%' },
        { label: 'Protein bioaktiv', amount: '19g', dv: '38%' }
      ]
    },
    {
      id: 'mi-4',
      name: 'Mediterranes Ofengemüse mit gebackenem Schafskäse (Feta) & Thymian',
      category: 'Regeneratives Abendessen',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80',
      time: '20 Min.',
      servings: 1,
      calories: 395,
      protein: 23,
      carbs: 18,
      fats: 26,
      fiber: 6,
      description: 'Warmer Genuss aus dem Backofen: Echter griechischer Schafskäse liefert leicht verdauliches A2-Protein.',
      benefits: ['A2-Kasein oft besser verträglich als Kuhmilch', 'Viel Lycopin aus gebackenen Tomaten', 'Kein Aufwand – alles auf einem Blech'],
      ingredients: [
        '100g originaler Schafsmilch-Feta',
        '1 Zucchini, 1 rote Zwiebel, Kirschtomaten und Champignons',
        '1 EL Olivenöl extra vergine',
        'Zweige frischer Thymian und Oregano',
        'Prise Chiliflocken und Meersalz'
      ],
      instructions: [
        'Gemüse grob schneiden und in einer Auflaufform verteilen.',
        'Den Feta in die Mitte setzen, mit Olivenöl beträufeln und mit Kräutern bestreuen.',
        'Bei 200°C Ober-/Unterhitze ca. 18–20 Min. backen, bis der Feta goldgelb schmilzt.',
        'Warm servieren und genießen.'
      ],
      micronutrients: [
        { label: 'Calcium', amount: '380mg', dv: '38%' },
        { label: 'Zink', amount: '2.6mg', dv: '26%' },
        { label: 'Lycopin', amount: '5.2mg', dv: 'Optimal' },
        { label: 'Vitamin B2', amount: '0.4mg', dv: '28%' }
      ]
    }
  ]
};

export const MealPlanner: React.FC = () => {
  const days = ['Montag', 'Dienstag', 'Mittwoch'];
  const [selectedDay, setSelectedDay] = useState<string>('Montag');
  const [activeRecipe, setActiveRecipe] = useState<RecipeData | null>(null);

  const currentMeals = weeklyMealData[selectedDay] || weeklyMealData['Montag'];

  // Calculate day total kcal and macros
  const dailyTotals = currentMeals.reduce(
    (acc, m) => {
      acc.calories += m.calories;
      acc.protein += m.protein;
      acc.carbs += m.carbs;
      acc.fats += m.fats;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  return (
    <section id="meal-planner" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-3 border border-brand-200">
            <Utensils className="w-3.5 h-3.5 text-brand-600" />
            <span>Praxisnahe Ernährungspläne & Rezepte</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
            Echte Vollwertküche. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
              Ohne Hungern und ohne Gramm-Zählen
            </span>
          </h2>
          <p className="text-slate-600 text-base">
            Ein Einblick in das Konzept des <strong>ErnährungsTreffs Lilienthal</strong>: Frische Zutaten, unkomplizierte Zubereitung und ernährungsphysiologische Balance, die sich spielend leicht in den Alltag integrieren lässt.
          </p>
        </div>

        {/* Day Selector Pills and Macro Summary Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          
          {/* Day Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-95 ${
                  selectedDay === day
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Daily Totals Bar */}
          <div className="flex items-center gap-4 bg-emerald-50/90 px-4 py-2.5 rounded-2xl border border-emerald-200/80 text-xs w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <Flame className="w-4 h-4 text-emerald-600" />
              <span>Tagesbilanz:</span>
              <span className="font-black text-brand-800 text-sm font-display">{dailyTotals.calories} kcal</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 font-semibold text-[11px]">
              <span>Protein: <strong className="text-slate-900">{dailyTotals.protein}g</strong></span>
              <span>Fette: <strong className="text-slate-900">{dailyTotals.fats}g</strong></span>
              <span>Kohlenhydrate: <strong className="text-slate-900">{dailyTotals.carbs}g</strong></span>
            </div>
          </div>

        </div>

        {/* Meals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentMeals.map((meal) => (
            <Card3DTilt key={meal.id} maxTilt={6} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-float transition-all duration-300 flex flex-col h-full group hover-lift">
                
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-black text-slate-900 shadow-xs uppercase tracking-wider">
                      {meal.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-slate-950/75 backdrop-blur-md text-white px-2 py-0.5 rounded-lg text-xs font-semibold">
                    <Clock className="w-3 h-3" />
                    <span>{meal.time}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition-colors line-clamp-2 mb-2 font-display">
                      {meal.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {meal.description}
                    </p>
                  </div>

                  {/* Micro Nutrients Tag */}
                  <div>
                    <div className="grid grid-cols-3 gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-100 text-center mb-4">
                      <div>
                        <span className="text-[10px] text-slate-500 block font-medium">Kalorien</span>
                        <span className="text-xs font-black text-slate-900 font-display">{meal.calories}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block font-medium">Protein</span>
                        <span className="text-xs font-black text-brand-700 font-display">{meal.protein}g</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block font-medium">Fett</span>
                        <span className="text-xs font-black text-amber-700 font-display">{meal.fats}g</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveRecipe(meal)}
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 active:scale-98"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Zutaten & Zubereitung ansehen</span>
                    </button>
                  </div>

                </div>

              </div>
            </Card3DTilt>
          ))}
        </div>

      </div>

      {/* Recipe Modal Component */}
      <RecipeModal
        recipe={activeRecipe}
        onClose={() => setActiveRecipe(null)}
      />
    </section>
  );
};

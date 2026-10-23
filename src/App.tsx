import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Calculator3D } from './components/Calculator3D';
import { MealPlanner } from './components/MealPlanner';
import { AssessmentQuiz } from './components/AssessmentQuiz';
import { TransformationSlider } from './components/TransformationSlider';
import { ServicesPricing } from './components/ServicesPricing';
import { NutritionistProfile } from './components/NutritionistProfile';
import { LocationMapSection } from './components/LocationMapSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] text-slate-800 relative selection:bg-brand-200 selection:text-brand-900">
      
      {/* Sticky Top Navbar */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="pb-16 lg:pb-0">
        {/* 1. Hero with 3D Three.js Organic Fruit & Floating Tilt Badges */}
        <HeroSection
          onOpenBooking={() => setBookingOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* 2. Interactive 3D Macro & Energy Calculator */}
        <Calculator3D
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 3. Interactive Weekly Meal Plan & Recipe Modal */}
        <MealPlanner />

        {/* 4. Interactive 60-Sec Metabolic Archetype Assessment */}
        <AssessmentQuiz
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 5. Interactive Before & After Transformation Slider */}
        <TransformationSlider
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 6. Clinical Consultation Programs & Pricing */}
        <ServicesPricing
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 7. Lead Nutritionist Profile & Philosophy */}
        <NutritionistProfile
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Interactive Google Map & Practice Location in Lilienthal */}
        <LocationMapSection
          onOpenBooking={() => setBookingOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Bottom Dock (Pinned for seamless phone UX) */}
      <MobileBottomBar
        onOpenBooking={() => setBookingOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

    </div>
  );
};

export default App;

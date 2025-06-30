// src/app/page.tsx
import React from 'react';

import HeroSection from '@/app/components/home/HeroSection';
import PlantelsSection from '@/app/components/home/PlantelsSection';
import AchievementsTabsSection from '@/app/components/home/AchievementsTabsSection';
// import UniqueValueSection from '@/app/components/home/UniqueValueSection';
import PillarsSection from '@/app/components/home/PillarsSection';
import WhyUsSection from '@/app/components/home/WhyUsSection';
import WorkshopsSection from '@/app/components/home/WorkshopsSection';
// import FacilitiesSection from '@/app/components/home/FacilitiesSection';
import FaqSection from '@/app/components/home/FaqSection';

// Puedes agregar metadatos específicos para la página Home aquí (solo en App Router)
export const metadata = {
  title: 'Bienvenido | Grupo Cultural Albatros',
  description: 'Descubre la excelencia educativa del Grupo Cultural Albatros. Preescolar, Primaria y Secundaria de vanguardia.',
};

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <PlantelsSection />

      {/* <UniqueValueSection /> */}
      <AchievementsTabsSection />

      <PillarsSection />

      <WhyUsSection />
      <WorkshopsSection />
      {/* <FacilitiesSection /> */}
      <FaqSection />
    </div>
  );
};

export default HomePage;


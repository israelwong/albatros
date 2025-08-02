// src/app/page.tsx
import React from 'react';
import HeroSection from '@/app/components/home/HeroSection';
import OpportunitiesCarousel from '@/app/components/home/OpportunitiesCarousel';
import ExcellenceProof from '@/app/components/home/ExcellenceProof';
import QualitySeal from './components/home/QualitySeal';
import Testimonials from './components/home/Testimonials';
import CallToAction from './components/home/CallToAction';
import OfferingsTags from './components/home/OfferingsTags';
import Gallery from './components/Gallery';
import FAQ from './components/home/FAQ';
import ImmersiveSeparator from './components/home/ImmersiveSeparator';
import AchievementsTabsSection from './components/home/AchievementsTabsSection';
import CoreValuesSection from './components/home/CoreValuesSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ExcellenceProof />
      <AchievementsTabsSection />

      <OpportunitiesCarousel />
      <OfferingsTags />

      <ImmersiveSeparator
        videoSrc="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/videos/Web%20inmersive%20section.mp4" // <-- Necesitarás un video corto aquí
        quote="Aquí es donde nacen los recuerdos que duran toda la vida."
        heightClass="h-[80vh]"
      />

      <CoreValuesSection />
      <QualitySeal />
      <Testimonials />
      <ImmersiveSeparator
        backgroundImage="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/alumnos/23.jpg" // Una toma con dron de las instalaciones
        quote="Un espacio para crecer y aprender."
      />
      <Gallery />
      <CallToAction />
      <FAQ />
    </>
  );
};
export default HomePage;
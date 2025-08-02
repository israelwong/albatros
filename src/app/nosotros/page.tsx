import React from 'react'
import { Metadata } from 'next'
import AboutHero from './components/Hero'
import DirectorMessage from './components/DirectorMessage'
import PhilosophySection from './components/PhilosophySection'
import HistorySection from './components/HistorySection'
import DirectorsGrid from './components/DirectorsGrid';

export const metadata: Metadata = {
    title: 'Nosotros | Grupo Cultural Albatros',
    description: 'Conoce más sobre nuestra misión, visión y el equipo que hace posible la educación integral en Grupo Cultural Albatros.',
}

export default function page() {
    return (
        <div>
            <AboutHero />
            <DirectorMessage />
            <PhilosophySection />
            <HistorySection />
            <DirectorsGrid />
        </div>
    )
}

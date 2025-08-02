import React from 'react';
import AdmissionsHero from './components/AdmissionsHero';
import AdmissionsSection from './components/AdmissionsSection';

// Metadata para la página
export const metadata = {
    title: 'Admisiones | Grupo Cultural Albatros',
    description: 'Inicia el proceso de inscripción y forma parte de nuestra comunidad educativa. Conoce los requisitos y agenda una visita.',
};

const AdmissionsPage = () => {
    return (
        <main>
            <AdmissionsHero />
            <AdmissionsSection />
        </main>
    );
};

export default AdmissionsPage;
import React from 'react';
import EducationHero from './components/EducationHero';
import AcademicLevels from './components/AcademicLevels';
import CorePillars from './components/CorePillars';
import CampusesLink from './components/CampusesLink';

// Metadata para la página
export const metadata = {
    title: 'Modelo Educativo | Grupo Cultural Albatros',
    description: 'Descubre nuestra filosofía educativa, niveles académicos y los pilares que garantizan una formación integral.',
};

const ModeloEducativoPage = () => {
    return (
        <main>
            <EducationHero />
            <AcademicLevels />
            <CorePillars />
            <CampusesLink />
        </main>
    );
};

export default ModeloEducativoPage;
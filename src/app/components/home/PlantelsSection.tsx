// src/app/components/home/PlantelsSection.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/common/Button';

interface PlantelCardProps {
    name: string;
    logoSrc: string;
    levels: string;
    location: string;
    offerLink: string;
}

// Sub-componente Card para cada plantel
const PlantelCard: React.FC<PlantelCardProps> = ({ name, logoSrc, levels, location, offerLink }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 text-center transform transition-transform duration-300 hover:scale-[1.02]">
            {/* Contenedor del Logo - Aseguramos un div simple para la imagen */}
            <div className="flex items-center justify-center mb-4"> {/* Añadimos flexbox para centrar */}
                <Image
                    src={logoSrc}
                    alt={`Logo ${name}`}
                    width={120}
                    height={120}
                    className="object-contain" // Solo object-contain aquí
                // priority // No es estrictamente necesario para cards no "above the fold"
                />
            </div> {/* Cierre del div del logo */}

            <h3 className="font-heading text-2xl font-bold text-albatrosBlue mb-2">{name}</h3>
            <p className="font-body text-gray-700 text-lg mb-2">{levels}</p>
            <p className="font-body text-gray-600 text-base mb-4">{location}</p>

            <Button asChild variant="blue" size="md" className="mt-auto">
                <Link href={offerLink}>
                    Ver Oferta Educativa
                </Link>
            </Button>
        </div>
    );
};

const PlantelsSection: React.FC = () => {
    return (
        <section className="w-full py-16 px-6 md:px-12 bg-gray-100 text-albatrosBlue">
            <div className="container mx-auto">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
                    Nuestros Planteles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Card Colegio Albatros */}
                    <PlantelCard
                        name="Colegio ALBATROS"
                        logoSrc="/colegio_albatros_logo.svg"
                        levels="Preescolar y Primaria"
                        location="Plantel Zumpango Centro"
                        offerLink="/oferta-educativa#albatros"
                    />

                    {/* Card Colegio TECNO */}
                    <PlantelCard
                        name="Colegio TECNO"
                        logoSrc="/colegio_tecno_logo.svg"
                        levels="Preescolar, Primaria y Secundaria"
                        location="Plantel Zumpango San Lorenzo"
                        offerLink="/oferta-educativa#tecno"
                    />
                </div>
            </div>
        </section>
    );
};

export default PlantelsSection;
import React from 'react';
import Image from 'next/image';

// Datos de los pilares, extraídos del brochure
const pillarsData = [
    {
        eyebrow: "FORMACIÓN GLOBAL",
        title: "Inglés de Nivel Internacional",
        description: "Preparamos a nuestros alumnos para un mundo globalizado a través de un programa de inglés de alto nivel, validado por las certificaciones de Cambridge.",
        activities: ["Certificación Cambridge", "Certificación Oxford"],
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/alumnos/29.jpg",
    },
    {
        eyebrow: "INNOVACIÓN EDUCATIVA",
        title: "Tecnología y Futuro",
        description: "Integramos tecnología de vanguardia en todas nuestras aulas para potenciar el aprendizaje. Nuestros talleres preparan a los alumnos con las habilidades del mañana.",
        activities: ["Robótica", "Salón de Cómputo", "Uso de Tablets en clase"],
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/alumnos/37.jpg",
    },
    {
        eyebrow: "DESARROLLO INTEGRAL",
        title: "Deporte y Salud",
        description: "Fomentamos la disciplina, el trabajo en equipo y un estilo de vida saludable a través de diversas actividades deportivas que complementan la formación académica.",
        activities: ["Natación en Alberca Climatizada", "Fútbol", "Básquetbol"],
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/alumnos/34.jpg",
    }
];

const CorePillars = () => {
    return (
        <section className="bg-brand-surface py-16 md:py-24">
            <div className="container mx-auto px-6 space-y-16">
                {pillarsData.map((pillar, index) => (
                    <div
                        key={pillar.title}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center`}
                    >
                        {/* Columna de la Imagen */}
                        <div className={`w-full ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                            <Image
                                src={pillar.imageUrl}
                                alt={pillar.title}
                                width={600}
                                height={500}
                                className="rounded-xl shadow-xl object-cover w-full h-auto aspect-[5/4]"
                            />
                        </div>

                        {/* Columna del Texto */}
                        <div className={`w-full ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                            <p className="text-sm font-bold text-secondary tracking-widest mb-2">
                                {pillar.eyebrow}
                            </p>
                            <h3 className="text-3xl font-bold text-primary mb-4">
                                {pillar.title}
                            </h3>
                            <p className="text-brand-text-light text-lg mb-6">
                                {pillar.description}
                            </p>
                            <ul className="space-y-2">
                                {pillar.activities.map(activity => (
                                    <li key={activity} className="flex items-center text-brand-text-light">
                                        <span className="text-accent mr-3 font-bold text-xl">✓</span> {activity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CorePillars;
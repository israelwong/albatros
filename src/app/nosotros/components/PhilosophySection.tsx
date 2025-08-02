import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react'; // Íconos para cada pilar

// Datos de la filosofía del colegio
// TODO: Reemplazar este texto con la Misión, Visión y Política de Calidad oficiales.
const pillars = [
    {
        icon: Target,
        title: "Misión",
        text: "Formar líderes íntegros y competentes a través de un modelo educativo de vanguardia, fomentando el desarrollo de habilidades académicas, humanas y tecnológicas en un ambiente seguro y estimulante."
    },
    {
        icon: Eye,
        title: "Visión",
        text: "Ser la institución educativa líder en la región, reconocida por nuestra excelencia académica, innovación constante y por preparar a generaciones de jóvenes que impacten positivamente en la sociedad."
    },
    {
        icon: ShieldCheck,
        title: "Política de Calidad",
        text: "Nos comprometemos con la mejora continua en todos nuestros procesos educativos, garantizando un servicio que excede las expectativas de nuestros alumnos y padres de familia a través de personal altamente capacitado."
    }
];

const PhilosophySection = () => {
    return (
        <section className="bg-brand-surface py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Nuestra Filosofía
                    </h2>
                    <p className="text-lg text-brand-text-light max-w-2xl mx-auto mt-4">
                        Los principios que guían cada paso que damos en la formación de nuestros alumnos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="bg-brand-background p-8 rounded-lg">
                            <div className="flex justify-center mb-6">
                                <div className="bg-white p-4 rounded-full shadow-md">
                                    <pillar.icon size={32} className="text-accent" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">{pillar.title}</h3>
                            <p className="text-brand-text-light leading-relaxed">{pillar.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
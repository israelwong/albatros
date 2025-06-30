// src/app/components/home/WhyUsSection.tsx
"use client";

import React from 'react';
import { Users, BookOpen, Shield, Tablet, Star } from 'lucide-react'; // Iconos representativos
import DiagonalSeparator from '@/app/components/common/DiagonalSeparator'; // Importa el componente

interface WhyUsCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// Sub-componente Card para cada razón
const WhyUsCard: React.FC<WhyUsCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center h-full transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="text-albatrosBlue mb-6"> {/* Icono en color azul */}
                {icon}
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-albatrosBlue mb-4">{title}</h3>
            <p className="font-body text-gray-700 leading-relaxed flex-grow">{description}</p>
        </div>
    );
};

const WhyUsSection: React.FC = () => {
    const reasons = [
        {
            icon: <BookOpen size={48} />,
            title: "Educación Integral",
            description: "Ofrecemos computación de alto nivel, robótica, danza, inglés certificado en Cambridge, natación (alberca propia) y talleres artísticos, tecnológicos y deportivos."
        },
        {
            icon: <Users size={48} />,
            title: "Atención Personalizada",
            description: "Cada estudiante recibe un trato individualizado, con apoyo de especialistas cuando es necesario, asegurando un desarrollo único y adaptado."
        },
        {
            icon: <Tablet size={48} />,
            title: "Enfoque en Tecnología",
            description: "Utilizamos tecnología avanzada para reforzar el aprendizaje, incluyendo tablets, computadoras y pizarrones electrónicos en todas las aulas."
        },
        {
            icon: <Star size={48} />, // Ícono cambiado de Lightbulb para diferenciar
            title: "Mentores que Potencian",
            description: "Nuestro equipo docente altamente capacitado inspira y acompaña a los alumnos, identificando y potenciando sus habilidades y talentos."
        },
        {
            icon: <Shield size={48} />,
            title: "Prevención del Bullying",
            description: "Tenemos un alto compromiso con la seguridad y el bienestar de los alumnos, incluyendo videovigilancia y supervisión constante para prevenir el bullying."
        },
        // Añade más razones si es necesario
    ];

    return (
        <section className="w-full bg-blue-900 text-blue-900"> {/* Fondo gris claro */}

            <DiagonalSeparator colorClass="bg-zinc-200" direction="right" height="h-12" offset="-mt-0" />

            <div className="container mx-auto py-16 px-6 md:px-12">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-blue-500">
                    ¿Por qué estudiar con nosotros?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Grid responsivo */}
                    {reasons.map((reason, index) => (
                        <WhyUsCard
                            key={index}
                            icon={reason.icon}
                            title={reason.title}
                            description={reason.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
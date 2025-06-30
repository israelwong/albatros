// src/app/components/home/WhyUsSection.tsx
"use client";

import React from 'react';
// Importamos Embla Carousel
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Importamos iconos representativos
import { Users, BookOpen, Shield, Tablet, Star } from 'lucide-react';

// No importamos DiagonalSeparator aquí, ya que es para separar secciones a nivel de página.
// import DiagonalSeparator from '@/app/components/common/DiagonalSeparator'; 

interface WhyUsCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// Sub-componente Card para cada razón (adaptado para el carrusel)
const WhyUsCard: React.FC<WhyUsCardProps> = ({ icon, title, description }) => {
    return (
        // flex-[0_0_90%] para móvil (muestra 1 casi completa), sm:flex-[0_0_45%] para tablet (2 casi completas), lg:flex-[0_0_30%] para desktop (3 casi completas)
        <div className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 px-4">
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center h-full transform transition-transform duration-300 hover:scale-[1.02]">
                <div className="text-albatrosBlue mb-6"> {/* Icono en color azul */}
                    {icon}
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-albatrosBlue mb-4">{title}</h3>
                <p className="font-body text-gray-700 leading-relaxed flex-grow text-sm">{description}</p> {/* Texto más condensado */}
            </div>
        </div>
    );
};

const WhyCarrousel: React.FC = () => {
    // Configuración de Embla Carousel: Autoplay se detiene al interactuar (stopOnInteraction: true)
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000, stopOnInteraction: true })]); // Ajustado delay a 4s

    const reasons = [
        {
            icon: <BookOpen size={48} />,
            title: "Educación Integral",
            description: "Ofrecemos computación, robótica, danza, inglés certificado Cambridge, natación y talleres artísticos/deportivos para un desarrollo completo." // Condensado
        },
        {
            icon: <Users size={48} />,
            title: "Atención Personalizada",
            description: "Cada estudiante recibe apoyo individualizado de especialistas, asegurando un desarrollo único y adaptado a sus necesidades." // Condensado
        },
        {
            icon: <Tablet size={48} />,
            title: "Enfoque en Tecnología",
            description: "Utilizamos tecnología avanzada como pizarrones electrónicos, computadoras y tablets, además de robótica, para reforzar el aprendizaje." // Condensado
        },
        {
            icon: <Star size={48} />,
            title: "Mentores que Potencian",
            description: "Nuestro equipo docente altamente capacitado inspira y acompaña, identificando y desarrollando las habilidades y talentos de cada alumno." // Condensado
        },
        {
            icon: <Shield size={48} />,
            title: "Prevención del Bullying",
            description: "Alto compromiso con la seguridad y bienestar, con videovigilancia y supervisión constante para un entorno seguro y libre de bullying." // Condensado
        },
        // Puedes añadir más razones si es necesario
    ];

    return (
        // Fondo gris claro y texto azul institucional para la sección
        <section className="w-full py-16 px-6 md:px-12 bg-gray-50 text-albatrosBlue">

            {/* El DiagonalSeparator se gestiona a nivel de page.tsx */}
            {/* <DiagonalSeparator colorClass="bg-zinc-200" direction="right" height="h-12" offset="-mt-0" /> */}

            <div className="container mx-auto">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
                    ¿Por qué estudiar con nosotros?
                </h2>

                {/* Contenedor del carrusel */}
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex -ml-4"> {/* flex y margen negativo para el gap */}
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
            </div>
        </section>
    );
};

export default WhyCarrousel;

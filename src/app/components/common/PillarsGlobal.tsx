// src/app/components/home/PillarsSection.tsx
"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image'; // Importar Image de Next.js

interface PillarCardProps {
    imageSrc: string; // Nueva prop para la imagen
    title: string;
    description: string;
}

// Sub-componente Card para cada pilar
const PillarCard: React.FC<PillarCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 px-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-[1.02]">
                {/* Contenedor de la imagen */}
                <div className="relative w-full h-40"> {/* Altura fija para la imagen */}
                    <Image
                        src={imageSrc}
                        alt={title}
                        layout="fill"
                        objectFit="cover" // Asegura que la imagen cubra el contenedor
                        // style={{ objectFit: "cover" }}
                        className="rounded-t-lg" // Bordes redondeados solo en la parte superior
                    />
                </div>

                <div className="p-6 flex flex-col items-center text-center flex-grow"> {/* Padding y centrado */}
                    <h3 className="font-heading text-2xl font-bold text-albatrosBlue mb-3">{title}</h3>
                    <p className="font-body text-gray-700 leading-relaxed flex-grow text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

const PillarsSection: React.FC = () => {
    // Configuración de Embla Carousel: Autoplay se detiene al interactuar (stopOnInteraction: true)
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

    const pillars = [
        {
            imageSrc: "/images/opinion-de-los-jovenes-que-asisten-la-escuela.jpg",
            title: "Excelencia Académica",
            description: "Comprometidos con un currículo de vanguardia y metodologías innovadoras que garantizan el máximo potencial de cada estudiante, preparándolos para el futuro."
        },
        {
            imageSrc: "/images/ninos-haciendo-robot.jpg",
            title: "Innovación Tecnológica",
            description: "Integramos herramientas digitales y robótica avanzada en el aula, fomentando el pensamiento crítico y habilidades esenciales para el siglo XXI."
        },
        {
            imageSrc: "/images/retrato-de-una-joven-estudiante-que-asiste-la-escuela.jpg",
            title: "Desarrollo Integral",
            description: "Fomentamos el crecimiento personal, ético y social a través de actividades extracurriculares, talleres artísticos y deportivos, construyendo ciudadanos responsables."
        },
        {
            imageSrc: "/images/juntos-podemos-crear-grandes-cosas-en-esta-empresa.jpg",
            title: "Compromiso Humano",
            description: "Promovemos un ambiente inclusivo y solidario, donde cada estudiante se siente valorado y apoyado, cultivando valores de respeto y empatía."
        },
        {
            imageSrc: "/images/vista-de-angulo-bajo-de-una-camara-de-calle-rodeada-de-arboles-bajo-la-luz-del-sol-y-un-cielo-azul.jpg",
            title: "Entorno Seguro",
            description: "Garantizamos un espacio físico y emocional seguro para todos nuestros estudiantes, priorizando su bienestar y desarrollo en un ambiente positivo."
        },
        {
            imageSrc: "/images/retrato-del-profesor-en-el-trabajo-en-el-sistema-educativo.jpg",
            title: "Atención Personalizada",
            description: "Brindamos un enfoque individualizado a cada estudiante, adaptando nuestras estrategias educativas a sus necesidades y ritmos de aprendizaje únicos."
        },
        // Puedes añadir más pilares con sus imágenes
    ];

    return (
        <section className="w-full bg-zinc-200 text-albatrosBlue">
            <div className="container mx-auto py-16 px-6 md:px-12">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex -ml-4">
                        {pillars.map((pillar, index) => (
                            <PillarCard
                                key={index}
                                imageSrc={pillar.imageSrc}
                                title={pillar.title}
                                description={pillar.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PillarsSection;
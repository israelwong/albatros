// src/app/components/home/HeroSection.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/common/Button';
// Importamos la función de manejo de clic con contexto
import { handleWhatsappClickWithContext, getWhatsappContext } from '@/lib/whatsapp';
import { usePathname } from 'next/navigation'; // Necesario para obtener la ruta y pasar el contexto

const HeroSection: React.FC = () => {
    const pathname = usePathname(); // Obtenemos la ruta actual
    const currentWhatsappContext = getWhatsappContext(pathname); // Determinamos el contexto (general, albatros, tecno)

    return (
        <section className="relative w-full min-h-[80vh] md:min-h-[70vh] flex flex-col md:flex-row overflow-hidden bg-albatrosBlue">

            {/* Contenedor de la Imagen y Overlay (lado izquierdo/superior) */}
            <div className="relative w-full md:w-1/2 h-80 md:h-auto flex-shrink-0">
                <Image
                    src="/images/ninos-de-vista-lateral-aprendiendo-ingles.jpg"
                    alt="Estudiantes sonriendo en Colegio Albatros"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="z-0 opacity-100 md:opacity-100"
                />
                {/* Overlay degradado de negro a transparente de abajo hacia arriba */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.0) 100%)"
                    }}
                ></div>

                {/* Mensaje principal sobre la imagen para mobile/tablet */}
                <div className="relative z-20 text-center md:hidden text-white pt-20 pb-10 px-6 flex flex-col justify-end h-full">
                    <h1 className="font-heading text-4xl font-extrabold leading-tight drop-shadow-md">
                        Para tu hijo, <br /> el mejor colegio.
                    </h1>
                    <p className="font-body text-lg opacity-90 mt-2 drop-shadow-md">
                        Preescolar | Primaria | Secundaria
                    </p>
                </div>
            </div>

            {/* Contenido del Call to Action (lado derecho/inferior) */}
            <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-[inherit] flex flex-col items-center md:items-start justify-center text-center md:text-left text-albatrosBlue p-8 md:p-12 md:py-20 flex-grow">
                <h2 className="hidden md:block font-heading text-xl md:text-2xl font-semibold mb-4 opacity-90">
                    18 años de excelencia educativa
                </h2>

                {/* Hook principal para desktop */}
                <h1 className="hidden md:block font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                    Para tu hijo, el mejor colegio.
                </h1>

                {/* Niveles Educativos para desktop */}
                <p className="hidden md:block font-body text-xl md:text-2xl mb-8 opacity-90">
                    Preescolar | Primaria | Secundaria
                </p>

                {/* Título "Inscripciones Abiertas" - destacado */}
                <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-albatrosRed drop-shadow-sm">
                    ¡Inscripciones Abiertas!
                </h3>

                {/* Call to Actions (CTA) */}
                <div className="flex justify-center md:justify-start">
                    <Button
                        // Ahora usamos el helper con contexto y acción 'agendarCita'
                        onClick={(e) => handleWhatsappClickWithContext(e, currentWhatsappContext, 'agendarCita')}
                        variant="red"
                        size="lg"
                    >
                        Asegura tu lugar
                    </Button>
                </div>

                {/* Frase de Urgencia (Siempre centrada) */}
                <p className="font-body text-base md:text-lg opacity-80 animate-pulse text-center mt-6">
                    Cupo limitado.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
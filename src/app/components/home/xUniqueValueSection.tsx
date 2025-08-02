
// src/app/components/home/UniqueValueSection.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react'; // Iconos para el título

const UniqueValueSection: React.FC = () => {
    return (
        <section className="w-full bg-albatrosBlue py-20 px-6 md:px-12 text-albatrosWhite">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Bloque de Texto de Valor */}
                <div className="text-center md:text-left">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 drop-shadow-md flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
                        <span className="mb-4 md:mb-0 md:mr-4">
                            <Sparkles size={60} className="text-albatrosRed animate-bounce-slow drop-shadow-lg" />
                        </span>
                        ¿Qué nos hace únicos?
                    </h2>
                    <p className="font-body text-xl md:text-2xl leading-relaxed opacity-90 mb-6 drop-shadow-sm">
                        Año tras año somos reconocidos por las autoridades educativas por los excelentes resultados y nivel educativo de nuestros estudiantes.
                    </p>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-80">
                        A continuación, te presentamos algunos de nuestros logros más destacados.
                    </p>
                </div>

                {/* Bloque de Imagen (placeholder o real) */}
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="/recognition-image.jpg" // CAMBIA ESTA RUTA: Imagen de reconocimiento, certificados, o estudiantes destacando
                        alt="Reconocimiento Educativo"
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="rounded-lg"
                    />
                    {/* Opcional: un sutil overlay o gradiente sobre la imagen si el texto es muy blanco */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default UniqueValueSection;
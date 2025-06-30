// src/app/components/home/HeroSection.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/common/Button';
import Link from 'next/link'; // Importar Link de next/link

const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Contenedor para la imagen de fondo con position: relative */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-background.jpg" // CAMBIA ESTA RUTA por una imagen de alta calidad
                    alt="Estudiantes felices en Grupo Cultural Albatros"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            {/* Overlay oscuro para mejorar contraste del texto */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Contenido del Hero (Hook y CTA) */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-albatrosWhite p-6 text-center max-w-4xl mx-auto">
                {/* Hook / Título Principal */}
                <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-md">
                    Para tu hijo, <br className="md:hidden" /> el mejor colegio.
                </h1>

                {/* Sub-Hook / Niveles Educativos */}
                <p className="font-body text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md">
                    Preescolar | Primaria | Secundaria
                </p>

                {/* Call to Actions (CTA) */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    {/* Botón de Inscripciones Abiertas */}
                    <Button asChild variant="red" size="lg">
                        {/* Asegúrate de que Link tenga un solo hijo, en este caso, el texto */}
                        <Link href="/contacto">
                            Inscripciones Abiertas
                        </Link>
                    </Button>

                    {/* Botón de Agenda una Cita */}
                    <Button asChild variant="outlineRed" size="lg">
                        {/* Asegúrate de que Link tenga un solo hijo, en este caso, el texto */}
                        <Link href="/contacto">
                            Agenda una Cita
                        </Link>
                    </Button>
                </div>

                {/* Frase de Urgencia */}
                <p className="font-body text-lg opacity-80 drop-shadow-md">
                    Asegura tu lugar - Cupo limitado
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
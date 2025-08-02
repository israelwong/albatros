import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
    return (
        <section className="relative h-[60vh] flex flex-col justify-center items-center text-white text-center">
            {/* Imagen de Fondo */}
            <Image
                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/1.jpg" // Reemplaza esta imagen
                alt="Alumnos de Grupo Cultural Albatros"
                fill
                className="object-cover z-0"
                priority
            />
            {/* Overlay Oscuro para Legibilidad */}
            <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>

            {/* Contenido de Texto */}
            <div className="relative z-20 p-6 container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                    No solo educamos mentes, también preparamos corazones
                </h1>
            </div>
        </section>
    );
};

export default AboutHero;
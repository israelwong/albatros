import React from 'react';
import Image from 'next/image';

const AdmissionsHero = () => {
    return (
        <section className="relative h-[60vh] flex flex-col justify-center items-center text-white text-center">
            {/* Imagen de Fondo */}
            <Image
                src="/images/admisiones/hero.jpg" // Reemplaza esta imagen
                alt="Bienvenida a admisiones de Grupo Cultural Albatros"
                fill
                className="object-cover z-0"
                priority
            />
            {/* Overlay Oscuro para Legibilidad */}
            <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>

            {/* Contenido de Texto */}
            <div className="relative z-20 p-6 container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                    Forma Parte de la Familia Albatros
                </h1>
                <p className="text-xl md:text-2xl mt-4 opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    Estamos emocionados de acompañarte en el inicio de este gran viaje educativo.
                </p>
            </div>
        </section>
    );
};

export default AdmissionsHero;
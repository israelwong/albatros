"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const opportunities = [
    {
        title: "Inglés de Nivel Internacional",
        description: "Certificaciones Cambridge y Oxford.",
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/alumnos/25.jpg"
    },
    {
        title: "Tecnología y Futuro",
        description: "Robótica y Computación de vanguardia.",
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/alumnos/39.jpg"
    },
    {
        title: "Talleres deportivos",
        description: "Fomentamos el deporte.",
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/alumnos/35.jpg"
    },
    {
        title: "Clases de Natación",
        description: "Alberca climatizada.",
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/20.jpg"
    },
];

const OpportunitiesCarousel = () => {
    // CAMBIO 1: Añadimos align: 'center' para centrar la tarjeta activa
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 4000 })]);

    return (
        <section className="bg-primary py-16 md:py-24 overflow-hidden">
            {/* CAMBIO 2: El 'container' ahora solo envuelve el texto, no el carrusel */}
            <div className="container mx-auto">
                <div className="text-center mb-4 px-4">
                    <h2 className="text-2xl md:text-4xl font-light text-secondary">Un mundo de oportunidades</h2>
                    <p className="text-zinc-200">
                        Ofrece a tus hijos una experiencia integral en su formación académica
                    </p>
                </div>
            </div>
            {/* El carrusel ahora vive fuera del 'container' para ser full-width */}
            <div className="mt-8" ref={emblaRef}>
                <div className="flex">
                    {opportunities.map((item, index) => (
                        <div
                            key={index}
                            // CAMBIO 3: La base en móvil ahora es del 80% (4/5)
                            className="flex-grow-0 flex-shrink-0 basis-4/5 sm:basis-1/2 lg:basis-1/4 px-2 sm:px-4"
                        >
                            <div className="relative h-[500px] rounded-xl shadow-lg overflow-hidden group">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                    <p className="opacity-90 mt-1">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpportunitiesCarousel;
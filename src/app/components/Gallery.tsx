"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";

// TODO: Reemplaza estas rutas con las de tus 10 fotos de la galería.
const photos = [
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/1.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/2.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/3.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/4.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/5.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/6.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/7.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/8.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/9.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/10.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/11.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/12.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/13.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/14.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/15.jpg", width: 800, height: 600 },
    { src: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/galeria/16.jpg", width: 800, height: 600 },
];

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Instalaciones diseñadas para inspirar
                    </h2>
                    <p className="text-lg text-brand-text-light max-w-2xl mx-auto mt-4">
                        Cada rincón está pensado para potenciar el aprendizaje, la creatividad y el bienestar de nuestros alumnos.
                    </p>
                </div>

                {/* Retícula de Imágenes */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.map((photo, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
                            onClick={() => setIndex(idx)}
                        >
                            <Image
                                src={photo.src}
                                alt={`Instalaciones del colegio ${idx + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                        </div>
                    ))}
                </div>

                {/* Componente Lightbox */}
                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={photos}
                />
            </div>
        </section>
    );
};

export default Gallery;
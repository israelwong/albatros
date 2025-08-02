"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import { type Slide } from "yet-another-react-lightbox"; // <-- 1. Importamos el tipo 'Slide'
import { PlayCircle } from 'lucide-react';

const directorsData = [
    {
        name: "Directora de Preescolar",
        title: "Plantel Albatros",
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Preescolar%20Albatros.jpg",
        videoUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Preescolar%20Albatros.mp4"
    },
    {
        name: "Directora de Preescolar Tecno",
        title: "Plantel Tecno",
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Prescolar%20Tecno.jpg",
        videoUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Preescolar%20Tecno%20WA.mp4"
    },
    {
        name: "Directora de Primaria",
        title: "Plantel Albatros",
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Diractoria%20Primaria%20Albatros.jpg",
        videoUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Primaria%20Albatros.mp4"
    },
    {
        name: "Directora de Primaria Tecno",
        title: "Plantel Tecno",
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Primaria%20Tecno.jpg",
        videoUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Primaria%20Tecno.mp4"
    },
    {
        name: "Directora de Secundaria",
        title: "Plantel Tecno",
        imageUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20secundaria.jpg",
        videoUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Secundaria.mp4"
    }
];

// 2. Aplicamos el tipo 'Slide[]' a nuestra constante
const videoSlides: Slide[] = directorsData.map(director => ({
    type: 'video',
    sources: [{ src: director.videoUrl, type: 'video/mp4' }],
    poster: director.imageUrl,
}));

const DirectorsGrid = () => {
    const [index, setIndex] = useState(-1);

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Conoce a Nuestro Equipo Directivo
                    </h2>
                    <p className="text-lg text-brand-text-light max-w-2xl mx-auto mt-4">
                        Líderes apasionadas por la educación, dedicadas al crecimiento de cada uno de nuestros alumnos.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {directorsData.map((director, idx) => (
                        <div key={director.name} className="bg-brand-surface rounded-lg shadow-lg overflow-hidden text-center">
                            <Image
                                src={director.imageUrl}
                                alt={`Foto de ${director.name}`}
                                width={400}
                                height={500}
                                className="w-full h-100 object-cover object-top"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary">{director.name}</h3>
                                <p className="text-brand-text-light mb-4">{director.title}</p>
                                <button
                                    onClick={() => setIndex(idx)}
                                    className="bg-accent text-white font-bold py-2 px-6 rounded-full
                             flex items-center justify-center gap-2 mx-auto
                             hover:bg-accent-hover transition-colors duration-300"
                                >
                                    <PlayCircle size={20} />
                                    Ver Mensaje
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Video]}
                slides={videoSlides}
                video={{ autoPlay: true }} // 3. Corregimos 'autoplay' a 'autoPlay'
            />
        </section>
    );
};

export default DirectorsGrid;
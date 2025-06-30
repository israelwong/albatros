// src/app/components/home/AlbatrosGallery.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import Button from '@/app/components/common/Button'; // Si usas el botón "Ver Galería Completa"
import Link from 'next/link'; // Necesario para el botón "Ver Galería Completa"

// Datos de las fotos de instalaciones (COPIAR O IMPORTAR DESDE UN LUGAR CENTRAL)
// Aquí, para Albatros, vamos a FILTRAR O SELECCIONAR las fotos que mejor lo representen.
// Ajusta esta lista para que sean las fotos REALES del Colegio Albatros.
const albatrosFacilityPhotos = [
    { src: "/facilities/classroom.jpg", width: 800, height: 600, alt: "Salones Amplios con Pizarrones Electrónicos (Albatros)", title: "Aula Moderna", description: "Espacio de aprendizaje con pizarrones interactivos." },
    { src: "/facilities/library.jpg", width: 600, height: 800, alt: "Áreas de Tablets y Biblioteca (Albatros)", title: "Biblioteca Digital", description: "Zonas para estudio y acceso a recursos tecnológicos." },
    { src: "/facilities/playground.jpg", width: 1000, height: 700, alt: "Patios Recreativos y Áreas de Juegos Infantiles (Albatros)", title: "Patio de Recreo", description: "Áreas seguras para el esparcimiento al aire libre." },
    { src: "/facilities/dance-studio.jpg", width: 700, height: 900, alt: "Salón de Danza (Albatros)", title: "Salón de Danza", description: "Donde la creatividad y la expresión se unen al movimiento." },
    { src: "/facilities/security.jpg", width: 800, height: 533, alt: "Sistema Robusto de Videovigilancia (Albatros)", title: "Seguridad 24/7", description: "Monitoreo constante para la seguridad." },
    // Añade más fotos específicas de Albatros aquí
];

const AlbatrosGallery: React.FC = () => {
    const [openLightbox, setOpenLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Muestra todas las fotos de Albatros en la retícula.
    const photosForAlbum = albatrosFacilityPhotos.map(photo => ({
        src: photo.src, width: photo.width, height: photo.height, alt: photo.alt,
    }));

    // Los slides para el lightbox son todas las fotos con sus títulos/descripciones.
    const slidesForLightbox = albatrosFacilityPhotos.map(photo => ({
        src: photo.src, width: photo.width, height: photo.height, alt: photo.alt,
        title: photo.title || photo.alt, description: photo.description || '',
    }));

    const openSpecificImageInGallery = (index: number) => {
        setCurrentImageIndex(index);
        setOpenLightbox(true);
    };

    // Colores directamente en hexadecimal
    const albatrosBlueHex = '#1A2B4B';
    // const albatrosRedHex = '#E53E3E';

    return (
        <section className="w-full py-16 px-6 md:px-12" style={{ backgroundColor: '#FFFFFF', color: albatrosBlueHex }}> {/* Fondo blanco */}
            <div className="container mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
                    Explora Nuestras Instalaciones
                </h2>
                <p className="font-body leading-relaxed text-center max-w-2xl mx-auto mb-10" style={{ color: '#4A5568' }}> {/* gray-700 */}
                    Descubre los espacios que inspiran el aprendizaje y el desarrollo integral en nuestro plantel.
                </p>

                {/* Galería de Fotos (Grid de Tailwind) */}
                <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photosForAlbum.map((photo, index) => (
                        <div
                            key={photo.src}
                            className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-md cursor-pointer
                         transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                            onClick={() => openSpecificImageInGallery(index)}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                layout="fill"
                                objectFit="cover"
                                priority={false}
                                loading="lazy"
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Button asChild variant="blue" size="lg">
                        <Link href="/"> {/* Enlaza al Home para ver la galería principal */}
                            Ver Galería Completa
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Lightbox Component */}
            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                slides={slidesForLightbox}
                index={currentImageIndex}
                plugins={[Captions]}
            />
        </section>
    );
};

export default AlbatrosGallery;
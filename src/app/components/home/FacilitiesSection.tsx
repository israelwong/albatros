// src/app/components/home/FacilitiesSection.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';

import Button from '@/app/components/common/Button';

// Define tus imágenes para la galería aquí
const facilityPhotosData = [
    { src: "/facilities/classroom.jpg", width: 800, height: 600, alt: "Salones Amplios con Pizarrones Electrónicos", title: "Aula Moderna", description: "Equipada con pizarrones interactivos para un aprendizaje dinámico." },
    { src: "/facilities/lab.jpg", width: 600, height: 800, alt: "Laboratorios de Cómputo y Ciencias", title: "Laboratorio de Ciencias", description: "Espacio dedicado a la experimentación práctica y el descubrimiento científico." },
    { src: "/facilities/sports.jpg", width: 1200, height: 800, alt: "Canchas Deportivas Modernas", title: "Cancha Multideportiva", description: "Instalaciones de primer nivel para fútbol, baloncesto y actividades físicas." },
    { src: "/facilities/pool.jpg", width: 800, height: 600, alt: "Alberca Propia (Colegio Tecno)", title: "Alberca Olímpica", description: "Piscina techada para clases de natación y actividades acuáticas." },
    { src: "/facilities/library.jpg", width: 600, height: 800, alt: "Áreas de Tablets y Biblioteca", title: "Área Tecnológica", description: "Espacios equipados con tablets y computadoras para el aprendizaje digital." },
    { src: "/facilities/cafeteria.jpg", width: 900, height: 600, alt: "Cafetería con Espacios Cómodos", title: "Cafetería Escolar", description: "Un espacio acogedor para el descanso y la alimentación saludable de los alumnos." },
    { src: "/facilities/dance-studio.jpg", width: 700, height: 900, alt: "Salón de Danza", title: "Salón de Danza", description: "Donde la creatividad y la expresión se unen a través del movimiento." },
    { src: "/facilities/playground.jpg", width: 1000, height: 700, alt: "Patios Recreativos y Áreas de Juegos Infantiles", title: "Patios de Recreo", description: "Áreas seguras y divertidas para el esparcimiento y juego de los niños." },
    { src: "/facilities/security.jpg", width: 800, height: 533, alt: "Sistema Robusto de Videovigilancia", title: "Seguridad 24/7", description: "Monitoreo constante para garantizar la seguridad y el bienestar de toda la comunidad." },
];

const FacilitiesSection: React.FC = () => {
    const [openLightbox, setOpenLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Estas son las fotos que se mostrarán en la retícula.
    // Puedes mostrar un subconjunto si quieres un botón "Ver Galería Completa".
    const displayedPhotos = facilityPhotosData.slice(0, 6); // Mostrar las primeras 6 fotos

    // Los slides para el lightbox son todas las fotos con sus títulos/descripciones para captions.
    const slidesForLightbox = facilityPhotosData.map(photo => ({
        src: photo.src,
        width: photo.width,
        height: photo.height,
        alt: photo.alt,
        title: photo.title || photo.alt,
        description: photo.description || '',
    }));

    const openSpecificImageInGallery = (index: number) => {
        setCurrentImageIndex(index);
        setOpenLightbox(true);
    };

    return (
        <section className="w-full py-16 px-6 md:px-12 bg-gray-100 text-albatrosBlue">
            <div className="container mx-auto">
                {/* Título y Subtítulo de la Sección */}
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6">
                    Espacios Diseñados para Inspirar
                </h2>
                <p className="font-body text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-16 text-gray-700">
                    Cada rincón de nuestros planteles es un entorno seguro y funcional, creado meticulosamente para potenciar el aprendizaje activo, la creatividad y el bienestar integral de nuestros alumnos.
                </p>

                {/* Galería de Fotos (Grid de Tailwind) */}
                <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {displayedPhotos.map((photo, index) => (
                        <div
                            key={photo.src} // Usar src como key (asegura que sea único)
                            className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-md cursor-pointer
                         transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                            onClick={() => openSpecificImageInGallery(index)}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                layout="fill" // Usa layout="fill" para que la imagen cubra el div
                                objectFit="cover" // Asegura que la imagen cubra el área sin distorsionar
                                priority={index < 3} // Priority para las primeras 3 imágenes visibles
                                loading={index >= 3 ? "lazy" : "eager"} // Lazy load para las demás
                                className="rounded-lg" // Aplica el redondeo directamente a la imagen
                            />
                        </div>
                    ))}
                </div>

                {/* Botón para ver galería completa (si el Lightbox contiene más fotos que la retícula) */}
                {slidesForLightbox.length > displayedPhotos.length && (
                    <div className="text-center mt-12">
                        <Button variant="red" size="lg" onClick={() => openSpecificImageInGallery(0)}>
                            Ver Galería Completa ({slidesForLightbox.length} fotos)
                        </Button>
                    </div>
                )}

                {/* Lightbox Component */}
                <Lightbox
                    open={openLightbox}
                    close={() => setOpenLightbox(false)}
                    slides={slidesForLightbox}
                    index={currentImageIndex}
                    plugins={[Captions]} // Habilitar el plugin de Captions
                />
            </div>
        </section>
    );
};

export default FacilitiesSection;
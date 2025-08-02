"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Testimonios reales de padres de familia
const testimonials = [
    {
        quote: "Excelente Institución!!! Mis hijos mayores estudiaron ahí y una ya es médico y el otro está ingresando a la universidad con un promedio excelente! Los maestros son los mejores!!!!",
        author: "May Martir",
        relation: "Madre de exalumnos"
    },
    {
        quote: "Excelente colegio lo recomiendo, vale la pena hacer un sacrificio por la educación de nuestros hijos. Mí nena lleva cinco años estudiando ahí y la verdad siempre ha sacado buen promedio gracias al trabajo y enseñanza de todos los profesores.",
        author: "Maldonado Tolentino",
        relation: "Madre de alumna"
    },
    {
        quote: "¡No hay nada más que decir! La mejor opción si buscas la excelencia en la educación de tus hijos. Grupo Cultural Albatros los prepara para el mundo.",
        author: "Mario Delza",
        relation: "Padre de familia"
    },
    {
        quote: "Excelente escuela, excelentes docentes, excelente aprendizaje.",
        author: "Gabv Fuentes",
        relation: "Padre de familia"
    }
];

const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="bg-brand-background py-12 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-6 md:mb-16">
                    <h2 className="text-4xl md:text-4xl font-bold text-primary">
                        Lo que dicen nuestras familias
                    </h2>
                </div>

                {/* Estructura de Embla Carousel */}
                <div className="overflow-hidden relative" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-grow-0 flex-shrink-0 basis-full p-4">
                                <div className="bg-brand-surface rounded-xl shadow-lg p-8 md:p-12 h-full flex flex-col justify-center items-center text-center">
                                    {/* <Quote className="text-secondary mb-6" size={48} /> */}
                                    <p className="text-lg md:text-xl italic text-brand-text-light mb-8 max-w-2xl">
                                        &quot;{testimonial.quote}&quot;
                                    </p>
                                    <div>
                                        <p className="font-bold text-primary text-lg">{testimonial.author}</p>
                                        <p className="text-brand-text-light">{testimonial.relation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botones de Navegación */}
                    <button
                        onClick={scrollPrev}
                        className="absolute top-1/2 left-0 md:-left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                        aria-label="Testimonio anterior"
                    >
                        <ArrowLeft className="text-primary" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                        aria-label="Siguiente testimonio"
                    >
                        <ArrowRight className="text-primary" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
"use client";

import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { MapPin, Phone, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import { handleCallClick } from '@/lib/phone';

export interface CampusData {
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
    imageUrls?: string[];
    imagePosition?: 'left' | 'right';
}

interface CampusDetailProps {
    campus: CampusData;
}

const CampusDetail: React.FC<CampusDetailProps> = ({ campus }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const hasImages = campus.imageUrls && campus.imageUrls.length > 0;
    const hasMultipleImages = campus.imageUrls?.length && campus.imageUrls.length > 1;

    return (
        <section className={`py-16 md:py-24 ${hasImages ? 'bg-brand-background' : 'bg-brand-surface'}`}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    <div className={`w-full ${campus.imagePosition === 'right' ? 'md:order-2' : ''}`}>
                        {hasMultipleImages ? (
                            // VISTA 1: Galería con carrusel (más de 1 foto)
                            <>
                                <div className="overflow-hidden rounded-lg shadow-xl" ref={emblaRef}>
                                    <div className="flex">
                                        {campus.imageUrls!.map((url, index) => (
                                            <div key={index} className="relative flex-grow-0 flex-shrink-0 basis-full aspect-[4/3]">
                                                <Image src={url} alt={`${campus.name} - Imagen ${index + 1}`} fill className="object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* --- BOTONES DEL CARRUSEL (REINTEGRADOS) --- */}
                                <div className="flex justify-end gap-3 mt-4">
                                    <button onClick={scrollPrev} aria-label="Anterior" className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"><ArrowLeft size={20} className="text-primary" /></button>
                                    <button onClick={scrollNext} aria-label="Siguiente" className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"><ArrowRight size={20} className="text-primary" /></button>
                                </div>
                            </>
                        ) : hasImages ? (
                            // VISTA 2: Imagen de portada única (solo 1 foto)
                            <div className="relative aspect-[4/3] rounded-lg shadow-xl overflow-hidden">
                                <Image src={campus.imageUrls![0]} alt={`Foto de portada de ${campus.name}`} fill className="object-cover" />
                            </div>
                        ) : (
                            // VISTA 3: Placeholder con isotipo (sin fotos)
                            <div className="bg-primary rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-8 aspect-[4/3]">
                                <Image src="/gca_isotipo_white.svg" alt={`Isotipo de ${campus.name}`} width={150} height={150} />
                                <p className="text-white/80 mt-6 text-lg">Próximamente: Nuevas instalaciones remodeladas.</p>
                            </div>
                        )}
                    </div>

                    <div className={`w-full ${campus.imagePosition === 'right' ? 'md:order-1' : ''}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{campus.name}</h2>
                        <p className="text-lg text-brand-text-light mb-6">{campus.description}</p>
                        <div className="space-y-4 border-t border-gray-200 pt-6">
                            <p className="flex items-start gap-3"><MapPin className="text-accent mt-1 flex-shrink-0" /><span>{campus.address}</span></p>
                            <p className="flex items-center gap-3"><Phone className="text-accent flex-shrink-0" /><a href="#" onClick={(e) => handleCallClick(e, campus.phone)} className="cursor-pointer hover:text-accent">{campus.phone}</a></p>
                            <p className="flex items-center gap-3"><Mail className="text-accent flex-shrink-0" /><a href={`mailto:${campus.email}`} className="hover:text-accent break-all">{campus.email}</a></p>
                        </div>
                        {/* <div className="mt-6 aspect-video w-full rounded-lg overflow-hidden border">
                            <iframe
                                src={campus.googleMapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div> */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a href={campus.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-bold py-3 px-6 rounded-full text-center hover:bg-primary-hover transition-colors">Ver en Google Maps</a>
                            <Link href="/admisiones" className="bg-secondary text-primary font-bold py-3 px-6 rounded-full text-center hover:bg-secondary-hover transition-colors">Iniciar Admisión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampusDetail;
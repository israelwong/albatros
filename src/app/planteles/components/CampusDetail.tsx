"use client";

import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { MapPin, Phone, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import { handleCallClick } from '@/lib/phone';
import { handleWhatsappClickWithContext } from '@/lib/whatsapp';

// Componente para el ícono de WhatsApp
const WhatsAppIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
    >
        <circle cx="12" cy="12" r="11" fill="#25D366" />
        <path
            d="M16.276 13.921c-.134-.067-.787-.387-.91-.433-.124-.047-.214-.07-.304.07-.09.14-.349.434-.426.524-.078.09-.155.101-.289.033-.134-.067-.568-.209-1.082-.665-.4-.36-.671-.6-.895-.98-.224-.379-.024-.35.155-.529.14-.14.304-.387.439-.582.134-.194.067-.365-.033-.51-.1-.14-.895-2.162-1.226-2.955-.329-.793-.66-.684-.91-.696-.23-.008-.49-.009-.75-.009-.258 0-.671.09-.91.304-.23.21-.873.858-.873 2.083 0 1.225.895 2.41 1.018 2.571.124.16.23.242 2.128 3.321 2.378 1.488 2.876 1.295 3.389 1.206.514-.09.787-.359.895-.583.108-.224.108-.415.07-.764-.033-.35-.124-.582-.258-.753z"
            fill="#FFFFFF"
        />
        <path
            d="M12.04 2.3c-5.2 0-9.4 4.2-9.4 9.4 0 1.7.5 3.3 1.3 4.8l-1.4 4.5 4.7-1.3c1.4.8 3 1.2 4.8 1.2 5.2 0 9.4-4.2 9.4-9.4 0-5.2-4.2-9.4-9.4-9.4z"
            stroke="#FFFFFF"
            strokeWidth="1.5" />
    </svg>
);

// Se añade 'whatsapp' y se elimina 'googleMapsEmbedUrl'
export interface CampusData {
    name: string;
    description: string;
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    googleMapsUrl: string;
    googleMapsLink?: string; // Añadido para el enlace directo a Google Maps
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

    // Determinamos el contexto para WhatsApp
    const whatsappContext = campus.name.toLowerCase().includes('tecno') ? 'tecno' : 'albatros';

    return (
        <section className={`py-16 md:py-24 ${hasImages ? 'bg-brand-background' : 'bg-brand-surface'}`}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    <div className={`w-full ${campus.imagePosition === 'right' ? 'md:order-2' : ''}`}>
                        {hasMultipleImages ? (
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
                                <div className="flex justify-end gap-3 mt-4">
                                    <button onClick={scrollPrev} aria-label="Anterior" className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"><ArrowLeft size={20} className="text-primary" /></button>
                                    <button onClick={scrollNext} aria-label="Siguiente" className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"><ArrowRight size={20} className="text-primary" /></button>
                                </div>
                            </>
                        ) : hasImages ? (
                            <div className="relative aspect-[4/3] rounded-lg shadow-xl overflow-hidden">
                                <Image src={campus.imageUrls![0]} alt={`Foto de portada de ${campus.name}`} fill className="object-cover" />
                            </div>
                        ) : (
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
                            {/* --- WHATSAPP AÑADIDO --- */}
                            <p className="flex items-center gap-3">
                                <WhatsAppIcon />
                                <button
                                    type="button"
                                    onClick={(e) => handleWhatsappClickWithContext(e, whatsappContext, 'tengoDudas')}
                                    className="cursor-pointer hover:text-accent bg-transparent border-none p-0 m-0"
                                    style={{ background: 'none' }}
                                >
                                    {campus.whatsapp}
                                </button>
                            </p>
                            <p className="flex items-center gap-3"><Mail className="text-accent flex-shrink-0" /><a href={`mailto:${campus.email}`} className="hover:text-accent break-all">{campus.email}</a></p>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a href={campus.googleMapsLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-bold py-3 px-6 rounded-full text-center hover:bg-primary-hover transition-colors">Ver en Google Maps</a>
                            <Link href="/admisiones" className="bg-secondary text-primary font-bold py-3 px-6 rounded-full text-center hover:bg-secondary-hover transition-colors">Iniciar Admisión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampusDetail;

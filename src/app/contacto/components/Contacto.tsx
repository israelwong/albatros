// src/app/contacto/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ExternalLink } from 'lucide-react';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import Button from '@/app/components/common/Button';
import { handleWhatsappClickWithContext, getWhatsappContext } from '@/lib/whatsapp';
import { usePathname } from 'next/navigation';

export const metadata = {
    title: 'Contacto | Grupo Cultural Albatros',
    description: 'Contáctanos para más información sobre nuestros colegios en Zumpango: Colegio Albatros y Colegio Tecno. Teléfonos, direcciones y mapas.',
};

const ContactoPage: React.FC = () => {
    const tecno = {
        name: "Colegio Tecno",
        // phone: "+52 56 1701 5459",
        address: "Segunda cerrada de Chamizal N° 17, San Lorenzo, 55604 Zumpango de Ocampo, Méx.",
        googleMapsLink: "https://maps.app.goo.gl/a6QkeBh88gMSBi5AA",
        mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.0251577702224!2d-99.09010401871414!3d19.796530658818554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18c11699e1615%3A0xebe1298c4a8d43d3!2sColegio%20Tecnoalbatros!5e0!3m2!1ses!2smx!4v1751223344393!5m2!1ses!2smx",
        logo: "/logo_tecno.svg",
    };

    const albatros = {
        name: "Albatros Grupo Cultural",
        // phone: "+525919170999",
        address: "Federico Gómez 32, Santiago 2da Secc., 55600 Zumpango de Ocampo, Méx.",
        googleMapsLink: "https://maps.app.goo.gl/sWVFJYMf5PBfmu886",
        mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3256471056517!2d-99.0979828258403!3d19.79902237612142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18eaa00d9093b%3A0x8f807d11f48ed441!2sGrupo%20Cultural%20Albatros!5e0!3m2!1ses!2smx!4v1751222870431!5m2!1ses!2smx",
        logo: "/logo_albatros.svg",
    };


    // Obtener el contexto de WhatsApp para el CTA final
    const pathname = usePathname();
    const currentWhatsappContext = getWhatsappContext(pathname);

    return (
        <div className="flex flex-col items-center">
            {/* Sección Intro de Contacto */}
            <section className="w-full py-16 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                        Contáctanos
                    </h1>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 drop-shadow-sm">
                        Estamos listos para resolver tus dudas y ayudarte a elegir el mejor camino para la educación de tu hijo en Grupo Cultural Albatros.
                    </p>
                </div>
            </section>

            {/* Sección de Fichas de Contacto por Colegio */}
            <section className="w-full py-16 px-6 md:px-12 bg-gray-100 text-albatrosBlue">
                <div className="container mx-auto max-w-5xl">
                    <p className="font-body text-gray-700 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
                        Nuestro grupo cuenta con dos distinguidos planteles en Zumpango. A continuación, la información de contacto y ubicación de cada uno:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Ficha Colegio Tecno */}
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full border-t-4 border-albatrosRed">
                            <div className="p-8 text-center">
                                <Image
                                    src={tecno.logo}
                                    alt={`Logo ${tecno.name}`}
                                    width={190}
                                    height={190}
                                    className="mb-6 mx-auto object-contain"
                                />
                                <h2 className="font-heading text-3xl font-bold mb-4">{tecno.name}</h2>
                                <div className="space-y-4 font-body text-gray-700 text-lg">
                                    {/* <p className="flex items-center justify-center md:justify-start lg:justify-center">
                                        <Phone size={20} className="mr-2 text-albatrosBlue flex-shrink-0" />
                                        <Link href={`tel:${tecno.phone}`} className="hover:text-albatrosRed transition-colors">{tecno.phone}</Link>
                                    </p> */}
                                    <p className="flex items-start justify-center md:justify-start lg:justify-center">
                                        <MapPin size={20} className="mr-2 text-albatrosBlue mt-1 flex-shrink-0" />
                                        <span>{tecno.address}</span>
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start lg:justify-center">
                                        <ExternalLink size={20} className="mr-2 text-albatrosBlue" />
                                        <Link href={tecno.googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-albatrosRed transition-colors">Ver en Google Maps</Link>
                                    </p>
                                </div>
                            </div>
                            {/* Iframe del Mapa */}
                            <div className="w-full h-80 bg-gray-200">
                                <iframe
                                    src={tecno.mapIframeSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Ubicación de ${tecno.name}`}
                                ></iframe>
                            </div>
                        </div>

                        {/* Ficha Albatros Grupo Cultural */}
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full border-t-4 border-albatrosBlue">
                            <div className="p-8 text-center">
                                <Image
                                    src={albatros.logo}
                                    alt={`Logo ${albatros.name}`}
                                    width={120}
                                    height={120}
                                    className="mb-6 mx-auto object-contain"
                                />
                                <h2 className="font-heading text-3xl font-bold mb-4">{albatros.name}</h2>
                                <div className="space-y-4 font-body text-gray-700 text-lg">
                                    {/* <p className="flex items-center justify-center md:justify-start lg:justify-center">
                                        <Phone size={20} className="mr-2 text-albatrosBlue flex-shrink-0" />
                                        <Link href={`tel:${albatros.phone}`} className="hover:text-albatrosRed transition-colors">{albatros.phone}</Link>
                                    </p> */}
                                    <p className="flex items-start justify-center md:justify-start lg:justify-center">
                                        <MapPin size={20} className="mr-2 text-albatrosBlue mt-1 flex-shrink-0" />
                                        <span>{albatros.address}</span>
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start lg:justify-center">
                                        <ExternalLink size={20} className="mr-2 text-albatrosBlue" />
                                        <Link href={albatros.googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-albatrosRed transition-colors">Ver en Google Maps</Link>
                                    </p>
                                </div>
                            </div>
                            {/* Iframe del Mapa */}
                            <div className="w-full h-80 bg-gray-200">
                                <iframe
                                    src={albatros.mapIframeSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Ubicación de ${albatros.name}`}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA Final (Opcional, similar al footer pero más grande) */}
            <section className="w-full py-16 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                        ¡Estamos listos para ayudarte!
                    </h2>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 mb-8">
                        Contáctanos hoy mismo para resolver todas tus dudas sobre nuestro modelo educativo.
                    </p>
                    <Button
                        onClick={(e) => handleWhatsappClickWithContext(e, currentWhatsappContext, 'agendarCita')}
                        variant="red" size="lg"
                    >
                        Agendar cita
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ContactoPage;
// src/app/oferta-educativa/albatros/page.tsx
"use client";

import React from 'react'; // Eliminamos useState ya que lo gestiona AlbatrosGallery
import Image from 'next/image';
import Button from '@/app/components/common/Button';
import Link from 'next/link';
import { MapPin, ExternalLink } from 'lucide-react';

import { usePathname } from 'next/navigation';
import { handleWhatsappClickWithContext, getWhatsappContext } from '@/lib/whatsapp';

import WorkshopsGlobal from '@/app/components/common/WorkshopsGlobal';
import HookCtaSection from '@/app/components/common/HookCtaSection';
import WhyCarrousel from '@/app/components/common/WhyCarrousel';
// import AlbatrosGallery from './AlbatrosGallery'; // ¡Importa el nuevo componente de galería!

export const metadata = {
    title: 'Colegio Albatros Zumpango Centro | Grupo Cultural Albatros',
    description: 'Descubre la propuesta educativa de Albatros Grupo Cultural en Zumpango: Kinder y Primaria con 18 años de experiencia y enfoque integral.',
};

const albatrosContactData = {
    name: "Colegio Albatros",
    phone: "+5919170999",
    address: "Federico Gómez 32, Santiago 2da Secc., 55600 Zumpango de Ocampo, Méx.",
    googleMapsLink: "https://maps.app.goo.gl/sWVFJYMf5PBfmu886",
    mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3256471056517!2d-99.0979828258403!3d19.79902237612142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18eaa00d9093b%3A0x8f807d11f48ed441!2sGrupo%20Cultural%20Albatros!5e0!3m2!1ses!2smx!4v1751222870431!5m2!1ses!2smx",
    logo: "/colegio_albatros_logo.svg",
};

const AlbatrosCulturalPage: React.FC = () => {
    const mensualidadAlbatrosKinder1 = "$1,590.00 MXN";
    const mensualidadAlbatrosKinder2_3 = "$1,766.00 MXN";
    const mensualidadAlbatrosPrimaria1 = "$2,264.00 MXN";
    const mensualidadAlbatrosPrimaria2 = "$2,390.00 MXN";
    const mensualidadAlbatrosPrimaria3_6 = "$2,516.00 MXN";
    const pathname = usePathname();
    const currentWhatsappContext = getWhatsappContext(pathname);

    return (
        <div className="flex flex-col items-center">
            {/* Sección Intro / Hero de Albatros Grupo Cultural */}
            <section className="relative w-full py-12 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-4xl">
                    <Image
                        src="/colegio_albatros_logo.svg"
                        alt="Logo Albatros Grupo Cultural"
                        width={180}
                        height={180}
                        className="mb-6 mx-auto drop-shadow-md"
                    />
                    {/* <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                        Colegio Albatros
                    </h1> */}
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 drop-shadow-sm">
                        Educación integral de Kinder y Primaria con la solidez de 18 años de experiencia en Zumpango.
                    </p>
                </div>
            </section>

            {/* Niveles Educativos (Refactorizado con precios "desde" y botón) */}
            <section className="w-full py-6 px-6 md:px-12 bg-white text-albatrosBlue">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-5">
                        Niveles Educativos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card Kinder */}
                        <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm flex flex-col items-center border-t-4 border-albatrosBlue">
                            <h3 className="font-heading text-2xl font-bold mb-3">Kinder</h3>
                            <p className="font-body text-gray-700 mb-4">Preescolar de 1º a 3º grado. Desarrollamos la creatividad y las bases para el aprendizaje en un ambiente cálido.</p>
                            <div className="w-full">
                                <p className="font-body text-albatrosBlue text-lg font-bold mb-2">Colegiatura desde:</p>
                                <div className="overflow-x-auto mb-4">
                                    <table className="min-w-full text-sm mx-auto">
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-2 py-1 font-semibold">Kinder 1°</td>
                                                <td className="px-2 py-1 text-right">{mensualidadAlbatrosKinder1}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-1 font-semibold">Kinder 2º y 3°</td>
                                                <td className="px-2 py-1 text-right">{mensualidadAlbatrosKinder2_3}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Button
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleWhatsappClickWithContext(e, currentWhatsappContext, 'inscripcion')}
                                    variant="blue"
                                    size="md"
                                    className="mt-auto"
                                >
                                    Inscríbete hoy mismo
                                </Button>
                            </div>
                        </div>

                        {/* Card Primaria */}
                        <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm flex flex-col items-center border-t-4 border-albatrosBlue">
                            <h3 className="font-heading text-2xl font-bold mb-3">Primaria</h3>
                            <p className="font-body text-gray-700 mb-4">De 1º a 6º grado. Fomentamos el pensamiento crítico, la autonomía y el desarrollo integral de cada estudiante.</p>
                            <div className="w-full">
                                <p className="font-body text-albatrosBlue text-lg font-bold mb-2">Colegiatura desde:</p>
                                <div className="overflow-x-auto mb-4">
                                    <table className="min-w-full text-sm mx-auto">
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-2 py-1 font-semibold">Primaria 1°</td>
                                                <td className="px-2 py-1 text-right">{mensualidadAlbatrosPrimaria1}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-2 py-1 font-semibold">Primaria 2°</td>
                                                <td className="px-2 py-1 text-right">{mensualidadAlbatrosPrimaria2}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-1 font-semibold">Primaria 3°-6°</td>
                                                <td className="px-2 py-1 text-right">{mensualidadAlbatrosPrimaria3_6}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Button
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleWhatsappClickWithContext(e, currentWhatsappContext, 'inscripcion')}
                                    variant="blue"
                                    size="md"
                                    className="mt-auto"
                                >
                                    Inscríbete hoy mismo
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center max-w-3xl mx-auto">

                        <p className="font-body text-gray-700 leading-relaxed mb-6">
                            Contamos con diferentes paquetes educativos, ven y elige cuál es el que más se adapta a tus intereses. <span className="font-bold">El paquete básico incluye:</span> <span className="font-semibold">Computación, robótica, danza e inglés.</span>
                            ¡Pregunta por los detalles y descubre todo lo que podemos ofrecerte!
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button
                                onClick={(e) => handleWhatsappClickWithContext(e, currentWhatsappContext, 'agendarCita')}
                                variant="red" size="lg"
                            >
                                Agenda una cita y recibe una oferta especial por tu visita
                            </Button>
                            <Button asChild variant="outlineBlue" size="lg">
                                <Link href="/oferta-educativa/tecno">
                                    Conoce la oferta de Colegio Tecno
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Sección: ¿Por qué estudiar con nosotros? (Reutilizable) */}
            <WhyCarrousel />

            {/* Sección: Talleres y Actividades (Reutilizable) */}
            <WorkshopsGlobal />

            {/* Sección de Contacto Específico del Colegio Albatros */}
            <section className="w-full py-16 px-6 md:px-12 bg-gray-100 text-albatrosBlue">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
                        ¿Dónde estamos?
                    </h2>
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row gap-8 md:gap-0 h-full border-t-4 border-albatrosBlue">
                        <div className="p-8 text-center md:text-left flex-grow">
                            <h3 className="font-heading text-2xl font-bold mb-4">{albatrosContactData.name}</h3>
                            <div className="space-y-4 font-body text-gray-700 text-lg">
                                {/* <p className="flex items-center justify-center md:justify-start">
                                    <Phone size={20} className="mr-2 text-albatrosBlue flex-shrink-0" />
                                    <Link href={`tel:${albatrosContactData.phone}`} className="hover:text-albatrosRed transition-colors">{albatrosContactData.phone}</Link>
                                </p> */}
                                <p className="flex items-start justify-center md:justify-start">
                                    <MapPin size={20} className="mr-2 text-albatrosBlue mt-1 flex-shrink-0" />
                                    <span>{albatrosContactData.address}</span>
                                </p>
                                <p className="flex items-center justify-center md:justify-start">
                                    <ExternalLink size={20} className="mr-2 text-albatrosBlue" />
                                    <Link href={albatrosContactData.googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-albatrosRed transition-colors">Ver en Google Maps</Link>
                                </p>
                            </div>
                        </div>
                        {/* Iframe del Mapa */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200">
                            <iframe
                                src={albatrosContactData.mapIframeSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Ubicación de ${albatrosContactData.name}`}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Galería de Fotos Específica de Albatros (ahora como componente) */}
            {/* <AlbatrosGallery /> */}

            {/* Lightbox Component (Eliminado de aquí, está dentro de AlbatrosGallery) */}

            {/* CTA Final (Ahora usa el componente HookCtaSection) */}
            <HookCtaSection
                title="¡Asegura el futuro de tu hijo hoy mismo!"
                subtitle="Nuestro equipo está listo para resolver tus dudas y ayudarte a dar el siguiente paso."
                buttonText="Agendar cita" // Texto unificado
            />
        </div>
    );
};

export default AlbatrosCulturalPage;
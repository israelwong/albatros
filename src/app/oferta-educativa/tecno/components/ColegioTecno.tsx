// src/app/oferta-educativa/tecno/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/common/Button';
import Link from 'next/link';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import { usePathname } from 'next/navigation';
import { handleWhatsappClickWithContext, getWhatsappContext } from '@/lib/whatsapp';

// Importamos las secciones reutilizables
import WhyCarrousel from '@/app/components/common/WhyCarrousel';
import WorkshopsGlobal from '@/app/components/common/WorkshopsGlobal';
import HookCtaSection from '@/app/components/common/HookCtaSection';
// import TecnoGallery from '@/app/components/home/TecnoGallery'; // Importa el componente de galería específico de Tecno
import PillarsGlobal from '@/app/components/common/PillarsGlobal';

import { MapPin, ExternalLink } from 'lucide-react';

export const metadata = {
    title: 'Colegio Tecno | Grupo Cultural Albatros',
    description: 'Descubre la propuesta educativa de Colegio Tecno en Zumpango: Kinder, Primaria y Secundaria con tecnología de vanguardia y alberca propia.',
};

const tecnoContactData = {
    name: "Colegio Tecno",
    phone: "+52 56 1701 5459",
    address: "Segunda cerrada de Chamizal N° 17, San Lorenzo, 55604 Zumpango de Ocampo, Méx.",
    googleMapsLink: "https://maps.app.goo.gl/a6QkeBh88gMSBi5AA",
    mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.0251577702224!2d-99.09010401871414!3d19.796530658818554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18c11699e1615%3A0xebe1298c4a8d43d3!2sColegio%20Tecnoalbatros!5e0!3m2!1ses!2smx!4v1751223344393!5m2!1ses!2smx",
    logo: "/colegio_tecno_logo.svg",
};

// Datos de las fotos de instalaciones (el componente TecnoGallery ya los gestiona internamente)

const ColegioTecnoPage: React.FC = () => {
    // Datos de colegiaturas específicas para Tecno
    // const mensualidadTecnoKinder1_3 = "$2,516.00 MXN"; // Kinder 1°-3°
    // const mensualidadTecnoPrimaria1 = "$3,005.00 MXN"; // Primaria 1°
    // const mensualidadTecnoPrimaria2_6 = "$3,164.00 MXN"; // Primaria 2°-6°
    // const mensualidadTecnoSecundaria = "$3,278.00 MXN"; // Secundaria 1°-3°

    const pathname = usePathname();
    const currentWhatsappContext = getWhatsappContext(pathname);


    // Colores específicos de Tecno (en hexadecimal, como acordado)
    const tecnoPurpleHex = '#5D2E8E'; // Morado principal de Tecno
    const albatrosBlueHex = '#1A2B4B'; // El azul institucional (para textos, iconos que no sean morados)

    return (
        <div className="flex flex-col items-center">
            {/* Sección Intro / Hero de Colegio Tecno */}
            <section className="relative w-full py-6 px-6 md:px-12 text-center"> {/* Fondo Morado de Tecno */}
                <div className="container mx-auto max-w-4xl">
                    <div
                        className="mb-6 mx-auto drop-shadow-md"
                        style={{
                            width: 300,
                            height: 300,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            src="/logo_tecno.svg"
                            alt="Logo Colegio Tecno"
                            width={180}
                            height={180}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 drop-shadow-sm w-sm mx-auto">
                        Educación de vanguardia para Kinder, Primaria y Secundaria, con un fuerte énfasis en la tecnología y desarrollo integral.
                    </p>
                </div>
            </section>

            {/* Niveles Educativos (Refactorizado con precios "desde" y botón "Inscríbete hoy mismo") */}
            <section className="w-full py-16 px-6 md:px-12 bg-white" style={{ color: albatrosBlueHex }}> {/* Color de texto azul institucional */}
                <div className="container mx-auto max-w-5xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
                        Niveles Educativos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card Kinder */}
                        <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm flex flex-col items-center border-t-4" style={{ borderColor: tecnoPurpleHex }}> {/* Borde Morado */}
                            <h3 className="font-heading text-2xl font-bold mb-3">Kinder</h3>
                            <p className="font-body text-gray-700 mb-4">Preescolar de 1º a 3º grado. Desarrollamos la creatividad y las bases para el aprendizaje.</p>
                            {/* <div className="w-full">
                                <p className="font-body text-albatrosBlue text-lg font-bold mb-2">Colegiatura desde:</p>
                                <div className="overflow-x-auto mb-4">
                                    <table className="min-w-full text-sm mx-auto">
                                        <tbody>
                                            <tr>
                                                <td className="px-2 py-1 font-semibold">Kinder 1º-3º</td>
                                                <td className="px-2 py-1 text-right">{mensualidadTecnoKinder1_3}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="font-body text-gray-700 text-xs mt-2">*Precios varían según paquete de servicios.</p>
                            </div> */}
                        </div>

                        {/* Card Primaria */}
                        <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm flex flex-col items-center border-t-4" style={{ borderColor: tecnoPurpleHex }}> {/* Borde Morado */}
                            <h3 className="font-heading text-2xl font-bold mb-3">Primaria</h3>
                            <p className="font-body text-gray-700 mb-4">De 1º a 6º grado. Fomentamos el pensamiento crítico y la autonomía en un ambiente de aprendizaje activo.</p>
                            {/* <div className="w-full">
                                <p className="font-body text-albatrosBlue text-lg font-bold mb-2">Colegiatura desde:</p>
                                <div className="overflow-x-auto mb-4">
                                    <table className="min-w-full text-sm mx-auto">
                                        <tbody>
                                            <tr>
                                                <td className="px-2 py-1 font-semibold">Primaria 1°</td>
                                                <td className="px-2 py-1 text-right">{mensualidadTecnoPrimaria1}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-2 py-1 font-semibold">Primaria 2º-6º</td>
                                                <td className="px-2 py-1 text-right">{mensualidadTecnoPrimaria2_6}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="font-body text-gray-700 text-xs mt-2">*Precios varían según paquete de servicios.</p>
                            </div> */}
                        </div>

                        {/* Card Secundaria */}
                        <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm flex flex-col items-center border-t-4" style={{ borderColor: tecnoPurpleHex }}> {/* Borde Morado */}
                            <h3 className="font-heading text-2xl font-bold mb-3">Secundaria</h3>
                            <p className="font-body text-gray-700 mb-4">De 1º a 3º grado. Preparamos a nuestros alumnos para los retos académicos y personales del futuro.</p>
                            {/* <div className="w-full">
                                <p className="font-body text-albatrosBlue text-lg font-bold mb-2">Colegiatura desde:</p>
                                <div className="overflow-x-auto mb-4">
                                    <table className="min-w-full text-sm mx-auto">
                                        <tbody>
                                            <tr>
                                                <td className="px-2 py-1 font-semibold">Secundaria 1º-3º</td>
                                                <td className="px-2 py-1 text-right">{mensualidadTecnoSecundaria}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="font-body text-gray-700 text-xs mt-2">*Precios varían según paquete de servicios.</p>

                            </div> */}
                        </div>
                    </div>

                    {/* Información adicional de precios y referencia cruzada */}
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
                                <Link href="/oferta-educativa/albatros">
                                    Conoce la oferta de Colegio Albatros
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <WorkshopsGlobal />

            <PillarsGlobal />

            {/* Sección de Contacto Específico del Colegio Tecno */}
            <section className="w-full py-16 px-6 md:px-12 bg-gray-100" style={{ color: albatrosBlueHex }}> {/* Color de texto azul institucional */}
                <div className="container mx-auto max-w-4xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
                        Contáctanos
                    </h2>
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row-reverse gap-8 md:gap-0 h-full border-t-4" style={{ borderColor: tecnoPurpleHex }}> {/* Borde Morado */}
                        <div className="p-8 text-center md:text-left flex-grow">
                            <h3 className="font-heading text-2xl font-bold mb-4">{tecnoContactData.name}</h3>
                            <div className="space-y-4 font-body text-gray-700 text-lg">
                                {/* <p className="flex items-center justify-center md:justify-start">
                                    <Phone size={20} className="mr-2" style={{ color: tecnoPurpleHex }} />
                                    <Link href={`tel:${tecnoContactData.phone}`} style={{ color: albatrosBlueHex }} className="hover:text-albatrosRed transition-colors">{tecnoContactData.phone}</Link>
                                </p> */}
                                <p className="flex items-start justify-center md:justify-start">
                                    <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" style={{ color: tecnoPurpleHex }} /> {/* Icono Morado */}
                                    <span>{tecnoContactData.address}</span>
                                </p>
                                <p className="flex items-center justify-center md:justify-start">
                                    <ExternalLink size={20} className="mr-2" style={{ color: tecnoPurpleHex }} /> {/* Icono Morado */}
                                    <Link href={tecnoContactData.googleMapsLink} target="_blank" rel="noopener noreferrer" style={{ color: albatrosBlueHex }} className="hover:text-albatrosRed transition-colors">Ver en Google Maps</Link>
                                </p>
                            </div>
                        </div>
                        {/* Iframe del Mapa */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200">
                            <iframe
                                src={tecnoContactData.mapIframeSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Ubicación de ${tecnoContactData.name}`}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Galería de Fotos Específica de Tecno (ahora como componente) */}
            {/* <TecnoGallery /> */}

            {/* CTA Final (Ahora usa el componente HookCtaSection) */}
            <HookCtaSection
                title="¡Asegura la mejor educación para tu hijo!"
                subtitle="Estamos listos para resolver tus dudas y ayudarte a dar el siguiente paso."
                buttonText="Agendar cita"
            // El onClick se gestiona internamente en HookCtaSection
            />

            <WhyCarrousel />


        </div>
    );
};

export default ColegioTecnoPage;

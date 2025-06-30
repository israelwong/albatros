// src/app/oferta-educativa/albatros/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/common/Button';
import Link from 'next/link';
import { Users, Star, CheckCircle } from 'lucide-react';
// Asegúrate de que CustomCollapsible NO se importe si no se usa para la tabla

// export const metadata = {
//   title: 'Albatros Grupo Cultural | Grupo Cultural Albatros',
//   description: 'Descubre la propuesta educativa de Albatros Grupo Cultural en Zumpango: Kinder y Primaria con 18 años de experiencia y enfoque integral.',
// };

const AlbatrosCulturalPage: React.FC = () => {
    // Datos para la mensualidad desde (ejemplos basados en tu tabla corregida)
    const mensualidadAlbatrosKinder = "$1,590.00 MXN"; // Kinder 1°
    const mensualidadTecnoKinder = "$2,516.00 MXN"; // Kinder 1°-3°

    return (
        <div className="flex flex-col items-center">
            {/* Sección Intro / Hero de Albatros Grupo Cultural */}
            <section className="relative w-full py-16 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-4xl">
                    <Image
                        src="/colegio_albatros_logo.svg" // Logo de Albatros Grupo Cultural
                        alt="Logo Albatros Grupo Cultural"
                        width={180}
                        height={180}
                        className="mb-6 mx-auto drop-shadow-md"
                    />
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                        Albatros Grupo Cultural
                    </h1>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 drop-shadow-sm">
                        Educación integral de Kinder y Primaria con la solidez de 18 años de experiencia en Zumpango.
                    </p>
                </div>
            </section>

            {/* Niveles Educativos */}
            <section className="w-full py-16 px-6 md:px-12 bg-white text-albatrosBlue">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
                        Niveles Educativos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* 2 columnas porque no ofrece secundaria */}
                        <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm flex flex-col items-center border-t-4 border-albatrosBlue">
                            <h3 className="font-heading text-2xl font-bold mb-3">Kinder</h3>
                            <p className="font-body text-gray-700">Preescolar de 1º a 3º grado. Desarrollamos la creatividad y las bases para el aprendizaje en un ambiente cálido.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm flex flex-col items-center border-t-4 border-albatrosBlue">
                            <h3 className="font-heading text-2xl font-bold mb-3">Primaria</h3>
                            <p className="font-body text-gray-700">De 1º a 6º grado. Fomentamos el pensamiento crítico, la autonomía y el desarrollo integral de cada estudiante.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secciones de Diferenciadores Clave (Experiencia y Atención Personalizada) */}
            <section className="w-full py-16 px-6 md:px-12 bg-gray-100 text-albatrosBlue">
                <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Bloque: Experiencia y Reconocimiento */}
                    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center h-full border-b-4 border-albatrosRed">
                        <Star size={80} className="text-albatrosBlue mb-6" />
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            18 Años de Experiencia
                        </h2>
                        <p className="font-body text-gray-700 leading-relaxed flex-grow">
                            Con una trayectoria de 18 años, Albatros Grupo Cultural es un referente de excelencia educativa en Zumpango. Nuestro compromiso con la calidad y los resultados nos han ganado el reconocimiento de autoridades y familias.
                        </p>
                        <ul className="list-none space-y-2 font-body text-gray-800 text-left w-full mt-6">
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Educación consolidada y reconocida.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Formación integral y de valores.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Preparación para la integración socio-cultural.</li>
                        </ul>
                    </div>

                    {/* Bloque: Atención Personalizada y Ambiente */}
                    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center h-full border-b-4 border-albatrosRed">
                        <Users size={80} className="text-albatrosBlue mb-6" />
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            Atención Personalizada
                        </h2>
                        <p className="font-body text-gray-700 leading-relaxed flex-grow">
                            En Albatros Grupo Cultural, cada estudiante es único. Ofrecemos un trato individualizado y un ambiente de respeto y libertad, asegurando que se atienda su desarrollo personal y se potencien sus habilidades y aptitudes en todas las áreas.
                        </p>
                        <ul className="list-none space-y-2 font-body text-gray-800 text-left w-full mt-6">
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Desarrollo individual apoyado por especialistas.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Fomento de habilidades en un ambiente de libertad.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Preparación para la integración socio-cultural.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sección de Costos y Paquetes (ACTUALIZADA AQUÍ) */}
            <section className="w-full py-16 px-6 md:px-12 bg-white text-albatrosBlue text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                        Costos y Paquetes
                    </h2>
                    <p className="font-body text-gray-700 leading-relaxed mb-6">
                        Albatros Grupo Cultural ofrece una educación de excelencia en Kinder y Primaria con opciones de colegiatura generalmente más accesibles en comparación con Colegio Tecno para los mismos niveles.
                        Nuestros paquetes mensuales base varían según el nivel educativo y los servicios adicionales.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-sm">
                        <p className="font-body text-albatrosBlue text-xl font-bold mb-2">
                            Mensualidad desde: {mensualidadAlbatrosKinder}*
                        </p>
                        <p className="font-body text-gray-700 text-sm">
                            *Colegiatura base para Kinder 1º. Precios varían según nivel y paquete seleccionado.
                        </p>
                    </div>

                    <p className="font-body text-albatrosBlue font-semibold mb-8">
                        ¿Buscas algo diferente? Colegio Tecno, con un fuerte enfoque tecnológico, ofrece mensualidades desde **{mensualidadTecnoKinder}**.
                        <br className="hidden sm:block" />
                        Para detalles específicos y una oferta personalizada, ¡te invitamos a agendar una cita!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild variant="red" size="lg">
                            <Link href="/contacto">
                                Agenda una cita y recibe una oferta especial por tu visita
                            </Link>
                        </Button>
                        <Button asChild variant="outlineBlue" size="lg">
                            <Link href="/oferta-educativa/tecno">
                                Conoce la oferta del Colegio Tecno
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Sección de Contacto Rápido / CTA Final */}
            <section className="w-full py-16 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                        ¡Descubre Albatros Grupo Cultural!
                    </h2>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 mb-8">
                        ¡Asegura el futuro de tu hijo hoy mismo! Nuestro equipo está listo para ayudarte.
                    </p>
                    <Button asChild variant="red" size="lg">
                        <Link href="/contacto">
                            ¡Contáctanos Ahora!
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default AlbatrosCulturalPage;
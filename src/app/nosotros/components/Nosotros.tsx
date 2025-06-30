// src/app/nosotros/page.tsx
"use client"; // Es un Client Component si quieres añadir interacciones futuras

import React from 'react';
// import Image from 'next/image';
import { Target, Eye, ShieldCheck } from 'lucide-react'; // Iconos para Misión, Visión, Calidad

export default function Nosotros() {
    return (
        <div>
            <div className="flex flex-col items-center"> {/* Contenedor principal para centrar secciones */}
                {/* Sección Introductoria / Hero de Nosotros */}
                <section className="relative w-full h-[50vh] flex items-center justify-center text-center overflow-hidden bg-albatrosBlue">
                    {/* <Image
                        src="/about-us-hero.jpg" // CAMBIA ESTA RUTA: Imagen inspiradora para la sección Nosotros
                        alt="Colegio Albatros - Quiénes Somos"
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="z-0 opacity-30" // Imagen sutil, casi transparente
                    /> */}
                    <div className="absolute inset-0 bg-albatrosBlue/50 z-10"></div> {/* Overlay azul para mezcla */}

                    <div className="relative z-20 text-albatrosWhite p-6 max-w-4xl mx-auto">
                        <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-md">
                            Quiénes Somos
                        </h1>
                        <p className="font-body text-xl md:text-2xl opacity-90 drop-shadow-sm">
                            Con 18 años de experiencia, formamos líderes con excelencia e innovación.
                        </p>
                    </div>
                </section>

                {/* Sección: Política de Calidad - Destacada */}
                <section className="w-full py-16 px-6 md:px-12 bg-gray-50"> {/* Fondo gris claro sutil */}
                    <div className="container mx-auto max-w-4xl bg-white p-8 md:p-10 rounded-lg shadow-xl border-b-4 border-albatrosRed text-albatrosBlue flex flex-col md:flex-row items-center md:items-start text-center md:text-left -mt-20 z-10 relative"> {/* -mt-20 para superponer */}
                        <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                            <ShieldCheck size={72} className="text-albatrosRed" /> {/* Icono grande y rojo */}
                        </div>
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                                Nuestra Política de Calidad
                            </h2>
                            <p className="font-body text-gray-700 leading-relaxed text-center">
                                El Colegio Albatros tiene como objetivo global, la formación de estudiantes responsables, productivos, éticos, creativos y diestros en pensamiento crítico. Cumpliendo con los lineamientos institucionales, mediante el crecimiento intelectual, profesional y personal del cuerpo docente y administrativo, desarrollando una atmósfera de trabajo y estudio agradable y enriquecedor; caracterizado por la aplicación de tecnología de vanguardia y la inversión permanente para el mantenimiento y mejora de la infraestructura, de manera reglamentaria y sistemática para asegurar la calidad y excelencia en los servicios.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sección: Misión y Visión - Diseño de dos columnas con cards pulidas */}
                <section className="w-full py-16 px-6 md:px-12 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {/* Misión Card */}
                            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-albatrosBlue flex flex-col items-center text-center">
                                <div className="text-albatrosBlue mb-6">
                                    <Target size={64} /> {/* Icono de Misión */}
                                </div>
                                <h2 className="font-heading text-3xl font-bold text-albatrosBlue mb-4">
                                    Nuestra Misión
                                </h2>
                                <p className="font-body text-gray-700 leading-relaxed flex-grow">
                                    Contribuir con las familias en la educación integral de sus hijos, atendiendo los aspectos físicos, intelectuales y morales; desarrollando sus habilidades, actitudes y aptitudes en un ambiente de libertad, respeto y responsabilidad, para que así, logren la integración en su medio socio-cultural como respuesta a las necesidades de su entorno.
                                </p>
                            </div>

                            {/* Visión Card */}
                            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-albatrosBlue flex flex-col items-center text-center">
                                <div className="text-albatrosBlue mb-6">
                                    <Eye size={64} /> {/* Icono de Visión */}
                                </div>
                                <h2 className="font-heading text-3xl font-bold text-albatrosBlue mb-4">
                                    Nuestra Visión
                                </h2>
                                <p className="font-body text-gray-700 leading-relaxed flex-grow">
                                    El Colegio Albatros es una institución de carácter educativo excelente por la incorporación continua de estrategias educativas, tecnología de punta, pro eficiencia en otro idioma, cultura informática y cuidado del medio ambiente; reconocida ante la sociedad por la formación de ciudadanos responsables, productivos y comprometidos para lograr transformar su entorno.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección Adicional: Nuestra Historia (Opcional, si hay más contenido) */}
                {/* Puedes añadir una sección para "Nuestra Historia" o "Nuestro Equipo" aquí */}
                {/*
            <section className="w-full py-16 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Nuestra Historia</h2>
                    <p className="font-body text-lg md:text-xl leading-relaxed mb-6">
                        Desde nuestra fundación en [Año], hemos crecido y evolucionado para ofrecer una educación de vanguardia, impulsando el potencial de cada estudiante.
                    </p>
                    <p className="font-body text-lg md:text-xl leading-relaxed">
                        [Más texto sobre hitos, fundadores, valores que nos guían a través del tiempo, etc.]
                    </p>
                </div>
            </section>
            */}
            </div>
        </div>
    )
}

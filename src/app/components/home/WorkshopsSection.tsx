// src/app/components/home/WorkshopsSection.tsx
"use client";

import React from 'react';
import CustomTabs from '@/app/components/common/Tabs'; // Importamos nuestro componente de Pestañas
import { Bot, Dribbble, Music } from 'lucide-react'; // Iconos relevantes
import DiagonalSeparator from '@/app/components/common/DiagonalSeparator'; // Importa el componente


const WorkshopsSection: React.FC = () => {
    return (
        <section className="w-full bg-zinc-300">

            <DiagonalSeparator colorClass="bg-blue-900" direction="right" height="h-12" offset="-mt-0" />


            <div className="container mx-auto py-16 px-6 md:px-12 ">
                {/* Título y Subtítulo de la Sección */}
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6 drop-shadow-md text-zinc-700">
                    Talleres para el Desarrollo Integral
                </h2>
                <p className="font-body text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-16 opacity-90 drop-shadow-sm">
                    Fomentamos la curiosidad, la creatividad y el talento. Impulsamos habilidades esenciales que construyen futuros brillantes.
                </p>

                {/* Pestañas para Talleres y Actividades */}
                <div className="max-w-5xl mx-auto bg-gray-50 rounded-lg overflow-hidden"> {/* Fondo gris claro sutil, sin sombra ni borde principal */}
                    <CustomTabs
                        defaultValue="robotica" // La pestaña "Robótica" activa por defecto
                        tabs={[
                            {
                                value: 'robotica',
                                label: 'Robótica',
                                content: (
                                    <div className="p-4 md:p-6 bg-white border-gray-100">
                                        <h4 className="font-heading text-xl font-semibold text-albatrosBlue mb-4 flex items-center">
                                            <Bot size={24} className="mr-3 text-albatrosRed" /> Taller de Robótica
                                        </h4>
                                        <p className="font-body text-gray-700 leading-relaxed text-base mb-6">
                                            Nuestros talleres de robótica, con tecnología de vanguardia, impulsan el pensamiento lógico y la creatividad. Los estudiantes aprenden a programar y construir prototipos, preparándose para el futuro digital.
                                        </p>
                                        <ul className="list-none space-y-2 font-body text-gray-800 text-left">
                                            <li className="flex items-start"><span className="text-albatrosRed mr-2 font-bold">›</span> Aprendizaje de programación</li>
                                            <li className="flex items-start"><span className="text-albatrosRed mr-2 font-bold">›</span> Construcción de prototipos</li>
                                            <li className="flex items-start"><span className="text-albatrosRed mr-2 font-bold">›</span> Desarrollo del pensamiento lógico</li>
                                        </ul>
                                    </div>
                                ),
                            },
                            {
                                value: 'artisticas',
                                label: 'Actividades Artísticas',
                                content: (
                                    <div className="p-4 md:p-6 bg-white border-t border-gray-100">
                                        <h4 className="font-heading text-xl font-semibold text-albatrosBlue mb-4 flex items-center">
                                            <Music size={24} className="mr-3 text-albatrosRed" /> Expresión y Creatividad
                                        </h4>
                                        <p className="font-body text-gray-700 leading-relaxed text-base mb-6">
                                            A través de nuestras actividades artísticas, los alumnos exploran su creatividad, desarrollan la disciplina y el trabajo en equipo, y cultivan una apreciación por la cultura.
                                        </p>
                                        <ul className="list-none space-y-2 font-body text-gray-800 text-left">
                                            <li className="flex items-start"><span className="text-albatrosRed mr-2 font-bold">›</span> Danza</li>
                                            <li className="flex items-start"><span className="text-albatrosRed mr-2 font-bold">›</span> Dibujo</li>
                                            {/* Agrega otras actividades artísticas si hay */}
                                        </ul>
                                    </div>
                                ),
                            },
                            {
                                value: 'deportivas',
                                label: 'Actividades Deportivas',
                                content: (
                                    <div className="p-4 md:p-6 bg-white border-t border-gray-100">
                                        <h4 className="font-heading text-xl font-semibold text-albatrosBlue mb-4 flex items-center">
                                            <Dribbble size={24} className="mr-3 text-albatrosRed" /> Salud y Deporte
                                        </h4>
                                        <p className="font-body text-gray-700 leading-relaxed text-base mb-6">
                                            Nuestras actividades deportivas promueven un estilo de vida activo, el espíritu de competencia sana y la formación de valores como la perseverancia y el respeto.
                                        </p>
                                        <ul className="list-none space-y-2 font-body text-gray-800 text-left">
                                            <li className="flex items-start"><span className="text-albatrosRed mr-2 font-bold">›</span> Natación (en alberca propia de Colegio Tecno, con traslado para Albatros)</li>
                                            <li className="flex items-start"><span className="text-albatrosRed mr-2 font-bold">›</span> Fútbol</li>
                                            <li className="flex items-start"><span className="text-albatrosRed mr-2 font-bold">›</span> Básquetbol</li>
                                            <li className="flex items-start"><span className="text-albatrosRed mr-2 font-bold">›</span> Educación Física</li>
                                        </ul>
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkshopsSection;
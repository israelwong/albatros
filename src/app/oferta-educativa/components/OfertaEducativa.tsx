// src/app/oferta-educativa/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/common/Button';

// Metadatos para la página de Oferta Educativa
// export const metadata = {
//     title: 'Oferta Educativa | Grupo Cultural Albatros',
//     description: 'Descubre los niveles educativos y la propuesta de valor de Colegio Albatros y Colegio Tecno en Zumpango.',
// };

const OfertaEducativaPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Sección Intro de Oferta Educativa */}
            <section className="w-full py-16 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
                        Nuestra Oferta Educativa
                    </h1>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 drop-shadow-sm">
                        En Grupo Cultural Albatros, ofrecemos una educación de vanguardia a través de nuestros dos distinguidos planteles, cada uno adaptado a las necesidades de tu hijo.
                    </p>
                </div>
            </section>

            {/* Sección de Tarjetas de Colegios */}
            <section className="w-full py-4 px-6 md:px-12 bg-white text-albatrosBlue">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Tarjeta Colegio Albatros */}
                        <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-albatrosBlue transform transition-transform duration-300 hover:scale-[1.02]">
                            <Image
                                src="/colegio_albatros_logo.svg" // Asegúrate de que esta ruta sea correcta
                                alt="Logo Colegio Albatros"
                                width={150}
                                height={150}
                                className="mb-6 object-contain"
                            />
                            <h2 className="font-heading text-3xl font-bold mb-4">Colegio Albatros</h2>
                            <p className="font-body text-gray-700 leading-relaxed mb-6 flex-grow">
                                Ubicado en el Centro de Zumpango, ofrece los niveles de **Kinder y Primaria**, con 18 años de experiencia. Destaca por su enfoque en el desarrollo integral y excelencia académica. [cite: 5, 8]
                            </p>
                            <Button asChild variant="blue" size="md" className="mt-auto">
                                <Link href="/oferta-educativa/albatros">
                                    Ver Detalles Albatros
                                </Link>
                            </Button>
                        </div>

                        {/* Tarjeta Colegio Tecno */}
                        <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-albatrosRed transform transition-transform duration-300 hover:scale-[1.02]">
                            <Image
                                src="/colegio_tecno_logo.svg" // Asegúrate de que esta ruta sea correcta
                                alt="Logo Colegio Tecno"
                                width={150}
                                height={150}
                                className="mb-6 object-contain"
                            />
                            <h2 className="font-heading text-3xl font-bold mb-4">Colegio Tecno</h2>
                            <p className="font-body text-gray-700 leading-relaxed mb-6 flex-grow">
                                Situado en San Lorenzo, Zumpango, este plantel cubre **Kinder, Primaria y Secundaria**, con un fuerte énfasis en tecnología de vanguardia y una alberca propia. [cite: 1, 5, 6]
                            </p>
                            <Button asChild variant="purple" size="md" className="mt-auto">
                                <Link href="/oferta-educativa/tecno">
                                    Ver Detalles Tecno
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OfertaEducativaPage;
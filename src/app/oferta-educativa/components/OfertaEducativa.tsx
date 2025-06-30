// src/app/oferta-educativa/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/common/Button';
import HookCtaSection from '@/app/components/common/HookCtaSection';
import FaqSection from '@/app/components/home/FaqSection';
// Importamos la función de manejo de clic y el de contexto desde el concentrador
// import { handleWhatsappClickWithContext, getWhatsappContext } from '@/lib/whatsapp';
// import { usePathname } from 'next/navigation'; // Necesario para obtener la ruta y pasar el contexto

// Metadatos para la página de Oferta Educativa
export const metadata = {
    title: 'Oferta Educativa | Grupo Cultural Albatros',
    description: 'Descubre los niveles educativos y la propuesta de valor de Colegio Albatros y Colegio Tecno en Zumpango.',
};

const OfertaEducativaPage: React.FC = () => {
    //   const pathname = usePathname(); // Obtenemos la ruta actual
    //   const currentWhatsappContext = getWhatsappContext(pathname); // Determinamos el contexto

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
            <section className="w-full py-16 px-6 md:px-12 bg-white text-albatrosBlue">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Tarjeta Colegio Albatros */}
                        <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-albatrosBlue transform transition-transform duration-300 hover:scale-[1.02]">
                            <Image
                                src="/colegio_albatros_logo.svg"
                                alt="Logo Colegio Albatros"
                                width={150}
                                height={150}
                                className="mb-6 mx-auto object-contain"
                            />
                            <h2 className="font-heading text-3xl font-bold mb-4">Colegio Albatros</h2>
                            <p className="font-body text-gray-700 leading-relaxed mb-6 flex-grow">
                                Ubicado en el Centro de Zumpango, ofrece los niveles de **Kinder y Primaria**, con 18 años de experiencia. Destaca por su enfoque en el desarrollo integral y excelencia académica.
                            </p>
                            {/* Tabla sencilla de Colegiaturas desde */}
                            <div className="bg-gray-50 rounded-lg p-4 mb-6 w-full text-left">
                                <p className="font-body text-albatrosBlue text-lg font-bold mb-2 text-center">
                                    Colegiaturas desde:
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-2 py-1 font-semibold">Kinder 1°</td>
                                                <td className="px-2 py-1 text-right">$1,590.00 MXN</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-1 font-semibold">Primaria 1°</td>
                                                <td className="px-2 py-1 text-right">$2,264.00 MXN</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <Button asChild variant="blue" size="md" className="mt-auto">
                                <Link href="/oferta-educativa/albatros">
                                    Consultar Detalles
                                </Link>
                            </Button>
                        </div>

                        {/* Tarjeta Colegio Tecno */}
                        <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-albatrosRed transform transition-transform duration-300 hover:scale-[1.02]">
                            <Image
                                src="/colegio_tecno_logo.svg"
                                alt="Logo Colegio Tecno"
                                width={150}
                                height={150}
                                className="mb-6 mx-auto object-contain"
                            />
                            <h2 className="font-heading text-3xl font-bold mb-4">Colegio Tecno</h2>
                            <p className="font-body text-gray-700 leading-relaxed mb-6 flex-grow">
                                Situado en San Lorenzo, Zumpango, este plantel cubre **Kinder, Primaria y Secundaria**, con un fuerte énfasis en tecnología de vanguardia y una alberca propia.
                            </p>
                            {/* Tabla sencilla de Colegiaturas desde */}
                            <div className="bg-gray-50 rounded-lg p-4 mb-6 w-full text-left">
                                <p className="font-body text-albatrosBlue text-lg font-bold mb-2 text-center">
                                    Colegiaturas desde:
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-2 py-1 font-semibold">Kinder 1°</td>
                                                <td className="px-2 py-1 text-right">$2,516.00 MXN</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-1 font-semibold">Primaria 1°</td>
                                                <td className="px-2 py-1 text-right">$3,005.00 MXN</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-1 font-semibold">Secundaria 1°</td>
                                                <td className="px-2 py-1 text-right">$3,278.00 MXN</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <Button asChild variant="red" size="md" className="mt-auto">
                                <Link href="/oferta-educativa/tecno">
                                    Consultar Detalles
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hook y CTA como divisor (AHORA ABAJO DE LAS FICHAS) */}
            <HookCtaSection
                title="¿Listo para una educación que inspira?"
                subtitle="Agenda una cita hoy mismo y descubre por qué somos el mejor colegio para tu hijo."
                buttonText="¡Agendar Cita Ahora!"

            />

            {/* Sección de Preguntas Frecuentes (FAQ) - Global para la Oferta */}
            <FaqSection />
        </div>
    );
};

export default OfertaEducativaPage;
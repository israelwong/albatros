import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CampusesLink = () => {
    return (
        <section className="bg-brand-background py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Un Modelo, Dos Grandes Planteles
                    </h2>
                    <p className="text-lg text-brand-text-light max-w-2xl mx-auto mt-4">
                        Nuestra excelencia educativa se imparte en dos sedes estratégicamente ubicadas en Zumpango.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Tarjeta Colegio Tecno */}
                    <div className="bg-brand-surface rounded-xl shadow-lg overflow-hidden flex flex-col">
                        <div className="relative w-full h-64 bg-gray-200">
                            <Image
                                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/caratulas-logos-colegio/caraluta-colegio-logo-tecno.png"
                                alt="Fachada del Colegio Tecno"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 text-center flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-primary">Colegio Tecno</h3>
                            <p className="text-brand-text-light mt-2 mb-6 flex-grow">Zumpango, San Lorenzo.</p>
                            <Link
                                href="/planteles"
                                className="bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-accent-hover transition-colors duration-300 mt-auto"
                            >
                                Conocer Plantel
                            </Link>
                        </div>
                    </div>

                    {/* Tarjeta Colegio Albatros */}
                    <div className="bg-brand-surface rounded-xl shadow-lg overflow-hidden flex flex-col">
                        {/* Solución para Albatros: Usamos el isotipo al no tener foto */}
                        <div className="relative w-full h-64 bg-primary flex justify-center items-center">
                            <Image
                                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/caratulas-logos-colegio/caraluta-colegio-logo-albatros.png"
                                alt="Isotipo de Grupo Cultural Albatros"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 text-center flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-primary">Colegio Albatros</h3>
                            <p className="text-brand-text-light mt-2 mb-6 flex-grow">Zumpango, Centro.</p>
                            <Link
                                href="/planteles"
                                className="bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-accent-hover transition-colors duration-300 mt-auto"
                            >
                                Conocer Plantel
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CampusesLink;
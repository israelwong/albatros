import Image from 'next/image';

const ExcellenceProof = () => {
    return (
        <section className="bg-brand-background py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Excelencia Académica Comprobada
                    </h2>
                    <p className="text-lg text-brand-text-light max-w-3xl mx-auto mt-4">
                        Nuestros alumnos son reconocidos constantemente por su extraordinario desempeño en competencias nacionales e internacionales.
                    </p>
                </div>

                {/* Contenedor de las tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Tarjeta de Yasmara */}
                    <div className="bg-brand-surface rounded-xl shadow-xl overflow-hidden flex flex-col group
                          hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                        <div className="relative w-full">
                            <Image
                                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/imagenes/Orgullo%20Yasmara.jpg" // Imagen completa de Yasmara
                                alt="Yasmara Xanat, ganadora de medalla de bronce internacional"
                                width={600}
                                height={750}
                                className="object-cover w-full h-auto"
                            />
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            {/* Acento de color */}
                            <div className="w-16 h-1 bg-secondary mb-4 rounded-full"></div>
                            <h3 className="text-3xl font-bold text-primary">Yasmara Xanat</h3>
                            <p className="text-md text-secondary font-semibold mt-1 mb-4">
                                Medalla de Bronce Internacional
                            </p>
                            <p className="text-brand-text-light flex-grow">
                                Ganadora en la prestigiosa Olimpiada Internacional de Matemáticas (SIMOC 2025) celebrada en Singapur.
                            </p>
                        </div>
                    </div>

                    {/* Tarjeta de Liam */}
                    <div className="bg-brand-surface rounded-xl shadow-xl overflow-hidden flex flex-col group
                          hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                        <div className="relative w-full">
                            <Image
                                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/imagenes/Orgullo%20Liam.jpg" // Imagen completa de Liam
                                alt="Liam Antuan, ganador de la Olimpiada del Conocimiento"
                                width={600}
                                height={750}
                                className="object-cover w-full h-auto"
                            />
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            {/* Acento de color */}
                            <div className="w-16 h-1 bg-accent mb-4 rounded-full"></div>
                            <h3 className="text-3xl font-bold text-primary">Liam Antuan</h3>
                            <p className="text-md text-accent font-semibold mt-1 mb-4">
                                Primer Lugar a Nivel Sector
                            </p>
                            <p className="text-brand-text-light flex-grow">
                                Ganador absoluto de la Olimpiada del Conocimiento 2025, destacando entre las mejores escuelas de la región.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExcellenceProof;
import React from 'react';
// import Image from 'next/image';


const DirectorMessage = () => {
    return (
        <section className="bg-brand-background py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12 items-center max-w-3xl mx-auto">
                    {/* Columna del Mensaje */}
                    <div className="font-sans text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Un Mensaje de Nuestra Directora
                        </h2>
                        <div className="space-y-4 text-brand-text-light text-lg leading-relaxed">
                            <p>
                                Con gran orgullo y compromiso, les doy la bienvenida a Grupo Cultural Albatros. Durante 18 años, nuestra misión ha sido clara: formar no solo a excelentes estudiantes, sino a seres humanos íntegros, creativos y preparados para liderar el futuro.
                            </p>
                            <p>
                                &quot;Cada día, nuestro equipo de profesionales dedicados trabaja para crear un ambiente seguro y estimulante donde sus hijos puedan descubrir su máximo potencial. Gracias por confiar en nosotros para esta etapa tan importante.&quot;
                            </p>
                        </div>
                        <div className="mt-8">
                            <p className="font-bold text-primary text-xl">Miss Sandy</p>
                            <p className="text-brand-text-light">Directora Administrativa</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectorMessage;
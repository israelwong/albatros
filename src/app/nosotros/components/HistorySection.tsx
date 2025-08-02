import React from 'react';

const HistorySection = () => {
    return (
        <section className="bg-brand-background py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Nuestra Trayectoria: 18 Años de Excelencia
                    </h2>
                    <div className="text-lg text-brand-text-light leading-relaxed space-y-4">
                        <p>
                            Desde hace más de 18 años, Grupo Cultural Albatros ha sido un pilar en la educación de Zumpango. Nuestro viaje comenzó con la visión de ofrecer una formación de vanguardia que no solo alcanzara los más altos estándares académicos, sino que también formara a jóvenes con un profundo sentido de liderazgo y valores humanos.
                        </p>
                        <p>
                            Hoy, celebramos un legado de excelencia consolidada y la confianza de cientos de familias que nos han permitido ser parte de su historia, preparando a los líderes del mañana.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
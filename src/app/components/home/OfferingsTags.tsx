import React from 'react';


type Color = 'primary' | 'secondary' | 'accent';

const offerings: { name: string; color: Color }[] = [
    { name: "Natación (alberca propia)", color: "primary" },
    { name: "Inglés Cambridge", color: "secondary" },
    { name: "Computación", color: "accent" },
    { name: "Robótica", color: "primary" },
    { name: "Danza", color: "secondary" },
    { name: "Dibujo", color: "accent" },
    { name: "Fútbol", color: "primary" },
    { name: "Basquetbol", color: "secondary" },
    { name: "Horario amplio", color: "accent" },
];

const colorClasses: Record<Color, string> = {
    primary: 'border-primary text-primary',
    secondary: 'border-secondary text-secondary-dark', // Usamos un texto más oscuro para legibilidad sobre fondo claro
    accent: 'border-accent text-accent',
};

const OfferingsTags: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-zinc-200">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-12">
                    Oferta educativa para un Desarrollo Integral
                </h2>

                {/* Contenedor de las etiquetas */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {offerings.map((item) => (
                        <div
                            key={item.name}
                            className={`
                bg-transparent border-2 rounded-full py-3 px-6 
                font-bold text-lg transition-all duration-300
                ${colorClasses[item.color]}
              `}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferingsTags;
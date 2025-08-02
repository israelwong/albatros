import React from 'react';

const EducationHero = () => {
    return (
        <section className="relative h-[60vh] flex flex-col justify-center items-center text-white text-center overflow-hidden">
            {/* Video de Fondo */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    {/* TODO: Reemplaza esta URL con la de tu video-reel en Supabase */}
                    <source
                        src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros//reel.mp4"
                        type="video/mp4"
                    />
                    Tu navegador no soporta el tag de video.
                </video>
                {/* Overlay Oscuro para Legibilidad */}
                <div className="absolute inset-0 bg-primary opacity-70"></div>
            </div>

            {/* Contenido de Texto */}
            <div className="relative z-10 p-6 container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                    Nuestro Modelo Educativo
                </h1>
                <p className="text-xl md:text-2xl mt-4 opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    Excelencia, Innovación y Calidez Humana
                </p>
            </div>
        </section>
    );
};

export default EducationHero;
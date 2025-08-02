import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden w-full">
            {/* Contenedor del Video de Fondo */}
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/videos/Web%20hero%20section.mp4" type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            </div>

            {/* Contenido de Texto y Botones */}
            <div className="z-10 p-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-display md:text-6xl leading-6 mt-20 animate-fade-in text-secondary">
                    Somos
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold  animate-fade-in mb-2" style={{ animationDelay: '0.2s' }}>
                    Excelencia Educativa
                </h2>
                <p className="text-xl md:text-2xl text-zinc-300 animate-fade-in font-sans" style={{ animationDelay: '0.6s' }}>
                    Kínder &middot; Primaria &middot; Secundaria
                </p>
                <p className="text-md font-light italic md:text-xl  py-6 px-14 animate-fade-in mb-2" style={{ animationDelay: '0.3s' }}>
                    18 años de experiencia formando a los líderes del mañana.
                </p>


                {/* Contenedor de Botones */}
                <div className=" sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
                    <Link
                        href="/admisiones"
                        className="
                            bg-accent text-white font-bold py-3 px-8 
                            rounded-full shadow-lg
                            hover:bg-accent-hover hover:shadow-xl 
                            transform hover:scale-105 transition-all duration-300 ease-in-out
                        "
                    >
                        Inscríbete hoy
                    </Link>

                    {/* El link a WhatsApp se queda como una etiqueta <a> normal porque es un enlace externo */}
                    {/* <a
                        href="https://wa.me/525617015459?text=Hola,%20quisiera%20más%20información%20sobre%20el%20colegio."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
    bg-transparent text-white font-bold py-3 px-8 
    rounded-full border-2 border-secondary
    hover:bg-secondary hover:text-primary 
    transition-colors duration-300
  "
                    >
                        Conversar con asesor
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const QualitySeal = () => {
    return (
        // 1. Añadimos 'relative' y 'overflow-hidden' a la sección principal
        <section className="bg-primary text-white relative overflow-hidden">

            {/* 2. Isotipo gigante de fondo */}
            <Image
                src="/gca_isotipo_white.svg"
                alt="" // Es decorativo, por lo que el alt text puede estar vacío
                width={800} // Un tamaño grande para que abarque el fondo
                height={800}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none"
            />

            {/* 3. Contenido principal con 'relative' y 'z-10' para que esté por encima */}
            <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="font-bold text-secondary tracking-widest mb-2 px-16">
                        CERTIFICACIÓN DE CLASE MUNDIAL
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Reconocidos como Institución Quality
                    </h2>
                    <p className="text-lg opacity-90 mb-8 px-12">
                        Este prestigioso reconocimiento, otorgado por Cambridge, valida nuestros altos estándares en la enseñanza del inglés. Preparamos a los alumnos para que dominen el idioma con el respaldo de las instituciones más importantes del mundo.
                    </p>

                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        <a
                            href="https://www.cambridgeenglish.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 border border-white/20 rounded-full py-2 px-6 hover:bg-white/20 transition-colors duration-200"
                        >
                            <span className="flex items-center gap-2">
                                <span className="font-bold uppercase tracking-wider">Cambridge</span>
                                <ExternalLink size={16} strokeWidth={2.5} />
                            </span>
                        </a>
                        <a
                            href="https://www.oxfordtestofenglish.es/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 border border-white/20 rounded-full py-2 px-6 hover:bg-white/20 transition-colors duration-200"
                        >
                            <span className="flex items-center gap-2">
                                <span className="font-bold uppercase tracking-wider">Oxford</span>
                                <ExternalLink size={16} strokeWidth={2.5} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualitySeal;
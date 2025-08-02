import Link from 'next/link';
import Image from 'next/image';

const CallToAction = () => {
    return (
        <section className="relative bg-gray-800 text-white">
            {/* Imagen de fondo con overlay oscuro */}
            <Image
                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/imagenes/cta-background.jpg" // Reemplaza con tu imagen
                alt="Instalaciones del Colegio Albatros"
                layout="fill"
                objectFit="cover"
                className="z-0"
            />
            <div className="absolute inset-0 bg-primary opacity-80 z-10"></div>

            {/* Contenido */}
            <div className="container mx-auto px-6 py-20 md:py-24 text-center relative z-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Únete a la Gran Familia Albatros
                </h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                    El futuro de tus hijos es la decisión más importante. Da el primer paso para ofrecerles una educación de excelencia que los preparará para el mundo.
                </p>
                <Link
                    href="/admisiones"
                    className="bg-accent hover:bg-accent-hover text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg
                     transform hover:scale-105 transition-transform duration-300 ease-in-out inline-block"
                >
                    Ver Proceso de Admisión
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;
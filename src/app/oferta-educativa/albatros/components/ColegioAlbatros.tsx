// src/app/oferta-educativa/albatros/page.tsx
"use client";

import React, { useState } from 'react'; // Importa useState para el lightbox
import Image from 'next/image';
import Button from '@/app/components/common/Button';
import Link from 'next/link';
import { Users, Star, CheckCircle, Phone, MapPin, ExternalLink } from 'lucide-react'; // Nuevos iconos
import Lightbox from 'yet-another-react-lightbox'; // Importa Lightbox
import Captions from 'yet-another-react-lightbox/plugins/captions'; // Importa Captions
import 'yet-another-react-lightbox/styles.css'; // Estilos Lightbox
import 'yet-another-react-lightbox/plugins/captions.css'; // Estilos Captions

export const metadata = {
    title: 'Albatros Grupo Cultural | Grupo Cultural Albatros',
    description: 'Descubre la propuesta educativa de Albatros Grupo Cultural en Zumpango: Kinder y Primaria con 18 años de experiencia y enfoque integral.',
};

// Datos para el contacto y mapas (copiados de ContactoPage)
const albatrosContactData = {
    name: "Albatros Grupo Cultural",
    phone: "+525919170999", // [cite: 2]
    address: "Federico Gómez 32, Santiago 2da Secc., 55600 Zumpango de Ocampo, Méx.", // [cite: 2]
    googleMapsLink: "https://maps.app.goo.gl/sWVFJYMf5PBfmu886", // [cite: 2]
    mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3256471056517!2d-99.0979828258403!3d19.79902237612142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18eaa00d9093b%3A0x8f807d11f48ed441!2sGrupo%20Cultural%20Albatros!5e0!3m2!1ses!2smx!4v1751222870431!5m2!1ses!2smx", // [cite: 2]
    logo: "/colegio_albatros_logo.svg",
};

// Datos de las fotos de instalaciones (copiados de FacilitiesSection)
const facilityPhotosData = [
    { src: "/facilities/classroom.jpg", width: 800, height: 600, alt: "Salones Amplios con Pizarrones Electrónicos", title: "Aula Moderna", description: "Equipada con pizarrones interactivos para un aprendizaje dinámico." },
    { src: "/facilities/lab.jpg", width: 600, height: 800, alt: "Laboratorios de Cómputo y Ciencias", title: "Laboratorio de Ciencias", description: "Espacio dedicado a la experimentación práctica y el descubrimiento científico." },
    { src: "/facilities/sports.jpg", width: 1200, height: 800, alt: "Canchas Deportivas Modernas", title: "Cancha Multideportiva", description: "Instalaciones de primer nivel para fútbol, baloncesto y actividades físicas." },
    { src: "/facilities/pool.jpg", width: 800, height: 600, alt: "Alberca Propia (Colegio Tecno)", title: "Alberca Olímpica", description: "Piscina techada para clases de natación y actividades acuáticas." },
    { src: "/facilities/library.jpg", width: 600, height: 800, alt: "Áreas de Tablets y Biblioteca", title: "Área Tecnológica", description: "Espacios equipados con tablets y computadoras para el aprendizaje digital." },
    { src: "/facilities/cafeteria.jpg", width: 900, height: 600, alt: "Cafetería con Espacios Cómodos", title: "Cafetería Escolar", description: "Un espacio acogedor para el descanso y la alimentación saludable de los alumnos." },
    { src: "/facilities/dance-studio.jpg", width: 700, height: 900, alt: "Salón de Danza", title: "Salón de Danza", description: "Donde la creatividad y la expresión se unen a través del movimiento." },
    { src: "/facilities/playground.jpg", width: 1000, height: 700, alt: "Patios Recreativos y Áreas de Juegos Infantiles", title: "Patios de Recreo", description: "Áreas seguras y divertidas para el esparcimiento y juego de los niños." },
    { src: "/facilities/security.jpg", width: 800, height: 533, alt: "Sistema Robusto de Videovigilancia", title: "Seguridad 24/7", description: "Monitoreo constante para garantizar la seguridad y el bienestar de toda la comunidad." },
];


const AlbatrosCulturalPage: React.FC = () => {
    // Datos para la mensualidad desde (ejemplos basados en tu tabla corregida)
    const mensualidadAlbatrosKinder = "$1,590.00 MXN";// Kinder 1° [cite: 2]
    const mensualidadTecnoKinder = "$2,516.00 MXN"; // Kinder 1°-3° [cite: 4]

    // Estados y lógica para el Lightbox
    const [openLightbox, setOpenLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Filtra las fotos para Albatros (ej. solo las 6 primeras como ejemplo)
    // Ajusta este filtro si tienes fotos específicas de Albatros.
    const photosForGallery = facilityPhotosData.slice(0, 6);

    const slidesForLightbox = photosForGallery.map(photo => ({
        src: photo.src,
        width: photo.width,
        height: photo.height,
        alt: photo.alt,
        title: photo.title || photo.alt,
        description: photo.description || '',
    }));

    const openSpecificImageInGallery = (index: number) => {
        setCurrentImageIndex(index);
        setOpenLightbox(true);
    };

    return (
        <div className="flex flex-col items-center">
            {/* Sección Intro / Hero de Albatros Grupo Cultural */}
            <section className="relative w-full py-16 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-4xl">
                    <Image
                        src="/colegio_albatros_logo.svg"
                        alt="Logo Albatros Grupo Cultural"
                        width={180}
                        height={180}
                        className="mb-6 mx-auto drop-shadow-md"
                    />
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                        Albatros Grupo Cultural
                    </h1>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 drop-shadow-sm">
                        [cite_start]Educación integral de Kinder y Primaria con la solidez de 18 años de experiencia en Zumpango. [cite: 1]
                    </p>
                </div>
            </section>

            {/* Niveles Educativos */}
            <section className="w-full py-16 px-6 md:px-12 bg-white text-albatrosBlue">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
                        Niveles Educativos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm flex flex-col items-center border-t-4 border-albatrosBlue">
                            <h3 className="font-heading text-2xl font-bold mb-3">Kinder</h3>
                            <p className="font-body text-gray-700">Preescolar de 1º a 3º grado. Desarrollamos la creatividad y las bases para el aprendizaje en un ambiente cálido.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm flex flex-col items-center border-t-4 border-albatrosBlue">
                            <h3 className="font-heading text-2xl font-bold mb-3">Primaria</h3>
                            <p className="font-body text-gray-700">De 1º a 6º grado. Fomentamos el pensamiento crítico, la autonomía y el desarrollo integral de cada estudiante.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secciones de Diferenciadores Clave (Experiencia y Atención Personalizada) */}
            <section className="w-full py-16 px-6 md:px-12 bg-gray-100 text-albatrosBlue">
                <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Bloque: Experiencia y Reconocimiento */}
                    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center h-full border-b-4 border-albatrosRed">
                        <Star size={80} className="text-albatrosBlue mb-6" />
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            18 Años de Experiencia
                        </h2>
                        <p className="font-body text-gray-700 leading-relaxed flex-grow">
                            Con una trayectoria de 18 años, Albatros Grupo Cultural es un referente de excelencia educativa en Zumpango. Nuestro compromiso con la calidad y los resultados nos han ganado el reconocimiento de autoridades y familias.
                        </p>
                        <ul className="list-none space-y-2 font-body text-gray-800 text-left w-full mt-6">
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Educación consolidada y reconocida.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Formación integral y de valores.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Preparación para la integración socio-cultural.</li>
                        </ul>
                    </div>

                    {/* Bloque: Atención Personalizada y Ambiente */}
                    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center h-full border-b-4 border-albatrosRed">
                        <Users size={80} className="text-albatrosBlue mb-6" />
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            Atención Personalizada
                        </h2>
                        <p className="font-body text-gray-700 leading-relaxed flex-grow">
                            En Albatros Grupo Cultural, cada estudiante es único. Ofrecemos un trato individualizado y un ambiente de respeto y libertad, asegurando que se atienda su desarrollo personal y se potencien sus habilidades y aptitudes en todas las áreas.
                        </p>
                        <ul className="list-none space-y-2 font-body text-gray-800 text-left w-full mt-6">
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Desarrollo individual apoyado por especialistas.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Fomento de habilidades en un ambiente de libertad.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="text-albatrosRed mr-2 mt-1 flex-shrink-0" />Preparación para la integración socio-cultural.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sección de Costos y Paquetes */}
            <section className="w-full py-16 px-6 md:px-12 bg-white text-albatrosBlue text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                        Costos y Paquetes
                    </h2>
                    <p className="font-body text-gray-700 leading-relaxed mb-6">
                        Albatros Grupo Cultural ofrece una educación de excelencia en Kinder y Primaria con opciones de colegiatura generalmente más accesibles en comparación con Colegio Tecno para los mismos niveles.
                        Nuestros paquetes mensuales base varían según el nivel educativo y los servicios adicionales.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-sm">
                        <p className="font-body text-albatrosBlue text-xl font-bold mb-2">
                            Mensualidad desde: {mensualidadAlbatrosKinder}*
                        </p>
                        <p className="font-body text-gray-700 text-sm">
                            *Colegiatura base para Kinder 1º. Precios varían según nivel y paquete seleccionado.
                        </p>
                    </div>

                    <p className="font-body text-albatrosBlue font-semibold mb-8">
                        ¿Buscas algo diferente? Colegio Tecno, con un fuerte enfoque tecnológico, ofrece mensualidades desde **{mensualidadTecnoKinder}**.
                        <br className="hidden sm:block" />
                        Para detalles específicos y una oferta personalizada, ¡te invitamos a agendar una cita!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild variant="red" size="lg">
                            <Link href="/contacto">
                                Agenda una cita y recibe una oferta especial por tu visita
                            </Link>
                        </Button>
                        <Button asChild variant="outlineBlue" size="lg">
                            <Link href="/oferta-educativa/tecno">
                                Conoce la oferta del Colegio Tecno
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Sección de Contacto Específico del Colegio Albatros */}
            <section className="w-full py-16 px-6 md:px-12 bg-gray-100 text-albatrosBlue">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
                        Contáctanos en Albatros Grupo Cultural
                    </h2>
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row gap-8 md:gap-0 h-full border-t-4 border-albatrosBlue">
                        <div className="p-8 text-center md:text-left flex-grow">
                            <h3 className="font-heading text-2xl font-bold mb-4">{albatrosContactData.name}</h3>
                            <div className="space-y-4 font-body text-gray-700 text-lg">
                                <p className="flex items-center justify-center md:justify-start">
                                    <Phone size={20} className="mr-2 text-albatrosBlue flex-shrink-0" />
                                    <Link href={`tel:${albatrosContactData.phone}`} className="hover:text-albatrosRed transition-colors">{albatrosContactData.phone}</Link>
                                </p>
                                <p className="flex items-start justify-center md:justify-start">
                                    <MapPin size={20} className="mr-2 text-albatrosBlue mt-1 flex-shrink-0" />
                                    <span>{albatrosContactData.address}</span>
                                </p>
                                <p className="flex items-center justify-center md:justify-start">
                                    <ExternalLink size={20} className="mr-2 text-albatrosBlue" />
                                    <Link href={albatrosContactData.googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-albatrosRed transition-colors">Ver en Google Maps</Link>
                                </p>
                            </div>
                        </div>
                        {/* Iframe del Mapa */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200">
                            <iframe
                                src={albatrosContactData.mapIframeSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Ubicación de ${albatrosContactData.name}`}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Galería de Fotos Específica de Albatros (o general) */}
            <section className="w-full py-16 px-6 md:px-12 bg-white text-albatrosBlue">
                <div className="container mx-auto">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
                        Explora Nuestras Instalaciones
                    </h2>
                    <p className="font-body text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-10">
                        Descubre los espacios que inspiran el aprendizaje y el desarrollo integral en nuestro plantel.
                    </p>
                    {/* Aquí puedes reutilizar el grid de imágenes de FacilitiesSection */}
                    <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* Filtrar fotos si tienes específicas de Albatros, o usar un subset general */}
                        {facilityPhotosData.filter(photo => photo.src.includes('classroom') || photo.src.includes('library') || photo.src.includes('playground') || photo.src.includes('dance-studio')).slice(0, 4).map(photo => (
                            <div
                                key={photo.src}
                                className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-md cursor-pointer
                           transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                                onClick={() => openSpecificImageInGallery(facilityPhotosData.indexOf(photo))}
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    priority={false}
                                    loading="lazy"
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild variant="blue" size="lg">
                            <Link href="/"> {/* Enlaza al Home para ver la galería completa */}
                                Ver Galería Completa
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Lightbox Component (al final de la página) */}
            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                slides={slidesForLightbox}
                index={currentImageIndex}
                plugins={[Captions]}
            />

            {/* CTA Final (Opcional, similar al footer pero más grande) */}
            <section className="w-full py-16 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                        ¡Descubre Albatros Grupo Cultural!
                    </h2>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 mb-8">
                        ¡Asegura el futuro de tu hijo hoy mismo! Nuestro equipo está listo para ayudarte.
                    </p>
                    <Button asChild variant="red" size="lg">
                        <Link href="/contacto">
                            ¡Contáctanos Ahora!
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default AlbatrosCulturalPage;
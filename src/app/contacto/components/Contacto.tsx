// src/app/contacto/page.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, ExternalLink } from 'lucide-react'; // Iconos relevantes
import Button from '@/app/components/common/Button'; // Asegúrate de tener un componente Button reutilizable

import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';


const ContactoPage: React.FC = () => {
    const [openLightbox, setOpenLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Estas son las fotos que se mostrarán en la retícula.
    // Puedes mostrar un subconjunto si quieres un botón "Ver Galería Completa".
    const displayedPhotos = facilityPhotosData.slice(0, 6); // Mostrar las primeras 6 fotos

    // Los slides para el lightbox son todas las fotos con sus títulos/descripciones para captions.
    const slidesForLightbox = facilityPhotosData.map(photo => ({
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

    const tecno = {
        name: "Colegio Tecno",
        phone: "+52 56 1701 5459",
        address: "Segunda cerrada de Chamizal N° 17, San Lorenzo, 55604 Zumpango de Ocampo, Méx.",
        googleMapsLink: "https://maps.app.goo.gl/a6QkeBh88gMSBi5AA",
        mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.0251577702224!2d-99.09010401871414!3d19.796530658818554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18c11699e1615%3A0xebe1298c4a8d43d3!2sColegio%20Tecnoalbatros!5e0!3m2!1ses!2smx!4v1751223344393!5m2!1ses!2smx",
        logo: "/colegio_tecno_logo.svg", // Asegúrate de tener este logo en public
    };

    const albatros = {
        name: "Albatros Grupo Cultural",
        phone: "+525919170999",
        address: "Federico Gómez 32, Santiago 2da Secc., 55600 Zumpango de Ocampo, Méx.",
        googleMapsLink: "https://maps.app.goo.gl/sWVFJYMf5PBfmu886",
        mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3256471056517!2d-99.0979828258403!3d19.79902237612142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18eaa00d9093b%3A0x8f807d11f48ed441!2sGrupo%20Cultural%20Albatros!5e0!3m2!1ses!2smx!4v1751222870431!5m2!1ses!2smx",
        logo: "/colegio_albatros_logo.svg", // Asegúrate de tener este logo en public
    };

    return (
        <div className="flex flex-col items-center">
            {/* Sección Intro de Contacto */}
            <section className="w-full py-16 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                        Contáctanos
                    </h1>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 drop-shadow-sm">
                        Estamos listos para resolver tus dudas y ayudarte a elegir el mejor camino para la educación de tu hijo en Grupo Cultural Albatros.
                    </p>
                </div>
            </section>

            {/* Sección de Fichas de Contacto por Colegio */}
            <section className="w-full py-16 px-6 md:px-12 bg-gray-100 text-albatrosBlue">
                <div className="container mx-auto max-w-5xl">
                    <p className="font-body text-gray-700 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
                        Nuestro grupo cuenta con dos distinguidos planteles en Zumpango. A continuación, la información de contacto y ubicación de cada uno:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Ficha Colegio Tecno */}
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full border-t-4 border-albatrosRed">
                            <div className="p-8 text-center">
                                <Image
                                    src={tecno.logo}
                                    alt={`Logo ${tecno.name}`}
                                    width={120}
                                    height={120}
                                    className="mb-6 mx-auto object-contain"
                                />
                                <h2 className="font-heading text-3xl font-bold mb-4">{tecno.name}</h2>
                                <div className="space-y-4 font-body text-gray-700 text-lg">
                                    <p className="flex items-center justify-center md:justify-start lg:justify-center">
                                        <Phone size={20} className="mr-2 text-albatrosBlue flex-shrink-0" />
                                        <Link href={`tel:${tecno.phone}`} className="hover:text-albatrosRed transition-colors">{tecno.phone}</Link>
                                    </p>
                                    <p className="flex items-start justify-center md:justify-start lg:justify-center">
                                        <MapPin size={20} className="mr-2 text-albatrosBlue mt-1 flex-shrink-0" />
                                        <span>{tecno.address}</span>
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start lg:justify-center">
                                        <ExternalLink size={20} className="mr-2 text-albatrosBlue" />
                                        <Link href={tecno.googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-albatrosRed transition-colors">Ver en Google Maps</Link>
                                    </p>
                                </div>
                            </div>
                            {/* Iframe del Mapa */}
                            <div className="w-full h-80 bg-gray-200"> {/* Placeholder con bg-gray-200 mientras carga */}
                                <iframe
                                    src={tecno.mapIframeSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Ubicación de ${tecno.name}`}
                                ></iframe>
                            </div>
                        </div>

                        {/* Ficha Albatros Grupo Cultural */}
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full border-t-4 border-albatrosBlue">
                            <div className="p-8 text-center">
                                <Image
                                    src={albatros.logo}
                                    alt={`Logo ${albatros.name}`}
                                    width={120}
                                    height={120}
                                    className="mb-6 mx-auto object-contain"
                                />
                                <h2 className="font-heading text-3xl font-bold mb-4">{albatros.name}</h2>
                                <div className="space-y-4 font-body text-gray-700 text-lg">
                                    <p className="flex items-center justify-center md:justify-start lg:justify-center">
                                        <Phone size={20} className="mr-2 text-albatrosBlue flex-shrink-0" />
                                        <Link href={`tel:${albatros.phone}`} className="hover:text-albatrosRed transition-colors">{albatros.phone}</Link>
                                    </p>
                                    <p className="flex items-start justify-center md:justify-start lg:justify-center">
                                        <MapPin size={20} className="mr-2 text-albatrosBlue mt-1 flex-shrink-0" />
                                        <span>{albatros.address}</span>
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start lg:justify-center">
                                        <ExternalLink size={20} className="mr-2 text-albatrosBlue" />
                                        <Link href={albatros.googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-albatrosRed transition-colors">Ver en Google Maps</Link>
                                    </p>
                                </div>
                            </div>
                            {/* Iframe del Mapa */}
                            <div className="w-full h-80 bg-gray-200"> {/* Placeholder con bg-gray-200 mientras carga */}
                                <iframe
                                    src={albatros.mapIframeSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Ubicación de ${albatros.name}`}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Opcional: Galería de Fotos de Instalaciones (más compacta) */}
            <section className="w-full py-16 px-6 md:px-12 bg-white text-albatrosBlue">
                <div className="container mx-auto">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
                        Nuestras Instalaciones
                    </h2>
                    <p className="font-body text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-10">
                        Te invitamos a explorar visualmente nuestros espacios modernos y seguros, diseñados para el aprendizaje y el bienestar de tu hijo.
                    </p>
                    {/* Aquí puedes integrar una versión compacta de tu FacilitiesSection
              O simplemente un grid de 3-4 imágenes representativas que abran un Lightbox.
              Reutilizaré el `displayedPhotos` y `openSpecificImageInGallery` de FacilitiesSection,
              pero sin el título/subtítulo de esa sección.
          */}
                    {/* Reutiliza el código de la galería de FacilitiesSection.tsx */}
                    <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* Usamos las primeras 4 fotos de la galería de FacilitiesSection */}
                        {facilityPhotosData.slice(0, 4).map((photo, index) => (
                            <div
                                key={photo.src}
                                className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-md cursor-pointer
                           transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                                onClick={() => openSpecificImageInGallery(index)} // Asume que un lightbox global se usa
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
                            <Link href="/"> {/* Enlace al Home para ver la galería completa */}
                                Ver Galería Completa
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Lightbox para la galería de contacto (necesita el mismo slidesForLightbox y estados que FacilitiesSection) */}
            {/* Lightbox Component */}
            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                slides={slidesForLightbox}
                index={currentImageIndex}
                plugins={[Captions]} // Habilitar el plugin de Captions
            />

            {/* Botón para ver galería completa (si el Lightbox contiene más fotos que la retícula) */}
            {slidesForLightbox.length > displayedPhotos.length && (
                <div className="text-center mt-12">
                    <Button variant="red" size="lg" onClick={() => openSpecificImageInGallery(0)}>
                        Ver Galería Completa ({slidesForLightbox.length} fotos)
                    </Button>
                </div>
            )}
            {/* CTA Final (Opcional, similar al footer pero más grande) */}
            <section className="w-full py-16 px-6 md:px-12 bg-albatrosBlue text-albatrosWhite text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                        ¡Estamos listos para ayudarte!
                    </h2>
                    <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 mb-8">
                        Contáctanos hoy mismo para resolver todas tus dudas sobre nuestro modelo educativo.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild variant="red" size="lg">
                            <Link href={`https://wa.me/${albatros.phone.replace(/\D/g, '')}?text=Hola,%20quisiera%20agendar%20una%20cita%20general.`} target="_blank" rel="noopener noreferrer">
                                Agendar Cita por WhatsApp
                            </Link>
                        </Button>
                        <Button asChild variant="outlineRed" size="lg">
                            <Link href={`tel:${albatros.phone.replace(/\D/g, '')}`}>
                                Llamar Ahora
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Necesitas importar facilityPhotosData desde el mismo lugar que FacilitiesSection
// Para un componente de página, es mejor definir los datos aquí o pasarlos.
// Por simplicidad, los copiaré aquí:
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

export default ContactoPage;
"use client";
import React, { useState, useRef } from 'react'; // 1. Importamos useState y useRef
import * as Tabs from '@radix-ui/react-tabs';
import { MapPin } from 'lucide-react'; // Usaremos un ícono para reforzar la ubicación

// CAMBIO 1: La disponibilidad ahora es un array para generar las etiquetas
const levelsData = [
    {
        value: "kinder",
        title: "Kínder",
        availability: ["Plantel Albatros", "Plantel Tecno"],
        description: "Nuestra etapa inicial se enfoca en el aprendizaje a través del juego, fomentando la curiosidad, las habilidades sociales y el amor por el conocimiento en un entorno seguro y estimulante.",
        keyAreas: ["Iniciación al Inglés", "Desarrollo Psicomotriz", "Pensamiento Lógico-Matemático", "Arte y Creatividad"],
        videoUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Preescolar%20Albatros.mp4",
        posterUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/portadas/modelo-educativo-kinder.png"
    },
    {
        value: "primaria",
        title: "Primaria",
        availability: ["Plantel Albatros", "Plantel Tecno"],
        description: "Consolidamos las bases académicas con un enfoque en la comprensión lectora, las ciencias y las matemáticas, integrando tecnología y certificaciones de inglés para una formación completa.",
        keyAreas: ["Certificación Cambridge", "Robótica Educativa", "Natación", "Fomento de Valores"],
        videoUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Preescolar%20Albatros.mp4",
        posterUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/portadas/modelo-educativo-primaria.png"
    },
    {
        value: "secundaria",
        title: "Secundaria",
        availability: ["Plantel Tecno"],
        description: "Preparamos a los jóvenes para los retos de la preparatoria y la vida, con un alto nivel académico, orientación vocacional y un fuerte énfasis en el liderazgo y las habilidades del siglo XXI.",
        keyAreas: ["Matemáticas Avanzadas", "Ciencias y Laboratorio", "Debate y Oratoria", "Proyectos Tecnológicos"],
        videoUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/directoras/Directora%20Preescolar%20Albatros.mp4",
        posterUrl: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/portadas/modelo-educativosecundaria.png"
    }
];

const AcademicLevels = () => {

    // 3. Hooks para manejar la reproducción
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
    const [nowPlaying, setNowPlaying] = useState<string | null>(null);

    const handlePlayClick = (levelValue: string) => {
        const videoElement = videoRefs.current[levelValue];
        if (videoElement) {
            videoElement.play();
            setNowPlaying(levelValue);
        }
    };

    return (
        <section className="bg-brand-background py-16 md:py-24">
            <div className="container mx-auto px-6">
                {/* CAMBIO 2: El valor por defecto ahora es 'kinder' */}
                <Tabs.Root defaultValue="kinder" className="w-full">
                    <Tabs.List className="flex border-b border-gray-300" aria-label="Niveles Académicos">
                        {levelsData.map(level => (
                            <Tabs.Trigger
                                key={level.value}
                                value={level.value}
                                className="font-bold text-lg md:text-xl py-4 px-6 text-gray-500 data-[state=active]:text-primary data-[state=active]:shadow-[inset_0_-2px_0_0,0_1px_0_0] data-[state=active]:shadow-current transition-all"
                            >
                                {level.title}
                            </Tabs.Trigger>
                        ))}
                    </Tabs.List>

                    {levelsData.map(level => (
                        <Tabs.Content key={level.value} value={level.value} className="py-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                                {/* Columna de Texto */}
                                <div>
                                    <h3 className="text-3xl font-bold text-primary mb-4">{level.title}</h3>
                                    <p className="text-brand-text-light text-lg mb-6">{level.description}</p>

                                    {/* CAMBIO 3: Renderizamos las etiquetas de disponibilidad */}
                                    <div className="mb-6">
                                        <p className="font-bold text-primary mb-3">Disponible en:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {level.availability.map(plantel => (
                                                <div key={plantel} className="flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full border border-primary/20">
                                                    <MapPin size={14} />
                                                    {plantel}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-primary mb-3">Áreas Clave:</h4>
                                    <ul className="space-y-2">
                                        {level.keyAreas.map(area => (
                                            <li key={area} className="flex items-center text-brand-text-light">
                                                <span className="text-accent mr-2">✔</span> {area}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Columna de Video en Línea */}
                                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                                    <video
                                        ref={(el) => { videoRefs.current[level.value] = el; }} // 4. Asignamos la ref al video
                                        key={level.videoUrl}
                                        playsInline
                                        controls
                                        poster={level.posterUrl}
                                        className="w-full h-full object-cover"
                                        // Oculta los controles hasta que se le da play
                                        onPlay={() => { if (videoRefs.current[level.value]) videoRefs.current[level.value]!.controls = true }}
                                    >
                                        <source src={level.videoUrl} type="video/mp4" />
                                        Tu navegador no soporta videos.
                                    </video>

                                    {/* 5. Overlay personalizado con el botón de Play */}
                                    <div
                                        onClick={() => handlePlayClick(level.value)}
                                        className={`absolute inset-0 flex justify-center items-center cursor-pointer transition-opacity duration-300
                                            ${nowPlaying === level.value ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-black/30 group-hover:bg-black/50'}`}
                                    >
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                    ))}
                </Tabs.Root>
            </div>
        </section>
    );
};

export default AcademicLevels;
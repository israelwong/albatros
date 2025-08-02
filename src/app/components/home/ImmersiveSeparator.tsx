import React from 'react';

// Actualizamos las propiedades para que acepte una imagen O un video
interface ImmersiveSeparatorProps {
    quote: string;
    author?: string;
    backgroundImage?: string;
    videoSrc?: string;
    heightClass?: string;
}

const ImmersiveSeparator: React.FC<ImmersiveSeparatorProps> = ({
    quote,
    author,
    backgroundImage,
    videoSrc,
    heightClass = 'h-[70vh]'
}) => {
    return (
        <div
            className={`relative ${heightClass} bg-cover bg-center bg-fixed flex items-center justify-center overflow-hidden`}
            // Solo aplicamos la imagen de fondo si NO hay un video
            style={{ backgroundImage: videoSrc ? undefined : `url(${backgroundImage})` }}
        >
            {/* Si se provee un video, lo renderizamos aquí */}
            {videoSrc && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}

            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

            {/* Contenido de texto, ahora con z-20 para estar sobre el overlay */}
            <div className="relative z-20 text-center text-white p-6">
                <p className="font-display text-4xl md:text-6xl mb-4">
                    &quot;{quote}&quot;
                </p>
                {author && (
                    <p className="font-sans text-xl opacity-90">
                        - {author}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ImmersiveSeparator;
// src/app/components/common/DiagonalSeparator.tsx
import React from 'react';

interface DiagonalSeparatorProps {
    colorClass: string; // Clase de Tailwind para el color de la franja diagonal (ej. 'bg-albatrosRed')
    direction?: 'right' | 'left'; // Dirección de la inclinación
    height?: string; // Altura de la franja diagonal (ej. 'h-24', 'h-32')
    offset?: string; // Cuánto se superpone a la sección de arriba/abajo (ej. '-mt-12')
}

const DiagonalSeparator: React.FC<DiagonalSeparatorProps> = ({
    colorClass,
    direction = 'right', // Por defecto, inclina de abajo-izquierda a arriba-derecha
    height = 'h-24',     // Altura predeterminada de la franja diagonal
    offset = '-mt-12',   // Se superpone 1/2 de su altura a la sección de arriba
}) => {
    const skewClass = direction === 'right' ? '-skew-y-3' : 'skew-y-3'; // Inclina a la derecha o izquierda

    return (
        // Contenedor principal que se estira al 100% del ancho
        <div className={`relative w-full overflow-hidden ${height} ${offset}`}>
            {/* La franja diagonal real */}
            <div
                className={`absolute inset-0 w-full h-full ${colorClass} ${skewClass} origin-top-left`}
            // El origin-top-left o origin-top-right se ajusta con el skew para el efecto deseado
            // skew-y-3 inclina el elemento hacia arriba a la derecha.
            // -skew-y-3 inclina el elemento hacia abajo a la derecha (arriba a la izquierda).
            // Ajusta el valor del skew (ej. skew-y-6) para una inclinación más pronunciada
            ></div>
        </div>
    );
};

export default DiagonalSeparator;
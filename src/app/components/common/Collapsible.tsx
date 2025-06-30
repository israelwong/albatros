// src/app/components/common/Collapsible.tsx
"use client"; // Es un Client Component debido al estado y eventos

import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react'; // Icono para indicar el estado

// Interfaz para las props de nuestro componente Collapsible
interface CustomCollapsibleProps {
    trigger: React.ReactNode; // El elemento que activará el colapso (ej. un título o botón)
    children: React.ReactNode; // El contenido que se mostrará/ocultará
    defaultOpen?: boolean; // Si el collapsible debe estar abierto por defecto
    className?: string; // Clases adicionales para el contenedor principal
}

const CustomCollapsible: React.FC<CustomCollapsibleProps> = ({
    trigger,
    children,
    defaultOpen = false,
    className,
}) => {
    return (
        <Collapsible.Root
            className={`w-full rounded-md shadow-sm ${className || ''}`}
            defaultOpen={defaultOpen}
        >
            <Collapsible.Trigger asChild>
                <button
                    className="
            flex items-center justify-between w-full p-4 bg-gray-100 rounded-md
            text-left font-semibold text-albatrosBlue
            hover:bg-gray-200 transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-albatrosRed
            data-[state=open]:rounded-b-none
            group // Permite el giro del icono con group-data-[state=open]
          "
                >
                    {trigger}
                    <ChevronDown
                        className="
              w-5 h-5 text-albatrosRed transition-transform duration-200 // Icono de flecha
              group-data-[state=open]:rotate-180 // Gira 180 grados al abrirse
            "
                        aria-hidden
                    />
                </button>
            </Collapsible.Trigger>
            <Collapsible.Content
                className="
          overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down
          p-4 bg-white border border-t-0 rounded-b-md text-gray-700
        "
            >
                {children}
            </Collapsible.Content>
        </Collapsible.Root>
    );
};

export default CustomCollapsible;
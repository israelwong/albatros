// src/app/components/common/Accordion.tsx
"use client";

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
    value: string;
    trigger: React.ReactNode;
    children: React.ReactNode;
}

// Nueva interfaz base para las propiedades comunes
interface AccordionBaseProps {
    items: AccordionItemProps[];
    className?: string;
    // No hay defaultValue o collapsible aquí
}

// Interfaz para el modo 'single'
interface AccordionSingleProps extends AccordionBaseProps {
    type: 'single'; // Ahora es OBLIGATORIO ser 'single'
    defaultValue?: string; // string para single
    collapsible?: boolean; // collapsible es solo para single
}

// Interfaz para el modo 'multiple'
interface AccordionMultipleProps extends AccordionBaseProps {
    type: 'multiple'; // Ahora es OBLIGATORIO ser 'multiple'
    defaultValue?: string[]; // array de strings para multiple
    collapsible?: never; // No debe existir en multiple
}

// La interfaz principal es una unión de los dos modos
export type CustomAccordionProps = AccordionSingleProps | AccordionMultipleProps;


const AccordionItem: React.FC<AccordionItemProps> = ({ value, trigger, children }) => (
    <Accordion.Item
        // Estilo de la tarjeta (fondo blanco, redondeado, sombra, margen inferior)
        // Y anillo al enfocar
        className="
            bg-white rounded-lg shadow-sm mb-4 overflow-hidden
            focus-within:ring-2 focus-within:ring-albatrosRed
            transition-all duration-300 ease-in-out // Transición para cuando cambia de estado
        "
        value={value}
    >
        <Accordion.Header className="flex">
            <Accordion.Trigger
                className="
                    flex flex-1 items-center justify-between px-6 py-4 md:px-8 md:py-5
                    text-zinc-900 font-heading text-lg md:text-xl font-semibold
                    bg-white hover:bg-gray-100 transition-colors duration-200
                    focus:outline-none group
                "
            >
                {trigger}
                <ChevronDown
                    className="
                        w-6 h-6 text-blue-500 ml-4
                        transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]
                        group-data-[state=open]:rotate-180
                    "
                    aria-hidden
                />
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content
            // Tipografía de respuesta, padding, línea divisoria y animaciones de slide
            className="
                overflow-hidden text-zinc-700 text-base md:text-lg
                data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down
                px-6 pb-4 md:px-8 md:pb-6
                border-t border-gray-200
            "
        >
            <div className="pt-2"> {/* Pequeño padding superior para el contenido */}
                {children}
            </div>
        </Accordion.Content>
    </Accordion.Item>
);

const CustomAccordion: React.FC<CustomAccordionProps> = (props) => {
    // Destructuramos las props para pasarlas a Accordion.Root
    // Aquí es crucial que 'type' siempre tenga un valor definido
    const { items, className, ...restProps } = props;

    return (
        <Accordion.Root
            // Contenedor principal sin sombra, ya que las cards individuales la tienen
            className={`w-full ${className || ''}`}
            {...restProps} // Pasa todas las props restantes aquí, incluyendo type, defaultValue, collapsible
        >
            {items.map((item) => (
                <AccordionItem key={item.value} value={item.value} trigger={item.trigger}>
                    {item.children}
                </AccordionItem>
            ))}
        </Accordion.Root>
    );
};

export default CustomAccordion;
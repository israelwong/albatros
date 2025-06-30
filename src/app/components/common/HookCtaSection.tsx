// src/app/components/common/HookCtaSection.tsx
"use client";

import React from 'react';
import Button from '@/app/components/common/Button';
// Importamos las funciones de contexto de WhatsApp
import { handleWhatsappClickWithContext, getWhatsappContext } from '@/lib/whatsapp';
import { usePathname } from 'next/navigation'; // Necesario para obtener el contexto de la ruta

interface HookCtaSectionProps {
    title: string; // El "Hook" principal
    subtitle: string; // Una descripción o mensaje complementario
    buttonText: string; // Texto para el botón CTA
    // Ya no necesitamos whatsappMessage ni whatsappNumber como props directas
    // La lógica de mensaje se maneja internamente con el contexto
    // Tampoco onClick, ya que la acción específica es handleWhatsappClickWithContext
}

const HookCtaSection: React.FC<HookCtaSectionProps> = ({
    title,
    subtitle,
    buttonText,
}) => {
    const pathname = usePathname(); // Obtenemos la ruta actual para determinar el contexto
    const currentWhatsappContext = getWhatsappContext(pathname); // Determinamos el contexto (general, albatros, tecno)

    // Colores fijos para este componente (como acordamos para un estilo unificado)
    const backgroundColorClass = "bg-albatrosBlue"; // Fondo azul para CTA general
    const textColorClass = "text-albatrosWhite"; // Texto blanco
    const buttonVariant = "red"; // Botón rojo

    return (
        <section className={`w-full py-16 px-6 md:px-12 ${backgroundColorClass} ${textColorClass} text-center`}>
            <div className="container mx-auto max-w-3xl">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
                    {title}
                </h2>
                <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 mb-8 drop-shadow-sm">
                    {subtitle}
                </p>
                <Button
                    // El onClick ahora usa el helper centralizado con el contexto y la acción 'agendarCita'
                    onClick={(e) => handleWhatsappClickWithContext(e, currentWhatsappContext, 'agendarCita')}
                    variant={buttonVariant}
                    size="lg"
                >
                    {buttonText}
                </Button>
            </div>
        </section>
    );
};

export default HookCtaSection;
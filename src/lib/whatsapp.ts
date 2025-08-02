// src/lib/whatsapp.ts
// Este archivo ahora maneja números de WhatsApp específicos por plantel.

import React from 'react';

// 1. Números de WhatsApp por Plantel
const WHATSAPP_NUMBERS = {
    albatros: "5215585980923", // Número de Albatros
    tecno: "5561155122",    // Número de Tecno
    general: "5561155122"   // Un número de fallback o general
};

// 2. Mensajes preconstruidos (se mantiene la estructura)
type MessagesConfigType = Record<WhatsappContextType, Record<WhatsappActionType, string>>;

const MESSAGES_CONFIG: MessagesConfigType = {
    general: {
        agendarCita: "Hola, quisiera agendar una cita para conocer el colegio.",
        tengoDudas: "Hola, tengo dudas generales sobre Grupo Cultural Albatros.",
        inscripcion: "Hola, me interesa el proceso de inscripción.",
    },
    albatros: {
        agendarCita: "Hola, quisiera agendar una cita para Colegio Albatros.",
        tengoDudas: "Hola, tengo dudas sobre Colegio Albatros y su oferta educativa.",
        inscripcion: "Hola, me interesa inscribir a mi hijo(a) en Colegio Albatros.",
    },
    tecno: {
        agendarCita: "Hola, quisiera agendar una cita para Colegio Tecno.",
        tengoDudas: "Hola, tengo dudas sobre Colegio Tecno y su oferta educativa.",
        inscripcion: "Hola, me interesa inscribir a mi hijo(a) en Colegio Tecno.",
    },
};

// 3. Tipos para TypeScript
export type WhatsappContextType = 'general' | 'albatros' | 'tecno';
export type WhatsappActionType = 'agendarCita' | 'tengoDudas' | 'inscripcion';

/**
 * Determina el contexto del mensaje de WhatsApp basado en la ruta (pathname) actual.
 */
export const getWhatsappContext = (pathname: string): WhatsappContextType => {
    if (pathname.includes('/albatros')) return 'albatros';
    if (pathname.includes('/tecno')) return 'tecno';
    return 'general';
};

/**
 * Abre WhatsApp con un mensaje y número específicos del contexto.
 */
export const openWhatsappWithContext = (
    context: WhatsappContextType,
    actionType: WhatsappActionType
) => {
    const message = MESSAGES_CONFIG[context]?.[actionType] || MESSAGES_CONFIG.general.tengoDudas;
    const number = WHATSAPP_NUMBERS[context] || WHATSAPP_NUMBERS.general;

    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener noreferrer');
};

/**
 * Función helper para el onClick de los botones de WhatsApp.
 */
export const handleWhatsappClickWithContext = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    context: WhatsappContextType,
    actionType: WhatsappActionType
) => {
    event.preventDefault();
    openWhatsappWithContext(context, actionType);
};

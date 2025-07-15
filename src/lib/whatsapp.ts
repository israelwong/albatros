// src/lib/whatsapp.ts
// Este archivo es el concentrador de la lógica de mensajes y números de WhatsApp.

// 1. Número de WhatsApp Global del Grupo Cultural Albatros
// ¡IMPORTANTE! Reemplaza este número con el número real de WhatsApp del cliente.
const WHATSAPP_NUMBER_GLOBAL = "+15557601444"; // Ejemplo: Formato con código de país.

// 2. Mensajes preconstruidos CENTRALIZADOS por contexto y tipo de acción.
type MessagesConfigType = Record<WhatsappContextType, Record<WhatsappActionType, string>>;

const MESSAGES_CONFIG: MessagesConfigType = {
    general: {
        agendarCita: "Hola, quisiera agendar una cita para conocer el colegio y recibir una oferta especial.",
        tengoDudas: "Hola, tengo dudas generales sobre el Grupo Cultural Albatros y quisiera que me ayuden.",
        inscripcion: "", // Valor vacío o puedes poner un mensaje genérico si lo prefieres
    },
    albatros: {
        agendarCita: "Hola, quisiera agendar una cita para Colegio Albatros y recibir una oferta especial.",
        tengoDudas: "Hola, tengo dudas sobre Colegio Albatros y su oferta educativa.",
        inscripcion: "Hola, me interesa inscribir a mi hijo(a) en Colegio Albatros.",
    },
    tecno: {
        agendarCita: "Hola, quisiera agendar una cita para Colegio Tecno y recibir una oferta especial.",
        tengoDudas: "Hola, tengo dudas sobre Colegio Tecno y su oferta educativa.",
        inscripcion: "Hola, me interesa inscribir a mi hijo(a) en Colegio Tecno.",
    },
    // Puedes añadir más contextos aquí si hay otras secciones que requieran mensajes muy específicos
};

// 3. Tipos para los contextos y acciones (para TypeScript)
export type WhatsappContextType = 'general' | 'albatros' | 'tecno';
export type WhatsappActionType = 'agendarCita' | 'tengoDudas' | 'inscripcion';

/**
 * Determina el contexto del mensaje de WhatsApp basado en la ruta (pathname) actual.
 * Esto permite personalizar el mensaje según la página donde el usuario haga clic.
 * @param pathname La ruta actual de la URL (ej. "/oferta-educativa/albatros").
 * @returns El contexto del colegio ('albatros', 'tecno', o 'general').
 */
export const getWhatsappContext = (pathname: string): WhatsappContextType => {
    if (pathname.includes('/oferta-educativa/albatros')) {
        return 'albatros';
    }
    if (pathname.includes('/oferta-educativa/tecno')) {
        return 'tecno';
    }
    return 'general';
};

/**
 * Abre WhatsApp con un mensaje preconstruido, derivado de un contexto y tipo de acción.
 * Utiliza el número de WhatsApp global definido en este archivo.
 * @param context Identificador de la sección (ej. 'general', 'albatros', 'tecno').
 * @param actionType Tipo de acción (ej. 'agendarCita', 'tengoDudas', 'inscripcion').
 */
export const openWhatsappWithContext = (
    context: WhatsappContextType,
    actionType: WhatsappActionType
) => {
    const message = MESSAGES_CONFIG[context]?.[actionType] || MESSAGES_CONFIG.general[actionType];

    if (!message) {
        console.warn(`[WhatsApp Helper] Mensaje no encontrado para contexto: ${context}, acción: ${actionType}. Usando mensaje genérico de fallback.`);
        // Fallback a un mensaje muy genérico si la combinación de contexto/acción no existe
        window.open(`https://wa.me/${WHATSAPP_NUMBER_GLOBAL}?text=${encodeURIComponent("Hola, quisiera más información sobre el colegio.")}`, '_blank', 'noopener noreferrer');
        return;
    }

    window.open(`https://wa.me/${WHATSAPP_NUMBER_GLOBAL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener noreferrer');
};

/**
 * Función helper para manejar el clic en los botones que abren WhatsApp.
 * Esta función es la que se usará en el `onClick` de los componentes React.
 * @param event El evento de click (MouseEvent de botón o enlace).
 * @param context Identificador de la sección desde donde se hace clic.
 * @param actionType Tipo de acción (ej. 'agendarCita', 'tengoDudas', 'inscripcion').
 */
export const handleWhatsappClickWithContext = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    context: WhatsappContextType,
    actionType: WhatsappActionType
) => {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace/botón
    openWhatsappWithContext(context, actionType);
};

// Puedes exportar el número global si lo necesitas en algún otro lugar, pero no es necesario para el uso de los botones
export { WHATSAPP_NUMBER_GLOBAL };
// src/lib/phone.ts
// O src/utils/phone.ts

/**
 * Inicia una llamada telefónica.
 * @param phoneNumber El número de teléfono al que llamar (ej. "5512345678").
 */
export const makeCall = (phoneNumber: string) => {
    const cleanedNumber = phoneNumber.replace(/\D/g, ''); // Elimina caracteres no numéricos
    window.open(`tel:${cleanedNumber}`, '_self'); // Abre la llamada en la misma ventana
};

/**
 * Función helper para manejar el clic en los botones que inician una llamada.
 * Puede ser usada en onClick.
 * @param event El evento de click.
 * @param phoneNumber El número de teléfono.
 */
export const handleCallClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, // Aceptar click de botón o enlace
    phoneNumber: string
) => {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace/botón si lo hay
    makeCall(phoneNumber);
};
// src/lib/whatsapp.ts
// O src/utils/whatsapp.ts

/**
 * Abre WhatsApp con un mensaje preconstruido.
 * @param phoneNumber El número de teléfono de WhatsApp (ej. "+525512345678").
 * @param message El mensaje preconstruido a enviar.
 */
export const openWhatsapp = (message: string) => {
    // const cleanedNumber = phoneNumber.replace(/\D/g, ''); // Elimina caracteres no numéricos
    const phoneNumber = '+525512345678'
    const encodedMessage = encodeURIComponent(message); // Codifica el mensaje para URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Abre en una nueva pestaña
    window.open(whatsappUrl, '_blank', 'noopener noreferrer');
};

/**
 * Función helper para manejar el clic en los botones que abren WhatsApp.
 * Puede ser usada en onClick.
 * @param event El evento de click.
 * @param phoneNumber El número de teléfono de WhatsApp.
 * @param message El mensaje preconstruido.
 */
export const handleWhatsappClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, // Aceptar click de botón o enlace
    message: string
) => {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace/botón si lo hay
    openWhatsapp(message);
};
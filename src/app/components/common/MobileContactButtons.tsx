// src/app/components/common/MobileContactButtons.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, CalendarCheck } from 'lucide-react'; // Importamos CalendarCheck para agendar

import { usePathname } from 'next/navigation'; // Importamos usePathname para obtener la ruta actual

interface MobileContactButtonsProps {
    whatsappNumber: string;
    phoneNumber: string;
}

const MobileContactButtons: React.FC<MobileContactButtonsProps> = ({ whatsappNumber, phoneNumber }) => {
    const pathname = usePathname(); // Obtenemos la ruta actual

    // Función para formatear el enlace de WhatsApp con mensaje codificado
    const formatWhatsappLink = (number: string, message: string) => {
        const cleanedNumber = number.replace(/\D/g, ''); // Elimina caracteres no numéricos
        const encodedMessage = encodeURIComponent(message); // Codifica el mensaje para URL
        return `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;
    };

    // Función para determinar los mensajes de WhatsApp según la ruta actual
    const getWhatsappMessages = (path: string) => {
        // Mensajes específicos para la página de Colegio Albatros
        if (path.includes('/oferta-educativa/albatros')) {
            return {
                agendarCita: "Hola, quisiera agendar una cita para Colegio Albatros y recibir una oferta especial.",
                dudasInscripcion: "Hola, me interesa inscribir a mi hijo(a) en Colegio Albatros o tengo dudas al respecto."
            };
        }
        // Mensajes específicos para la página de Colegio Tecno
        if (path.includes('/oferta-educativa/tecno')) {
            return {
                agendarCita: "Hola, quisiera agendar una cita para Colegio Tecno y recibir una oferta especial.",
                dudasInscripcion: "Hola, me interesa inscribir a mi hijo(a) en Colegio Tecno o tengo dudas al respecto."
            };
        }
        // Mensajes predeterminados para el Home y otras páginas generales
        return {
            agendarCita: "Hola, quisiera agendar una cita para conocer el colegio y recibir una oferta especial.",
            dudasInscripcion: "Hola, tengo dudas generales sobre el Grupo Cultural Albatros y quisiera que me ayuden."
        };
    };

    const currentMessages = getWhatsappMessages(pathname); // Obtenemos los mensajes para la ruta actual

    // Definición de colores en hexadecimal (como acordamos, debido a problemas con clases de Tailwind)
    const albatrosRedHex = '#E53E3E'; // Color Rojo para el botón de Agendar
    const whatsappGreenHex = '#25D366'; // Color Verde para el botón de WhatsApp
    const blackHex = '#000000'; // Color Negro para el botón de Llamada

    return (
        // Contenedor principal: fixed bottom-6 right-4 z-50 (más alto z-index)
        <div className="fixed bottom-6 right-4 z-50">
            <div className="flex flex-col space-y-3">
                {/* Botón de Agendar Cita (icono de Calendario que abre WhatsApp) */}
                <Link
                    href={formatWhatsappLink(whatsappNumber, currentMessages.agendarCita)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Agendar cita"
                    className="
                    flex items-center justify-center
                    w-12 h-12 rounded-full shadow-lg
                    text-white
                    hover:scale-105 transition-transform duration-200
                    focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2
                    animate-pulse-infinite
                "
                    style={{ backgroundColor: albatrosRedHex }}
                >
                    <CalendarCheck size={24} /> {/* Icono de Calendario */}
                </Link>

                {/* Botón de Dudas / Inscripción (icono de WhatsApp) */}
                <Link
                    href={formatWhatsappLink(whatsappNumber, currentMessages.dudasInscripcion)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dudas o inscripción por WhatsApp"
                    className="
                    flex items-center justify-center
                    w-12 h-12 rounded-full shadow-lg
                    text-white
                    hover:scale-105 transition-transform duration-200
                    focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2
                "
                    style={{ backgroundColor: whatsappGreenHex }}
                >
                    {/* SVG del icono de WhatsApp */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                    >
                        <circle cx="12" cy="12" r="11" fill="#25D366" />
                        <path
                            d="M16.276 13.921c-.134-.067-.787-.387-.91-.433-.124-.047-.214-.07-.304.07-.09.14-.349.434-.426.524-.078.09-.155.101-.289.033-.134-.067-.568-.209-1.082-.665-.4-.36-.671-.6-.895-.98-.224-.379-.024-.35.155-.529.14-.14.304-.387.439-.582.134-.194.067-.365-.033-.51-.1-.14-.895-2.162-1.226-2.955-.329-.793-.66-.684-.91-.696-.23-.008-.49-.009-.75-.009-.258 0-.671.09-.91.304-.23.21-.873.858-.873 2.083 0 1.225.895 2.41 1.018 2.571.124.16.23.242 2.128 3.321 2.378 1.488 2.876 1.295 3.389 1.206.514-.09.787-.359.895-.583.108-.224.108-.415.07-.764-.033-.35-.124-.582-.258-.753z"
                            fill="#FFFFFF"
                        />
                        <path
                            d="M12.04 2.3c-5.2 0-9.4 4.2-9.4 9.4 0 1.7.5 3.3 1.3 4.8l-1.4 4.5 4.7-1.3c1.4.8 3 1.2 4.8 1.2 5.2 0 9.4-4.2 9.4-9.4 0-5.2-4.2-9.4-9.4-9.4z"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                        />
                    </svg>
                </Link>

                {/* Botón de Llamada Telefónica */}
                <Link
                    href={`tel:${phoneNumber}`}
                    aria-label="Llamar al colegio"
                    className="
                    flex items-center justify-center
                    w-12 h-12 rounded-full shadow-lg
                    text-white
                    hover:scale-105 transition-transform duration-200
                    focus:outline-none focus:ring-2 focus:ring-albatrosRed focus:ring-offset-2
                "
                    style={{ backgroundColor: blackHex }}
                >
                    <Phone size={20} /> {/* Icono de teléfono */}
                </Link>
            </div>
        </div>
    );
};

export default MobileContactButtons;
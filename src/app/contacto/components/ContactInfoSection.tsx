"use client";

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { handleCallClick } from '@/lib/phone';
import { handleWhatsappClickWithContext } from '@/lib/whatsapp';

// Componente para el ícono de WhatsApp
const WhatsAppIcon = () => (
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
            strokeWidth="1.5" />
    </svg>
);


const tecnoInfo = {
    phone: "5561155122",
    whatsapp: "5561155122",
    email: "gca.colegio.tecno@gmail.com",
    address: "Segunda Cerrada de Chamizal N° 17, San Lorenzo, Zumpango, Estado de México.",
    mapsLink: "https://maps.app.goo.gl/a6QkeBh88gMSBi5AA",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.0251577702224!2d-99.09010401871414!3d19.796530658818554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18c11699e1615%3A0xebe1298c4a8d43d3!2sColegio%20Tecnoalbatros!5e0!3m2!1ses!2smx!4v1751223344393!5m2!1ses!2smx"
};

const albatrosInfo = {
    phone: "5919170999",
    whatsapp: "5645489321",
    email: "gca.colegio.albatros@gmail.com",
    address: "Federico Gómez 32, Santiago 2.ª Sección, Zumpango, Estado de México.",
    mapsLink: "https://maps.app.goo.gl/sWVFJYMf5PBfmu886",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3256471056517!2d-99.0979828258403!3d19.79902237612142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18eaa00d9093b%3A0x8f807d11f48ed441!2sGrupo%20Cultural%20Albatros!5e0!3m2!1ses!2smx!4v1751222870431!5m2!1ses!2smx"
};

const ContactInfoSection = () => {
    return (
        <section className="bg-brand-background py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Tarjeta Colegio Tecno */}
                    <div className="bg-brand-surface p-8 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-primary mb-6">Colegio Tecno</h3>
                        <div className="space-y-4 mb-6">
                            <p className="flex items-start gap-3"><MapPin size={20} className="text-accent mt-1 flex-shrink-0" /> <span>{tecnoInfo.address}</span></p>
                            <p className="flex items-center gap-3"><Phone size={20} className="text-accent" /> <a href={`tel:${tecnoInfo.phone}`} onClick={(e) => handleCallClick(e, tecnoInfo.phone)} className="cursor-pointer hover:text-accent">{tecnoInfo.phone}</a></p>
                            <p className="flex items-center gap-3"><WhatsAppIcon /> <button type="button" onClick={(e) => handleWhatsappClickWithContext(e, 'tecno', 'tengoDudas')} className="cursor-pointer hover:text-accent bg-transparent border-none p-0">{tecnoInfo.whatsapp}</button></p>
                            <p className="flex items-center gap-3"><Mail size={20} className="text-accent" /> <a href={`mailto:${tecnoInfo.email}`} className="hover:text-accent break-all">{tecnoInfo.email}</a></p>
                            <p className="flex items-center gap-3"><a href={tecnoInfo.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold text-primary">Ver en Google Maps</a></p>
                        </div>
                        <div className="aspect-video w-full rounded-md overflow-hidden border">
                            <iframe src={tecnoInfo.embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    {/* Tarjeta Colegio Albatros */}
                    <div className="bg-brand-surface p-8 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-primary mb-6">Colegio Albatros</h3>
                        <div className="space-y-4 mb-6">
                            <p className="flex items-start gap-3"><MapPin size={20} className="text-accent mt-1 flex-shrink-0" /> <span>{albatrosInfo.address}</span></p>
                            <p className="flex items-center gap-3"><Phone size={20} className="text-accent" /> <a href={`tel:${albatrosInfo.phone}`} onClick={(e) => handleCallClick(e, albatrosInfo.phone)} className="cursor-pointer hover:text-accent">{albatrosInfo.phone}</a></p>
                            <p className="flex items-center gap-3"><WhatsAppIcon /> <button type="button" onClick={(e) => handleWhatsappClickWithContext(e, 'albatros', 'tengoDudas')} className="cursor-pointer hover:text-accent bg-transparent border-none p-0">{albatrosInfo.whatsapp}</button></p>
                            <p className="flex items-center gap-3"><Mail size={20} className="text-accent" /> <a href={`mailto:${albatrosInfo.email}`} className="hover:text-accent break-all">{albatrosInfo.email}</a></p>
                            <p className="flex items-center gap-3"><a href={albatrosInfo.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold text-primary">Ver en Google Maps</a></p>
                        </div>
                        <div className="aspect-video w-full rounded-md overflow-hidden border">
                            <iframe src={albatrosInfo.embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;

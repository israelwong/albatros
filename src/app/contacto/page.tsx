import React from 'react';
import ContactHero from './components/ContactHero';
import ContactInfoSection from './components/ContactInfoSection';

// Metadata para la página
export const metadata = {
    title: 'Contacto | Grupo Cultural Albatros',
    description: 'Comunícate con nosotros. Encuentra las direcciones, teléfonos y correos de nuestros planteles Albatros y Tecno.',
};

const ContactoPage = () => {
    return (
        <main>
            <ContactHero />
            <ContactInfoSection />
        </main>
    );
};

export default ContactoPage;

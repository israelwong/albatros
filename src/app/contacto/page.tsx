import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Página de contacto para consultas y soporte',
}

import ContactoPage from './components/Contacto';

export default function page() {
    return <ContactoPage />
}

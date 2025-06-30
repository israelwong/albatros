import React from 'react'
import { Metadata } from 'next'

// Metadatos para la página Nosotros (solo para App Router)
export const metadata: Metadata = {
    title: 'Política de Privacidad | Grupo Cultural Albatros',
    description: 'Conoce nuestra política de privacidad y cómo protegemos tus datos en Grupo Cultural Albatros.',
}

import PrivacidadPage from './components/Privacidad'
export default function page() {
    return <PrivacidadPage />
}

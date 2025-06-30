import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Nosotros | Grupo Cultural Albatros',
    description: 'Conoce la historia, misión, visión y política de calidad del Grupo Cultural Albatros, líderes en educación de vanguardia en Zumpango.',
}

import NosotrosPage from './components/Nosotros'
export default function page() {
    return <NosotrosPage />
}

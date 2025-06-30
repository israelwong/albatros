import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Oferta Educativa | Grupo Cultural Albatros',
    description: 'Descubre los niveles educativos y la propuesta de valor de Colegio Albatros y Colegio Tecno en Zumpango.',
}

import OfertaEducativaPage from './components/OfertaEducativa'
export default function page() {
    return <OfertaEducativaPage />
}

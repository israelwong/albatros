import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Colegio Albatros | Grupo Cultural Albatros',
    description: 'Descubre la oferta educativa de Colegio Albatros, donde la excelencia académica y el desarrollo integral se unen para formar líderes del futuro. Educación de vanguardia en Zumpango.',
}
import OfertaEducativaPage from './components/ColegioAlbatros'
export default function page() {
    return <OfertaEducativaPage />
}

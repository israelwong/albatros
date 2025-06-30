import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Colegio Tecno | Grupo Cultural Albatros',
    description: 'Descubre la oferta educativa de Colegio Tecno, donde la innovación y la tecnología se unen para formar líderes del futuro. Educación de vanguardia en Zumpango.',
}
import TecnoPage from './components/ColegioTecno'
export default function page() {
    return <TecnoPage />
}

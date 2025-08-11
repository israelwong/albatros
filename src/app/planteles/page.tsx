import React from 'react';
import PlantelesHero from './components/PlantelesHero';
import CampusDetail, { CampusData } from './components/CampusDetail';

// --- Datos para el Plantel Tecno ---
const tecnoData: CampusData = {
    name: "Colegio Tecno",
    description: "Nuestra sede más moderna, equipada con instalaciones de vanguardia, alberca climatizada y amplios espacios diseñados para una formación tecnológica y deportiva de primer nivel.",
    address: "Segunda Cerrada de Chamizal N° 17, San Lorenzo. C.P. 55604, Zumpango, Estado de México.",
    phone: "5561155122",
    whatsapp: "5561155122",
    email: "gca.colegio.tecno@gmail.com",
    googleMapsUrl: "https://www.google.com/maps/place/Colegio+Tecno+Albatros/@19.800481,-99.091176,17z/data=!3m1!4b1!4m6!3m5!1s0x85d18d4007a20955:0xe28599426bf38858!8m2!3d19.800481!4d-99.0886011!16s%2Fg%2F11b6c_2g_5?hl=es-419&entry=ttu",
    googleMapsLink: "https://maps.app.goo.gl/a6QkeBh88gMSBi5AA",
    imageUrls: [
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/1.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/7.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/8.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/2.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/4.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/6.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/9.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/10.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/11.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/13.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/14.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/15.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/16.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/17.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/18.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/19.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/20.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/21.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/arquitectura/28.jpg",
        "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/caratulas-logos-colegio/caraluta-colegio-logo-tecno.png",
    ],
    imagePosition: 'left'
};

// --- Datos para el Plantel Albatros ---
const albatrosData: CampusData = {
    name: "Colegio Albatros",
    description: "Con 18 años de historia, nuestro plantel en el corazón de Zumpango es el pilar de nuestra tradición en excelencia educativa. Actualmente en un proceso de modernización para servir mejor a nuestras familias.",
    address: "Federico Gómez 32, Santiago 2.ª Sección. C.P. 55600, Zumpango, Estado de México.",
    phone: "5919170999",
    whatsapp: "5645489321",
    email: "gca.colegio.albatros@gmail.com",
    googleMapsUrl: "https://www.google.com/maps/place/Grupo+Cultural+Albatros/@19.7918836,-99.1023795,17z/data=!3m1!4b1!4m6!3m5!1s0x85d18d179657b297:0xfb6932a392e21b06!8m2!3d19.7918836!4d-99.0998046!16s%2Fg%2F1tdy018t?hl=es-419&entry=ttu",
    googleMapsLink: "https://maps.app.goo.gl/sWVFJYMf5PBfmu886",
    imageUrls: ["https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/albatros/caratulas-logos-colegio/caraluta-colegio-logo-albatros.png"],
    imagePosition: 'right'
};

export const metadata = {
    title: 'Nuestros Planteles | Grupo Cultural Albatros',
    description: 'Conoce las instalaciones de Colegio Albatros y Colegio Tecno, dos sedes diseñadas para la excelencia educativa en Zumpango.',
};

const PlantelesPage = () => {
    return (
        <main>
            <PlantelesHero />
            <CampusDetail campus={tecnoData} />
            <CampusDetail campus={albatrosData} />
        </main>
    );
};

export default PlantelesPage;
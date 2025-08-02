"use client";

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

// --- faqData Unificado y Refinado ---
const faqData = [
    {
        question: "¿Qué es Grupo Cultural Albatros?",
        answer: "Somos un grupo educativo con 18 años de experiencia consolidada, formado por Colegio Albatros y Colegio Tecno. Compartimos una misma filosofía, misión y un modelo educativo enfocado en la excelencia y la vanguardia."
    },
    {
        question: "¿Cuál es la diferencia entre los dos colegios?",
        answer: "Ambos planteles garantizan nuestra calidad académica. Las diferencias principales son: \n\n• **Ubicación:** Colegio Albatros se encuentra en Zumpango Centro y Colegio Tecno en San Lorenzo. \n\n• **Niveles:** Colegio Tecno ofrece Kínder, Primaria y Secundaria. Colegio Albatros ofrece Kínder y Primaria. \n\n• **Instalaciones:** Colegio Tecno cuenta con instalaciones más amplias y alberga nuestra alberca climatizada."
    },
    {
        question: "¿Qué experiencia tiene cada plantel?",
        answer: "Como grupo, nuestra experiencia consolidada es de 18 años. Individualmente, Colegio Albatros tiene 18 años de trayectoria y Colegio Tecno, 12 años de innovación educativa."
    },
    {
        question: "¿Qué certificaciones de inglés ofrecen?",
        answer: "Nos enorgullece preparar a nuestros alumnos con las certificaciones de mayor prestigio mundial: Cambridge Assessment English y Oxford University Press, validando su dominio del idioma a nivel internacional."
    },
    {
        question: "¿Qué incluye la colegiatura mensual?",
        answer: "La colegiatura cubre íntegramente el programa académico curricular incorporado a la SEP. Ofrecemos servicios adicionales con costo extra como Horario Amplio, talleres vespertinos y nuestro programa de natación para complementar la formación de nuestros alumnos."
    },
    {
        question: "¿Aún hay cupo para el próximo ciclo escolar?",
        answer: "Sí, actualmente contamos con lugares disponibles, aunque el cupo es limitado para garantizar la calidad de nuestra atención personalizada. Te recomendamos iniciar tu proceso de admisión cuanto antes para asegurar un lugar."
    },
    {
        question: "¿Cuáles son los requisitos de inscripción?",
        answer: (
            <>
                <p className="mb-4">Necesitarás presentar los siguientes documentos en original y 4 copias:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Acta de nacimiento del alumno.</li>
                    <li>CURP actualizado del alumno.</li>
                    <li>CURP actualizado de ambos padres.</li>
                    <li>Certificado médico reciente con tipo de sangre.</li>
                    <li>Boletas oficiales de ciclos anteriores.</li>
                    <li>Copia de la credencial de elector (INE) a color de ambos padres (ampliada al 200%).</li>
                    <li>Comprobante de domicilio reciente.</li>
                </ul>
            </>
        )
    },
    {
        question: "¿Cuál es el costo de la colegiatura?",
        answer: (
            <>
                Los costos varían según el nivel y plantel. Para darte información precisa y un plan a tu medida, te invitamos a <Link href="/admisiones" className="text-accent hover:underline font-semibold">visitar nuestra página de admisiones</Link> y contactar a un asesor.
            </>
        )
    }
];

const FAQ = () => {
    return (
        <section className="bg-brand-background py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Preguntas Frecuentes
                    </h2>
                </div>

                <Accordion.Root type="single" collapsible className="w-full space-y-4">
                    {faqData.map((item, index) => (
                        <Accordion.Item key={index} value={`item-${index}`} className="bg-brand-surface rounded-lg shadow-sm border border-gray-200">
                            <Accordion.Trigger className="w-full flex justify-between items-center text-left p-6 font-bold text-primary text-lg group">
                                <span className="flex-1 pr-4">{item.question}</span>
                                <ChevronDown className="h-5 w-5 text-accent transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                            </Accordion.Trigger>
                            <Accordion.Content className="px-6 pb-6 text-brand-text-light data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
                                <div className="prose max-w-none whitespace-pre-line">{item.answer}</div>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </section>
    );
};

export default FAQ;
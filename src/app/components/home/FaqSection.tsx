// src/app/components/home/FaqSection.tsx
"use client";

import React from 'react';
import CustomAccordion, { AccordionItemProps } from '@/app/components/common/Accordion';
// import DiagonalSeparator from '@/app/components/common/DiagonalSeparator'; // Importa el componente

const FaqSection: React.FC = () => {
    const faqItems: AccordionItemProps[] = [
        {
            value: 'faq-1',
            trigger: '¿Qué es el Grupo Cultural Tecno Albatros?',
            children: (
                <p className="font-body text-zinc-700 leading-relaxed">
                    Somos un grupo educativo con una filosofía, misión, visión, modelo educativo y servicios compartidos. Contamos con 18 años de experiencia educativa consolidada, con Colegio Tecno y Colegio Albatros.
                </p>
            ),
        },
        {
            value: 'faq-2',
            trigger: '¿Dónde se ubican los colegios?',
            children: (
                <p className="font-body text-zinc-700 leading-relaxed">
                    Ambos planteles se encuentran en Zumpango, Estado de México:
                    <ul className="list-inside ml-1 space-y-1 pt-2">
                        <li>
                            <strong>Colegio Tecno:</strong> Ubicado en San Lorenzo, Zumpango.
                        </li>
                        <li>
                            <strong>Albatros Grupo Cultural:</strong> Ubicado en el Centro de Zumpango.
                        </li>
                    </ul>
                </p>
            ),
        },
        {
            value: 'faq-3',
            trigger: '¿Qué niveles educativos ofrece cada colegio?',
            children: (
                <ul className="list-none ml-0 space-y-1 font-body text-zinc-700 leading-relaxed">
                    <li>
                        <strong>Colegio Tecno:</strong> imparte Kinder, Primaria y Secundaria.
                    </li>
                    <li>
                        <strong>Colegio Albatros:</strong> ofrece Kinder y Primaria (sin nivel de Secundaria).
                    </li>
                </ul>
            ),
        },
        {
            value: 'faq-4',
            trigger: '¿Cuál es la propuesta de valor y los diferenciadores clave?',
            children: (
                <div className="font-body text-zinc-700 leading-relaxed">
                    <p className="mb-2">Ofrecemos &quot;Educación de Vanguardia&quot; potenciando el talento con:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Plan de Estudios Incorporado a la SEP.</li>
                        <li>Certificaciones de Inglés Cambridge de alto nivel.</li>
                        <li>Tecnología avanzada: pizarrones electrónicos, laboratorios de cómputo, tablets, robótica.</li>
                        <li>Horario amplio y talleres complementarios: danza, dibujo, fútbol, baloncesto, natación, taller de tareas.</li>
                        <li>Atención Personalizada con apoyo de especialistas.</li>
                        <li>Excelencia Educativa y logros destacados en concursos y olimpiadas (Matemáticas Gauss, Danza, Básquetbol, Fútbol, Handball).</li>
                        <li>Instalaciones Modernas y Seguras: salones amplios, laboratorios, cafetería, canchas, alberca (Tecno), videovigilancia.</li>
                    </ul>
                </div>
            ),
        },
        {
            value: 'faq-5',
            trigger: '¿Cuál es la principal diferencia física entre los colegios?',
            children: (
                <p className="font-body text-zinc-700 leading-relaxed">
                    La principal diferencia es que el Colegio Tecno cuenta con alberca propia. Albatros no, pero si ofrece natación, trasladando a sus alumnos a las instalaciones de Tecno sin costo adicional.
                </p>
            ),
        },
        {
            value: 'faq-6',
            trigger: '¿Cómo se comparan los costos mensuales base?',
            children: (
                <div className="font-body text-zinc-700 leading-relaxed">
                    <p className="mb-2">Los costos varían por colegio y nivel, siendo Albatros generalmente más accesible para niveles que ambos ofrecen:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Kinder (Paquete Básico):</strong> Tecno: ~$2,516 MXN (1º-3º). Albatros: ~$1,766 - $1,590 MXN (1º-3º).</li>
                        <li><strong>Primaria (Paquete Básico):</strong> Tecno: ~$3,164 - $3,005 MXN (1º-6º). Albatros: ~$2,516 - $2,264 MXN (1º-6º).</li>
                        <li><strong>Secundaria:</strong> Solo Colegio Tecno: ~$3,278 MXN. Albatros no ofrece este nivel.</li>
                    </ul>
                    <p className="mt-2">Ambos ofrecen paquetes adicionales (Horario Amplio, Natación, Paquete Completo, Premium) con costos variables.</p>
                </div>
            ),
        },
        {
            value: 'faq-8',
            trigger: '¿Qué experiencia tiene cada colegio?',
            children: (
                <p className="font-body text-zinc-700 leading-relaxed">
                    Albatros Grupo Cultural tiene 18 años de experiencia, y Colegio Tecno, 12 años. Como grupo, la experiencia consolidada es de 18 años.
                </p>
            ),
        },
        {
            value: 'faq-9',
            trigger: '¿Aún hay cupo disponible para el próximo ciclo?',
            children: (
                <p className="font-body text-zinc-700 leading-relaxed">
                    Sí, ambos colegios tienen vacantes disponibles. Colegio Tecno tiene 347 vacantes y Albatros Grupo Cultural, 246. Las campañas de matriculación se intensifican entre junio, julio y agosto.
                </p>
            ),
        },
    ];

    return (
        <section className="w-full bg-white text-albatrosBlue">

            {/* <DiagonalSeparator colorClass="bg-zinc-300" direction="right" height="h-12" offset="-mt-0" /> */}

            <div className="container mx-auto max-w-4xl py-16 px-6 md:px-12">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
                    Preguntas Frecuentes
                </h2>

                <CustomAccordion
                    type="single"
                    collapsible={true}
                    items={faqItems}
                />

                <a href="fb://page/198588873346459/reviews/">¡Deja una reseña en la app de Facebook!</a>

            </div>
        </section>
    );
};

export default FaqSection;
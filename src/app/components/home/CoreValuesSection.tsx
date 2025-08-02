"use client";

import React from 'react';
import { HeartHandshake, ShieldCheck, Smile } from 'lucide-react'; // Íconos para los valores

const values = [
    {
        icon: HeartHandshake,
        title: "Atención Personalizada",
        description: "Celebramos el progreso único y las fortalezas de cada alumno, brindando atención individualizada que potencia su talento y confianza."
    },
    {
        icon: ShieldCheck,
        title: "Entorno Seguro y de Confianza",
        description: "Tenemos un compromiso total con el bienestar de los alumnos, con supervisión activa y cámaras de vigilancia para una total tranquilidad."
    },
    {
        icon: Smile,
        title: "Prevención del Bullying",
        description: "Fomentamos la amistad, la colaboración y un ambiente de respeto donde cada alumno se siente parte de una gran familia."
    }
];

const CoreValuesSection = () => {
    return (
        <section className="bg-brand-surface py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Un Entorno Centrado en el Alumno
                    </h2>
                    <p className="text-lg text-brand-text-light max-w-2xl mx-auto mt-4">
                        No solo educamos mentes, también preparamos corazones en un ambiente seguro y de apoyo constante.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="text-center p-8">
                            <div className="flex justify-center mb-6">
                                <div className="bg-primary/10 text-primary p-4 rounded-full">
                                    <value.icon size={40} strokeWidth={1.5} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                            <p className="text-brand-text-light">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValuesSection;
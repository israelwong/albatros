"use client";

import React from 'react';
import { Award, Trophy, Medal } from 'lucide-react';

// Datos de los logros, con la información de Yasmara y Liam integrada
const achievements = {
  national: {
    title: "Logros Nacionales e Internacionales", // TÍTULO ACTUALIZADO
    icon: Award,
    items: [
      "Olimpiada Internacional de Matemáticas (SIMOC): Medalla de Bronce en Singapur.", // AÑADIDO (Yasmara)
      "Olimpiada de Matemáticas GAUSS: Seleccionados estatales para la competencia nacional.",
      "Medalla a nivel Nacional en la Olimpiada GAUSS."
    ]
  },
  state: {
    title: "Logros Estatales",
    icon: Trophy,
    items: [
      "Olimpiada del Conocimiento: 1er Lugar a Nivel Sector.", // AÑADIDO (Liam)
      "Olimpiada del Conocimiento: Participación a Nivel Estatal.",
      "Olimpiada de Matemáticas GAUSS: Medalla de Plata (2º grado).",
      "Olimpiada de Matemáticas GAUSS: Medalla de Bronce (3º grado)."
    ]
  },
  regional: {
    title: "Logros Regionales y Zonales",
    icon: Medal,
    items: [
      "Handball Varonil: 2º lugar Regional.",
      "Fútbol Varonil: 1º lugar a Nivel Zona.",
      "Handball Varonil: 1º lugar a Nivel Zona.",
      "Concurso de Danza: 2º lugar a Nivel Zona.",
      "Básquetbol: 2º lugar a Nivel Zona."
    ]
  }
};

const AchievementsSection = () => {
  return (
    <section className="bg-brand-surface py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Logro tras Logro
          </h2>
          <p className="text-lg text-brand-text-light max-w-3xl mx-auto mt-4">
            Año tras año, nuestros alumnos son reconocidos por las autoridades educativas gracias a sus excelentes resultados a nivel local, estatal y nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Columna Nacional e Internacional */}
          <div className="bg-brand-background p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <achievements.national.icon size={28} className="text-secondary mr-3" />
              <h3 className="text-xl font-bold text-primary">{achievements.national.title}</h3>
            </div>
            <ul className="space-y-3 text-brand-text-light">
              {achievements.national.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary font-bold mr-2 mt-1">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Estatal */}
          <div className="bg-brand-background p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <achievements.state.icon size={28} className="text-accent mr-3" />
              <h3 className="text-xl font-bold text-primary">{achievements.state.title}</h3>
            </div>
            <ul className="space-y-3 text-brand-text-light">
              {achievements.state.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent font-bold mr-2 mt-1">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Regional */}
          <div className="bg-brand-background p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <achievements.regional.icon size={28} className="text-primary mr-3" />
              <h3 className="text-xl font-bold text-primary">{achievements.regional.title}</h3>
            </div>
            <ul className="space-y-3 text-brand-text-light">
              {achievements.regional.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary font-bold mr-2 mt-1">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
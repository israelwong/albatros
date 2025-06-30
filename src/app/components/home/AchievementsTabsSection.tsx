// src/app/components/home/AchievementsTabsSection.tsx
"use client";

import React from 'react';
import CustomTabs from '@/app/components/common/Tabs';
import { Award, Trophy, Medal } from 'lucide-react'; // Iconos para los logros
import DiagonalSeparator from '@/app/components/common/DiagonalSeparator'; // Importa el componente


const AchievementsTabsSection: React.FC = () => {
  return (
    <section className="w-full  bg-red-900">
      <DiagonalSeparator colorClass="bg-gray-100" direction="right" height="h-24" offset="-mt-12" />

      <div className="container mx-auto py-16 px-6 md:px-12">
        {/* Título y Subtítulo de la Sección de Logros */}
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6 text-red-300"> {/* Más prominente y azul */}
          ¡Resultados que inspiran!
        </h3>
        <p className="font-body text-xl md:text-xl text-white text-center max-w-4xl mx-auto mb-5 leading-normal">
          {/* Nuestros alumnos destacan a nivel nacional en áreas académicas, deportivas y artísticas. Un reflejo tangible de una metodología que impulsa su máximo potencial. */}
          Año tras año somos reconocidos por las autoridades educativas por los excelentes resultados y nivel educativo de nuestros estudiantes.
        </p>

        {/* Contenedor de Pestañas con un diseño más minimalista */}
        <div className="max-w-5xl mx-auto bg-zinc-50 rounded-lg overflow-hidden"> {/* Fondo gris claro sutil, sin sombra ni borde principal */}
          <CustomTabs
            defaultValue="nacional"
            tabs={[
              {
                value: 'nacional',
                label: 'Nacionales',
                content: (
                  <div className="p-2 md:p-6 bg-white border-zinc-100"> {/* Contenido de panel blanco con borde superior suave */}
                    <h4 className="font-heading text-xl font-semibold text-blue-950 mb-4 flex items-center">
                      <Award size={24} className="mr-3 text-albatrosRed" /> Logros Académicos Nacionales
                    </h4>
                    <ul className="list-none space-y-3 font-body text-zinc-800 text-base">
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span> {/* Punta de flecha estilizada */}
                        Olimpiada de Matemáticas GAUSS: 2º y 1º grado seleccionados por el Estado de México para competir a nivel nacional en el estado de Sinaloa.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Medalla a nivel Nacional.
                      </li>
                    </ul>
                  </div>
                ),
              },
              {
                value: 'estatal',
                label: 'Estatales',
                content: (
                  <div className="p-4 md:p-6 bg-white border-zinc-100">
                    <h4 className="font-heading text-xl font-semibold text-blue-950 mb-4 flex items-center">
                      <Trophy size={24} className="mr-3 text-albatrosRed" /> Logros Académicos Estatales
                    </h4>
                    <ul className="list-none space-y-3 font-body text-zinc-800 text-base">
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Olimpiada del Conocimiento: Nivel Estatal.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Olimpiada del Conocimiento: Nivel Sector.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Olimpiada del Conocimiento: Nivel Subdirección.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Olimpiada de Matemáticas GAUSS: 3º grado: Medalla de Bronce.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Olimpiada de Matemáticas GAUSS: 2º grado: Medalla de Plata.
                      </li>
                    </ul>
                  </div>
                ),
              },
              {
                value: 'regional',
                label: 'Regionales',
                content: (
                  <div className="p-4 md:p-6 bg-white border-zinc-100">
                    <h4 className="font-heading text-xl font-semibold text-blue-950 mb-4 flex items-center">
                      <Medal size={24} className="mr-3 text-albatrosRed" /> Logros Deportivos y Culturales
                    </h4>
                    <ul className="list-none space-y-3 font-body text-zinc-800 text-base">
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Handball Varonil: 2º lugar a nivel regional.
                      </li>
                    </ul>
                    <h5 className="font-heading text-lg font-semibold text-blue-950 mt-6 mb-3">Logros Zonales (Deportivos y Culturales)</h5>
                    <ul className="list-none space-y-3 font-body text-zinc-800 text-base">
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Fútbol Varonil: 1º lugar a nivel zona.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Handball Varonil: 1º lugar a nivel zona.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Concurso de Danza: 2º lugar a nivel zona.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Basquetbol: 2º lugar a nivel zona.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2 text-albatrosRed">›</span>
                        Fútbol Femenil: 3º lugar a nivel zona.
                      </li>
                    </ul>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default AchievementsTabsSection;
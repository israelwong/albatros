"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { handleCallClick } from "@/lib/phone";

// --- Datos de Contacto (extraídos del brochure) ---
const tecnoInfo = {
  phone: "5592774670",
  email: "gca.colegio.tecno@gmail.com",
  address:
    "Segunda Cerrada de Chamizal N° 17, San Lorenzo, Zumpango, Estado de México.",
};

const albatrosInfo = {
  phone: "5919170999",
  email: "gca.colegio.albatros@gmail.com",
  address:
    "Federico Gómez 32, Santiago 2.ª Sección, Zumpango, Estado de México.",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80 font-sans">
      <div className="container mx-auto px-6 pt-16 pb-12">
        {/* --- Sección Superior con Logo --- */}
        <div className="mb-12 text-center md:text-left">
          <Link href="/">
            <Image
              src="/gca_isotipo_white.svg"
              alt="Isotipo Grupo Cultural Albatros"
              width={70}
              height={70}
              className="inline-block"
            />
          </Link>
        </div>

        {/* --- Grid Principal de 4 Columnas --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1: Colegio Tecno */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white mb-3">Colegio Tecno</h3>
            <p className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 flex-shrink-0 text-secondary" />
              <span>{tecnoInfo.address}</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone size={18} className="flex-shrink-0 text-secondary" />
              <span
                onClick={(e) => handleCallClick(e, tecnoInfo.phone)}
                className="cursor-pointer hover:text-secondary transition-colors"
              >
                {tecnoInfo.phone}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} className="flex-shrink-0 text-secondary" />
              <a
                href={`mailto:${tecnoInfo.email}`}
                className="hover:text-secondary transition-colors break-all"
              >
                {tecnoInfo.email}
              </a>
            </p>
          </div>

          {/* Columna 2: Colegio Albatros */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white mb-3">
              Colegio Albatros
            </h3>
            <p className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 flex-shrink-0 text-secondary" />
              <span>{albatrosInfo.address}</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone size={18} className="flex-shrink-0 text-secondary" />
              <span
                onClick={(e) => handleCallClick(e, albatrosInfo.phone)}
                className="cursor-pointer hover:text-secondary transition-colors"
              >
                {albatrosInfo.phone}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} className="flex-shrink-0 text-secondary" />
              <a
                href={`mailto:${albatrosInfo.email}`}
                className="hover:text-secondary transition-colors break-all"
              >
                {albatrosInfo.email}
              </a>
            </p>
          </div>

          {/* Columna 3: Navegación */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white mb-3">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/modelo-educativo"
                  className="hover:text-secondary transition-colors"
                >
                  Modelo Educativo
                </Link>
              </li>
              <li>
                <Link
                  href="/planteles"
                  className="hover:text-secondary transition-colors"
                >
                  Planteles
                </Link>
              </li>
              <li>
                <Link
                  href="/admisiones"
                  className="hover:text-secondary transition-colors"
                >
                  Admisiones
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="hover:text-secondary transition-colors"
                >
                  Quiénes Somos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white mb-3">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/grupoculturalalbatros.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook
                  size={28}
                  className="hover:text-secondary transition-colors"
                />
              </a>
              <a
                href="https://www.instagram.com/grupoculturalalbatros/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram
                  size={28}
                  className="hover:text-secondary transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        {/* --- Barra Inferior de Copyright --- */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {currentYear} Grupo Cultural Albatros. Todos los derechos
            reservados.
          </p>
          <Link
            href="/aviso-de-privacidad"
            className="hover:text-secondary transition-colors mt-4 md:mt-0"
          >
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/app/components/Footer.jsx
"use client"; // Necesario para usar handleCallClick con onClick

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Phone, Mail } from "lucide-react"; // Íconos para redes sociales y contacto
import { handleCallClick } from "@/lib/phone"; // Importa el helper para llamadas

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Actualiza con los números y emails reales
  const contactPhone = "5592774670"; // Número de Colegio Tecno que proporcionaste
  const contactEmail = "gca.colegio.tecno@gmail.com";

  return (
    <footer className="bg-albatrosBlue text-albatrosWhite py-8 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Información de Contacto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-heading text-xl font-bold mb-4">Contacto</h3>
          <p className="font-body mb-2 flex items-center">
            <Phone size={18} className="mr-2" />
            {/* Usamos un botón invisible o un span clickeable para el onClick */}
            <span
              className="cursor-pointer hover:text-albatrosRed transition-colors duration-200"
              onClick={(e) => handleCallClick(e, contactPhone)}
              aria-label={`Llamar a ${contactPhone}`}
            >
              {contactPhone}
            </span>
          </p>
          <p className="font-body mb-2 flex items-center">
            <Mail size={18} className="mr-2" />
            <a
              href={`mailto:${contactEmail}`}
              className="hover:text-albatrosRed transition-colors duration-200"
            >
              {contactEmail}
            </a>
          </p>
          <p className="font-body text-sm mt-4">
            Horario de atención: Lunes a Viernes de 8:00 a 16:00 hrs.
          </p>
        </div>

        {/* Columna 2: Navegación Rápida */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-heading text-xl font-bold mb-4">Navegación</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="font-body hover:text-albatrosRed transition-colors duration-200"
              >
                Principal
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                className="font-body hover:text-albatrosRed transition-colors duration-200"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/oferta-educativa"
                className="font-body hover:text-albatrosRed transition-colors duration-200"
              >
                Oferta Educativa
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="font-body hover:text-albatrosRed transition-colors duration-200"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/privacidad"
                className="font-body hover:text-albatrosRed transition-colors duration-200"
              >
                Aviso de Privacidad
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes Sociales y Copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="font-heading text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/grupoculturalalbatros.oficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook
                size={28}
                className="hover:text-albatrosRed transition-colors duration-200"
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
                className="hover:text-albatrosRed transition-colors duration-200"
              />
            </a>
          </div>
          <div className="mt-auto">
            <p className="font-body text-sm">
              &copy; {currentYear} Grupo Cultural Albatros. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

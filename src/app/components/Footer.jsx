"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { handleCallClick } from "@/lib/phone";
import { handleWhatsappClickWithContext } from "@/lib/whatsapp";

// Componente para el ícono de WhatsApp
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
  >
    <circle cx="12" cy="12" r="11" fill="#25D366" />
    <path
      d="M16.276 13.921c-.134-.067-.787-.387-.91-.433-.124-.047-.214-.07-.304.07-.09.14-.349.434-.426.524-.078.09-.155.101-.289.033-.134-.067-.568-.209-1.082-.665-.4-.36-.671-.6-.895-.98-.224-.379-.024-.35.155-.529.14-.14.304-.387.439-.582.134-.194.067-.365-.033-.51-.1-.14-.895-2.162-1.226-2.955-.329-.793-.66-.684-.91-.696-.23-.008-.49-.009-.75-.009-.258 0-.671.09-.91.304-.23.21-.873.858-.873 2.083 0 1.225.895 2.41 1.018 2.571.124.16.23.242 2.128 3.321 2.378 1.488 2.876 1.295 3.389 1.206.514-.09.787-.359.895-.583.108-.224.108-.415.07-.764-.033-.35-.124-.582-.258-.753z"
      fill="#FFFFFF"
    />
    <path
      d="M12.04 2.3c-5.2 0-9.4 4.2-9.4 9.4 0 1.7.5 3.3 1.3 4.8l-1.4 4.5 4.7-1.3c1.4.8 3 1.2 4.8 1.2 5.2 0 9.4-4.2 9.4-9.4 0-5.2-4.2-9.4-9.4-9.4z"
      stroke="#FFFFFF"
      strokeWidth="1.5"
    />
  </svg>
);

// --- Datos de Contacto Completos ---
const tecnoInfo = {
  phone: "5561155122",
  whatsapp: "5561155122",
  email: "gca.colegio.tecno@gmail.com",
  address:
    "Segunda Cerrada de Chamizal N° 17, San Lorenzo, Zumpango, Estado de México.",
};

const albatrosInfo = {
  phone: "5919170999",
  whatsapp: "5585980923",
  email: "gca.colegio.albatros@gmail.com",
  address:
    "Federico Gómez 32, Santiago 2.ª Sección, Zumpango, Estado de México.",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80 font-sans">
      <div className="container mx-auto px-6 pt-16 pb-12">
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
              <WhatsAppIcon />
              <span
                onClick={(e) =>
                  handleWhatsappClickWithContext(e, "tecno", "tengoDudas")
                }
                className="cursor-pointer hover:text-secondary transition-colors"
              >
                {tecnoInfo.whatsapp}
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
              <WhatsAppIcon />
              <span
                onClick={(e) =>
                  handleWhatsappClickWithContext(e, "albatros", "tengoDudas")
                }
                className="cursor-pointer hover:text-secondary transition-colors"
              >
                {albatrosInfo.whatsapp}
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

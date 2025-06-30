// src/app/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Oferta Educativa", href: "/oferta-educativa" },
    { name: "Contacto", href: "/contacto" },
  ];

  // Efecto para el sticky header en desktop
  useEffect(() => {
    const handleScroll = () => {
      // Solo aplicamos sticky si la ventana es de escritorio (mayor que 'md' breakpoint)
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        setIsSticky(window.scrollY > 0);
      } else {
        setIsSticky(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      }
    };
  }, []);

  // Determinar la altura del placeholder basada en el diseño del header
  // py-4 (16px top + 16px bottom) + altura del logo (50px) = 82px aprox.
  // Podríamos usar h-20 (80px) o h-24 (96px) como un valor seguro
  const placeholderHeightClass = "h-[82px]"; // Altura fija basada en el diseño del header (py-4 + logo 50px)

  return (
    <>
      {" "}
      {/* Usamos un fragmento para envolver el header y el placeholder */}
      <header
        className={`
          bg-white/80 shadow-md py-4 px-6 md:px-12 z-30
          transition-all duration-300 ease-in-out
          ${
            isSticky
              ? "fixed top-0 left-0 right-0 animate-slide-down-header backdrop-blur-md"
              : "relative"
          }
        `}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Contenido para Desktop: Logotipo Normal */}
          <Link href="/" className="hidden md:flex items-center">
            <Image
              src="/gca_logotipo_horizontal.svg"
              alt="Logotipo Grupo Cultural Albatros"
              width={200}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Contenido para Móvil: Logo y Nombre del Grupo (Header principal en mobile) */}
          <Link href="/" className="flex items-center md:hidden group">
            <Image
              src="/favicon.svg"
              alt="Logo Grupo Cultural Albatros"
              width={60}
              height={60}
              className="h-14 w-14 mr-2 object-contain"
              priority
            />
            <span className="font-heading text-lg font-bold leading-4 group-hover:text-albatrosRed transition-colors duration-200 text-albatrosBlue">
              Grupo <br />
              Cultural <br />
              Albatros
            </span>
          </Link>

          {/* Menú de navegación para Escritorio */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-albatrosBlue font-body text-lg hover:text-albatrosRed transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Botón de Menú para Móviles (Hamburguesa / Cerrar) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="text-albatrosBlue focus:outline-none focus:ring-2 focus:ring-albatrosRed rounded-md p-1"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}{" "}
            </button>
          </div>
        </div>

        {/* Menú Desplegable para Móviles (la pantalla azul que aparece) */}
        <div
          style={{
            backgroundColor: "#1A2B4B",
            color: "#FFFFFF",
          }}
          className={`
            fixed inset-0 top-0 left-0 h-full w-full z-40
            transform transition-transform duration-300 ease-in-out
            ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0 pointer-events-none"
            }
            md:hidden
            flex flex-col items-center justify-start
            pt-20
          `}
        >
          {/* Botón de Cerrar */}
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
            style={{ color: "#FFFFFF" }}
            className="absolute top-6 right-6 hover:text-albatrosRed focus:outline-none focus:ring-2 focus:ring-albatrosRed rounded-md p-1 transition-colors duration-200"
          >
            <X size={32} />
          </button>

          {/* Isotipo en blanco centrado en la parte superior del menú móvil */}
          <div className="flex justify-center w-full mt-10">
            <Image
              src="/gca_isotipo_white.svg"
              alt="Isotipo Grupo Cultural Albatros"
              width={70}
              height={70}
              priority
            />
          </div>

          {/* Ítems de navegación del menú móvil */}
          <nav className="flex flex-col space-y-8 text-center mt-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ color: "#FFFFFF" }}
                className="font-heading text-3xl md:text-4xl hover:text-albatrosRed transition-colors duration-200 p-2 rounded-md hover:bg-albatrosBlue/50"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Pie de menú móvil (opcional) */}
          <div
            className="absolute bottom-6 text-center text-sm opacity-75"
            style={{ color: "#FFFFFF" }}
          >
            <p className="font-body">Grupo Cultural Albatros</p>
            <p className="font-body">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
        </div>
      </header>
      {/* Placeholder para el Sticky Header (solo visible en desktop cuando es sticky) */}
      <div
        className={`hidden md:block ${
          isSticky ? placeholderHeightClass : "h-0"
        }`}
      ></div>
    </>
  );
};

export default Header;

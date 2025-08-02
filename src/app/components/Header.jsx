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
    { name: "Modelo Educativo", href: "/modelo-educativo" },
    { name: "Planteles", href: "/planteles" },
    { name: "Admisiones", href: "/admisiones" },
    { name: "Contacto", href: "/contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        w-full py-4 px-6 md:px-12 z-30
        transition-all duration-300 ease-in-out
        ${
          isSticky
            ? "fixed top-0 bg-white/90 shadow-lg backdrop-blur-md animate-slide-down-header"
            : "absolute top-0 bg-white/80 shadow-md"
        }
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* ... (Contenido del header desktop y el botón de menú móvil se quedan igual) ... */}
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
        <Link href="/" className="flex items-center md:hidden group">
          <Image
            src="/favicon.svg"
            alt="Logo Grupo Cultural Albatros"
            width={60}
            height={60}
            className="h-14 w-14 mr-2 object-contain"
            priority
          />
          <span className="font-sans text-lg font-bold leading-4 group-hover:text-accent transition-colors duration-200 text-primary">
            Grupo <br />
            Cultural <br />
            Albatros
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-primary font-sans text-lg hover:text-accent transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="text-primary focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable para Móviles (con estructura de capas corregida) */}
      <div
        className={`
          fixed inset-0 z-50
          transition-opacity duration-300 ease-in-out
          md:hidden
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Capa 1: Fondo Azul (usamos bg-primary de Tailwind) */}
        <div className="absolute inset-0 bg-primary "></div>

        {/* Capa 2: Contenido */}
        <div className="relative z-99 flex flex-col items-center justify-between py-20 px-6 bg-primary h-screen">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
            className="absolute top-6 right-6 text-white hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded-md p-1 transition-colors duration-200"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col items-center gap-10">
            <Image
              src="/gca_isotipo_white.svg"
              alt="Isotipo Grupo Cultural Albatros"
              width={70}
              height={70}
              priority
            />
            <nav className="flex flex-col space-y-8 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-sans text-3xl text-white hover:text-secondary transition-colors duration-200 p-2 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="text-center text-sm text-white opacity-75">
            <p className="font-sans">Grupo Cultural Albatros</p>
            <p className="font-sans">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

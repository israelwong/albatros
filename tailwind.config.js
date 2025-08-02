// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"; // <-- CAMBIO 1: Usamos 'import'

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- TU CONFIGURACIÓN DE COLORES (ESTÁ PERFECTA) ---
      colors: {
        primary: {
          DEFAULT: "#0A2D6E",
          hover: "#0E3B91",
        },
        secondary: {
          DEFAULT: "#FDB813",
          hover: "#FFCA28",
        },
        accent: {
          DEFAULT: "#D92121",
          hover: "#B71C1C",
        },
        brand: {
          background: "#F4F6F8",
          surface: "#FFFFFF",
          text: "#212121",
          "text-light": "#4F4F4F",
        },
      },
      // --- FAMILIA DE FUENTES (CON EL AJUSTE) ---
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        display: ["Bhineka", "cursive"],
        qwigley: ["Qwigley", "cursive"],
      },
      // --- TUS ANIMACIONES (ESTÁN PERFECTAS) ---
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDownHeader: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "slide-down-header": "slideDownHeader 0.3s ease-out forwards",
        "slide-down": "slideDown 300ms ease-in-out forwards",
        "slide-up": "slideUp 300ms ease-in-out forwards",
        "pulse-infinite": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

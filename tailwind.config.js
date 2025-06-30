// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Asegúrate de que esta línea es correcta
  ],
  theme: {
    extend: {
      colors: {
        albatrosBlue: "#1A2B4B",
        albatrosRed: "#E53E3E",
        albatrosWhite: "#FFFFFF",
        albatrosBlack: "#000000",
        whatsappGreen: "#25D366",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDownHeader: {
          // ESTE KEYFRAME ES CLAVE PARA EL STICKY HEADER
          "0%": { transform: "translateY(-100%)" }, // Inicia fuera de pantalla
          "100%": { transform: "translateY(0)" }, // Termina en su posición
        },
        slideDown: {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" }, // O --radix-accordion-content-height
        },
        slideUp: {
          from: { height: "var(--radix-collapsible-content-height)" }, // O --radix-accordion-content-height
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "slide-down-header": "slideDownHeader 0.3s ease-out forwards", // ESTA ANIMACIÓN ES CLAVE
        "slide-down": "slideDown 300ms ease-in-out forwards",
        "slide-up": "slideUp 300ms ease-in-out forwards",
        "pulse-infinite": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

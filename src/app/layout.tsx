import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import Script from "next/script";
import "./globals.css";

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import DecorativeLines from '@/app/components/DecorativeLines';
import MobileContactButtons from '@/app/components/common/MobileContactButtons';
import { GoogleTagManager } from '@next/third-parties/google'; // ¡NUEVA IMPORTACIÓN!


export const metadata: Metadata = {
  title: "Grupo Cultural Albatros",
  description: "Excelencia Educativa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-PFS3VB7Q" />
      <head>
        <title>Grupo Cultural Albatros</title>
      </head>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFS3VB7Q"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <DecorativeLines />
        <Header />
        <main>{children}</main>
        <MobileContactButtons
          phoneNumber="525617015459"     // ¡Reemplaza con el número real del cliente!
        />
        <Footer />
      </body>
    </html>
  );
}

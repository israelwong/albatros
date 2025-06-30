import type { Metadata } from "next";
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

      <head>
        <title>Grupo Cultural Albatros</title>
      </head>
      <body className="flex flex-col min-h-screen overflow-x-hidden">

        <GoogleTagManager gtmId="GTM-PFS3VB7Q" />

        <DecorativeLines />

        <Header />
        <main>{children}</main>
        <MobileContactButtons
          phoneNumber="525617015459"
        />
        <Footer />
      </body>
    </html>
  );
}

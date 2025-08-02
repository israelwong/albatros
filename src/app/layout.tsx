import type { Metadata } from "next";
import "./globals.css";
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';


import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import MobileContactButtons from '@/app/components/MobileContactButtons';
import { GoogleTagManager } from '@next/third-parties/google';


// --- METADATA CORREGIDA ---
export const metadata: Metadata = {
  title: "Grupo Cultural Albatros",
  description: "Excelencia Educativa",
  verification: {
    other: {
      "facebook-domain-verification": "xouk22brgz7vbmi3ymyfqwuev2ljvi",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <GoogleTagManager gtmId="GTM-PFS3VB7Q" />
        <Header />

        {/* Aquí aplicamos flex-1 para que esta sección crezca y se expanda */}
        <main className="flex-1">{children}</main>

        <MobileContactButtons
          phoneNumber="5561155122"
        />
        <Footer />
      </body>
    </html>
  );
}
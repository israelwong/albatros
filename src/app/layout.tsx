import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import DecorativeLines from '@/app/components/DecorativeLines';
import MobileContactButtons from '@/app/components/common/MobileContactButtons';

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

        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PFS3VB7Q'); 
          `}
        </Script>



      </head>
      <body className="flex flex-col min-h-screen overflow-x-hidden">


        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFS3VB7Q"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

        <DecorativeLines />
        <Header />

        <main>{children}</main>


        <MobileContactButtons
          whatsappNumber="+525544546582" // ¡Reemplaza con el número real del cliente!
          phoneNumber="5544546582"     // ¡Reemplaza con el número real del cliente!
        />

        <Footer />
      </body>
    </html>
  );
}

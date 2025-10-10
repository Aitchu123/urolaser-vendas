import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import { SiteMainHeader } from "@/components/SiteMainHeader";

// Fonte Outfit para títulos (substituindo Clash Display)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

// Fonte Manrope para textos
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "UroLaser - Curso Profissionalizante na Área da Saude | Ganhe até R$7.000",
  description: "Domine a Tecnologia Urologia e Gineco e ganhe até R$7.000 como representante hospitalar. Curso completo com certificação, suporte técnico e oportunidades de carreira na área médica.",
  keywords: [
    "Urologia",
    "Gineco",
    "curso médico",
    "representante hospitalar",
    "tecnologia médica",
    "ginecologia",
    "laser médico",
    "curso profissionalizante",
    "área médica",
    "área da saúde",
    "Instrumentação cirurgica",
    "Enfermagem",
    "Tecnico de enfermagem",
    "Tecnico de radiologia",
    "certificação médica",
    "carreira médica",
    "equipamentos médicos",
    "R$7000",
    "renda extra"
  ],
  authors: [{ name: "Urolaser" }],
  creator: "Urolaser",
  publisher: "Urolaser",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://urolaser.cloud'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Urolaser - Curso Profissionalizante na Área Médica | Ganhe até R$7.000",
    description: "Domine a Tecnologia UroLaser e ganhe até R$7.000 como representante hospitalar. Curso completo com certificação, suporte técnico e oportunidades de carreira na área médica.",
    url: 'https://urolaser.cloud',
    siteName: 'Urolaser',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Urolaser - Curso Profissionalizante na Área da Saúde',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Urolaser - Curso Profissionalizante na Área da Saúde | Ganhe até R$7.000",
    description: "Domine a Tecnologia hospitalar e ganhe até R$7.000 como representante hospitalar. Curso completo com certificação.",
    images: ['/logo.png'],
    creator: '@urolaser',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#85c6c8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "UroLaser - Curso Profissionalizante na Área Médica",
              "description": "Domine a Tecnologia UroLaser e ganhe até R$7.000 como representante hospitalar. Curso completo com certificação, suporte técnico e oportunidades de carreira na área médica.",
              "provider": {
                "@type": "Organization",
                "name": "UroLaser",
                "url": "https://urolaser.com.br"
              },
              "courseMode": "online",
              "educationalCredentialAwarded": "Certificação UroLaser",
              "offers": {
                "@type": "Offer",
                "category": "Curso Profissionalizante",
                "priceCurrency": "BRL"
              },
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "Profissional da Saúde"
              }
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${manrope.variable} antialiased font-manrope`}
      >
        <SiteMainHeader />
        <div className="pt-3">
          {children}
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

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
  title: "UroLaser - Curso Profissionalizante na Área Médica",
  description: "Domine a Tecnologia UroLaser e ganhe até R$7.000 como representante hospitalar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${outfit.variable} ${manrope.variable} antialiased font-manrope`}
      >
        {children}
      </body>
    </html>
  );
}

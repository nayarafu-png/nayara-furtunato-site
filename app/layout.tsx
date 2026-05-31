import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nayara Furtunato | Psicóloga Clínica",
  description:
    "Psicóloga clínica com atendimento online para crianças, adolescentes e adultos. Escuta ética, sigilosa e acolhedora. CRP 04/77570.",
  keywords: [
    "psicóloga",
    "psicologia",
    "terapia",
    "atendimento online",
    "saúde mental",
    "ansiedade",
    "depressão",
  ],
  authors: [{ name: "Nayara Furtunato" }],
  openGraph: {
    title: "Nayara Furtunato | Psicóloga Clínica",
    description:
      "Escuta ética, sigilosa e acolhedora para crianças, adolescentes e adultos em atendimento online.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#5c7a5e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}

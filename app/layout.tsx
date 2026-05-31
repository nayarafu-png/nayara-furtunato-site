import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nayara Furtunato | Psicóloga Clínica",
  description:
    "Um espaço seguro para cuidar da sua saúde emocional. Acolhimento, escuta qualificada e cuidado atravessado para crianças, adolescentes e adultos. CRP 04/77570.",
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
      "Escuta ética, sigilosa e acolhedora para crianças, adolescentes e adultos.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#6b8068",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans">
        {children}
      </body>
    </html>
  );
}

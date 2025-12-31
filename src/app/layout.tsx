import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Amiri } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ishraq & Yasir - Wedding Invitation",
  description:
    "You are cordially invited to the wedding ceremony of Ishraq Samiha and Yasir Rahman",
  keywords: [
    "wedding",
    "invitation",
    "ceremony",
    "Ishraq",
    "Yasir",
    "Chattogram",
  ],
  openGraph: {
    title: "Ishraq & Yasir - Wedding Invitation",
    description: "You are cordially invited to our wedding ceremony",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${amiri.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

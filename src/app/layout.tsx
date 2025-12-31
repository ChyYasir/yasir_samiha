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
  title: "Yasir Rahman & Ishraq Samiha - Wedding Invitation",
  description:
    "You are cordially invited to the wedding ceremony of Yasir Rahman and Ishraq Samiha on Saturday, 17 January 2026 at 8:30 PM, Shoronika Community Center, Lovelane, Chattogram",
  keywords: [
    "wedding",
    "invitation",
    "ceremony",
    "Yasir Rahman",
    "Ishraq Samiha",
    "Chattogram",
    "Bangladesh",
    "wedding invitation",
    "Shoronika Community Center",
  ],
  authors: [{ name: "Yasir Rahman & Ishraq Samiha" }],
  creator: "Yasir Rahman & Ishraq Samiha",
  publisher: "Yasir Rahman & Ishraq Samiha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Yasir Rahman & Ishraq Samiha - Wedding Invitation",
    description:
      "We cordially invite you to celebrate our wedding ceremony on Saturday, 17 January 2026 at 8:30 PM at Shoronika Community Center, Lovelane, Chattogram.",
    type: "website",
    locale: "en_US",
    siteName: "Yasir & Ishraq Wedding",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image to public folder
        width: 1200,
        height: 630,
        alt: "Yasir Rahman & Ishraq Samiha Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasir Rahman & Ishraq Samiha - Wedding Invitation",
    description:
      "Join us in celebrating our wedding on 17 January 2026 at Shoronika Community Center, Chattogram.",
    images: ["/og-image.jpg"], // Same image for consistency
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

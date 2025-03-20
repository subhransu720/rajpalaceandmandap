import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import PageTransition from './components/PageTransition';

// Optimize font loading
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raj Palace & Convention | Luxury Event Venue",
  description: "Raj Palace & Convention - The perfect venue for weddings, corporate events, private parties, and all other ceremonies.",
  keywords: "event venue, wedding venue, corporate events, luxury venue, convention center, Raj Palace",
  authors: [{ name: "Raj Palace & Convention" }],
  creator: "Raj Palace & Convention",
  publisher: "Raj Palace & Convention",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8a2be2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/image.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/image.png" />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./styles/globals.css";

// Optimize font loading
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Raj Palace & Convention | Luxury Event Venue",
  description: "Raj Palace & Convention - The perfect venue for weddings, corporate events, private parties, and all other ceremonies.",
  keywords: "event venue, wedding venue, corporate events, luxury venue, convention center, Raj Palace",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased min-h-screen bg-white">
        <main>{children}</main>
      </body>
    </html>
  );
}

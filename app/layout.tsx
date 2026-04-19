import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qovavo — The Trading Operating System | Performance & Market Intelligence",
  description: "Qovavo builds tools that help retail traders improve with real data. Track your performance with Trakvex. Understand the market with Fluxivo. No hype, no signals — just clarity.",
  keywords: "trading journal, trading analytics, market intelligence, forex trading tools, crypto trading journal, trading performance tracker, retail trader tools, trade tracking, win rate, profit factor, Qovavo, Trakvex, Fluxivo",
  authors: [{ name: "Qovavo Team" }],
  creator: "Qovavo",
  publisher: "Qovavo",
  metadataBase: new URL("https://qovavo.com"),
  openGraph: {
    title: "Qovavo — The Trading Operating System | Performance & Market Intelligence",
    description: "Qovavo builds tools that help retail traders improve with real data. Track your performance with Trakvex. Understand the market with Fluxivo. No hype, no signals — just clarity.",
    url: "https://qovavo.com",
    siteName: "Qovavo",
    images: [
      {
        url: "https://qovavo.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qovavo - The Trading Operating System"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qovavo — The Trading Operating System | Performance & Market Intelligence",
    description: "Qovavo builds tools that help retail traders improve with real data. Track your performance with Trakvex. Understand the market with Fluxivo. No hype, no signals — just clarity.",
    images: ["https://qovavo.com/og-image.png"],
    creator: "@qovavo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#08090F] text-[#DDE4F0]`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
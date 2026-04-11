import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qovavo — The Operating System for Traders",
  description: "Tools that help traders understand their performance, fix their mistakes, and improve with real data.",
  keywords: "trading journal, performance tracking, trader tools, trading analytics, Qovavo, Traderos",
  authors: [{ name: "Qovavo Team" }],
  creator: "Qovavo",
  publisher: "Qovavo",
  metadataBase: new URL("https://qovavo.com"),
  openGraph: {
    title: "Qovavo — The Operating System for Traders",
    description: "Tools that help traders understand their performance, fix their mistakes, and improve with real data.",
    url: "https://qovavo.com",
    siteName: "Qovavo",
    images: [
      {
        url: "https://qovavo.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qovavo - The Operating System for Traders"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qovavo — The Operating System for Traders",
    description: "Tools that help traders understand their performance, fix their mistakes, and improve with real data.",
    images: ["https://qovavo.com/twitter-image.png"],
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
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteDescription, siteThumbnailAlt, siteThumbnailPath, siteTitle, siteURL } from "@/data";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Head>
        {/* Opengraph */}
        <meta property="og:title" key="og:title" content={siteTitle} />
        <meta property="og:description" key="og:description" content={siteDescription} />
        <meta property="og:url" key="og:url" content={`https://${siteURL}`} />
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:image" key="og:image" content={siteThumbnailPath} />
        <meta property="og:image:alt" key="og:image:alt" content={siteThumbnailAlt} />
        {/* Twitter */}
        <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" key="twitter:title" content={siteTitle} />
        <meta name="twitter:description" key="twitter:description" content={siteDescription} />
        <meta name="twitter:image" key="twitter:image" content={siteThumbnailPath} />
        <meta name="twitter:image:alt" key="twitter:image:alt" content={siteThumbnailAlt} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="w-full relative flex justify-center items-center flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

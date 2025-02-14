import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteDescription, siteThumbnailAlt, siteThumbnailPath, siteTitle, siteURL } from "@/data";

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
  openGraph: {
    locale: "en_US",
    title: siteTitle,
    siteName: siteTitle,
    description: siteDescription,
    url: `https://${siteURL}`,
    type: "website",
    images: [
      {
        url: `https://${siteURL}${siteThumbnailPath}`,
        width: 1200,
        height: 630,
        alt: siteThumbnailAlt,
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
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

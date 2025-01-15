import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "simonlotzkar.com",
  description: "Software Development Portfolio of Simon Lotzkar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="pb-4 relative flex justify-center items-center flex-col overflow-hidden mx-auto">
          <div className="max-w-7xl w-full">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex Plumbing Co. | 24/7 Emergency Plumbing Service",
  description:
    "Fast, honest, affordable plumbing in Nashville. Emergency repairs, drain cleaning, water heater installation. Call (555) 234-5678.",
  openGraph: {
    title: "Apex Plumbing Co. | 24/7 Emergency Plumbing Service",
    description:
      "Fast, honest, affordable plumbing in Nashville. Emergency repairs, drain cleaning, water heater installation. Call (555) 234-5678.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        {/* Sticky mobile phone bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-navy text-white py-3 px-4 flex items-center justify-center gap-3 md:hidden z-50">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <a href="tel:5552345678" className="font-bold text-lg">(555) 234-5678</a>
        </div>
        <div className="h-16 md:hidden" />
      </body>
    </html>
  );
}

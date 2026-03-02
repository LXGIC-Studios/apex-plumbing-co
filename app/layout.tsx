import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Apex Plumbing Co. | 24/7 Emergency Plumbing in Nashville",
  description:
    "Fast, honest, affordable plumbing. Emergency repairs, drain cleaning, water heater installation. Licensed & insured. Call (555) 234-5678.",
  openGraph: {
    title: "Apex Plumbing Co. | 24/7 Emergency Plumbing in Nashville",
    description:
      "Fast, honest, affordable plumbing. Emergency repairs, drain cleaning, water heater installation. Licensed & insured. Call (555) 234-5678.",
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
      <body className={`${inter.className} pb-16 md:pb-0`}>
        <Navbar />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}

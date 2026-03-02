"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top strip */}
      <div className="bg-[#1B3A5C] text-white text-center text-sm py-1.5">
        24/7 Emergency Service. Call{" "}
        <a href="tel:5552345678" className="underline">
          (555) 234-5678
        </a>
      </div>
      {/* Main navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-[#1B3A5C] font-black text-xl whitespace-nowrap">
            Apex Plumbing Co.
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#1B3A5C] font-medium hover:opacity-70 transition-opacity duration-300">Home</Link>
            <Link href="/services" className="text-[#1B3A5C] font-medium hover:opacity-70 transition-opacity duration-300">Services</Link>
            <Link href="/about" className="text-[#1B3A5C] font-medium hover:opacity-70 transition-opacity duration-300">About</Link>
            <Link href="/contact" className="text-[#1B3A5C] font-medium hover:opacity-70 transition-opacity duration-300">Contact</Link>
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:5552345678"
              className="hidden md:inline-flex items-center gap-2 bg-[#E8762A] text-white font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Now
            </a>
            <button
              className="md:hidden text-[#1B3A5C]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3">
            <Link href="/" className="block text-[#1B3A5C] font-medium py-2" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/services" className="block text-[#1B3A5C] font-medium py-2" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link href="/about" className="block text-[#1B3A5C] font-medium py-2" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="block text-[#1B3A5C] font-medium py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

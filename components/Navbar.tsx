"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-navy tracking-tight">
          Apex Plumbing Co.
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 text-sm font-semibold uppercase tracking-wide">
            <Link href="/" className="hover:text-orange transition-colors py-2">Home</Link>
            <Link href="/services" className="hover:text-orange transition-colors py-2">Services</Link>
            <Link href="/about" className="hover:text-orange transition-colors py-2">About</Link>
            <Link href="/contact" className="hover:text-orange transition-colors py-2">Contact</Link>
          </nav>
          <a href="tel:5552345678" className="bg-orange text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-orange-hover hover:shadow-lg transition-all duration-300">(555) 234-5678</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-6 pb-6 pt-2 flex flex-col gap-1 text-sm font-semibold">
          <Link href="/" onClick={() => setOpen(false)} className="py-3 hover:text-orange transition-colors min-h-[48px] flex items-center">Home</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="py-3 hover:text-orange transition-colors min-h-[48px] flex items-center">Services</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="py-3 hover:text-orange transition-colors min-h-[48px] flex items-center">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="py-3 hover:text-orange transition-colors min-h-[48px] flex items-center">Contact</Link>
          <a href="tel:5552345678" className="mt-2 bg-orange text-white text-center py-3 rounded-lg font-bold hover:bg-orange-hover transition-all">(555) 234-5678</a>
        </nav>
      )}
    </header>
  );
}

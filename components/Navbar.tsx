"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-navy">
          Apex Plumbing Co.
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-orange">Home</Link>
            <Link href="/services" className="hover:text-orange">Services</Link>
            <Link href="/about" className="hover:text-orange">About</Link>
            <Link href="/contact" className="hover:text-orange">Contact</Link>
          </nav>
          <a href="tel:5552345678" className="bg-orange text-white px-4 py-2 rounded font-bold text-sm hover:bg-orange-hover transition">(555) 234-5678</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="py-2 hover:text-orange">Home</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="py-2 hover:text-orange">Services</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="py-2 hover:text-orange">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="py-2 hover:text-orange">Contact</Link>
        </nav>
      )}
    </header>
  );
}

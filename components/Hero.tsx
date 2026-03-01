import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/images/hero.jpg" alt="Plumbing tools and equipment" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy/70 to-navy-dark/90" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 py-32 md:py-40 text-center">
        <p className="text-orange font-semibold tracking-widest uppercase text-sm mb-6">Proudly serving Nashville since 2012</p>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
          24/7 Emergency<br />Plumbing Service
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Fast, Honest, Affordable — When You Need Us Most
        </p>
        <a href="tel:5552345678" className="inline-block text-3xl md:text-4xl font-black text-white mb-8 tracking-tight hover:text-orange transition-colors">
          (555) 234-5678
        </a>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:5552345678" className="bg-orange text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[200px]">
            Call Now
          </a>
          <a href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-navy hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[200px]">
            Book Online
          </a>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
}

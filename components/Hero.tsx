import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-navy text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/images/hero.jpg" alt="Plumbing tools and equipment" fill className="object-cover opacity-20" priority />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          24/7 Emergency Plumbing —<br />Fast, Honest, Affordable
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Proudly serving Nashville and surrounding areas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:5552345678" className="bg-white text-navy px-8 py-3 rounded font-bold text-lg hover:bg-gray-100 transition">
            (555) 234-5678
          </a>
          <a href="/contact" className="bg-orange px-8 py-3 rounded font-bold text-lg hover:bg-orange-hover transition">
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}

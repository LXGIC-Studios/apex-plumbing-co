import Image from "next/image";
import Link from "next/link";
import ServiceRow from "@/components/ServiceRow";
import Testimonials from "@/components/Testimonials";

const services = [
  { title: "Emergency Repairs", description: "Burst pipes, overflows, and leaks fixed fast. We're available 24/7.", image: "/images/emergency-repair.jpg", imageLeft: true },
  { title: "Drain Cleaning", description: "Slow drains and stubborn clogs cleared with professional equipment.", image: "/images/drain-cleaning.jpg", imageLeft: false },
  { title: "Water Heater Installation", description: "Tank and tankless water heater installation and repair.", image: "/images/water-heater.jpg", imageLeft: true },
  { title: "Pipe Replacement", description: "Old, corroded, or damaged pipes replaced with modern materials.", image: "/images/pipe-replacement.jpg", imageLeft: false },
  { title: "Bathroom Plumbing", description: "Full bathroom plumbing for remodels, upgrades, and new construction.", image: "/images/bathroom-plumbing.jpg", imageLeft: true },
  { title: "Sewer Line Service", description: "Camera inspection, repair, and replacement for sewer and main lines.", image: "/images/sewer-service.jpg", imageLeft: false },
];

const trustItems = [
  { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "10+ Years Experience" },
  { icon: "M5 13l4 4L19 7", label: "5,000+ Jobs Completed" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "24/7 Emergency Service" },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "100% Satisfaction Guarantee" },
];

const areas = ["Nashville", "Brentwood", "Franklin", "Green Hills", "East Nashville", "Bellevue", "Hermitage", "Mt. Juliet"];

export default function Home() {
  return (
    <main className="pt-[calc(2.5rem+4rem)]">
      {/* Hero — Split Layout */}
      <section className="relative">
        <div className="flex flex-col md:flex-row">
          {/* Left side */}
          <div className="bg-[#1B3A5C] md:w-[55%] px-6 md:px-16 py-16 md:py-24 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Fast, Honest Plumbing — Day or Night.
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Licensed, insured, and trusted by 5,000+ Nashville homes.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-[#E8762A] text-white font-semibold px-7 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Book a Service
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white font-semibold px-7 py-3 rounded-lg hover:bg-white hover:text-[#1B3A5C] transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-white/70 text-sm">
              {["Licensed & Insured", "Upfront Pricing", "Same-Day Service"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#E8762A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>
          {/* Right side — hero image */}
          <div className="md:w-[45%] relative min-h-[350px] md:min-h-0">
            <div className="md:absolute md:-left-8 md:top-8 md:bottom-8 md:right-8 relative h-[350px] md:h-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-plumber.jpg"
                alt="Professional plumber at work"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#F5F5F5] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-[#1B3A5C]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/></svg>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services — Alternating Rows */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] text-center mb-12">Our Services</h2>
          <div className="space-y-0">
            {services.map((service) => (
              <ServiceRow key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-8">Where We Work</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((city) => (
              <span key={city} className="bg-white border border-[#1B3A5C]/15 rounded-full px-4 py-2 text-[#1B3A5C] text-sm font-medium">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom CTA */}
      <section className="bg-[#1B3A5C] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Plumbing Emergency? Don&apos;t Wait.</h2>
        <p className="text-white text-4xl md:text-5xl font-black mb-8">
          <a href="tel:5552345678">(555) 234-5678</a>
        </p>
        <a
          href="tel:5552345678"
          className="inline-block bg-[#E8762A] text-white font-bold text-lg px-10 py-4 rounded-lg hover:opacity-90 transition-opacity duration-300"
        >
          Call Now
        </a>
      </section>
    </main>
  );
}

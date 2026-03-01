import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { WrenchIcon, DropletIcon, FlameIcon, PipeIcon, ShowerIcon, SewerIcon, MapPinIcon } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "5K+", label: "Jobs Completed" },
            { number: "24/7", label: "Emergency Service" },
            { number: "100%", label: "Satisfaction Guaranteed" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-5xl md:text-6xl font-black text-white mb-2">{s.number}</p>
              <div className="w-12 h-1 bg-orange mx-auto mb-3" />
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-bg">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest text-center mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black text-center text-navy mb-14">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon={<WrenchIcon />} title="Emergency Repairs" description="Burst pipes, overflows, and urgent leaks. We are here 24/7 when you need us most." />
            <ServiceCard icon={<DropletIcon />} title="Drain Cleaning" description="Slow drains or full blockages, our team clears them fast with professional equipment." />
            <ServiceCard icon={<FlameIcon />} title="Water Heater Installation" description="Tank or tankless, we install and repair all major brands with same-day service." />
            <ServiceCard icon={<PipeIcon />} title="Pipe Replacement" description="Corroded or outdated pipes? We replace galvanized, copper, and PVC with modern materials." />
            <ServiceCard icon={<ShowerIcon />} title="Bathroom Plumbing" description="Full bathroom plumbing services from fixture installation to complete remodels." />
            <ServiceCard icon={<SewerIcon />} title="Sewer Line Service" description="Camera inspections, trenchless repair, and full sewer line replacement." />
          </div>
          <div className="text-center mt-12">
            <a href="/services" className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-light hover:shadow-lg transition-all duration-300">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest text-center mb-3">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black text-center text-navy mb-14">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="Mike D." location="Brentwood" text="Called at 11pm on a Saturday with a burst pipe. They were here in 30 minutes. Incredible service." />
            <TestimonialCard name="Karen W." location="Green Hills" text="Upfront pricing, no surprises. They replaced our water heater and cleaned up after themselves." />
            <TestimonialCard name="Roberto S." location="East Nashville" text="Best plumber we've ever used. On time, professional, and fairly priced. Our go-to from now on." />
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-gray-bg">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest text-center mb-3">Where We Work</p>
          <h2 className="text-4xl md:text-5xl font-black text-center text-navy mb-14">Service Area</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Nashville", "Brentwood", "Franklin", "Green Hills", "East Nashville", "Bellevue", "Hermitage", "Mt. Juliet"].map((city) => (
              <div key={city} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <MapPinIcon />
                <span className="font-bold text-navy">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Plumbing Emergency? Don&apos;t Wait.</h2>
          <p className="text-xl mb-4 text-gray-300">Available 24/7 for emergencies. Free estimates on all major jobs.</p>
          <a href="tel:5552345678" className="inline-block text-3xl md:text-4xl font-black text-white mb-8 tracking-tight hover:text-orange transition-colors duration-300">
            (555) 234-5678
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5552345678" className="bg-orange text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover hover:shadow-xl hover:scale-105 transition-all duration-300">
              Call Now
            </a>
            <a href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-navy hover:shadow-xl hover:scale-105 transition-all duration-300">
              Book Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

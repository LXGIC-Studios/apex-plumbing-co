import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "5K+", label: "Jobs Completed" },
            { number: "24/7", label: "Emergency Service" },
            { number: "100%", label: "Satisfaction Guaranteed" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-5xl md:text-6xl font-black text-navy mb-2">{s.number}</p>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{s.label}</p>
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
            <ServiceCard icon="24/7" title="Emergency Repairs" description="Burst pipes, overflows, and urgent leaks — we're here 24/7 when you need us most." />
            <ServiceCard icon="DC" title="Drain Cleaning" description="Slow drains or full blockages, our team clears them fast with professional equipment." />
            <ServiceCard icon="WH" title="Water Heater Installation" description="Tank or tankless, we install and repair all major brands with same-day service." />
          </div>
          <div className="text-center mt-12">
            <a href="/services" className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-light hover:shadow-lg transition-all duration-300">
              View All Services &rarr;
            </a>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest text-center mb-3">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black text-center text-navy mb-14">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="Sarah M." rating={5} text="They showed up within an hour of my call. Fixed a burst pipe under the kitchen sink and cleaned up everything. Incredibly professional." />
            <TestimonialCard name="James T." rating={5} text="Fair pricing, no surprises. They replaced our old water heater and even hauled the old one away. Highly recommend Apex!" />
            <TestimonialCard name="Linda R." rating={4} text="We've used them twice now for drain issues. Always on time, always friendly. They're our go-to plumber in Nashville." />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark to-navy opacity-90" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Need a Plumber?</h2>
          <p className="text-xl mb-4 text-gray-300">Available 24/7 for emergencies. Free estimates on all major jobs.</p>
          <a href="tel:5552345678" className="inline-block text-3xl md:text-4xl font-black text-orange mb-8 hover:text-white transition-colors">
            (555) 234-5678
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5552345678" className="bg-orange text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[56px]">
              Call Now
            </a>
            <a href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-navy hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[56px]">
              Book Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="py-16 bg-gray-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon="🚨" title="Emergency Repairs" description="Burst pipes, overflows, and urgent leaks — we're here 24/7 when you need us most." />
            <ServiceCard icon="🔧" title="Drain Cleaning" description="Slow drains or full blockages, our team clears them fast with professional equipment." />
            <ServiceCard icon="🔥" title="Water Heater Installation" description="Tank or tankless, we install and repair all major brands with same-day service." />
          </div>
          <div className="text-center mt-8">
            <a href="/services" className="text-orange font-semibold hover:underline">View All Services →</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="Sarah M." rating={5} text="They showed up within an hour of my call. Fixed a burst pipe under the kitchen sink and cleaned up everything. Incredibly professional." />
            <TestimonialCard name="James T." rating={5} text="Fair pricing, no surprises. They replaced our old water heater and even hauled the old one away. Highly recommend Apex!" />
            <TestimonialCard name="Linda R." rating={4} text="We've used them twice now for drain issues. Always on time, always friendly. They're our go-to plumber in Nashville." />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber? Call Now or Book Online</h2>
          <p className="text-lg mb-6">Available 24/7 for emergencies. Free estimates on all major jobs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5552345678" className="bg-white text-navy px-8 py-3 rounded font-bold text-lg hover:bg-gray-100 transition">
              📞 (555) 234-5678
            </a>
            <a href="/contact" className="border-2 border-white px-8 py-3 rounded font-bold text-lg hover:bg-white hover:text-orange transition">
              Book Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

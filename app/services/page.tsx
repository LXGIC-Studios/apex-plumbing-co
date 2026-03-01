import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services | Apex Plumbing Co.",
  description: "Full-service plumbing in Nashville: leak repair, pipe replacement, bathroom remodeling, sewer lines, water heaters, drain cleaning, and more.",
  openGraph: { title: "Our Services | Apex Plumbing Co.", description: "Full-service plumbing in Nashville." },
};

const services = [
  { icon: "LR", title: "Leak Repair", description: "From dripping faucets to hidden slab leaks, we locate and fix leaks fast to prevent costly water damage." },
  { icon: "PR", title: "Pipe Replacement", description: "Corroded or outdated pipes? We replace galvanized, copper, and PVC piping with modern, durable materials." },
  { icon: "BR", title: "Bathroom Remodeling", description: "Upgrade your bathroom with new fixtures, tiling, and plumbing layouts. We handle the entire plumbing scope." },
  { icon: "SL", title: "Sewer Line Service", description: "Camera inspections, trenchless repair, and full sewer line replacement. We solve the toughest underground problems." },
  { icon: "WH", title: "Water Heater Install/Repair", description: "Tank and tankless water heater installation, repair, and maintenance. Same-day service on most models." },
  { icon: "DC", title: "Drain Cleaning", description: "Professional hydro-jetting and snake services for stubborn clogs in kitchens, bathrooms, and main lines." },
  { icon: "FI", title: "Fixture Installation", description: "Sinks, toilets, showers, tubs, and garbage disposals installed right the first time with full warranty." },
  { icon: "WF", title: "Water Filtration", description: "Whole-home and under-sink water filtration systems for cleaner, better-tasting water throughout your home." },
];

export default function Services() {
  return (
    <>
      <section className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-navy" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Our Services</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">Professional plumbing solutions for every need</p>
        </div>
      </section>
      <section className="py-24 bg-gray-bg">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} showButton />
          ))}
        </div>
      </section>
    </>
  );
}
